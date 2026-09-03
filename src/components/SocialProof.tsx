import Link from "next/link";
import { googleReviewsUrl, reviews } from "@/data/reviews";
import { portfolioStats } from "@/data/portfolio";
import { site } from "@/data/site";

export function SocialProof() {
  return (
    <section className="border-y border-stone-200 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
              Dicono di noi
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-nrs-hero">
              Fiducia sul campo, non a parole
            </h2>
            <p className="mt-2 max-w-xl text-sm text-stone-600">
              {portfolioStats.projects} locali documentati · {site.yearsExperience}+ anni ·
              sopralluoghi in {site.surveyArea}.
            </p>
          </div>
          {googleReviewsUrl ? (
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-nrs-accent underline underline-offset-4 hover:text-nrs-accent-hover"
            >
              Leggi le recensioni su Google →
            </a>
          ) : (
            <p className="text-xs text-stone-500">
              Presto anche su Google Business Profile
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote
              key={r.id}
              className="flex flex-col border border-stone-200 bg-nrs-body p-6"
            >
              <div className="flex gap-0.5 text-nrs-accent" aria-label={`${r.rating} su 5`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-700">
                «{r.text}»
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-nrs-hero">{r.author}</p>
                <p className="text-xs text-nrs-grey">{r.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <Link
            href="/acustica-ristorante-roma"
            className="text-sm font-semibold text-nrs-accent underline underline-offset-4"
          >
            Acustica ristoranti a Roma — guida locale
          </Link>
          <Link
            href="/prodotti"
            className="text-sm font-semibold text-stone-600 underline underline-offset-4 hover:text-nrs-hero"
          >
            Catalogo prodotti
          </Link>
        </div>
      </div>
    </section>
  );
}
