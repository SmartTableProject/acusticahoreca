import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Richiesta inviata",
  description: `Grazie — ti rispondiamo entro ${site.responseTime}.`,
  robots: { index: false, follow: false },
};

export default function ContattiGraziePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center md:px-6 md:py-28">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-nrs-accent">
        Richiesta ricevuta
      </p>
      <h1 className="mt-4 font-serif text-4xl font-bold text-nrs-hero md:text-5xl">
        Grazie. Ti rispondiamo a breve.
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
        Abbiamo ricevuto i tuoi dati. Di solito rispondiamo entro{" "}
        <strong className="text-nrs-hero">{site.responseTime}</strong>. Se serve
        urgenza, scrivici su WhatsApp.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-nrs-accent px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
        >
          WhatsApp {site.phone}
        </a>
        <Link
          href="/portfolio"
          className="border border-stone-300 px-8 py-3 text-sm font-semibold text-nrs-hero hover:bg-stone-50"
        >
          Vedi i locali
        </Link>
      </div>
      <p className="mt-12">
        <Link href="/" className="text-sm font-semibold text-nrs-accent underline">
          ← Torna alla home
        </Link>
      </p>
    </div>
  );
}
