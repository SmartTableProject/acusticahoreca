import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { PortfolioCaseTracker } from "@/components/PortfolioCaseTracker";
import {
  getPortfolioCase,
  imageAltForCase,
  portfolioCaseSlugParams,
} from "@/data/portfolio-cases";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioCaseSlugParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getPortfolioCase(slug);
  if (!c) return {};
  return buildPageMetadata({
    title: `Acustica ${c.locale} ${c.city}`,
    description: `Caso studio correzione acustica ${c.locale} (${c.city}). ${c.risultato.slice(0, 80)} Preventivo in 24-48h.`,
    path: `/portfolio/${c.slug}`,
    ogImage: c.project.cover || c.project.images[0]?.src,
  });
}

export default async function PortfolioCasePage({ params }: Props) {
  const { slug } = await params;
  const c = getPortfolioCase(slug);
  if (!c) notFound();

  const waText = encodeURIComponent(
    `Ciao, ho visto il vostro lavoro da ${c.locale} e vorrei un preventivo per il mio locale`,
  );
  const waUrl = `${site.whatsappUrl}?text=${waText}`;
  const preventivoUrl = `/preventivo?locale_riferimento=${encodeURIComponent(c.slug)}`;

  return (
    <DossierPageFrame
      tone="paper"
      eyebrow={`Caso studio · ${c.city}`}
      title={`Correzione Acustica ${c.locale} (${c.city}) — Caso Studio HoReCa`}
      backHref="/portfolio"
      backLabel="Portfolio"
      rightSlot={
        <a
          href={preventivoUrl}
          className="cursor-pointer bg-nrs-accent px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
        >
          Preventivo simile →
        </a>
      }
    >
      <PortfolioCaseTracker slug={c.slug} locale={c.locale} />

      <p className="mb-4 max-w-3xl text-sm text-stone-600">
        Intervento NRS con prodotti {site.supplier}.{" "}
        {c.mqHint ? `${c.mqHint}.` : null}
      </p>

      <div className="mb-6 grid gap-3 md:grid-cols-3">
        {[
          { t: "Problema iniziale", d: c.problema },
          { t: "Soluzione SoundOff", d: c.soluzione },
          { t: "Risultato in sala", d: c.risultato },
        ].map((block) => (
          <div
            key={block.t}
            className="border border-stone-300 bg-white p-4"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-nrs-accent">
              {block.t}
            </p>
            <p className="mt-2 text-sm text-stone-700">{block.d}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-3 font-serif text-lg font-bold uppercase tracking-[0.06em] text-nrs-hero">
        Foto intervento
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {c.project.images.slice(0, 12).map((img, i) => (
          <div
            key={img.id}
            className="relative aspect-[4/3] overflow-hidden border border-stone-300 bg-stone-200"
          >
            <Image
              src={img.src}
              alt={imageAltForCase(
                c,
                i === 0 ? "Intervento acustico" : "Pannelli fonoassorbenti",
              )}
              fill
              className="object-cover"
              sizes="(max-width:768px) 50vw, 25vw"
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={i === 0 ? "high" : undefined}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border border-stone-300 bg-stone-50 px-4 py-4">
        <div>
          <p className="text-sm font-bold text-nrs-hero">
            Preventivo per un locale simile
          </p>
          <p className="text-xs text-stone-500">
            Risposta in {site.responseTime}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={preventivoUrl}
            className="cursor-pointer bg-nrs-accent px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white hover:bg-nrs-accent-hover"
          >
            Richiedi preventivo
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer border border-[#25D366] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#128C7E] hover:bg-[#25D366]/10"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </DossierPageFrame>
  );
}
