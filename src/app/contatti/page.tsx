import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Preventivo acustica HoReCa — ${site.marketArea}. Risposta entro ${site.responseTime}.`,
};

type Props = {
  searchParams: Promise<{ tipo?: string; prodotto?: string }>;
};

const tipoLabel: Record<string, string> = {
  "prodotto-online": "Acquisto / prodotto online",
  "consulenza-remota": "Progetto a distanza",
  "sopralluogo-roma": "Chiavi in mano Roma",
  "installazione-partner": "Installazione con partner",
};

/** Contatti = scheda dossier */
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
    <DossierPageFrame
      tone="paper"
      eyebrow={`Contatti · ${tipoLabel[tipo] ?? "Richiesta"}`}
      title="Parliamone sul tuo locale"
      backHref="/percorsi"
      backLabel="Percorsi"
      rightSlot={
        <span className="text-[10px] uppercase tracking-[0.14em] text-stone-500">
          Risposta {site.responseTime}
        </span>
      }
    >
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        <div className="border border-stone-400/50 bg-white/90 p-5 md:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-nrs-accent">
            Riferimenti
          </p>
          <div className="mt-5 space-y-4 border-l-2 border-nrs-accent pl-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-stone-500">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="cursor-pointer text-nrs-accent hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-stone-500">
                Telefono / WhatsApp
              </p>
              <a
                href={`tel:${site.phoneTel}`}
                className="cursor-pointer text-nrs-accent hover:underline"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-stone-500">
                Sopralluoghi
              </p>
              <p className="text-stone-700">{site.surveyArea}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-stone-500">
                Area
              </p>
              <p className="text-stone-700">{site.marketArea}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-nrs-accent px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
            >
              WhatsApp
            </a>
            <a
              href="/preventivo"
              className="cursor-pointer border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-hero hover:border-nrs-accent hover:text-nrs-accent"
            >
              Wizard preventivo
            </a>
          </div>
        </div>

        <div className="border border-stone-400/50 bg-white p-5 md:p-6">
          <ContactForm defaultTipo={tipo} defaultProdotto={params.prodotto} />
        </div>
      </div>
    </DossierPageFrame>
  );
}
