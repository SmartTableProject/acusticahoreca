import { PanelPreventivo } from "@/components/dossier/PanelPreventivo";
import type { PreventivoQuery } from "@/components/PreventivoWizard";
import { seoMeta } from "@/data/seo-copy";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: seoMeta.preventivo.title,
  description: seoMeta.preventivo.description,
  path: "/preventivo",
});

type PageProps = {
  searchParams: Promise<PreventivoQuery>;
};

/** Scheda Preventivo — wizard guidato da URL (?step=) + calcolatore */
export default async function PreventivoPage({ searchParams }: PageProps) {
  const query = await searchParams;
  return <PanelPreventivo query={query} />;
}
