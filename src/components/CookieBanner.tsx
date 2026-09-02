"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "nrs-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== "accepted") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informativa cookie"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-stone-200 bg-white p-4 shadow-lg md:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-stone-600">
          Usiamo cookie tecnici per il funzionamento del sito. Continuando la
          navigazione accetti la nostra{" "}
          <Link href="/privacy" className="font-semibold text-nrs-accent underline">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, "accepted");
              setVisible(false);
            }}
            className="rounded-sm bg-nrs-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-nrs-accent-hover"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
