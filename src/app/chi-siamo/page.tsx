import type { Metadata } from "next";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Chi siamo",
  description: `${site.name}: ${site.partnerLabel}. ${site.yearsExperience}+ anni su ${site.partnerMarket}.`,
};

export default function ChiSiamoPage() {
  return (
    <DossierPageFrame
      tone="paper"
      eyebrow="Officina tecnica · Chi siamo"
      title={site.name}
      backHref="/"
      backLabel="Home"
      rightSlot={
        <a
          href="/contatti"
          className="cursor-pointer border border-nrs-hero px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-nrs-hero hover:border-nrs-accent hover:text-nrs-accent"
        >
          Contatti
        </a>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 border border-stone-400/50 bg-white/90 p-5 text-base leading-relaxed text-stone-700 md:p-6">
          <p>
            <strong>{site.name}</strong> è guidata da {site.titolare}, con oltre{" "}
            {site.yearsExperience} anni di attività nella correzione acustica per
            ristoranti, bar, hotel e spazi commerciali.
          </p>
          <p>
            Siamo <strong>{site.partnerLabel}</strong>: Basfon, Hexagon, Wave,
            isole sospese — materiali certificati per locali pubblici. Area
            operativa: <strong>{site.partnerMarket}</strong>.
          </p>
          <p>
            Sopralluoghi e posa diretta in <strong>{site.surveyArea}</strong>.
            Fuori zona: preventivo online, progetto a distanza e partner di posa
            selezionati.
          </p>
          <p className="border-l-2 border-nrs-accent pl-4 text-sm text-stone-600">
            {site.clientMessage} {site.clientSubline}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {[
            { value: `${site.yearsExperience}+`, label: "Anni di esperienza" },
            { value: site.partnerMarket, label: "Area commerciale" },
            { value: site.surveyArea, label: "Sopralluoghi diretti" },
            { value: site.responseTime, label: "Risposta preventivi" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-stone-400/50 bg-white p-4"
            >
              <p className="font-serif text-lg font-bold uppercase text-nrs-hero">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DossierPageFrame>
  );
}
