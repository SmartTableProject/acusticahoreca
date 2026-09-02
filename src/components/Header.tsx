"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { contactTierLinks, navLinks, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-nrs-header text-nrs-hero">
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1 text-[10px] tracking-wide text-nrs-grey md:px-6">
          <span className="font-semibold uppercase tracking-[0.14em] text-stone-600">
            {site.clientSubline}
          </span>
          <div className="hidden items-center gap-4 sm:flex">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold uppercase tracking-[0.14em] text-nrs-accent hover:underline"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="font-semibold tracking-wide text-stone-600 hover:text-nrs-hero"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:px-6 md:py-2.5">
        <Logo compact />

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-nrs-accent"
                  : "text-stone-600 hover:text-nrs-hero"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={contactTierLinks.online}
            className="rounded-sm bg-nrs-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-nrs-accent-hover"
          >
            Preventivo
          </Link>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-nrs-hero md:hidden"
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

      {open && (
        <nav className="border-t border-stone-200 bg-nrs-header px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-stone-700"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-nrs-accent"
            >
              Scrivici su WhatsApp
            </a>
            <Link
              href={contactTierLinks.online}
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-sm bg-nrs-accent px-5 py-2 text-center text-sm font-semibold text-white"
            >
              Preventivo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
