import Link from "next/link";
import { site } from "@/data/site";

type PageBandProps = {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showWhatsapp?: boolean;
};

/**
 * Barra CTA stile mockup 3 (bianca, bordo, bottoni angular).
 */
export function PageBand({
  title,
  description,
  primaryHref = "/preventivo",
  primaryLabel = "Richiedi preventivo",
  secondaryHref = "/prodotti",
  secondaryLabel = "Vai ai prodotti",
  showWhatsapp = true,
}: PageBandProps) {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 border border-stone-200 bg-white p-5 md:flex-row md:items-center md:justify-between md:gap-8 md:p-6">
        <div className="flex items-start gap-4 md:items-center">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-nrs-accent/40 text-nrs-accent"
            aria-hidden
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-nrs-hero">
              {title}
            </p>
            {description && (
              <p className="mt-1 text-sm text-stone-500">{description}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 border border-nrs-hero px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-nrs-hero transition hover:border-nrs-accent hover:text-nrs-accent"
            >
              {secondaryLabel}
              <span aria-hidden>↗</span>
            </Link>
          )}
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-nrs-accent px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-nrs-accent-hover"
          >
            {primaryLabel}
            <span aria-hidden>→</span>
          </Link>
          {showWhatsapp && (
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-stone-300 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-stone-600 transition hover:border-nrs-accent hover:text-nrs-accent"
            >
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
