import type { Metadata } from "next";
import { DossierShell } from "@/components/dossier/DossierShell";
import { isDossierTab, type DossierTabId } from "@/lib/dossier";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.heroHeadline,
  description: `${site.tagline} ${site.clientSubline} Preventivo online entro ${site.responseTime}.`,
  openGraph: {
    title: `${site.name} | ${site.heroHeadline}`,
    description: site.clientSubline,
    url: site.domain,
  },
};

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
