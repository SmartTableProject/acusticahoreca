import Image from "next/image";
import type { ReactNode } from "react";

type Cta = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
  external?: boolean;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  objectPosition?: string;
  /** sm ≈ 36vh · md ≈ 44vh · lg ≈ 52vh */
  size?: "sm" | "md" | "lg";
  actions?: Cta[];
  children?: ReactNode;
  /** art. / codice tecnico come mockup variante B */
  artCode?: string;
};

const sizeClass = {
  sm: "min-h-[36vh] md:min-h-[40vh]",
  md: "min-h-[42vh] md:min-h-[48vh]",
  lg: "min-h-[50vh] md:min-h-[56vh]",
} as const;

/**
 * Hero interno stile mockup Officina / Catalogo.
 * Solo link nativi (niente onClick) — usabile da Server Component.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  objectPosition = "center center",
  size = "md",
  actions,
  children,
  artCode,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-stone-200 bg-nrs-concrete text-nrs-hero ${sizeClass[size]}`}
    >
      <Image
        src={image}
        alt={imageAlt || title}
        fill
        className="nrs-photo-catalog object-cover"
        style={{ objectPosition }}
        sizes="100vw"
        priority
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:from-white md:via-white/75"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20"
        aria-hidden
      />

      <div
        className={`relative z-[1] mx-auto flex ${sizeClass[size]} max-w-6xl flex-col justify-end px-4 pb-8 pt-8 md:px-6 md:pb-10 md:pt-10`}
      >
        {artCode ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-nrs-accent">
            {artCode}
          </p>
        ) : null}
        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.28em] text-nrs-accent">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-3xl font-bold uppercase leading-[1.05] tracking-[0.02em] text-nrs-hero md:text-5xl">
          {title}
        </h1>
        <div className="mt-5 h-px w-16 bg-nrs-accent" aria-hidden />
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600 md:text-lg">
            {description}
          </p>
        ) : null}
        {actions && actions.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((cta) => {
              const className =
                cta.variant === "ghost"
                  ? "cursor-pointer rounded-none border border-nrs-hero px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-nrs-hero transition hover:border-nrs-accent hover:text-nrs-accent"
                  : "cursor-pointer rounded-none bg-nrs-accent px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-nrs-accent-hover";

              return (
                <a
                  key={cta.href + cta.label}
                  href={cta.href}
                  target={cta.external ? "_blank" : undefined}
                  rel={cta.external ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {cta.label}
                </a>
              );
            })}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
