"use client";

import { readConsent } from "@/lib/consent";
import {
  trackLeadPreventivoSubmit,
  trackLeadWhatsappClick,
} from "@/lib/analyticsTracker";

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
export function trackLeadConversion(
  method = "contact_form",
  tipoServizio?: string,
) {
  const consent = readConsent();
  if (!consent?.analytics && !consent?.marketing) return;

  trackEvent("generate_lead", { method });

  const mapped =
    tipoServizio ??
    (method.includes("wizard") || method.includes("preventivo")
      ? "online"
      : method.includes("roma")
        ? "chiavi_in_mano_roma"
        : method.includes("remoto") || method.includes("distanza")
          ? "distanza"
          : "online");

  trackLeadPreventivoSubmit({ tipo_servizio: mapped });

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (consent?.marketing && adsId && label) {
    window.gtag?.("event", "conversion", {
      send_to: `${adsId}/${label}`,
    });
  }
}

export function trackWhatsAppClick(sourceSection = "fab") {
  const consent = readConsent();
  if (!consent?.analytics && !consent?.marketing) return;
  trackEvent("click_whatsapp", { method: sourceSection });
  trackLeadWhatsappClick({ source_section: sourceSection });
}

export {
  trackLeadCalculatorCompleted,
  trackLeadPreventivoSubmit,
  trackLeadWhatsappClick,
  trackPortfolioCaseView,
} from "@/lib/analyticsTracker";
