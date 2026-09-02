import Image from "next/image";
import {
  categoryLabels,
  portfolioItems as allPortfolioItems,
  type PortfolioItem,
  type PortfolioCategory,
} from "@/data/portfolio";

type Props = {
  limit?: number;
  category?: PortfolioCategory;
  variant?: "grid" | "gallery";
  items?: PortfolioItem[];
};

export function PortfolioGrid({
  limit,
  category,
  variant = "grid",
  items: itemsProp,
}: Props) {
  const items = (itemsProp ?? allPortfolioItems)
    .filter((item) => !category || item.category === category)
    .slice(0, limit ?? (itemsProp ? itemsProp.length : allPortfolioItems.length));

  if (variant === "gallery") {
    return (
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="group relative mb-4 break-inside-avoid overflow-hidden bg-stone-200"
            style={{ aspectRatio: index % 3 === 0 ? "3/4" : index % 3 === 1 ? "4/3" : "1/1" }}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-nrs-hero/0 transition duration-300 group-hover:bg-nrs-hero/50" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-nrs-hero/90 to-transparent p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[10px] font-bold uppercase tracking-widest text-nrs-accent">
                {categoryLabels[item.category]}
              </span>
              <h3 className="mt-1 font-serif text-lg font-bold text-white">{item.title}</h3>
              {item.projectName && (
                <p className="mt-1 text-xs text-stone-300">{item.projectName}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-stone-200">{item.description}</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 transition group-hover:opacity-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                {categoryLabels[item.category]}
              </span>
              <h3 className="mt-0.5 font-serif text-base font-bold text-white drop-shadow-sm">
                {item.projectName ?? item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.id}
          className="group relative aspect-[4/3] overflow-hidden bg-stone-200"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nrs-hero/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-nrs-accent">
              {categoryLabels[item.category]}
            </span>
            <h3 className="mt-1 font-serif text-lg font-bold text-white">
              {item.projectName ?? item.title}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
