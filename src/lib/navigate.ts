/** Navigazione completa del browser (evita soft-nav Next bloccata nel dossier). */
export function goToPage(href: string) {
  if (typeof window === "undefined") return;
  window.location.assign(href);
}
