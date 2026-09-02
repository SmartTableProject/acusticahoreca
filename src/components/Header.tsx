"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

function Logo() {
  return (
    <Link href="/" className="group flex flex-col leading-none">
      <span className="text-2xl font-bold tracking-tight text-white">NRS</span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-nrs-grey">
        Noise Reduction System
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-nrs-dark text-white">
      <div className="border-b border-white/10 bg-nrs-elevated">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-[11px] uppercase tracking-wider text-nrs-grey md:px-6">
          <span>Soluzioni acustiche civili e industriali</span>
          <span className="hidden sm:inline">{site.marketArea}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-nrs-grey-light hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="rounded-sm border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-nrs-dark"
          >
            Preventivo
          </Link>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-white md:hidden"
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
        <nav className="border-t border-white/10 bg-nrs-elevated px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
