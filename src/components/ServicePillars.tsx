import Link from "next/link";
import { contactTierLinks, site } from "@/data/site";

/**
 * Grafica Modello 2 — Tre porte funnel (mockup STAMPA).
 * Carta tecnica, angoli L, numeri neri, CTA teal. Senza foto.
 */
const doors = [
  {
    n: "1",
    title: "Preventivo online",
    text: "Scegli la linea SoundOff più adatta al tuo locale e ricevi un preventivo chiaro, senza checkout improvvisato.",
    cta: "Richiedi preventivo",
    href: contactTierLinks.preventivo,
    dominant: false,
  },
  {
    n: "2",
    title: "Progetto a distanza",
    text: "Un tecnico valuta foto e planimetria e ti indica mq, layout e fornitura — ovunque in Italia.",
    cta: "Inizia il progetto",
    href: contactTierLinks.remote,
    dominant: false,
  },
  {
    n: "3",
    title: "Chiavi in mano Roma",
    text: `Installazione completa in ${site.surveyArea}: sopralluogo, posa e collaudo. Un solo interlocutore fino al comfort in sala.`,
    cta: "Richiedi sopralluogo",
    href: contactTierLinks.roma,
    dominant: true,
  },
] as const;

function Crosshair({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block h-3 w-3 ${className}`} aria-hidden>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-nrs-accent" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-nrs-accent" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-nrs-accent bg-transparent" />
    </span>
  );
}

export function ServicePillars() {
  return (
    <section className="nrs-paper border-y border-stone-300 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 border border-stone-400/50 bg-white/60 px-4 py-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-nrs-hero">
            Tre porte · Tre percorsi
          </p>
          <Crosshair />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
          {doors.map((door) => (
            <Link
              key={door.n}
              href={door.href}
              className={`nrs-bracket group flex min-h-[280px] flex-col border bg-white/80 p-6 transition md:min-h-[320px] ${
                door.dominant
                  ? "border-nrs-accent shadow-[0_0_0_1px_rgba(15,118,110,0.25)]"
                  : "border-stone-400/60 hover:border-nrs-accent"
              }`}
            >
              <span className="flex h-9 w-9 items-center justify-center bg-nrs-hero text-sm font-bold text-white">
                {door.n}
              </span>
              <h2 className="mt-6 font-serif text-xl font-bold uppercase tracking-[0.04em] text-nrs-hero md:text-2xl">
                {door.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-700">
                {door.text}
              </p>
              <div className="mt-8 flex items-center justify-between gap-3">
                <Crosshair />
                <span className="inline-flex items-center gap-2 bg-nrs-accent px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition group-hover:bg-nrs-accent-hover">
                  {door.cta}
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-stone-400/40 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-xs font-bold uppercase leading-relaxed tracking-[0.14em] text-nrs-hero">
            Tre percorsi. Una destinazione: locale più silenzioso e confortevole,
            con tempi e responsabilità chiari.
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
            NRS · Acustica HoReCa
          </p>
        </div>
      </div>
    </section>
  );
}
