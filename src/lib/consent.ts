/** Consenso cookie — analitica (GA4) e marketing (Google Ads). */

export const CONSENT_STORAGE_KEY = "nrs-cookie-consent";
export const CONSENT_EVENT = "nrs-cookie-consent";

export type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export function parseConsent(raw: string | null): CookieConsent | null {
  if (!raw) return null;

  // Legacy: solo "accepted"
  if (raw === "accepted") {
    return {
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };
  }

  try {
    const data = JSON.parse(raw) as Partial<CookieConsent>;
    if (typeof data.analytics !== "boolean" || typeof data.marketing !== "boolean") {
      return null;
    }
    return {
      analytics: data.analytics,
      marketing: data.marketing,
      updatedAt: data.updatedAt || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  return parseConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
}

export function writeConsent(consent: Omit<CookieConsent, "updatedAt">): CookieConsent {
  const full: CookieConsent = {
    ...consent,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(full));
  window.dispatchEvent(new Event(CONSENT_EVENT));
  return full;
}

export function hasAnsweredConsent(): boolean {
  return readConsent() !== null;
}
