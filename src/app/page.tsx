import Image from "next/image";
import Link from "next/link";
import { HowItWorks } from "@/components/HowItWorks";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ProductTeaser } from "@/components/ProductTeaser";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-nrs-dark text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/portfolio/20180608_100932.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-nrs-dark via-nrs-dark/95 to-nrs-dark/80" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nrs-grey">
            {site.legalName}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Acustica professionale per HoReCa.
            <span className="block text-nrs-grey-light">Ordine online, consulenza tecnica, costi chiari.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300 md:text-lg">
            {site.yearsExperience} anni di correzione del riverbero. Partner ufficiale{" "}
            {site.supplier} su {site.partnerMarket}. Sopralluoghi operativi a{" "}
            {site.surveyArea}; per il resto del Centro Italia lavoriamo con prodotti
            standard e supporto a distanza.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contatti"
              className="rounded-sm bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-nrs-dark transition hover:bg-stone-200"
            >
              Preventivo online
            </Link>
            <Link
              href="/portfolio"
              className="rounded-sm border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white"
            >
              Portfolio lavori
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-px bg-stone-200 md:grid-cols-3">
          {[
            {
              title: "Ecommerce pannelli",
              text: "Kit standard SoundOff con prezzo immediato. Spedizione senza sopralluogo — per fare cassa e partire subito.",
            },
            {
              title: "Progetto a distanza",
              text: "Foto + planimetria del locale. Report tecnico con mq e layout suggerito. Niente spostamenti inutili.",
            },
            {
              title: "Chiavi in mano Roma",
              text: `Sopralluogo, posa e collaudo solo in ${site.surveyArea}. Slot limitati, prenotazione anticipata.`,
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-8">
              <h2 className="text-sm font-bold uppercase tracking-wide text-nrs-dark">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductTeaser />
      <HowItWorks />

      <section className="bg-stone-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
                Portfolio
              </p>
              <h2 className="mt-2 text-3xl font-bold text-nrs-dark">
                Esperienza reale, dal cantiere al render 3D
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-nrs-dark underline underline-offset-4"
            >
              Tutti i progetti
            </Link>
          </div>
          <PortfolioGrid limit={6} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="border border-nrs-dark bg-nrs-dark px-8 py-12 text-white md:px-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Roma e Centro Italia. Onestà sui tempi, precisione sulla soluzione.
          </h2>
          <p className="mt-4 max-w-2xl text-stone-300">
            Non promettiamo sopralluoghi ovunque: preferiamo essere chiari su cosa
            possiamo fare subito (vendita online e consulenza) e cosa richiede
            appuntamento in zona Roma.
          </p>
          <Link
            href="/contatti"
            className="mt-8 inline-block border border-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-nrs-dark"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
