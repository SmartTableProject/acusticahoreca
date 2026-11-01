import { DossierShell } from "@/components/dossier/DossierShell";
import { seoMeta } from "@/data/seo-copy";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: seoMeta.prodotti.title,
  description: seoMeta.prodotti.description,
  path: "/prodotti",
  ogImage: "/prodotti/hexagon-kit.jpg",
});

/** Scheda Prodotti — pagina vera (niente redirect) */
export default function ProdottiPage() {
  return <DossierShell initialTab="prodotti" />;
}
