import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PanelProdottoDetail } from "@/components/dossier/PanelProdottoDetail";
import { getProduct, standardProducts } from "@/data/products";
import { caseStudies } from "@/data/case-studies";
import { site } from "@/data/site";

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

/** Dettaglio prodotto = scheda dossier (tab Prodotti) */
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = caseStudies
    .filter((c) => c.prodotti.includes(product.id))
    .slice(0, 2)
    .map((c) => ({
      id: c.id,
      locale: c.locale,
      risultato: c.risultato,
      image: c.image,
    }));

  return <PanelProdottoDetail product={product} related={related} />;
}
