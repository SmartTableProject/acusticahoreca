"use client";

import { PanelPercorsi } from "@/components/dossier/PanelPercorsi";
import { PanelPreventivo } from "@/components/dossier/PanelPreventivo";
import { PanelProdotti } from "@/components/dossier/PanelProdotti";
import { PanelRealizzazioni } from "@/components/dossier/PanelRealizzazioni";
import type { DossierTabId } from "@/lib/dossier";

type Props = {
  initialTab?: DossierTabId;
};

/**
 * Solo il pannello della scheda.
 * Il chrome (logo + tab) lo mette SiteChrome su tutto il sito.
 */
export function DossierShell({ initialTab = "realizzazioni" }: Props) {
  if (initialTab === "percorsi") return <PanelPercorsi />;
  if (initialTab === "prodotti") return <PanelProdotti />;
  if (initialTab === "preventivo") return <PanelPreventivo query={{}} />;
  return <PanelRealizzazioni />;
}
