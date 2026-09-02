import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, servicePillars, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-nrs-hero text-stone-300">
      <div className="border-b border-white/10 bg-nrs-elevated py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-4 text-[11px] font-semibold uppercase tracking-widest text-stone-400 md:px-6">
          {servicePillars.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 text-sm font-medium leading-relaxed text-stone-200">
            {site.tagline}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-stone-400">{site.clientSubline}</p>
          <p className="mt-3 text-xs text-stone-400">{site.legalName}</p>
          <p className="mt-2 text-xs text-stone-400">
            {site.partnerLabel} — {site.partnerMarket}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigazione
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-nrs-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-nrs-accent">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Contatti
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-nrs-accent">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-nrs-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-nrs-accent"
              >
                WhatsApp
              </a>
            </li>
            <li>Sopralluoghi: {site.surveyArea}</li>
            <li>Area commerciale: {site.marketArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {site.name} — P.IVA {site.piva}
      </div>
    </footer>
  );
}
