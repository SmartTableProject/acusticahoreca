import type { Metadata } from "next";
import Image from "next/image";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { portfolioStats } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Galleria interventi di correzione acustica per ristoranti, bar e locali pubblici — NRS Soluzioni Acustiche.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden">
        <Image
          src="/portfolio/alla-lampara.jpg"
          alt="Portfolio NRS Soluzioni Acustiche"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-nrs-hero/60" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 md:px-6 md:pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-nrs-accent">
            Portfolio
          </p>
          <h1 className="mt-2 max-w-2xl font-serif text-4xl font-bold text-white md:text-5xl">
            {portfolioStats.projects} locali · {portfolioStats.photos} foto
          </h1>
          <p className="mt-4 max-w-xl text-lg text-stone-200">
            Ristoranti, bar, pizzerie e hotel — oltre 10 anni di interventi acustici
            documentati dal cantiere al render 3D.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <PortfolioGallery />
      </div>
    </>
  );
}
