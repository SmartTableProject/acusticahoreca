import Image from "next/image";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { caseStudies } from "@/data/case-studies";
import { allPortfolioCases } from "@/data/portfolio-cases";
import { portfolioStats } from "@/data/portfolio";
import { seoH1, seoMeta } from "@/data/seo-copy";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";
import { caseStudyHref } from "@/components/FeaturedCaseStrip";

export const metadata = buildPageMetadata({
  title: seoMeta.portfolio.title,
  description: seoMeta.portfolio.description,
  path: "/portfolio",
});

export default function PortfolioPage() {
  const narrativeIds = new Set(caseStudies.map((c) => c.id));
  const slugAliases: Record<string, string> = {
    felice: "felice-a-testaccio",
    "osteria-sole": "osteria-del-sole",
  };

  const all = allPortfolioCases().filter(
    (c) => c.project.category === "ristorante" || c.project.category === "ufficio",
  );

  const featured = caseStudies.map((cs) => {
    const slug = slugAliases[cs.id] ?? cs.id;
    const fromPortfolio = all.find((c) => c.slug === slug);
    return {
      slug,
      locale: cs.locale,
      city: cs.city,
      image: cs.image,
      highlight: cs.highlights?.[0],
      href: caseStudyHref(cs),
      cover: fromPortfolio?.project.cover,
    };
  });

  const others = all.filter((c) => {
    const matchesNarrative = [...narrativeIds].some(
      (id) => c.slug === id || c.slug === slugAliases[id],
    );
    return !matchesNarrative;
  });

  return (
    <DossierPageFrame
      eyebrow={`Casi studio · ${portfolioStats.photos} foto`}
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
        Qui la prova: locali reali, problema → soluzione → risultato. Oltre{" "}
        {site.yearsExperience} anni di interventi documentati.{" "}
        {site.clientMessage}
      </p>

      <h2 className="mb-3 font-serif text-base font-bold uppercase tracking-[0.08em] text-nrs-hero">
        In evidenza — casi con scheda completa
      </h2>
      <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {featured.map((c) => (
          <a
            key={c.slug}
            href={c.href}
            className="group relative aspect-[4/3] overflow-hidden border border-nrs-accent/35 bg-stone-200"
          >
            <Image
              src={c.cover || c.image}
              alt={`Caso studio ${c.locale} a ${c.city} - NRS Acustica HoReCa`}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
              sizes="(max-width:768px) 50vw, 25vw"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute left-2 top-2 bg-nrs-accent px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
              Scheda
            </span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nrs-hero/85 to-transparent px-2 pb-2 pt-6">
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                {c.locale}
              </span>
              {c.highlight ? (
                <span className="mt-0.5 block text-[9px] uppercase tracking-[0.1em] text-white/80">
                  {c.highlight}
                </span>
              ) : null}
            </span>
          </a>
        ))}
      </div>

      {others.length ? (
        <>
          <h2 className="mb-3 font-serif text-base font-bold uppercase tracking-[0.08em] text-nrs-hero">
            Altri locali documentati
          </h2>
          <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {others.map((c) => (
              <a
                key={c.slug}
                href={`/portfolio/${c.slug}`}
                className="group relative aspect-[4/3] overflow-hidden border border-stone-300 bg-stone-200"
              >
                <Image
                  src={
                    c.project.cover ||
                    c.project.images[0]?.src ||
                    "/portfolio/alla-lampara.jpg"
                  }
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
        </>
      ) : null}

      <h2 className="mb-3 font-serif text-base font-bold uppercase tracking-[0.08em] text-nrs-hero">
        Galleria completa
      </h2>
      <PortfolioGallery />
    </DossierPageFrame>
  );
}
