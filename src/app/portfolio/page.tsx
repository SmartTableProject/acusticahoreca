import type { Metadata } from "next";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { portfolioStats } from "@/data/portfolio";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Galleria interventi di correzione acustica per ristoranti, bar e locali pubblici — NRS Soluzioni Acustiche.",
};

export default function PortfolioPage() {
  return (
    <DossierPageFrame
      eyebrow={`Realizzazioni · ${portfolioStats.photos} foto`}
      title={`${portfolioStats.projects} locali documentati`}
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
      <p className="mb-4 text-sm text-stone-600">
        Ristoranti, bar, pizzerie e hotel — oltre 10 anni di interventi.{" "}
        {site.clientMessage}
      </p>
      <PortfolioGallery />
    </DossierPageFrame>
  );
}
