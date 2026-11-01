"use client";

import Image from "next/image";
import { installLabels, standardProducts } from "@/data/products";
import { site } from "@/data/site";

/** Scheda 3 — catalogo con link reali */
export function PanelProdotti() {
  return (
    <div className="nrs-concrete-bg flex h-full min-h-0 flex-col overflow-hidden p-4 md:p-6">
      <div className="mx-auto flex h-full w-full max-w-6xl min-h-0 flex-col">
        <div className="nrs-section-rule shrink-0">
          <h2 className="shrink-0 px-2 font-serif text-lg font-bold uppercase tracking-[0.18em] text-nrs-hero md:text-xl">
            Catalogo prodotti
          </h2>
        </div>
        <p className="mt-2 shrink-0 text-center text-sm text-stone-600">
          Pannelli SoundOff · preventivo entro {site.responseTime}
        </p>

        <div className="mt-4 grid min-h-0 flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {standardProducts.map((product) => {
            const href = `/prodotti/${product.id}`;
            return (
              <a
                key={product.id}
                href={href}
                className="group relative z-10 flex min-h-0 cursor-pointer flex-col overflow-hidden border border-stone-300 bg-white transition hover:border-nrs-accent"
              >
                <div className="pointer-events-none relative min-h-[110px] flex-[1.1] bg-stone-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {product.badge ? (
                    <span className="absolute left-2 top-2 bg-nrs-accent px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                      {product.badge}
                    </span>
                  ) : null}
                </div>
                <div className="flex shrink-0 flex-col border-t border-stone-200 p-3">
                  <h3 className="font-serif text-base font-bold uppercase tracking-[0.04em] text-nrs-hero">
                    {product.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-600">
                    {product.description}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-nrs-accent">
                    {product.priceFrom}
                  </p>
                  <p className="mt-0.5 text-[10px] text-stone-500">
                    {installLabels[product.install]}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-3 flex shrink-0 justify-center">
          <a
            href="/preventivo"
            className="cursor-pointer bg-nrs-accent px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white hover:bg-nrs-accent-hover"
          >
            Preventivo guidato →
          </a>
        </div>
      </div>
    </div>
  );
}
