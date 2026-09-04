/** Cattura UTM / gclid dalla URL e li tiene in sessione per i lead. */

export const UTM_STORAGE_KEY = "nrs-utm";

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
};

const KEYS: (keyof UtmParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
];

export function captureUtmFromSearch(search: string): UtmParams | null {
  const params = new URLSearchParams(search.startsWith("?") ? search : `?${search}`);
  const next: UtmParams = {};
  let found = false;

  for (const key of KEYS) {
    const value = params.get(key)?.trim();
    if (value) {
      next[key] = value.slice(0, 200);
      found = true;
    }
  }

  return found ? next : null;
}

export function saveUtm(utm: UtmParams) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
}

export function readUtm(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as UtmParams;
  } catch {
    return {};
  }
}

/** Appende i campi UTM a un FormData per /api/contatti */
export function appendUtmToFormData(data: FormData) {
  const utm = readUtm();
  for (const key of KEYS) {
    const value = utm[key];
    if (value) data.set(key, value);
  }
}
