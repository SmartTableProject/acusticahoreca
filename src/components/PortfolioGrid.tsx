import Image from "next/image";
import {
  categoryLabels,
  portfolioItems,
  type PortfolioCategory,
} from "@/data/portfolio";

type Props = {
  limit?: number;
  category?: PortfolioCategory;
};

export function PortfolioGrid({ limit, category }: Props) {
  const items = portfolioItems
    .filter((item) => !category || item.category === category)
    .slice(0, limit ?? portfolioItems.length);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.id}
          className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <span className="absolute left-3 top-3 bg-nrs-dark/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              {categoryLabels[item.category]}
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-stone-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
