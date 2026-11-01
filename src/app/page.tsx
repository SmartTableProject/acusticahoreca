import { DossierShell } from "@/components/dossier/DossierShell";
import { seoMeta } from "@/data/seo-copy";
import { isDossierTab, type DossierTabId } from "@/lib/dossier";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: seoMeta.home.title,
  description: seoMeta.home.description,
  path: "/",
});

type PageProps = {
  searchParams: Promise<{ tab?: string | string[] }>;
};

/**
 * Home = scheda Realizzazioni.
 * Supporta ancora ?tab=… per link vecchi.
 */
export default async function HomePage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const raw = Array.isArray(sp.tab) ? sp.tab[0] : sp.tab;
  const initialTab: DossierTabId = isDossierTab(raw) ? raw : "realizzazioni";

  return <DossierShell initialTab={initialTab} />;
}
