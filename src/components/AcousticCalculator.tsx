"use client";

import { useMemo, useState } from "react";
import { contactTierLinks, site } from "@/data/site";
import {
  trackLeadCalculatorCompleted,
  trackLeadWhatsappClick,
} from "@/lib/analytics";
import { readUtm } from "@/lib/utm";

type AltezzaKey = "standard" | "alto" | "volte";
type CriticitaKey = "normale" | "media" | "alta";

const ALTEZZE: {
  key: AltezzaKey;
  label: string;
  multi: number;
  wa: string;
}[] = [
  { key: "standard", label: "Standard (< 3,0 m)", multi: 1.0, wa: "standard" },
  { key: "alto", label: "Alto (3,0–4,2 m)", multi: 1.25, wa: "alto" },
  {
    key: "volte",
    label: "Volte / doppio volume (> 4,2 m)",
    multi: 1.45,
    wa: "volte",
  },
];

const CRITICITA: {
  key: CriticitaKey;
  label: string;
  factor: number;
  wa: string;
}[] = [
  {
    key: "normale",
    label: "Normale (muratura, pochi vetri)",
    factor: 0.22,
    wa: "normale",
  },
  {
    key: "media",
    label: "Media (gres/marmo + pareti lisce)",
    factor: 0.28,
    wa: "media",
  },
  {
    key: "alta",
    label: "Alta (vetrate / veranda / volte)",
    factor: 0.35,
    wa: "alta",
  },
];

function estimate(mq: number, multi: number, factor: number) {
  const consigliati = Math.round(mq * multi * factor);
  const rangeMinMq = Math.max(6, Math.round(consigliati * 0.85));
  const rangeMaxMq = Math.round(consigliati * 1.15);
  const stimaIsole = Math.max(4, Math.round(consigliati / 1.44));
  return { rangeMinMq, rangeMaxMq, stimaIsole, consigliati };
}

/** Self-test formula (eseguito a mount in console solo se ?selftest=1) */
export function selfTestAcousticFormula(): boolean {
  const a = estimate(80, 1.0, 0.28);
  const ok =
    a.consigliati === 22 &&
    a.rangeMinMq === 19 &&
    a.rangeMaxMq === 25 &&
    a.stimaIsole === 15;
  return ok;
}

type Props = {
  compact?: boolean;
};

export function AcousticCalculator({ compact = false }: Props) {
  const [mq, setMq] = useState(80);
  const [altezza, setAltezza] = useState<AltezzaKey>("standard");
  const [criticita, setCriticita] = useState<CriticitaKey>("media");

  const altezzaCfg = ALTEZZE.find((a) => a.key === altezza)!;
  const critCfg = CRITICITA.find((c) => c.key === criticita)!;
  const result = useMemo(
    () => estimate(mq, altezzaCfg.multi, critCfg.factor),
    [mq, altezzaCfg.multi, critCfg.factor],
  );

  function buildWhatsAppUrl() {
    const utm = readUtm();
    const utmTail = Object.entries(utm)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}=${v}`)
      .join(" ");
    const text = `Salve, ho usato il calcolatore su acusticahoreca.it: sala di ${mq}mq, soffitto ${altezzaCfg.wa}, superfici ${critCfg.wa} (stima ${result.rangeMinMq}-${result.rangeMaxMq}mq fonoassorbenti). Vorrei un preventivo.${utmTail ? ` [${utmTail}]` : ""}`;
    return `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;
  }

  function onWhatsApp() {
    trackLeadCalculatorCompleted({
      mq_sala: mq,
      altezza: altezzaCfg.wa,
      criticita: critCfg.wa,
      mq_stimati: `${result.rangeMinMq}-${result.rangeMaxMq}`,
    });
    trackLeadWhatsappClick({ source_section: "acoustic_calculator" });
  }

  function preventivoHref() {
    const q = new URLSearchParams({
      step: "1",
      mq: mq <= 40 ? "s" : mq <= 80 ? "m" : mq <= 150 ? "l" : "xl",
      mq_precisi: String(mq),
      from: "calcolatore",
      stima: `${result.rangeMinMq}-${result.rangeMaxMq}`,
    });
    return `${contactTierLinks.preventivo}?${q.toString()}#wizard`;
  }

  return (
    <section
      id="calcolatore"
      className={`border border-stone-300 bg-white ${compact ? "p-4" : "p-5 md:p-6"}`}
      aria-labelledby="calc-title"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-nrs-accent">
        Lead magnet · stima orientativa
      </p>
      <h2
        id="calc-title"
        className="mt-1 font-serif text-xl font-bold uppercase tracking-[0.04em] text-nrs-hero md:text-2xl"
      >
        Calcolatore rapido riverbero e mq SoundOff
      </h2>
      <p className="mt-1 text-xs text-stone-500">
        Ordine di grandezza — non sostituisce sopralluogo o foto+planimetria.
        Preventivo esatto in {site.responseTime}.
      </p>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="calc-mq"
            className="text-[11px] font-bold uppercase tracking-wide text-nrs-grey"
          >
            Superficie sala: {mq} mq
          </label>
          <input
            id="calc-mq"
            type="range"
            min={25}
            max={400}
            step={5}
            value={mq}
            onChange={(e) => setMq(Number(e.target.value))}
            className="mt-2 w-full accent-nrs-accent"
          />
          <div className="mt-1 flex justify-between text-[10px] text-stone-400">
            <span>25 mq</span>
            <span>400 mq</span>
          </div>
        </div>

        <div className="space-y-3">
          <fieldset>
            <legend className="text-[11px] font-bold uppercase tracking-wide text-nrs-grey">
              Altezza soffitto
            </legend>
            <div className="mt-2 flex flex-col gap-1.5">
              {ALTEZZE.map((a) => (
                <button
                  key={a.key}
                  type="button"
                  onClick={() => setAltezza(a.key)}
                  className={`cursor-pointer border px-3 py-2 text-left text-sm transition ${
                    altezza === a.key
                      ? "border-nrs-accent bg-nrs-accent/5 text-nrs-hero"
                      : "border-stone-300 text-stone-600 hover:border-nrs-accent/50"
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className="text-[11px] font-bold uppercase tracking-wide text-nrs-grey">
          Criticità superfici
        </legend>
        <div className="mt-2 grid gap-1.5 sm:grid-cols-3">
          {CRITICITA.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setCriticita(c.key)}
              className={`cursor-pointer border px-3 py-2 text-left text-xs transition sm:text-sm ${
                criticita === c.key
                  ? "border-nrs-accent bg-nrs-accent/5 text-nrs-hero"
                  : "border-stone-300 text-stone-600 hover:border-nrs-accent/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 border border-nrs-accent/30 bg-stone-50 px-4 py-4">
        <p className="text-sm font-semibold text-nrs-hero">
          Superficie fonoassorbente stimata:{" "}
          <span className="text-nrs-accent">
            {result.rangeMinMq} – {result.rangeMaxMq} mq
          </span>
        </p>
        <p className="mt-1 text-xs text-stone-600">
          oppure circa{" "}
          <strong>{result.stimaIsole}</strong> isole sospese / moduli SoundOff
        </p>
        <ul className="mt-3 grid gap-1 text-xs text-stone-600 sm:grid-cols-3">
          <li>· Acquisto online kit</li>
          <li>· Progetto a distanza</li>
          <li>· Chiavi in mano Roma</li>
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsApp}
          className="inline-flex cursor-pointer items-center bg-[#25D366] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white hover:brightness-95"
        >
          Preventivo esatto su WhatsApp (24-48h)
        </a>
        <a
          href={preventivoHref()}
          onClick={() =>
            trackLeadCalculatorCompleted({
              mq_sala: mq,
              altezza: altezzaCfg.wa,
              criticita: critCfg.wa,
              mq_stimati: `${result.rangeMinMq}-${result.rangeMaxMq}`,
            })
          }
          className="inline-flex cursor-pointer items-center border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-nrs-hero hover:border-nrs-accent hover:text-nrs-accent"
        >
          Invia al preventivo guidato →
        </a>
      </div>
    </section>
  );
}
