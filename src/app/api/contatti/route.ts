import { NextResponse } from "next/server";
import { site } from "@/data/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, citta, tipoRichiesta, locale, messaggio } = body;

    if (!nome || !email || !messaggio) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
    }

    // Log in console (visibile su Vercel). Collegare Resend/SMTP in seguito.
    console.log("[NRS Contatti]", {
      to: site.emailPreventivi,
      nome,
      email,
      telefono,
      citta,
      tipoRichiesta,
      locale,
      messaggio,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Errore server" }, { status: 500 });
  }
}
