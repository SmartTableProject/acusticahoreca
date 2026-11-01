import { DossierShell } from "@/components/dossier/DossierShell";
import { seoMeta } from "@/data/seo-copy";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: seoMeta.percorsi.title,
  description: seoMeta.percorsi.description,
  path: "/percorsi",
});

export default function PercorsiPage() {
  return <DossierShell initialTab="percorsi" />;
}
