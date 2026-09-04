"use client";

import { readConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/** Conversione primaria: invio preventivo / form contatti */
export function trackLeadConversion(method = "contact_form") {
  const consent = readConsent();
  if (!consent?.analytics && !consent?.marketing) return;

  trackEvent("generate_lead", { method });

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (consent?.marketing && adsId && label) {
    window.gtag?.("event", "conversion", {
      send_to: `${adsId}/${label}`,
    });
  }
}

export function trackWhatsAppClick() {
  const consent = readConsent();
  if (!consent?.analytics && !consent?.marketing) return;
  trackEvent("click_whatsapp", { method: "fab" });
}
