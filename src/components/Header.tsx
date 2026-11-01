"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { dossierTabs, dossierTabUrl } from "@/lib/dossier";
import { navLinks, site } from "@/data/site";
import { goToPage } from "@/lib/navigate";

/**
 * Header pagine secondarie (blog, chi siamo…).
 * Le 4 voci principali = link reali alle schede del dossier.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white text-nrs-hero">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-3.5">
        <Logo compact />

        <nav className="hidden items-center gap-6 md:flex lg:gap-7">
          {dossierTabs.map((item) => (
            <a
              key={item.id}
              href={dossierTabUrl(item.id)}
              className="cursor-pointer border-b-2 border-transparent pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600 transition-colors hover:text-nrs-hero"
            >
              {item.label}
            </a>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="cursor-pointer border-b-2 border-transparent pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-500 hover:text-nrs-hero"
            >
              Altro
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-2 min-w-[160px] border border-stone-200 bg-white py-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(link.href);
                  }}
                  className={`block cursor-pointer px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-stone-50 hover:text-nrs-accent ${
                    pathname === link.href ? "text-nrs-accent" : "text-stone-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage("/portfolio");
                }}
                className="block cursor-pointer px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-stone-600 hover:bg-stone-50 hover:text-nrs-accent"
              >
                Casi studio
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-accent"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <a
            href={dossierTabUrl("preventivo")}
            className="cursor-pointer bg-nrs-accent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-nrs-accent-hover"
          >
            Preventivo
          </a>
        </nav>

        <button
          type="button"
          className="cursor-pointer p-2 text-nrs-hero md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-stone-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {dossierTabs.map((item) => (
              <a
                key={item.id}
                href={dossierTabUrl(item.id)}
                className="cursor-pointer text-[12px] font-bold uppercase tracking-[0.16em] text-stone-700"
              >
                {item.label}
              </a>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[12px] font-bold uppercase tracking-[0.16em] text-stone-700"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-[12px] font-bold uppercase tracking-[0.16em] text-nrs-accent"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
