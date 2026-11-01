import Image from "next/image";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { allPortfolioCases } from "@/data/portfolio-cases";
import { portfolioStats } from "@/data/portfolio";
import { seoH1, seoMeta } from "@/data/seo-copy";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: seoMeta.portfolio.title,
  description: seoMeta.portfolio.description,
  path: "/portfolio",
});

export default function PortfolioPage() {
  const cases = allPortfolioCases().filter(
    (c) => c.project.category === "ristorante" || c.project.category === "ufficio",
  );

  return (
    <DossierPageFrame
      eyebrow={`Realizzazioni · ${portfolioStats.photos} foto`}
      title={seoH1.portfolio}
      backHref="/"
      backLabel="Collage home"
      rightSlot={
        <a
          href="/preventivo"
          className="cursor-pointer bg-nrs-accent px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
        >
          Preventivo →
        </a>
      }
    >
      <p className="mb-4 max-w-3xl text-sm text-stone-600">
        Interventi reali su ristoranti, bar, pizzerie e hotel — oltre{" "}
        {site.yearsExperience} anni di lavoro documentato. Apri un caso studio
        per problema, soluzione e risultato. {site.clientMessage}
      </p>

      <h2 className="mb-3 font-serif text-base font-bold uppercase tracking-[0.08em] text-nrs-hero">
        Casi studio
      </h2>
      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {cases.map((c) => (
          <a
            key={c.slug}
            href={`/portfolio/${c.slug}`}
            className="group relative aspect-[4/3] overflow-hidden border border-stone-300 bg-stone-200"
          >
            <Image
              src={c.project.cover || c.project.images[0]?.src || "/portfolio/alla-lampara.jpg"}
              alt={`Correzione acustica ${c.locale} a ${c.city} - NRS Acustica HoReCa`}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
              sizes="(max-width:768px) 50vw, 25vw"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nrs-hero/80 to-transparent px-2 pb-2 pt-6">
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                {c.locale}
              </span>
            </span>
          </a>
        ))}
      </div>

      <h2 className="mb-3 font-serif text-base font-bold uppercase tracking-[0.08em] text-nrs-hero">
        Galleria completa
      </h2>
      <PortfolioGallery />
    </DossierPageFrame>
  );
}
