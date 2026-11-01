import type { Metadata } from "next";
import { CaseStudies } from "@/components/CaseStudies";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { contactTierLinks, site } from "@/data/site";
import { portfolioStats } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Acustica ristorante Roma",
  description:
    "Correzione acustica per ristoranti e bar a Roma e provincia. Sopralluogo locale, pannelli SoundOff, preventivo online in 24–48h. NRS Soluzioni Acustiche.",
  keywords: [
    "acustica ristorante Roma",
    "pannelli fonoassorbenti Roma",
    "correzione acustica bar Roma",
    "riverbero ristorante",
  ],
  openGraph: {
    title: "Acustica ristorante Roma | NRS",
    description: "Sopralluogo in Roma e provincia. Online altrove. Onesti sui tempi.",
    url: `${site.domain}/acustica-ristorante-roma`,
  },
};

const faqs = [
  {
    q: "Fate sopralluoghi a Roma?",
    a: `Sì: i sopralluoghi con presenza diretta sono in ${site.surveyArea}, su appuntamento e con slot limitati.`,
  },
  {
    q: "Posso ordinare pannelli senza sopralluogo?",
    a: "Sì. Per interventi standard inviaci foto o planimetria: preventivo entro 24–48 ore lavorative.",
  },
  {
    q: "Quanto costa?",
    a: "Dipende da mq, prodotto e tessuto. Sul sito trovi fasce indicative e il wizard preventivo.",
  },
  {
    q: "Che prodotti usate?",
    a: `${site.partnerLabel}: Hexagon, Basfon, Wave, isole sospese — certificati per locali pubblici.`,
  },
];

export default function AcusticaRistoranteRomaPage() {
  return (
    <DossierPageFrame
      tone="paper"
      eyebrow="Roma e provincia · Onesti sui tempi"
      title="Acustica per ristoranti a Roma"
      backHref="/"
      backLabel="Home"
      rightSlot={
        <a
          href="/preventivo"
          className="cursor-pointer bg-nrs-accent px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
        >
          Preventivo →
        </a>
      }
    >
      <p className="mb-4 max-w-3xl text-sm text-stone-600">
        Meno riverbero al tavolo, più ospiti che tornano. Sopralluogo in zona o
        preventivo online in {site.responseTime}. {portfolioStats.projects} locali
        già documentati.
      </p>

      <div className="mb-4 grid gap-3 md:grid-cols-3">
        {[
          {
            t: "Sopralluogo vero",
            d: `Misurazioni e posa in ${site.surveyArea}.`,
          },
          {
            t: "Online quando basta",
            d: "Foto + planimetria: report con mq e layout.",
          },
          {
            t: "Prodotti certificati",
            d: `${site.partnerLabel}. Estetica da locale.`,
          },
        ].map((item) => (
          <div
            key={item.t}
            className="border border-stone-400/50 bg-white p-4"
          >
            <h2 className="font-serif text-base font-bold uppercase text-nrs-hero">
              {item.t}
            </h2>
            <p className="mt-2 text-sm text-stone-600">{item.d}</p>
          </div>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <a
          href="/chiavi-in-mano"
          className="cursor-pointer border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-hero hover:border-nrs-accent hover:text-nrs-accent"
        >
          Sopralluogo Roma
        </a>
        <a
          href={contactTierLinks.roma}
          className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-accent hover:underline"
        >
          Apri percorso chiavi in mano →
        </a>
      </div>

      <CaseStudies limit={3} />

      <div className="mt-4 border border-stone-400/50 bg-white/90 p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-nrs-accent">
          FAQ
        </p>
        <dl className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-nrs-hero">{f.q}</dt>
              <dd className="mt-1 text-sm text-stone-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </DossierPageFrame>
  );
}
