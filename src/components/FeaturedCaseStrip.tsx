import Image from "next/image";
import { caseStudies, type CaseStudy } from "@/data/case-studies";

/** id case → slug URL portfolio (default = id) */
export function caseStudyHref(cs: CaseStudy): string {
  const map: Record<string, string> = {
    felice: "felice-a-testaccio",
    "osteria-sole": "osteria-del-sole",
  };
  return `/portfolio/${map[cs.id] ?? cs.id}`;
}

/** Casi con testo curato — da mettere in evidenza */
export function getFeaturedCases(limit = 6): CaseStudy[] {
  const enriched = caseStudies.filter(
    (c) => (c.highlights?.length ?? 0) > 0 || (c.featuredShots?.length ?? 0) > 0,
  );
  const list = enriched.length ? enriched : caseStudies;
  return list.slice(0, limit);
}

type Props = {
  limit?: number;
  /** compact = barra sotto collage; roomy = blocco preventivo/pagine */
  variant?: "compact" | "roomy";
  title?: string;
};

/**
 * Striscia casi studio — prova sociale visibile senza aprire la galleria.
 */
export function FeaturedCaseStrip({
  limit = 6,
  variant = "compact",
  title = "Casi studio",
}: Props) {
  const items = getFeaturedCases(limit);
  if (!items.length) return null;

  const isCompact = variant === "compact";

  return (
    <section
      className={`shrink-0 border border-stone-200 bg-white ${isCompact ? "px-3 py-2.5 md:px-4" : "p-4 md:p-5"}`}
      aria-label={title}
    >
      <div className="mb-2 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-nrs-accent">
            Prova sul campo
          </p>
          <h2
            className={`font-serif font-bold uppercase tracking-[0.06em] text-nrs-hero ${isCompact ? "text-sm md:text-base" : "text-lg"}`}
          >
            {title}
          </h2>
        </div>
        <a
          href="/portfolio"
          className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.14em] text-nrs-accent hover:underline md:text-[11px]"
        >
          Tutti i casi →
        </a>
      </div>

      <div
        className={`flex gap-2 overflow-x-auto pb-1 ${isCompact ? "" : "md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6"}`}
      >
        {items.map((cs) => (
          <a
            key={cs.id}
            href={caseStudyHref(cs)}
            className="group relative w-[140px] shrink-0 overflow-hidden border border-stone-300 bg-stone-200 md:w-auto md:min-w-0"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={cs.image}
                alt={`Caso studio ${cs.locale} a ${cs.city} - NRS`}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="160px"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nrs-hero/85 to-transparent px-2 pb-2 pt-6">
                <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  {cs.locale}
                </span>
                <span className="mt-0.5 block text-[9px] uppercase tracking-[0.1em] text-white/80">
                  {cs.city}
                  {cs.highlights?.[0] ? ` · ${cs.highlights[0]}` : ""}
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
