import type { Metadata } from "next";
import Link from "next/link";
import { installLabels, standardProducts } from "@/data/products";
import { contactTierLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Servizi",
  description: `Tre livelli: prodotti online, consulenza a distanza, sopralluogo ${site.surveyArea}. ${site.name}.`,
};

const tiers = [
  {
    id: "online",
    name: "Livello 1 — Acquisto online",
    subtitle: "Senza sopralluogo · Spedizione",
    price: site.priceLabel,
    ideal: "Ristoratori che sanno già cosa serve, piccoli interventi, fai-da-te con guida",
    includes: [
      "Pannelli standard a catalogo (Hexagon, Basfon, Wave, isole)",
      "Configurazione colore e dimensioni",
      "Preventivo entro 24–48h via email",
      "Guida montaggio PDF/video",
      "Spedizione in area di competenza",
    ],
    cta: "Richiedi preventivo",
    href: contactTierLinks.online,
    highlight: true,
  },
  {
    id: "remote",
    name: "Livello 2 — Consulenza tecnica",
    subtitle: "A distanza · Foto e planimetria",
    price: "Preventivo gratuito",
    ideal: "Locali medi, prima installazione, chi vuole sicurezza tecnica senza sopralluogo",
    includes: [
      "Analisi foto e planimetria del locale",
      "Stima mq pannelli e posizionamento",
      "Report tecnico sintetico",
      "Listino prodotti personalizzato",
      "Supporto email/telefono",
    ],
    cta: "Invia planimetria",
    href: contactTierLinks.remote,
    highlight: false,
  },
  {
    id: "roma",
    name: "Livello 3 — Chiavi in mano",
    subtitle: `Solo ${site.surveyArea}`,
    price: "Su preventivo",
    ideal: "Progetti complessi, locali di pregio, chi vuole posa e collaudo",
    includes: [
      "Sopralluogo e misurazioni in loco",
      "Progetto acustico su misura",
      "Fornitura e posa in opera",
      "Verifica post-intervento",
      "Slot limitati — prenotazione anticipata",
    ],
    cta: "Prenota sopralluogo",
    href: contactTierLinks.roma,
    highlight: false,
  },
];

export default function ServiziPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
        Servizi
      </p>
      <h1 className="mt-2 text-4xl font-bold text-nrs-hero">
        Tre livelli. Un solo obiettivo: acustica che funziona.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-600">
        Strategia pensata per offrirti il massimo con tempi realistici: prodotti
        standard per partire subito, consulenza remota per la maggior parte dei
        casi, sopralluogo riservato a Roma dove possiamo essere presenti di persona.
      </p>

      <div className="mt-12 space-y-8">
        {tiers.map((tier) => (
          <article
            key={tier.id}
            className={`border p-8 md:p-10 ${
              tier.highlight
                ? "border-nrs-hero bg-nrs-hero text-white"
                : "border-stone-200 bg-white"
            }`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    tier.highlight ? "text-stone-300" : "text-nrs-grey"
                  }`}
                >
                  {tier.subtitle}
                </p>
                <h2 className="mt-2 text-2xl font-bold">{tier.name}</h2>
                <p
                  className={`mt-2 text-sm ${
                    tier.highlight ? "text-stone-300" : "text-stone-600"
                  }`}
                >
                  Ideale per: {tier.ideal}
                </p>
              </div>
              <p
                className={`shrink-0 text-lg font-bold ${
                  tier.highlight ? "text-white" : "text-nrs-hero"
                }`}
              >
                {tier.price}
              </p>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {tier.includes.map((item) => (
                <li
                  key={item}
                  className={`flex gap-2 text-sm ${
                    tier.highlight ? "text-stone-200" : "text-stone-600"
                  }`}
                >
                  <span className="text-nrs-accent">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              className={`mt-8 inline-block px-6 py-3 text-sm font-semibold uppercase tracking-wide ${
                tier.highlight
                  ? "bg-nrs-accent text-white hover:bg-nrs-accent-hover"
                  : "border border-nrs-accent text-nrs-accent hover:bg-nrs-accent hover:text-white"
              }`}
            >
              {tier.cta}
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold text-nrs-hero">
          <Link href="/prodotti" className="hover:text-nrs-accent">
            Catalogo prodotti online
          </Link>
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {standardProducts.map((p) => (
            <Link
              key={p.id}
              href={`/prodotti/${p.id}`}
              className="border border-stone-200 bg-stone-50 p-5 transition hover:border-nrs-accent/40"
            >
              <h3 className="font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-stone-600">{p.description}</p>
              <p className="mt-2 text-xs text-nrs-grey">{installLabels[p.install]}</p>
              <p className="mt-2 text-sm font-semibold text-nrs-accent">{p.priceFrom}</p>
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-10 text-sm text-stone-500">{site.partnerNote}</p>
    </div>
  );
}
