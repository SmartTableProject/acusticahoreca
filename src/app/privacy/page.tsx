import type { Metadata } from "next";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `Informativa privacy ${site.name} — trattamento dati personali.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <DossierPageFrame
      tone="paper"
      eyebrow="Legale · Privacy"
      title="Privacy policy"
      backHref="/"
      backLabel="Home"
      rightSlot={
        <a
          href="/contatti"
          className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.14em] text-nrs-accent hover:underline"
        >
          Contatti
        </a>
      }
    >
      <div className="max-w-3xl space-y-5 border border-stone-400/50 bg-white/90 p-5 text-stone-700 md:p-6">
        <p className="text-sm text-stone-500">Ultimo aggiornamento: settembre 2026</p>

        <section>
          <h2 className="font-serif text-lg font-bold uppercase text-nrs-hero">
            Titolare del trattamento
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            {site.name} — {site.titolare}
            <br />
            P.IVA {site.piva}
            <br />
            Email:{" "}
            <a href={`mailto:${site.email}`} className="text-nrs-accent">
              {site.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold uppercase text-nrs-hero">
            Dati raccolti
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Dati da form e wizard (nome, email, telefono, messaggio, locale) e
            dati tecnici di navigazione (cookie tecnici e, con consenso,
            analitici/marketing).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold uppercase text-nrs-hero">
            Finalità
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Rispondere a preventivi e consulenze. Con consenso: misura traffico e
            campagne.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold uppercase text-nrs-hero">
            Diritti
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Accesso, rettifica, cancellazione o limitazione:{" "}
            <a href={`mailto:${site.emailInfo}`} className="text-nrs-accent">
              {site.emailInfo}
            </a>
            . Reclamo al Garante Privacy.
          </p>
        </section>
      </div>
    </DossierPageFrame>
  );
}
