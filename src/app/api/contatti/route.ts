import { NextResponse } from "next/server";
import {
  sendContattiEmails,
  type ContattiAttachment,
  type ContattiPayload,
} from "@/lib/contatti-email";
import { site } from "@/data/site";

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const MAX_FILES = 3;
const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp"]);

async function parseBody(request: Request): Promise<{
  fields: Record<string, string>;
  attachments: ContattiAttachment[];
}> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    const fields: Record<string, string> = {};
    for (const [key, value] of form.entries()) {
      if (typeof value === "string") fields[key] = value;
    }

    const attachments: ContattiAttachment[] = [];
    const files = form.getAll("foto");
    for (const file of files) {
      if (!(file instanceof File)) continue;
      if (attachments.length >= MAX_FILES) break;
      if (!ALLOWED.has(file.type)) {
        throw new ResponseError("Formato foto non valido (JPG, PNG, WebP).", 400);
      }
      if (file.size > MAX_BYTES) {
        throw new ResponseError(`File «${file.name}» troppo grande (max 4 MB).`, 400);
      }
      const buf = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name.replace(/[^\w.\-]+/g, "_").slice(0, 80) || "foto.jpg",
        content: buf,
        contentType: file.type,
      });
    }

    return { fields, attachments };
  }

  const body = await request.json();
  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) {
    if (typeof v === "string") fields[k] = v;
  }
  return { fields, attachments: [] };
}

class ResponseError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function POST(request: Request) {
  try {
    const { fields, attachments } = await parseBody(request);
    const { nome, email, telefono, citta, tipoRichiesta, locale, messaggio, prodotto } =
      fields;

    if (!nome || nome.trim().length < 2) {
      return NextResponse.json({ error: "Nome non valido" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 });
    }

    if (!messaggio || messaggio.trim().length < 10) {
      return NextResponse.json({ error: "Messaggio troppo breve" }, { status: 400 });
    }

    const payload: ContattiPayload = {
      nome: nome.trim(),
      email: email.trim(),
      telefono: telefono?.trim() || undefined,
      citta: citta?.trim() || undefined,
      tipoRichiesta: tipoRichiesta || undefined,
      locale: locale || undefined,
      prodotto: prodotto || undefined,
      messaggio: messaggio.trim(),
      attachments,
    };

    const result = await sendContattiEmails(payload);

    if (!result.sent) {
      if (result.reason === "missing_api_key" && process.env.NODE_ENV !== "production") {
        console.log("[NRS Contatti — dev, email non inviata]", {
          ...payload,
          attachments: attachments.map((a) => a.filename),
        });
        return NextResponse.json({ ok: true, mode: "dev-log" });
      }

      console.error("[NRS Contatti]", result);

      const hint =
        result.reason === "missing_api_key"
          ? "Configura RESEND_API_KEY su Vercel."
          : result.reason === "resend_error" && "error" in result
            ? `Dettaglio: ${result.error}`
            : "";

      return NextResponse.json(
        {
          error: `Invio email non riuscito. Scrivi a ${site.email} o chiama ${site.phone}.${hint ? ` ${hint}` : ""}`,
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true, mode: "email" });
  } catch (err) {
    if (err instanceof ResponseError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    console.error("[NRS Contatti]", err);
    return NextResponse.json({ error: "Errore server" }, { status: 500 });
  }
}
