import { Resend } from "resend";
import { site } from "@/data/site";

export type ContattiPayload = {
  nome: string;
  email: string;
  telefono?: string;
  citta?: string;
  tipoRichiesta?: string;
  locale?: string;
  prodotto?: string;
  messaggio: string;
};

const TIPO_LABELS: Record<string, string> = {
  "prodotto-online": "Prodotto standard — preventivo rapido",
  "consulenza-remota": "Consulenza a distanza (foto/planimetria)",
  "sopralluogo-roma": "Sopralluogo Roma e provincia",
  "installazione-partner": "Installazione con partner (fuori Roma)",
};

const LOCALE_LABELS: Record<string, string> = {
  ristorante: "Ristorante / Bar",
  pizzeria: "Pizzeria",
  hotel: "Hotel",
  ufficio: "Ufficio",
  altro: "Altro",
};

function label(map: Record<string, string>, key?: string) {
  if (!key) return "—";
  return map[key] ?? key;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function formatContattiPlain(payload: ContattiPayload) {
  const lines = [
    `Nuova richiesta da ${site.name}`,
    "",
    `Nome: ${payload.nome}`,
    `Email: ${payload.email}`,
    `Telefono: ${payload.telefono || "—"}`,
    `Città: ${payload.citta || "—"}`,
    `Tipo richiesta: ${label(TIPO_LABELS, payload.tipoRichiesta)}`,
    `Tipo locale: ${label(LOCALE_LABELS, payload.locale)}`,
  ];

  if (payload.prodotto) {
    lines.push(`Prodotto: ${payload.prodotto}`);
  }

  lines.push("", "Messaggio:", payload.messaggio, "", `Inviato da ${site.domain}/contatti`);

  return lines.join("\n");
}

export function formatContattiHtml(payload: ContattiPayload) {
  const rows = [
    ["Nome", payload.nome],
    ["Email", payload.email],
    ["Telefono", payload.telefono || "—"],
    ["Città", payload.citta || "—"],
    ["Tipo richiesta", label(TIPO_LABELS, payload.tipoRichiesta)],
    ["Tipo locale", label(LOCALE_LABELS, payload.locale)],
  ];

  if (payload.prodotto) {
    rows.push(["Prodotto", payload.prodotto]);
  }

  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e7e5e4;font-weight:600;color:#292524">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #e7e5e4;color:#44403c">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;color:#292524">
      <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#c2410c;font-weight:700">Nuova richiesta preventivo</p>
      <h1 style="font-size:20px;margin:8px 0 16px">${escapeHtml(site.name)}</h1>
      <table style="border-collapse:collapse;width:100%;font-size:14px">${table}</table>
      <p style="margin-top:20px;font-size:12px;font-weight:700;text-transform:uppercase;color:#78716c">Messaggio</p>
      <p style="white-space:pre-wrap;line-height:1.5;color:#44403c">${escapeHtml(payload.messaggio)}</p>
    </div>
  `;
}

function autoReplyHtml(nome: string) {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;color:#292524">
      <p>Ciao ${escapeHtml(nome.split(" ")[0])},</p>
      <p>abbiamo ricevuto la tua richiesta. ${site.name} ti risponde entro <strong>${site.responseTime}</strong>.</p>
      <p>Se serve urgenza puoi scriverci su WhatsApp: <a href="${site.whatsappUrl}" style="color:#c2410c">${site.phone}</a>.</p>
      <p style="margin-top:24px;font-size:13px;color:#78716c">${site.clientSubline}</p>
      <p style="font-size:13px;color:#78716c">${site.partnerLabel}</p>
    </div>
  `;
}

export async function sendContattiEmails(payload: ContattiPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { sent: false as const, reason: "missing_api_key" as const };
  }

  const from =
    process.env.RESEND_FROM ?? `${site.name} <onboarding@resend.dev>`;
  const resend = new Resend(apiKey);
  const subject = `[Preventivo] ${payload.nome} — ${label(TIPO_LABELS, payload.tipoRichiesta)}`;

  const [toTeam, toClient] = await Promise.all([
    resend.emails.send({
      from,
      to: [site.emailPreventivi],
      replyTo: payload.email,
      subject,
      text: formatContattiPlain(payload),
      html: formatContattiHtml(payload),
    }),
    resend.emails.send({
      from,
      to: [payload.email],
      subject: `Richiesta ricevuta — ${site.name}`,
      text: `Ciao ${payload.nome.split(" ")[0]},\n\nabbiamo ricevuto la tua richiesta. Ti rispondiamo entro ${site.responseTime}.\n\n${site.name}\n${site.phone}`,
      html: autoReplyHtml(payload.nome),
    }),
  ]);

  if (toTeam.error || toClient.error) {
    console.error("[NRS Email]", { toTeam: toTeam.error, toClient: toClient.error });
    return {
      sent: false as const,
      reason: "resend_error" as const,
      error: toTeam.error ?? toClient.error,
    };
  }

  return { sent: true as const, ids: [toTeam.data?.id, toClient.data?.id] };
}
