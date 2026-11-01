import Image from "next/image";
import { ProductGallery } from "@/components/ProductGallery";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import type { Product } from "@/data/products";
import { installLabels } from "@/data/products";
import { site } from "@/data/site";

type Related = {
  id: string;
  locale: string;
  risultato: string;
  image: string;
};

type Props = {
  product: Product;
  related: Related[];
};

/** Scheda prodotto = pannello dossier (non landing classica) */
export function PanelProdottoDetail({ product, related }: Props) {
  return (
    <DossierPageFrame
      eyebrow="Scheda prodotto · Catalogo"
      title={product.name}
      backHref="/prodotti"
      backLabel="Catalogo"
      rightSlot={
        product.badge ? (
          <span className="bg-nrs-accent px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
            {product.badge}
          </span>
        ) : null
      }
    >
      <div className="grid min-h-full gap-3 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
        <div className="border border-stone-400/50 bg-white p-3 md:p-4">
          <ProductGallery
            name={product.name}
            images={[product.image, ...product.gallery]}
            badge={product.badge}
          />
        </div>

        <div className="flex flex-col border border-stone-400/50 bg-white/95 p-4 md:p-5">
          <p className="text-sm leading-relaxed text-stone-600">
            {product.longDescription}
          </p>
          <p className="mt-3 text-sm text-stone-500">
            <span className="font-semibold text-nrs-hero">Ideale per: </span>
            {product.idealFor}
          </p>
          <p className="mt-1 text-sm text-stone-500">
            {installLabels[product.install]}
          </p>

          <div className="mt-4 border-t border-stone-200 pt-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-nrs-accent">
              {product.priceFrom}
            </p>
            <p className="mt-1 text-base font-bold text-nrs-hero">
              {product.priceBand}
            </p>
            <p className="mt-1 text-xs text-stone-500">{product.priceBandNote}</p>
            <p className="mt-1 text-xs text-stone-500">{product.priceHint}</p>
          </div>

          <ul className="mt-4 space-y-1.5">
            {product.benefits.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-stone-700">
                <span className="text-nrs-accent">—</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            <a
              href="/preventivo"
              className="cursor-pointer bg-nrs-accent px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
            >
              Preventivo guidato →
            </a>
            <a
              href={`/contatti?tipo=prodotto-online&prodotto=${product.id}`}
              className="cursor-pointer border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-hero hover:border-nrs-accent hover:text-nrs-accent"
            >
              Richiedi preventivo
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-stone-300 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-hero hover:border-nrs-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <div className="mt-3 border border-stone-400/45 bg-white/80 p-4 md:p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-nrs-accent">
            Dove lo abbiamo usato
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {related.map((cs) => (
              <div
                key={cs.id}
                className="flex gap-3 border border-stone-200 bg-white p-2.5"
              >
                <div className="relative h-16 w-20 shrink-0 overflow-hidden bg-stone-100">
                  <Image
                    src={cs.image}
                    alt={cs.locale}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-nrs-hero">
                    {cs.locale}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-stone-600">
                    {cs.risultato}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </DossierPageFrame>
  );
}
