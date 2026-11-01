type Props = {
  eyebrow: string;
  title: string;
  backHref?: string;
  backLabel?: string;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
  /** concrete = grigio puntinato · paper = carta tecnica */
  tone?: "concrete" | "paper";
};

/**
 * Cornice unica per ogni pagina “scheda”:
 * barra titolo + area contenuto (scroll interno).
 * Stesso linguaggio di Realizzazioni/Percorsi/Prodotti/Preventivo.
 */
export function DossierPageFrame({
  eyebrow,
  title,
  backHref,
  backLabel = "Indietro",
  rightSlot,
  children,
  tone = "concrete",
}: Props) {
  const bg = tone === "paper" ? "nrs-paper" : "nrs-concrete-bg";

  return (
    <div className={`${bg} flex h-full min-h-0 flex-col overflow-hidden p-3 md:p-5`}>
      <div className="mx-auto flex h-full w-full max-w-6xl min-h-0 flex-col">
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border border-stone-400/50 bg-white/85 px-3 py-2.5 md:px-4">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-nrs-accent md:text-[11px]">
              {eyebrow}
            </p>
            <h1 className="truncate font-serif text-base font-bold uppercase tracking-[0.06em] text-nrs-hero md:text-lg">
              {title}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {rightSlot}
            {backHref ? (
              <a
                href={backHref}
                className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.14em] text-nrs-accent hover:underline md:text-[11px]"
              >
                ← {backLabel}
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-3 min-h-0 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
