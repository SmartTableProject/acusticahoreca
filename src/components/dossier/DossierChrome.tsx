"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { dossierTabs, dossierTabUrl, type DossierTabId } from "@/lib/dossier";
import { site } from "@/data/site";

const moreLinks = [
  { href: "/portfolio", label: "Galleria completa" },
  { href: "/blog", label: "Blog" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
  { href: "/acustica-ristorante-roma", label: "Acustica Roma" },
] as const;

type Props = {
  activeTab?: DossierTabId;
  children: React.ReactNode;
  /** Se true, il contenuto può scrollare (pagine percorso lunghe) */
  scrollable?: boolean;
};

/**
 * Chrome comune dossier: logo + schede + area contenuto.
 * Logo ufficiale non modificato.
 */
export function DossierChrome({
  activeTab = "percorsi",
  children,
  scrollable = false,
}: Props) {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="nrs-dossier flex h-dvh flex-col overflow-hidden bg-white text-nrs-hero">
      <header className="relative z-50 flex shrink-0 items-center justify-between gap-2 border-b border-stone-200 bg-white px-2 py-2.5 sm:gap-3 sm:px-3 md:px-5 md:py-3">
        <Logo compact />

        <nav
          className="flex flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-5 lg:gap-x-7"
          aria-label="Schede del sito"
        >
          {dossierTabs.map((item) => {
            const active = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={dossierTabUrl(item.id)}
                className={`cursor-pointer border-b-2 pb-1 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors sm:text-[11px] sm:tracking-[0.18em] ${
                  active
                    ? "border-nrs-accent text-nrs-accent"
                    : "border-transparent text-stone-600 hover:text-nrs-hero"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className="cursor-pointer border-b-2 border-transparent pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-500 hover:text-nrs-hero"
              aria-expanded={moreOpen}
            >
              Altro
            </button>
            {moreOpen ? (
              <div className="absolute right-0 top-full z-50 mt-2 min-w-[180px] border border-stone-200 bg-white py-2 shadow-sm">
                {moreLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block cursor-pointer px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-stone-600 hover:bg-stone-50 hover:text-nrs-accent"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-accent"
                >
                  WhatsApp
                </a>
              </div>
            ) : null}
          </div>

          <a
            href={dossierTabUrl("preventivo")}
            className="cursor-pointer bg-nrs-accent px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-nrs-accent-hover sm:px-4 sm:text-[11px]"
          >
            Preventivo
          </a>
        </div>
      </header>

      <div
        className={`relative z-10 min-h-0 flex-1 bg-white ${
          scrollable ? "overflow-y-auto" : "overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
