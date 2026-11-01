"use client";

import { SeoH1 } from "@/components/SeoH1";
import { homeCollage, type CollageTile } from "@/data/home-collage";
import { portfolioStats } from "@/data/portfolio";
import { seoH1 } from "@/data/seo-copy";

const areaClass: Record<CollageTile["area"], string> = {
  a: "nrs-collage-a",
  b: "nrs-collage-b",
  c: "nrs-collage-c",
  d: "nrs-collage-d",
  e: "nrs-collage-e",
  f: "nrs-collage-f",
  g: "nrs-collage-g",
  h: "nrs-collage-h",
  i: "nrs-collage-i",
};

/** Scheda 1 — collage; CTA = link reali */
export function PanelRealizzazioni() {
  return (
    <div className="flex h-full min-h-0 flex-col gap-3 p-3 md:gap-3.5 md:p-4">
      <SeoH1>{seoH1.home}</SeoH1>
      <div className="nrs-collage nrs-collage-fill min-h-0 flex-1">
        {homeCollage.map((tile) => {
          const isBadgeHost = tile.area === "a";
          return (
            <a
              key={tile.id}
              href="/portfolio"
              className={`group relative block h-full w-full min-h-0 cursor-pointer overflow-hidden bg-stone-300 ${areaClass[tile.area]}`}
            >
              <span
                className="nrs-photo-bw absolute inset-0 block bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `url(${tile.src})`,
                  backgroundPosition: tile.objectPosition ?? "center",
                }}
                role="img"
                aria-label={tile.title}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nrs-hero/70 to-transparent px-3 pb-3 pt-8 opacity-0 transition group-hover:opacity-100">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  {tile.title}
                </span>
              </span>
              {isBadgeHost ? (
                <span className="absolute bottom-0 left-0 z-[1] bg-nrs-accent/95 px-4 py-3 text-white md:px-5 md:py-3.5">
                  <span className="flex items-end gap-3">
                    <svg
                      className="mb-0.5 h-5 w-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      <span className="block font-serif text-3xl font-bold leading-none md:text-4xl">
                        {portfolioStats.projects}
                      </span>
                      <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em]">
                        Locali documentati
                      </span>
                    </span>
                  </span>
                </span>
              ) : null}
            </a>
          );
        })}
      </div>

      <div className="relative z-10 flex shrink-0 flex-col gap-3 border border-stone-200 bg-white px-4 py-3 md:flex-row md:items-center md:justify-between md:px-5">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-nrs-hero">
            Scopri le soluzioni acustiche per HoReCa
          </p>
          <p className="mt-0.5 text-sm text-stone-500">
            Prodotti fonoassorbenti specifici per locali pubblici.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/preventivo#calcolatore"
            className="inline-flex cursor-pointer items-center gap-2 border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-nrs-hero transition hover:border-nrs-accent hover:text-nrs-accent"
          >
            Calcola mq SoundOff
            <span aria-hidden>↗</span>
          </a>
          <a
            href="/prodotti"
            className="inline-flex cursor-pointer items-center gap-2 border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-nrs-hero transition hover:border-nrs-accent hover:text-nrs-accent"
          >
            Vai ai prodotti
            <span aria-hidden>↗</span>
          </a>
          <a
            href="/preventivo"
            className="inline-flex cursor-pointer items-center gap-2 bg-nrs-accent px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-nrs-accent-hover"
          >
            Richiedi preventivo
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
