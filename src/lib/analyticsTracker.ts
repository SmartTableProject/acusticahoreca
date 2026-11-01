"use client";

import { readConsent } from "@/lib/consent";
import { readUtm } from "@/lib/utm";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function canTrack() {
  if (typeof window === "undefined") return false;
  const consent = readConsent();
  return Boolean(consent?.analytics || consent?.marketing);
}

function pushDataLayer(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params, ...readUtm() });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, { ...params, ...readUtm() });
  }
}

/** Click WhatsApp (FAB, CTA, calcolatore) */
export function trackLeadWhatsappClick(params: {
  page_path?: string;
  source_section: string;
  locale_riferimento?: string;
}) {
  if (!canTrack()) return;
  pushDataLayer("lead_whatsapp_click", {
    page_path: params.page_path ?? window.location.pathname,
    source_section: params.source_section,
    locale_riferimento: params.locale_riferimento ?? "",
  });
}

/** Completamento calcolatore acustico */
export function trackLeadCalculatorCompleted(params: {
  mq_sala: number;
  altezza: string;
  criticita: string;
  mq_stimati: string;
}) {
  if (!canTrack()) return;
  pushDataLayer("lead_calculator_completed", params);
}

/** Invio form preventivo */
export function trackLeadPreventivoSubmit(params: {
  tipo_servizio: "online" | "distanza" | "chiavi_in_mano_roma" | string;
}) {
  if (!canTrack()) return;
  pushDataLayer("lead_preventivo_submit", params);
}

/** Vista caso studio portfolio */
export function trackPortfolioCaseView(params: {
  slug: string;
  locale?: string;
}) {
  if (!canTrack()) return;
  pushDataLayer("portfolio_case_view", {
    page_path: window.location.pathname,
    ...params,
  });
}

/** Test interno: verifica che il modulo esporti le 4 funzioni chiave */
export function selfTestAnalyticsTracker(): boolean {
  return (
    typeof trackLeadWhatsappClick === "function" &&
    typeof trackLeadCalculatorCompleted === "function" &&
    typeof trackLeadPreventivoSubmit === "function" &&
    typeof trackPortfolioCaseView === "function"
  );
}
