import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Galleria interventi di correzione acustica per ristoranti, bar e locali pubblici — NRS Soluzioni Acustiche.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
        Portfolio
      </p>
      <h1 className="mt-2 text-4xl font-bold text-stone-900">
        Oltre 10 anni di interventi acustici
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-600">
        Ristoranti, bar, uffici e spazi commerciali — esperienza maturata in oltre
        10 anni di attività. Ogni progetto unisce estetica e performance acustica
        misurabile.
      </p>
      <div className="mt-12">
        <PortfolioGrid />
      </div>
    </div>
  );
}
