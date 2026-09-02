import Link from "next/link";
import { portfolioStats } from "@/data/portfolio";
import { site } from "@/data/site";

export function TrustBar() {
  const items = [
    { value: `${portfolioStats.projects}+`, label: "Locali reali" },
    { value: `${site.yearsExperience}+`, label: "Anni sul campo" },
    { value: site.surveyArea, label: "Sopralluoghi diretti" },
    { value: site.responseTime, label: "Risposta preventivi" },
  ];

  return (
    <section className="border-y border-stone-200 bg-white py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-6">
        {items.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="font-serif text-2xl font-bold text-nrs-hero md:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-nrs-grey">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
