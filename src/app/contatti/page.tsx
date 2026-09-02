import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Preventivo acustica HoReCa — ${site.marketArea}. Risposta entro ${site.responseTime}.`,
};

type Props = {
  searchParams: Promise<{ tipo?: string; prodotto?: string }>;
};

export default async function ContattiPage({ searchParams }: Props) {
  const params = await searchParams;
  const validTipi = [
    "prodotto-online",
    "consulenza-remota",
    "sopralluogo-roma",
    "installazione-partner",
  ];
  const tipo = validTipi.includes(params.tipo ?? "")
    ? params.tipo!
    : "prodotto-online";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
            Contatti
          </p>
          <h1 className="mt-2 text-4xl font-bold text-nrs-hero">
            Richiedi preventivo
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Indica il tipo di richiesta: prodotto standard, consulenza con
            planimetria, o sopralluogo a Roma. Rispondiamo entro{" "}
            {site.responseTime}.
          </p>

          <div className="mt-8 space-y-6 border-l-2 border-nrs-accent pl-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-nrs-grey">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-nrs-accent hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-nrs-grey">
                Telefono / WhatsApp
              </p>
              <a href={`tel:${site.phoneTel}`} className="text-nrs-accent hover:underline">
                {site.phone}
              </a>
              <span className="text-stone-400"> · </span>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nrs-accent hover:underline"
              >
                WhatsApp
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
                {site.partnerLabel} — {site.partnerMarket}
              </p>
            </div>
          </div>
        </div>

        <div className="border border-stone-200 bg-white p-8">
          <ContactForm defaultTipo={tipo} defaultProdotto={params.prodotto} />
        </div>
      </div>
    </div>
  );
}
