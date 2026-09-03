import type { Metadata } from "next";
import Link from "next/link";
import { PreventivoWizard } from "@/components/PreventivoWizard";
import { priceDisclaimer } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Preventivo guidato",
  description: `Stima orientativa e richiesta preventivo acustica HoReCa. ${site.priceLabel}. ${site.marketArea}.`,
};

export default function PreventivoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
        Preventivo
      </p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-nrs-hero">
        Quanto può costare? Te lo inquadriamo.
      </h1>
      <p className="mt-4 text-lg text-stone-600">
        Quattro passaggi: tipo locale, mq, superfici, contatto. Ricevi un ordine
        di grandezza onesto e un preventivo reale entro {site.responseTime}.
      </p>
      <p className="mt-3 text-xs leading-relaxed text-stone-500">{priceDisclaimer}</p>

      <div className="mt-10">
        <PreventivoWizard />
      </div>

      <p className="mt-8 text-center text-sm text-stone-500">
        Preferisci parlare subito?{" "}
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-nrs-accent hover:underline"
        >
          WhatsApp
        </a>
        {" · "}
        <Link href="/contatti" className="font-semibold text-nrs-accent hover:underline">
          Form classico
        </Link>
      </p>
    </div>
  );
}
