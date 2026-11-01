import Image from "next/image";
import Link from "next/link";
import { homeCollage, type CollageTile } from "@/data/home-collage";
import { portfolioStats } from "@/data/portfolio";
import { site } from "@/data/site";

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

/**
 * Collage come mockup 3 — Portfolio first:
 * 9 foto, template areas fisso (zero buchi), badge sopra la foto, CTA bar sotto.
 */
export function PortfolioHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
        <div className="nrs-collage">
          {homeCollage.map((tile) => {
            const isBadgeHost = tile.area === "a";
            return (
              <Link
                key={tile.id}
                href="/portfolio"
                className={`group relative block overflow-hidden bg-stone-300 ${areaClass[tile.area]}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.title}
                  fill
                  className="nrs-photo-bw object-cover transition duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: tile.objectPosition ?? "center" }}
                  sizes={
                    tile.area === "a"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  priority
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-nrs-hero/70 to-transparent px-3 pb-3 pt-10 opacity-0 transition group-hover:opacity-100">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {tile.title}
                  </p>
                </div>

                {isBadgeHost && (
                  <div className="absolute bottom-0 left-0 z-[1] bg-nrs-accent/95 px-4 py-3 text-white md:px-5 md:py-4">
                    <div className="flex items-end gap-3">
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
                      <div>
                        <p className="font-serif text-3xl font-bold leading-none md:text-4xl">
                          {portfolioStats.projects}
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em]">
                          Locali documentati
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-3 flex flex-col gap-4 border border-stone-200 bg-white p-4 md:mt-4 md:flex-row md:items-center md:justify-between md:gap-6 md:p-5">
          <div className="flex items-start gap-4 md:items-center">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-nrs-accent/40 text-nrs-accent"
              aria-hidden
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-nrs-hero">
                Scopri le soluzioni acustiche per HoReCa
              </p>
              <p className="mt-1 text-sm text-stone-500">
                {site.heroHeadline.replace(/\.$/, "")}. Prodotti fonoassorbenti per locali pubblici.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/prodotti"
              className="inline-flex items-center gap-2 border border-nrs-hero px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-nrs-hero transition hover:border-nrs-accent hover:text-nrs-accent"
            >
              Vai ai prodotti
              <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/preventivo"
              className="inline-flex items-center gap-2 bg-nrs-accent px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-nrs-accent-hover"
            >
              Richiedi preventivo
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
