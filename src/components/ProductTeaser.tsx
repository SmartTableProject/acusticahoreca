import Image from "next/image";
import Link from "next/link";
import { installLabels, standardProducts } from "@/data/products";
import { site } from "@/data/site";

export function ProductTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
            Catalogo SoundOff
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-nrs-hero">
            Pannelli standard — preventivo rapido
          </h2>
          <p className="mt-3 max-w-xl text-stone-600">
            Prodotti a catalogo ordinabili senza sopralluogo. Ideali per chi vuole
            intervenire subito con costi contenuti e montaggio guidato. Risposta entro{" "}
            {site.responseTime}.
          </p>
        </div>
        <Link
          href="/prodotti"
          className="shrink-0 rounded-sm bg-nrs-accent px-6 py-3 text-sm font-semibold text-white hover:bg-nrs-accent-hover"
        >
          Vedi catalogo
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {standardProducts.map((product) => (
          <Link
            key={product.id}
            href={`/prodotti/${product.id}`}
            className="group flex flex-col overflow-hidden border border-stone-200 bg-white transition hover:border-nrs-accent/50"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {product.badge && (
                <span className="absolute left-3 top-3 bg-nrs-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif font-bold text-nrs-hero">{product.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                {product.description}
              </p>
              <p className="mt-4 text-xs text-nrs-grey">
                {installLabels[product.install]}
              </p>
              <p className="mt-2 text-sm font-semibold text-nrs-hero">
                {product.priceBand}
              </p>
              <p className="mt-1 text-xs font-semibold text-nrs-accent">
                {product.priceFrom}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
