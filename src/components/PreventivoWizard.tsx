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

export type PreventivoQuery = {
  step?: string;
  locale?: string;
  mq?: string;
  mqCustom?: string;
  sup?: string;
};

function buildHref(q: PreventivoQuery): string {
  const p = new URLSearchParams();
  if (q.step) p.set("step", q.step);
  if (q.locale) p.set("locale", q.locale);
  if (q.mq) p.set("mq", q.mq);
  if (q.mqCustom) p.set("mqCustom", q.mqCustom);
  if (q.sup) p.set("sup", q.sup);
  const s = p.toString();
  return s ? `/preventivo?${s}` : "/preventivo";
}

/**
 * Wizard preventivo a LINK REALI (niente setState per avanzare).
 * Ogni "Continua" cambia URL → funziona anche se React è bloccato.
 */
export function PreventivoWizard({ query }: { query: PreventivoQuery }) {
  const step = Math.min(3, Math.max(0, Number(query.step || "0") || 0));
  const locale = query.locale || "ristorante";
  const mqId = query.mq || "m";
  const mqCustom = query.mqCustom || "";
  const superfici = (query.sup || "soffitto")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const mqPreset = mqPresets.find((p) => p.id === mqId);
  const mq =
    mqCustom.trim() !== ""
      ? Number(mqCustom)
      : (mqPreset?.value ?? 60);
  const mqLabel =
    mqCustom.trim() !== ""
      ? `${mq} mq`
      : (mqPreset?.label ?? `${mq} mq`);

  const band = estimateWizardBand({
    mq: Number.isFinite(mq) ? mq : 0,
    superfici,
  });

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

  const base = { locale, mq: mqId, mqCustom: mqCustom || undefined, sup: superfici.join(",") };

  function toggleSup(id: string): string {
    const set = new Set(superfici);
    if (set.has(id)) set.delete(id);
    else set.add(id);
    const arr = [...set];
    return arr.length ? arr.join(",") : "soffitto";
  }

  return (
    <div className="border border-stone-400/50 bg-white">
      <div className="border-b border-stone-200 px-4 py-4 md:px-6">
        <ol className="flex flex-wrap items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-stone-400">
          {steps.map((label, i) => (
            <li key={label} className="flex items-center">
              <span
                className={`px-2.5 py-1 ${
                  i === step
                    ? "bg-nrs-accent text-white"
                    : i < step
                      ? "text-nrs-hero"
                      : "text-stone-400"
                }`}
              >
                {i + 1}. {label}
              </span>
              {i < steps.length - 1 ? (
                <span className="mx-1 hidden h-px w-5 bg-stone-300 sm:block" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="p-4 md:p-6">
        {step === 0 ? (
          <div>
            <h2 className="font-serif text-2xl font-bold text-nrs-hero">
              Che tipo di locale hai?
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Clicca il tipo, poi Continua.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {localeTypes.map((opt) => (
                <a
                  key={opt.id}
                  href={buildHref({ ...base, step: "0", locale: opt.id })}
                  className={`cursor-pointer border px-4 py-4 text-left text-sm font-semibold transition ${
                    locale === opt.id
                      ? "border-nrs-accent bg-teal-50 text-nrs-hero"
                      : "border-stone-200 text-stone-700 hover:border-nrs-accent/40"
                  }`}
                >
                  {opt.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div>
            <h2 className="font-serif text-2xl font-bold text-nrs-hero">
              Quanto è grande la sala?
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Basta un ordine di grandezza.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {mqPresets.map((opt) => (
                <a
                  key={opt.id}
                  href={buildHref({
                    ...base,
                    step: "1",
                    mq: opt.id,
                    mqCustom: undefined,
                  })}
                  className={`cursor-pointer border px-4 py-4 text-left text-sm font-semibold transition ${
                    mqId === opt.id && !mqCustom
                      ? "border-nrs-accent bg-teal-50 text-nrs-hero"
                      : "border-stone-200 text-stone-700 hover:border-nrs-accent/40"
                  }`}
                >
                  {opt.label}
                </a>
              ))}
            </div>
            <form
              action="/preventivo"
              method="get"
              className="mt-6 border border-stone-200 bg-stone-50 p-4"
            >
              <input type="hidden" name="step" value="1" />
              <input type="hidden" name="locale" value={locale} />
              <input type="hidden" name="sup" value={superfici.join(",")} />
              <label className="block text-xs font-bold uppercase tracking-wide text-stone-500">
                Oppure mq precisi
                <input
                  type="number"
                  name="mqCustom"
                  min={10}
                  max={2000}
                  defaultValue={mqCustom}
                  placeholder="Es. 75"
                  className="mt-1.5 w-full border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none focus:border-nrs-accent"
                />
              </label>
              <button
                type="submit"
                className="mt-3 cursor-pointer bg-nrs-hero px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent"
              >
                Usa questi mq
              </button>
            </form>
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <h2 className="font-serif text-2xl font-bold text-nrs-hero">
              Dove vuoi intervenire?
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Clicca per selezionare / deselezionare. Poi Continua.
            </p>
            <div className="mt-6 space-y-3">
              {superficieOptions.map((opt) => {
                const on = superfici.includes(opt.id);
                return (
                  <a
                    key={opt.id}
                    href={buildHref({
                      ...base,
                      step: "2",
                      sup: toggleSup(opt.id),
                    })}
                    className={`flex w-full cursor-pointer items-start justify-between border px-4 py-4 text-left transition ${
                      on
                        ? "border-nrs-accent bg-teal-50"
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
                  </a>
                );
              })}
            </div>

            <div className="mt-6 border border-stone-200 bg-stone-50 p-4">
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
        ) : null}

        {step === 3 ? (
          <div>
            <h2 className="font-serif text-2xl font-bold text-nrs-hero">
              Invia i dati — rispondiamo in 24–48h
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Il messaggio è già compilato con il riepilogo. Aggiungi foto sala
              se puoi.
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
        ) : null}

        {step < 3 ? (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-6">
            {step === 0 ? (
              <span className="text-sm text-stone-400">Passo 1 di 4</span>
            ) : (
              <a
                href={buildHref({ ...base, step: String(step - 1) })}
                className="cursor-pointer text-sm font-semibold text-stone-600 hover:text-nrs-hero"
              >
                ← Indietro
              </a>
            )}
            <a
              href={buildHref({ ...base, step: String(step + 1) })}
              className="cursor-pointer bg-nrs-accent px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
            >
              Continua →
            </a>
          </div>
        ) : (
          <div className="mt-6">
            <a
              href={buildHref({ ...base, step: "2" })}
              className="cursor-pointer text-sm font-semibold text-stone-600 hover:text-nrs-hero"
            >
              ← Modifica intervento
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
