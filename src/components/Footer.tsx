import Link from "next/link";
import { navLinks, servicePillars, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-nrs-dark text-nrs-grey-light">
      <div className="border-b border-white/10 bg-nrs-elevated py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-4 text-[11px] font-semibold uppercase tracking-widest text-nrs-grey md:px-6">
          {servicePillars.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-xl font-bold text-white">NRS</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-nrs-grey">
            Noise Reduction System
          </p>
          <p className="mt-4 text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-3 text-xs text-nrs-grey">
            Partner {site.supplier} — {site.partnerMarket}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigazione
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Contatti
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>Sopralluoghi: {site.surveyArea}</li>
            <li>Area commerciale: {site.marketArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-nrs-grey">
        © {new Date().getFullYear()} {site.name} — P.IVA 10847041000
      </div>
    </footer>
  );
}
