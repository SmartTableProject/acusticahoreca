/** Schede del sito — navigazione unica a dossier */
export const dossierTabs = [
  { id: "realizzazioni", label: "Realizzazioni" },
  { id: "percorsi", label: "Percorsi" },
  { id: "prodotti", label: "Prodotti" },
  { id: "preventivo", label: "Preventivo" },
] as const;

export type DossierTabId = (typeof dossierTabs)[number]["id"];

export function isDossierTab(value: string | null | undefined): value is DossierTabId {
  return dossierTabs.some((t) => t.id === value);
}

/** URL delle 4 schede principali */
export function dossierTabUrl(tab: DossierTabId): string {
  switch (tab) {
    case "percorsi":
      return "/percorsi";
    case "prodotti":
      return "/prodotti";
    case "preventivo":
      return "/preventivo";
    default:
      return "/";
  }
}

/**
 * Quale scheda evidenziare dalla URL.
 * Tutto il sito vive nel dossier: ogni pagina “appartiene” a una scheda.
 */
export function resolveActiveTab(pathname: string): DossierTabId {
  if (pathname === "/") return "realizzazioni";
  if (
    pathname.startsWith("/percorsi") ||
    pathname.startsWith("/progetto-remoto") ||
    pathname.startsWith("/chiavi-in-mano") ||
    pathname.startsWith("/servizi") ||
    pathname.startsWith("/contatti")
  ) {
    return "percorsi";
  }
  if (pathname.startsWith("/prodotti")) return "prodotti";
  if (pathname.startsWith("/preventivo")) return "preventivo";
  if (pathname.startsWith("/portfolio") || pathname.startsWith("/acustica-ristorante-roma")) {
    return "realizzazioni";
  }
  // blog, chi-siamo, privacy… → nessuna dominante: restano su Realizzazioni come base
  return "realizzazioni";
}

/**
 * Tutto il sito: chrome fisso a schede.
 * Lo scroll avviene SOLO dentro la scheda (DossierPageFrame / pannelli).
 */
export function isLockedDossierPath(_pathname: string): boolean {
  return true;
}

/** Apri scheda con reload completo */
export function openDossierTab(tab: DossierTabId) {
  if (typeof window === "undefined") return;
  window.location.assign(dossierTabUrl(tab));
}
