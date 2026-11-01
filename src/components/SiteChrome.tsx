"use client";

import { usePathname } from "next/navigation";
import { DossierChrome } from "@/components/dossier/DossierChrome";
import { isLockedDossierPath, resolveActiveTab } from "@/lib/dossier";

/**
 * TUTTO il sito è a schede.
 * Nessun header/footer classico: sempre DossierChrome.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const activeTab = resolveActiveTab(pathname);
  const scrollable = !isLockedDossierPath(pathname);

  return (
    <DossierChrome activeTab={activeTab} scrollable={scrollable}>
      {children}
    </DossierChrome>
  );
}
