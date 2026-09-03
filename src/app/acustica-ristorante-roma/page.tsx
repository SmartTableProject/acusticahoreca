import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseStudies } from "@/components/CaseStudies";
import { contactTierLinks, site } from "@/data/site";
import { portfolioStats } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Acustica ristorante Roma",
  description:
    "Correzione acustica per ristoranti e bar a Roma e provincia. Sopralluogo locale, pannelli SoundOff, preventivo online. NRS Soluzioni Acustiche.",
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
    a: "Sì. Per interventi standard inviaci foto o planimetria: preventivo entro 24–48 ore lavorative, spedizione senza visita obbligatoria.",
  },
  {
    q: "Quanto costa?",
    a: "Dipende da mq, prodotto e tessuto. Sul sito trovi fasce indicative e un wizard preventivo; la quotazione reale arriva entro 24–48 ore lavorative dopo i dati del locale.",
  },
  {
    q: "Che prodotti usate?",
    a: `${site.partnerLabel}: Hexagon, Basfon, Wave, isole sospese — certificati per locali pubblici.`,
  },
];

export default function AcusticaRistoranteRomaPage() {
  return (
    <>
      <section className="relative min-h-[48vh] overflow-hidden">
        <Image
          src="/portfolio/felice-a-testaccio.jpg"
          alt="Correzione acustica ristorante Roma"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-nrs-hero/70" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 md:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-nrs-accent">
            Roma e provincia
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
            Acustica per ristoranti a Roma
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-200">
            Meno riverbero, più ospiti che tornano. Sopralluogo in zona, preventivo
            online, prodotti SoundOff. {portfolioStats.projects} locali già in
            galleria.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={contactTierLinks.roma}
              className="bg-nrs-accent px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
            >
              Prenota sopralluogo Roma
            </Link>
            <Link
              href="/preventivo"
              className="border border-white/50 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Preventivo guidato
            </Link>
            <Link
              href="/blog"
              className="border border-white/30 px-8 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-serif text-3xl font-bold text-nrs-hero">
          Perché i ristoranti a Roma ci chiamano
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Sopralluogo vero",
              d: `Misurazioni e posa in ${site.surveyArea}. Non promettiamo visite ovunque.`,
            },
            {
              t: "Online quando basta",
              d: "Foto + planimetria: report con mq e layout. Ideale per partire subito.",
            },
            {
              t: "Prodotti certificati",
              d: `${site.partnerLabel}. Estetica da locale, non da cantiere grezzo.`,
            },
          ].map((item) => (
            <div key={item.t} className="border border-stone-200 bg-white p-6">
              <h3 className="font-serif text-lg font-bold text-nrs-hero">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CaseStudies limit={3} />

      <section className="border-y border-stone-200 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-serif text-3xl font-bold text-nrs-hero">Domande frequenti</h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-nrs-hero">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone-600">{f.a}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/prodotti"
            className="mt-10 inline-block text-sm font-semibold text-nrs-accent underline"
          >
            Vedi catalogo prodotti →
          </Link>
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
      </section>

      <section className="bg-nrs-hero py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h2 className="font-serif text-3xl font-bold uppercase">
            Il tuo locale a Roma merita di essere comodo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-300">
            Scrivici: ti diciamo subito se serve sopralluogo o se basta un
            preventivo online.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={contactTierLinks.roma}
              className="bg-nrs-accent px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-nrs-accent-hover"
            >
              Contattaci
            </Link>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 px-8 py-3 text-sm font-semibold hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
