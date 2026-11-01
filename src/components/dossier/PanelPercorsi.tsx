"use client";

import { SeoH1 } from "@/components/SeoH1";
import { seoH1 } from "@/data/seo-copy";
import { site } from "@/data/site";

type Door = {
  n: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  dominant: boolean;
  tag: string;
  image: string;
  imagePos: string;
  highlight: string;
};

const doors: Door[] = [
  {
    n: "01",
    title: "Acquisto online",
    text: "Scegli la soluzione SoundOff e procedi al preventivo rapido. Senza sopralluogo.",
    cta: "Acquista ora",
    href: "/preventivo",
    dominant: false,
    tag: "Subito · 24–48h",
    image: "/prodotti/hexagon-kit.jpg",
    imagePos: "center 40%",
    highlight: "Prodotto chiaro, ordine online",
  },
  {
    n: "02",
    title: "Progetto a distanza",
    text: "Foto e planimetria: un tecnico ti guida da remoto su mq e layout.",
    cta: "Inizia il progetto",
    href: "/progetto-remoto",
    dominant: false,
    tag: "Da remoto",
    image: "/portfolio/hotel-nazionale.jpg",
    imagePos: "center 32%",
    highlight: "Studio su foto e misure",
  },
  {
    n: "03",
    title: "Chiavi in mano Roma",
    text: `Installazione completa in ${site.surveyArea}: sopralluogo, posa e collaudo.`,
    cta: "Richiedi sopralluogo",
    href: "/chiavi-in-mano",
    dominant: true,
    tag: "Roma e provincia",
    image: "/portfolio/alla-lampara.jpg",
    imagePos: "center 42%",
    highlight: "Dal sopralluogo al collaudo",
  },
];

function Crosshair({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block h-3 w-3 ${className}`} aria-hidden>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-nrs-accent" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-nrs-accent" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-nrs-accent" />
    </span>
  );
}

/** Scheda Percorsi — tre porte fotografiche, navigazione invitante */
export function PanelPercorsi() {
  return (
    <div className="nrs-paper flex h-full min-h-0 flex-col overflow-hidden p-3 md:p-5">
      <SeoH1>{seoH1.percorsi}</SeoH1>
      <div className="mx-auto flex h-full w-full max-w-6xl min-h-0 flex-col">
        {/* Intestazione dossier */}
        <div className="flex shrink-0 items-center justify-between gap-3 border border-stone-400/50 bg-white/80 px-3 py-2 md:px-4 md:py-2.5">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-nrs-accent md:text-[11px]">
              Come arriviamo al risultato
            </p>
            <p className="mt-0.5 truncate text-[11px] font-bold uppercase tracking-[0.18em] text-nrs-hero md:text-[12px]">
              Tre porte · Tre percorsi
            </p>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500">
              Scegli la tua via
            </span>
            <Crosshair />
          </div>
        </div>

        {/* Porte */}
        <div className="mt-3 grid min-h-0 flex-1 auto-rows-fr gap-3 overflow-y-auto md:mt-4 md:grid-cols-3 md:gap-4 md:overflow-hidden">
          {doors.map((door) => (
            <a
              key={door.n}
              href={door.href}
              className={`nrs-door group relative flex h-full min-h-[300px] cursor-pointer flex-col overflow-hidden border bg-white transition duration-300 md:min-h-0 ${
                door.dominant
                  ? "border-nrs-accent shadow-[0_0_0_1px_rgba(15,118,110,0.28)]"
                  : "border-stone-400/55 hover:border-nrs-accent"
              }`}
            >
              {/* Foto dominante */}
              <div className="relative min-h-[140px] flex-[1.35] overflow-hidden bg-stone-300">
                <span
                  className="nrs-photo-bw absolute inset-0 block scale-100 bg-cover bg-center transition duration-700 group-hover:scale-[1.06]"
                  style={{
                    backgroundImage: `url(${door.image})`,
                    backgroundPosition: door.imagePos,
                  }}
                  role="img"
                  aria-label={door.title}
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nrs-hero/75 via-nrs-hero/15 to-transparent opacity-80 transition group-hover:opacity-90" />

                {/* Numero grande */}
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center bg-nrs-hero text-[12px] font-bold tracking-wide text-white md:h-10 md:w-10 md:text-sm">
                  {door.n}
                </span>

                {/* Tag */}
                <span className="absolute right-3 top-3 bg-white/95 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-nrs-hero backdrop-blur-sm">
                  {door.tag}
                </span>

                {/* Highlight sulla foto */}
                <span className="absolute bottom-3 left-3 right-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white drop-shadow md:text-[12px]">
                  {door.highlight}
                </span>

                {door.dominant ? (
                  <span className="absolute bottom-3 right-3 bg-nrs-accent px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                    Consigliato
                  </span>
                ) : null}
              </div>

              {/* Testo + CTA */}
              <div className="relative flex shrink-0 flex-col border-t border-stone-200 bg-white/95 p-4 md:p-5">
                <span className="nrs-bracket-mark pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-nrs-accent opacity-70" />

                <h2 className="font-serif text-lg font-bold uppercase tracking-[0.04em] text-nrs-hero md:text-xl">
                  {door.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">
                  {door.text}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <Crosshair className="opacity-60 transition group-hover:opacity-100" />
                  <span className="inline-flex items-center gap-2 bg-nrs-accent px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition duration-300 group-hover:translate-x-0.5 group-hover:bg-nrs-accent-hover">
                    {door.cta}
                    <span
                      aria-hidden
                      className="transition duration-300 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Destinazione comune */}
        <div className="mt-3 flex shrink-0 flex-col items-start justify-between gap-2 border border-stone-400/40 bg-white/70 px-3 py-2.5 sm:flex-row sm:items-center md:mt-4 md:px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-nrs-hero md:text-[11px]">
            Destinazione unica:{" "}
            <span className="text-nrs-accent">locale silenzioso e confortevole</span>
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-stone-500">
            <span>01 Online</span>
            <span className="text-nrs-accent">·</span>
            <span>02 Remoto</span>
            <span className="text-nrs-accent">·</span>
            <span>03 Roma</span>
          </div>
        </div>
      </div>
    </div>
  );
}
