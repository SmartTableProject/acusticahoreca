import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { site } from "@/data/site";

export type PathStep = {
  n: string;
  title: string;
  text: string;
};

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imagePos?: string;
  tag: string;
  steps: PathStep[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  whatsappLabel?: string;
};

/** Landing percorso dentro cornice scheda */
export function PathLanding({
  eyebrow,
  title,
  lead,
  image,
  imagePos = "center 35%",
  tag,
  steps,
  primaryHref,
  primaryLabel,
  secondaryHref = "/percorsi",
  secondaryLabel = "Tutte le porte",
  whatsappLabel = "WhatsApp rapido",
}: Props) {
  return (
    <DossierPageFrame
      tone="paper"
      eyebrow={eyebrow}
      title={title}
      backHref={secondaryHref}
      backLabel={secondaryLabel}
      rightSlot={
        <span className="bg-nrs-accent px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
          {tag}
        </span>
      }
    >
      <div className="grid min-h-full gap-3 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
        <div className="relative min-h-[220px] overflow-hidden border border-stone-400/50 bg-stone-300 lg:min-h-0">
          <div
            className="nrs-photo-bw absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-[1.03]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: imagePos,
            }}
            role="img"
            aria-label={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nrs-hero/80 via-nrs-hero/20 to-transparent" />
          <p className="absolute bottom-4 left-4 right-4 text-sm font-bold uppercase tracking-[0.12em] text-white md:text-base">
            {lead}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="nrs-door flex gap-3 border border-stone-400/50 bg-white/90 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-nrs-hero text-[11px] font-bold text-white">
                {step.n}
              </span>
              <div>
                <h2 className="font-serif text-base font-bold uppercase tracking-[0.04em] text-nrs-hero">
                  {step.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-auto flex flex-wrap gap-2 border border-stone-400/40 bg-white/80 p-4">
            <a
              href={primaryHref}
              className="cursor-pointer bg-nrs-accent px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
            >
              {primaryLabel} →
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-hero hover:border-nrs-accent hover:text-nrs-accent"
            >
              {whatsappLabel}
            </a>
            <a
              href="/preventivo"
              className="cursor-pointer border border-stone-300 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-stone-600 hover:border-nrs-accent hover:text-nrs-accent"
            >
              Wizard
            </a>
          </div>
        </div>
      </div>
    </DossierPageFrame>
  );
}
