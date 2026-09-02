import Link from "next/link";
import { installLabels, standardProducts } from "@/data/products";

export function ProductTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
            Acquista online
          </p>
          <h2 className="mt-2 text-3xl font-bold text-nrs-dark">
            Pannelli standard — prezzo immediato
          </h2>
          <p className="mt-3 max-w-xl text-stone-600">
            Prodotti a catalogo SoundOff ordinabili senza sopralluogo. Ideali per
            chi vuole intervenire subito con costi contenuti e montaggio guidato.
          </p>
        </div>
        <Link
          href="/contatti"
          className="shrink-0 rounded-sm bg-nrs-dark px-6 py-3 text-sm font-semibold text-white hover:bg-nrs-elevated"
        >
          Configura e richiedi prezzo
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {standardProducts.map((product) => (
          <article
            key={product.id}
            className="flex flex-col border border-stone-200 bg-white p-6"
          >
            {product.badge && (
              <span className="mb-3 self-start bg-nrs-dark px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                {product.badge}
              </span>
            )}
            <h3 className="font-bold text-nrs-dark">{product.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
              {product.description}
            </p>
            <p className="mt-4 text-xs text-nrs-grey">
              {installLabels[product.install]}
            </p>
            <p className="mt-2 text-sm font-semibold text-nrs-dark">
              {product.priceFrom}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
