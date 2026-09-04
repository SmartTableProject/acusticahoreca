"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hasAnsweredConsent, writeConsent } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasAnsweredConsent());
  }, []);

  if (!visible) return null;

  function acceptAll() {
    writeConsent({ analytics: true, marketing: true });
    setVisible(false);
  }

  function essentialsOnly() {
    writeConsent({ analytics: false, marketing: false });
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-stone-200 bg-white p-4 shadow-lg md:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-stone-600">
          Usiamo cookie tecnici per far funzionare il sito. Con il tuo consenso
          attiviamo anche analitica (Google Analytics) e, se accetti tutto,
          misurazione campagne Google Ads. Dettagli nella{" "}
          <Link href="/privacy" className="font-semibold text-nrs-accent underline">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={essentialsOnly}
            className="rounded-sm border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-nrs-hero hover:bg-stone-50"
          >
            Solo tecnici
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-sm bg-nrs-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-nrs-accent-hover"
          >
            Accetta tutto
          </button>
        </div>
      </div>
    </div>
  );
}
