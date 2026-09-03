import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, installLabels, standardProducts } from "@/data/products";
import { caseStudies } from "@/data/case-studies";
import { contactTierLinks, site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return standardProducts.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Prodotto" };
  return {
    title: product.name,
    description: `${product.description} ${site.priceLabel}. ${site.partnerLabel}.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = caseStudies.filter((c) => c.prodotti.includes(product.id)).slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
        <Link href="/prodotti" className="hover:text-nrs-accent">
          Prodotti
        </Link>
        {" / "}
        {product.name}
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.badge && (
              <span className="absolute left-3 top-3 bg-nrs-accent px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                {product.badge}
              </span>
            )}
          </div>
          {product.gallery.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {product.gallery.slice(0, 3).map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image src={src} alt="" fill className="object-cover" sizes="20vw" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="font-serif text-4xl font-bold text-nrs-hero">{product.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">{product.longDescription}</p>
          <p className="mt-4 text-sm text-stone-500">
            <span className="font-semibold text-nrs-hero">Ideale per: </span>
            {product.idealFor}
          </p>
          <p className="mt-2 text-sm text-nrs-grey">{installLabels[product.install]}</p>
          <p className="mt-4 text-lg font-semibold text-nrs-accent">{product.priceFrom}</p>
          <p className="mt-1 text-xs text-stone-500">{product.priceHint}</p>

          <ul className="mt-8 space-y-2">
            {product.benefits.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-stone-700">
                <span className="text-nrs-accent">—</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`${contactTierLinks.online}&prodotto=${product.id}`}
              className="rounded-sm bg-nrs-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
            >
              Richiedi preventivo
            </Link>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-nrs-hero px-8 py-3.5 text-sm font-semibold text-nrs-hero hover:bg-stone-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-serif text-2xl font-bold text-nrs-hero">
            Dove lo abbiamo usato
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((cs) => (
              <div key={cs.id} className="flex gap-4 border border-stone-200 p-4">
                <div className="relative h-24 w-28 shrink-0 overflow-hidden">
                  <Image src={cs.image} alt={cs.locale} fill className="object-cover" sizes="112px" />
                </div>
                <div>
                  <p className="font-semibold text-nrs-hero">{cs.locale}</p>
                  <p className="mt-1 text-sm text-stone-600">{cs.risultato}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
