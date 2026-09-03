"use client";

import { useMemo, useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import {
  estimateWizardBand,
  priceDisclaimer,
  standardProducts,
} from "@/data/products";
import {
  localeTypes,
  mqPresets,
  superficieOptions,
} from "@/data/preventivo";

const steps = ["Locale", "Superficie", "Dove intervenire", "Invio"] as const;

export function PreventivoWizard() {
  const [step, setStep] = useState(0);
  const [locale, setLocale] = useState("ristorante");
  const [mqId, setMqId] = useState("m");
  const [mqCustom, setMqCustom] = useState("");
  const [superfici, setSuperfici] = useState<string[]>(["soffitto"]);

  const mqPreset = mqPresets.find((p) => p.id === mqId);
  const mq =
    mqCustom.trim() !== ""
      ? Number(mqCustom)
      : (mqPreset?.value ?? 60);
  const mqLabel =
    mqCustom.trim() !== ""
      ? `${mq} mq`
      : (mqPreset?.label ?? `${mq} mq`);

  const band = useMemo(
    () => estimateWizardBand({ mq: Number.isFinite(mq) ? mq : 0, superfici }),
    [mq, superfici],
  );

  function toggleSuperficie(id: string) {
    setSuperfici((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  const summaryLines = [
    `Tipo locale: ${localeTypes.find((l) => l.id === locale)?.label ?? locale}`,
    `Sala: ${mqLabel}`,
    `Intervento: ${
      superfici.length
        ? superfici
            .map((s) => superficieOptions.find((o) => o.id === s)?.label ?? s)
            .join(", ")
        : "da definire"
    }`,
    "",
    band.label,
    "",
    "Richiesta generata dal wizard preventivo sul sito.",
  ];

  const canNext =
    step === 0
      ? Boolean(locale)
      : step === 1
        ? mq > 0
        : step === 2
          ? superfici.length > 0
          : true;

  return (
    <div className="border border-stone-200 bg-white">
      <div className="border-b border-stone-200 bg-stone-50 px-5 py-4 md:px-8">
        <ol className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wide text-nrs-grey">
          {steps.map((label, i) => (
            <li
              key={label}
              className={`rounded-sm px-2.5 py-1 ${
                i === step
                  ? "bg-nrs-accent text-white"
                  : i < step
                    ? "bg-nrs-hero text-white"
                    : "bg-white text-stone-500"
              }`}
            >
              {i + 1}. {label}
            </li>
          ))}
        </ol>
      </div>

      <div className="p-5 md:p-8">
        {step === 0 && (
          <div>
            <h2 className="font-serif text-2xl font-bold text-nrs-hero">
              Che tipo di locale hai?
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Così inquadriamo subito il contesto HoReCa.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {localeTypes.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setLocale(opt.id)}
                  className={`border px-4 py-4 text-left text-sm font-semibold transition ${
                    locale === opt.id
                      ? "border-nrs-accent bg-orange-50 text-nrs-hero"
                      : "border-stone-200 text-stone-700 hover:border-nrs-accent/40"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="font-serif text-2xl font-bold text-nrs-hero">
              Quanto è grande la sala?
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Basta un ordine di grandezza: non serve il millimetro.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {mqPresets.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setMqId(opt.id);
                    setMqCustom("");
                  }}
                  className={`border px-4 py-4 text-left text-sm font-semibold transition ${
                    mqId === opt.id && !mqCustom
                      ? "border-nrs-accent bg-orange-50 text-nrs-hero"
                      : "border-stone-200 text-stone-700 hover:border-nrs-accent/40"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <label className="mt-6 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
              Oppure mq precisi
              <input
                type="number"
                min={10}
                max={2000}
                value={mqCustom}
                onChange={(e) => setMqCustom(e.target.value)}
                placeholder="Es. 75"
                className="mt-1.5 w-full border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 outline-none focus:border-nrs-accent"
              />
            </label>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-serif text-2xl font-bold text-nrs-hero">
              Dove vuoi intervenire?
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Puoi selezionare più superfici. Ti consigliamo in preventivo.
            </p>
            <div className="mt-6 space-y-3">
              {superficieOptions.map((opt) => {
                const on = superfici.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleSuperficie(opt.id)}
                    className={`flex w-full items-start justify-between border px-4 py-4 text-left transition ${
                      on
                        ? "border-nrs-accent bg-orange-50"
                        : "border-stone-200 hover:border-nrs-accent/40"
                    }`}
                  >
                    <span>
                      <span className="block text-sm font-semibold text-nrs-hero">
                        {opt.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-stone-500">
                        {opt.hint}
                      </span>
                    </span>
                    <span
                      className={`mt-0.5 flex h-5 w-5 items-center justify-center border text-xs ${
                        on
                          ? "border-nrs-accent bg-nrs-accent text-white"
                          : "border-stone-300"
                      }`}
                    >
                      {on ? "✓" : ""}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 border border-stone-200 bg-stone-50 p-4">
              <p className="text-sm font-semibold text-nrs-hero">{band.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-stone-500">
                {band.note}
              </p>
              <ul className="mt-4 space-y-1 text-xs text-stone-600">
                {standardProducts.map((p) => (
                  <li key={p.id}>
                    <span className="font-semibold text-nrs-hero">{p.name}:</span>{" "}
                    {p.priceBand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="font-serif text-2xl font-bold text-nrs-hero">
              Invia i dati — rispondiamo in 24–48h
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Il messaggio è già compilato con il riepilogo. Aggiungi foto sala
              se puoi: velocizza il preventivo.
            </p>
            <div className="mt-4 border-l-2 border-nrs-accent bg-stone-50 px-4 py-3 text-sm text-stone-700">
              <p className="font-semibold text-nrs-hero">{band.label}</p>
              <p className="mt-1 text-xs text-stone-500">{priceDisclaimer}</p>
            </div>
            <div className="mt-6">
              <ContactForm
                defaultTipo="prodotto-online"
                defaultLocale={locale}
                defaultMessaggio={summaryLines.join("\n")}
                showUpload
              />
            </div>
          </div>
        )}

        {step < 3 && (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-6">
            <button
              type="button"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="text-sm font-semibold text-stone-600 hover:text-nrs-hero disabled:opacity-30"
            >
              Indietro
            </button>
            <button
              type="button"
              disabled={!canNext}
              onClick={() => setStep((s) => Math.min(3, s + 1))}
              className="bg-nrs-accent px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover disabled:opacity-40"
            >
              Continua
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
