import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { portfolioStats } from "@/data/portfolio";
import { contactTierLinks } from "@/data/site";

type Props = {
  limit?: number;
};

export function CaseStudies({ limit }: Props) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
            Interventi reali
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-nrs-hero">
            Problema → soluzione, sul campo
          </h2>
          <p className="mt-2 max-w-xl text-sm text-stone-600">
            Storie vere da locali HoReCa. Stessa cura che riserviamo al tuo.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="text-sm font-semibold text-nrs-accent underline underline-offset-4 hover:text-nrs-accent-hover"
        >
          Vedi tutti i {portfolioStats.projects} locali in galleria
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((cs) => (
          <article
            key={cs.id}
            className="flex flex-col overflow-hidden border border-stone-200 bg-white"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={cs.image}
                alt={`${cs.locale} — ${cs.city}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-nrs-accent">
                {cs.city}
                {cs.mqHint ? ` · ${cs.mqHint}` : ""}
              </p>
              <h3 className="mt-1 font-serif text-xl font-bold text-nrs-hero">{cs.locale}</h3>
              <p className="mt-3 text-sm text-stone-600">
                <span className="font-semibold text-nrs-hero">Problema: </span>
                {cs.problema}
              </p>
              <p className="mt-2 text-sm text-stone-600">
                <span className="font-semibold text-nrs-hero">Soluzione: </span>
                {cs.soluzione}
              </p>
              <p className="mt-2 text-sm text-stone-600">
                <span className="font-semibold text-nrs-accent">Risultato: </span>
                {cs.risultato}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={contactTierLinks.remote}
          className="inline-block rounded-sm bg-nrs-accent px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
        >
          Raccontaci il tuo locale
        </Link>
      </div>
    </section>
  );
}
