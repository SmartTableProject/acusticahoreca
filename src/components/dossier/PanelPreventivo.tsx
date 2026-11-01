import Image from "next/image";
import { AcousticCalculator } from "@/components/AcousticCalculator";
import { FeaturedCaseStrip } from "@/components/FeaturedCaseStrip";
import {
  PreventivoWizard,
  type PreventivoQuery,
} from "@/components/PreventivoWizard";
import { SeoH1 } from "@/components/SeoH1";
import { priceDisclaimer } from "@/data/products";
import { seoH1 } from "@/data/seo-copy";
import { site } from "@/data/site";

const checklist = [
  "Locale più silenzioso e confortevole",
  "Conversazioni chiare al tavolo",
  "Immagine professionale",
  "Valore percepito più alto",
] as const;

type Props = {
  query?: PreventivoQuery;
};

/** Scheda 4 — wizard a link reali */
export function PanelPreventivo({ query = {} }: Props) {
  return (
    <div className="nrs-paper flex h-full min-h-0 overflow-hidden">
      <div className="mx-auto grid h-full w-full max-w-6xl min-h-0 grid-cols-1 lg:grid-cols-[260px_1fr]">
        <aside className="nrs-concrete-bg hidden min-h-0 overflow-y-auto border-r border-stone-300 lg:block">
          <div className="space-y-6 p-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-nrs-accent">
                Il problema
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-stone-700">
                <li>· Rumorosità in sala</li>
                <li>· Eco e voci poco chiare</li>
                <li>· Fatica a fine serata</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-nrs-accent">
                La soluzione
              </p>
              <ul className="mt-3 space-y-2">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-nrs-hero">
                    <span className="text-nrs-accent" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-stone-400/40">
              <Image
                src="/portfolio/da-dante.jpg"
                alt="Correzione acustica a soffitto in locale HoReCa — NRS"
                fill
                className="nrs-photo-bw object-cover"
                sizes="260px"
              />
              <div className="absolute inset-0 bg-nrs-hero/50" />
              <p className="absolute bottom-2 left-2 right-2 text-[9px] font-bold uppercase tracking-wide text-white">
                Bar · Ristoranti · Hotel
              </p>
            </div>
          </div>
        </aside>

        <div className="min-h-0 overflow-y-auto bg-white p-4 md:p-6">
          <SeoH1>{seoH1.preventivo}</SeoH1>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-nrs-accent">
            Preventivo · {site.responseTime}
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold uppercase tracking-[0.02em] text-nrs-hero md:text-3xl">
            Richiedi il tuo preventivo
          </h2>
          <p className="mt-2 text-xs text-stone-500">{priceDisclaimer}</p>
          <div className="mt-4">
            <FeaturedCaseStrip
              limit={4}
              variant="compact"
              title="Prima di scrivere — vedi lavori simili"
            />
          </div>
          <div className="mt-5">
            <AcousticCalculator />
          </div>
          <div id="wizard" className="mt-6">
            <PreventivoWizard query={query} />
          </div>
          <p className="mt-5 text-center text-sm text-stone-500">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-nrs-accent hover:underline"
            >
              WhatsApp
            </a>
            {" · "}
            <a
              href="/contatti"
              className="font-semibold text-nrs-accent hover:underline"
            >
              Form classico
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
