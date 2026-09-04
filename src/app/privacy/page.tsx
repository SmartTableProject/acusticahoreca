import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `Informativa privacy ${site.name} — trattamento dati personali.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
        Legale
      </p>
      <h1 className="mt-2 text-3xl font-bold text-nrs-hero">Privacy policy</h1>
      <p className="mt-4 text-sm text-stone-500">Ultimo aggiornamento: settembre 2026</p>

      <div className="prose prose-stone mt-10 max-w-none space-y-6 text-stone-700">
        <section>
          <h2 className="text-xl font-bold text-nrs-hero">Titolare del trattamento</h2>
          <p>
            {site.name} — {site.titolare}
            <br />
            P.IVA {site.piva}
            <br />
            Email:{" "}
            <a href={`mailto:${site.email}`} className="text-nrs-accent">
              {site.email}
            </a>
            {" · "}
            <a href={`mailto:${site.emailInfo}`} className="text-nrs-accent">
              {site.emailInfo}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-nrs-hero">Dati raccolti</h2>
          <p>
            Tramite il form contatti raccogliamo: nome, email, telefono (facoltativo),
            città, tipo di richiesta, tipo di locale e messaggio. I dati servono
            esclusivamente per rispondere alle richieste di preventivo e consulenza.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-nrs-hero">Finalità e base giuridica</h2>
          <p>
            Il trattamento avviene per gestire le richieste commerciali (art. 6.1.b
            GDPR — esecuzione di misure precontrattuali) e, ove applicabile, per
            obblighi di legge.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-nrs-hero">Conservazione</h2>
          <p>
            I dati delle richieste di preventivo sono conservati per il tempo
            necessario a gestire il rapporto commerciale e comunque non oltre 24 mesi
            dall&apos;ultimo contatto, salvo obblighi di legge diversi.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-nrs-hero">Cookie</h2>
          <p>
            Il sito utilizza cookie tecnici necessari al funzionamento. Con il tuo
            consenso esplicito (banner «Accetta tutto») attiviamo anche:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Analitica</strong> — Google Analytics 4, per capire come viene
              usato il sito (pagine visitate, dispositivi). IP anonimizzato dove
              supportato.
            </li>
            <li>
              <strong>Marketing / Ads</strong> — tag Google Ads per misurare le
              conversioni delle campagne pubblicitarie (es. invio preventivo) e,
              ove applicabile, remarketing.
            </li>
          </ul>
          <p className="mt-3">
            Puoi scegliere «Solo tecnici» e navigare senza analitica né Ads. Puoi
            cambiare preferenza cancellando i dati del sito dal browser e
            ricaricando la pagina (riappare il banner). Base giuridica: consenso
            (art. 6.1.a GDPR).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-nrs-hero">Diritti dell&apos;interessato</h2>
          <p>
            Hai diritto di accesso, rettifica, cancellazione, limitazione, opposizione
            e portabilità dei dati. Per esercitarli scrivi a{" "}
            <a href={`mailto:${site.email}`} className="text-nrs-accent">
              {site.email}
            </a>
            . Hai inoltre diritto di reclamo al Garante Privacy.
          </p>
        </section>
      </div>

      <p className="mt-12">
        <Link href="/" className="text-sm font-semibold text-nrs-accent underline">
          ← Torna alla home
        </Link>
      </p>
    </div>
  );
}
