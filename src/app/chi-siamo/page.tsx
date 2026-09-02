import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Chi siamo",
  description: `NRS Soluzioni Acustiche: partner SoundOff su ${site.partnerMarket}.`,
};

export default function ChiSiamoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
        Chi siamo
      </p>
      <h1 className="mt-2 text-4xl font-bold text-nrs-hero">{site.name}</h1>
      <p className="mt-2 text-lg text-nrs-grey">{site.legalName}</p>

      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-stone-700">
        <p>
          <strong>NRS Soluzioni Acustiche</strong> è guidata da Pasquale Paglialunga,
          con oltre {site.yearsExperience} anni di attività nella correzione del riverbero
          per ristoranti, bar, hotel e spazi commerciali. La competenza è maturata sul
          campo: diagnosi acustica, progettazione, fornitura e installazione.
        </p>
        <p>
          Collaboriamo con <strong>{site.supplier}</strong> per la fornitura di
          prodotti certificati — Basfon, Hexagon, Wave, isole sospese — con supporto
          tecnico dal produttore. L&apos;area commerciale NRS è{" "}
          <strong>{site.partnerMarket}</strong>.
        </p>
        <p>
          <strong>La nostra area operativa</strong> è <strong>{site.marketArea}</strong>.
          I sopralluoghi con presenza diretta li effettuiamo in{" "}
          <strong>{site.surveyArea}</strong>, compatibilmente con gli impegni
          professionali. Per il resto del territorio di competenza lavoriamo con
          vendita online di prodotti standard, consulenza tecnica a distanza e, quando
          possibile, rete di partner per l&apos;installazione.
        </p>
        <p className="border-l-2 border-nrs-accent pl-5 text-base text-stone-600">
          Siamo in una fase di crescita: l&apos;ecommerce e i prodotti a catalogo ci
          permettono di servire più clienti senza dipendere solo dai sopralluoghi.
          Trasparenza e affidabilità tecnica sono il nostro modo di costruire fiducia.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: "10+", label: "Anni di esperienza" },
          { value: site.partnerMarket, label: "Area commerciale" },
          { value: site.surveyArea, label: "Sopralluoghi diretti" },
          { value: "Online", label: "Preventivo prodotti standard" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="border border-stone-200 bg-white p-6"
          >
            <p className="text-lg font-bold text-nrs-hero">{stat.value}</p>
            <p className="mt-2 text-sm text-stone-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
