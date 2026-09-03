import { Resend } from "resend";
import { site } from "@/data/site";

export type ContattiAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export type ContattiPayload = {
  nome: string;
  email: string;
  telefono?: string;
  citta?: string;
  tipoRichiesta?: string;
  locale?: string;
  prodotto?: string;
  messaggio: string;
  attachments?: ContattiAttachment[];
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
    "MESSAGGIO DEL CLIENTE",
    "",
    payload.messaggio,
    "",
    "---",
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

  if (payload.attachments?.length) {
    lines.push(`Allegati: ${payload.attachments.map((a) => a.filename).join(", ")}`);
  }

  lines.push("", `Inviato da ${site.domain}/contatti`);

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

  if (payload.attachments?.length) {
    rows.push([
      "Allegati",
      payload.attachments.map((a) => a.filename).join(", "),
    ]);
  }

  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e7e5e4;font-weight:600;color:#292524">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #e7e5e4;color:#44403c">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:640px;color:#292524">
      <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.12em;color:#c2410c;font-weight:700;margin:0 0 8px">Nuova richiesta dal sito</p>
      <h1 style="font-size:22px;margin:0 0 16px">Messaggio del cliente</h1>
      <div style="background:#fafaf9;border:1px solid #e7e5e4;padding:16px 18px;font-size:16px;line-height:1.6;white-space:pre-wrap">${escapeHtml(payload.messaggio)}</div>
      <p style="margin:24px 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;color:#78716c">Dati di contatto</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">${table}</table>
      <p style="margin-top:16px;font-size:12px;color:#78716c">Rispondi a questa email per scrivere direttamente a ${escapeHtml(payload.email)}.</p>
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

function resendErrorMessage(error: unknown): string {
  if (!error || typeof error !== "object") return "Errore Resend sconosciuto";
  const e = error as { message?: string; name?: string };
  return e.message ?? e.name ?? JSON.stringify(error);
}

function teamInboxes(): string[] {
  const raw = [process.env.CONTACT_INBOX, process.env.CONTACT_NOTIFY]
    .filter(Boolean)
    .join(",");

  const list = raw
    .split(/[,;]+/)
    .map((e) => e.trim())
    .filter((e) => e.includes("@"));

  if (list.length === 0) return [site.emailPreventivi];
  return [...new Set(list)];
}

export async function sendContattiEmails(payload: ContattiPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { sent: false as const, reason: "missing_api_key" as const };
  }

  const from =
    process.env.RESEND_FROM?.trim() || `${site.name} <onboarding@resend.dev>`;

  const inboxes = teamInboxes();
  const clientEmail = payload.email.toLowerCase();
  const teamSet = new Set(inboxes.map((e) => e.toLowerCase()));

  const resend = new Resend(apiKey);
  const snippet = payload.messaggio.replace(/\s+/g, " ").trim().slice(0, 60);
  const subject = `[Sito] ${payload.nome}: ${snippet}${payload.messaggio.length > 60 ? "…" : ""}`;

  const results = await Promise.all(
    inboxes.map((to) =>
      resend.emails.send({
        from,
        to: [to],
        replyTo: payload.email,
        subject,
        text: formatContattiPlain(payload),
        html: formatContattiHtml(payload),
        attachments: payload.attachments?.map((a) => ({
          filename: a.filename,
          content: a.content,
          contentType: a.contentType,
        })),
      }),
    ),
  );

  const failed = results.find((r) => r.error);
  if (failed?.error) {
    console.error("[NRS Email] team", failed.error);
    return {
      sent: false as const,
      reason: "resend_error" as const,
      error: resendErrorMessage(failed.error),
    };
  }

  if (!teamSet.has(clientEmail)) {
    try {
      const toClient = await resend.emails.send({
        from,
        to: [payload.email],
        subject: `Richiesta ricevuta — ${site.name}`,
        text: `Ciao ${payload.nome.split(" ")[0]},\n\nabbiamo ricevuto la tua richiesta. Ti rispondiamo entro ${site.responseTime}.\n\n${site.name}\n${site.phone}`,
        html: autoReplyHtml(payload.nome),
      });
      if (toClient.error) {
        console.warn("[NRS Email] auto-reply skip", toClient.error);
      }
    } catch (err) {
      console.warn("[NRS Email] auto-reply skip", err);
    }
  }

  return { sent: true as const, ids: results.map((r) => r.data?.id) };
}
