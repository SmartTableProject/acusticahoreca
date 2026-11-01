import type { Metadata } from "next";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Richiesta inviata",
  description: `Grazie — ti rispondiamo entro ${site.responseTime}.`,
  robots: { index: false, follow: false },
};

export default function ContattiGraziePage() {
  return (
    <DossierPageFrame
      tone="paper"
      eyebrow="Richiesta ricevuta"
      title="Grazie. Ti rispondiamo a breve."
      backHref="/"
      backLabel="Home"
    >
      <div className="border border-stone-400/50 bg-white/90 p-6 md:p-8">
        <p className="text-base leading-relaxed text-stone-600">
          Abbiamo ricevuto i tuoi dati. Di solito rispondiamo entro{" "}
          <strong className="text-nrs-hero">{site.responseTime}</strong>. Se
          serve urgenza, scrivici su WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-nrs-accent px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
          >
            WhatsApp {site.phone}
          </a>
          <a
            href="/portfolio"
            className="cursor-pointer border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-hero hover:border-nrs-accent hover:text-nrs-accent"
          >
            Vedi i locali
          </a>
        </div>
      </div>
    </DossierPageFrame>
  );
}
