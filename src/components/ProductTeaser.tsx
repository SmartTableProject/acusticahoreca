import Image from "next/image";
import Link from "next/link";
import { installLabels, standardProducts } from "@/data/products";
import { site } from "@/data/site";

/** Teaser catalogo — grafica mockup 1 */
export function ProductTeaser() {
  return (
    <section className="nrs-concrete-bg py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="nrs-section-rule">
          <h2 className="shrink-0 px-2 font-serif text-xl font-bold uppercase tracking-[0.18em] text-nrs-hero md:text-2xl">
            Catalogo prodotti
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-stone-600">
          Pannelli standard SoundOff: preventivo senza sopralluogo. Risposta entro{" "}
          {site.responseTime}.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {standardProducts.map((product) => (
            <Link
              key={product.id}
              href={`/prodotti/${product.id}`}
              className="group flex flex-col overflow-hidden border border-stone-300 bg-white transition hover:border-nrs-accent"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-3 transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-stone-200 p-5">
                <h3 className="font-serif text-lg font-bold uppercase tracking-[0.06em] text-nrs-hero">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {product.description}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-nrs-accent">
                  {product.priceFrom}
                </p>
                <p className="mt-1 text-[11px] text-stone-500">
                  {installLabels[product.install]}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/prodotti"
            className="inline-flex items-center gap-2 border border-nrs-hero px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-nrs-hero transition hover:border-nrs-accent hover:text-nrs-accent"
          >
            Vedi catalogo completo
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
