import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Preventivo acustica HoReCa — ${site.marketArea}. Prodotti online e consulenza a distanza.`,
};

export default function ContattiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
            Contatti
          </p>
          <h1 className="mt-2 text-4xl font-bold text-nrs-dark">
            Richiedi preventivo
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Indica il tipo di richiesta: prodotto standard (risposta rapida),
            consulenza con planimetria, o sopralluogo a Roma. Rispondiamo entro 24–48
            ore lavorative.
          </p>

          <div className="mt-8 space-y-6 border-l-2 border-nrs-dark pl-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-nrs-grey">
                Email
              </p>
              <a
                href={`mailto:${site.emailPreventivi}`}
                className="text-nrs-dark hover:underline"
              >
                {site.emailPreventivi}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-nrs-grey">
                Telefono
              </p>
              <a href={`tel:${site.phoneTel}`} className="text-nrs-dark hover:underline">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-nrs-grey">
                Sopralluoghi
              </p>
              <p className="text-stone-700">{site.surveyArea}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-nrs-grey">
                Area commerciale
              </p>
              <p className="text-stone-700">{site.marketArea}</p>
              <p className="mt-1 text-sm text-stone-500">
                Partner {site.supplier} — {site.partnerMarket}
              </p>
            </div>
          </div>
        </div>

        <div className="border border-stone-200 bg-white p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
