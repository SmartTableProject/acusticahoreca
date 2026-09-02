import { NextResponse } from "next/server";
import { sendContattiEmails, type ContattiPayload } from "@/lib/contatti-email";
import { site } from "@/data/site";

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, citta, tipoRichiesta, locale, messaggio, prodotto } =
      body;

    if (!nome || typeof nome !== "string" || nome.trim().length < 2) {
      return NextResponse.json({ error: "Nome non valido" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 });
    }

    if (!messaggio || typeof messaggio !== "string" || messaggio.trim().length < 10) {
      return NextResponse.json({ error: "Messaggio troppo breve" }, { status: 400 });
    }

    const payload: ContattiPayload = {
      nome: nome.trim(),
      email: email.trim(),
      telefono: typeof telefono === "string" ? telefono.trim() : undefined,
      citta: typeof citta === "string" ? citta.trim() : undefined,
      tipoRichiesta: typeof tipoRichiesta === "string" ? tipoRichiesta : undefined,
      locale: typeof locale === "string" ? locale : undefined,
      prodotto: typeof prodotto === "string" ? prodotto : undefined,
      messaggio: messaggio.trim(),
    };

    const result = await sendContattiEmails(payload);

    if (!result.sent) {
      // Dev locale: logga e rispondi ok per testare il form
      if (result.reason === "missing_api_key" && process.env.NODE_ENV !== "production") {
        console.log("[NRS Contatti — dev, email non inviata]", payload);
        return NextResponse.json({ ok: true, mode: "dev-log" });
      }

      console.error("[NRS Contatti]", result);
      return NextResponse.json(
        {
          error: `Invio email non riuscito. Scrivi a ${site.email} o chiama ${site.phone}.`,
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true, mode: "email" });
  } catch (err) {
    console.error("[NRS Contatti]", err);
    return NextResponse.json({ error: "Errore server" }, { status: 500 });
  }
}
