import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { installLabels, standardProducts } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Prodotti acustici SoundOff",
  description: `Catalogo pannelli fonoassorbenti per ristoranti e HoReCa. Hexagon, Basfon, Wave, isole. ${site.priceLabel}.`,
};

export default function ProdottiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
        Catalogo
      </p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-nrs-hero">
        Prodotti SoundOff per HoReCa
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-600">
        Pannelli standard senza sopralluogo obbligatorio. Scegli la linea, richiedi
        preventivo entro {site.responseTime}. Partner tecnico {site.supplier}.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {standardProducts.map((p) => (
          <Link
            key={p.id}
            href={`/prodotti/${p.id}`}
            className="group overflow-hidden border border-stone-200 bg-white transition hover:border-nrs-accent/40"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {p.badge && (
                <span className="absolute left-3 top-3 bg-nrs-accent px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                  {p.badge}
                </span>
              )}
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl font-bold text-nrs-hero">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.description}</p>
              <p className="mt-3 text-xs text-nrs-grey">{installLabels[p.install]}</p>
              <p className="mt-2 text-sm font-semibold text-nrs-hero">{p.priceBand}</p>
              <p className="mt-1 text-xs text-nrs-accent">{p.priceFrom}</p>
              <p className="mt-4 text-sm font-semibold text-nrs-hero group-hover:text-nrs-accent">
                Scheda prodotto →
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14 border border-stone-200 bg-stone-50 p-8 text-center">
        <p className="font-serif text-xl font-bold text-nrs-hero">
          Non sai quale scegliere?
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Invia foto o planimetria: ti indichiamo mq e prodotto adatto.
        </p>
        <Link
          href="/preventivo"
          className="mt-6 inline-block rounded-sm bg-nrs-accent px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
        >
          Preventivo guidato
        </Link>
      </div>
    </div>
  );
}
