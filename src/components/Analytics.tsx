"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  parseConsent,
  type CookieConsent,
} from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const HAS_TAGS = Boolean(GA_ID || ADS_ID);

function applyConsentToGtag(consent: CookieConsent | null) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const analytics = consent?.analytics ? "granted" : "denied";
  const marketing = consent?.marketing ? "granted" : "denied";

  window.gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });
}

export function Analytics() {
  useEffect(() => {
    if (!HAS_TAGS) return;

    const sync = () => {
      const consent = parseConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
      applyConsentToGtag(consent);
    };

    sync();

    window.addEventListener("storage", sync);
    window.addEventListener(CONSENT_EVENT, sync);

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(CONSENT_EVENT, sync);
    };
  }, []);

  if (!HAS_TAGS) return null;

  const primaryId = GA_ID || ADS_ID!;

  return (
    <>
      {/* Consent Mode v2: default denied prima di qualsiasi tag */}
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}', { anonymize_ip: true });` : ""}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
