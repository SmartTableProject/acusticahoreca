import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  variant?: "light" | "dark";
  /** Compatto per header stretto; default true */
  compact?: boolean;
  /** NRS impilato verticalmente (sidebar, spazi stretti) */
  layout?: "horizontal" | "vertical";
};

export function Logo({ variant = "light", compact = true, layout = "horizontal" }: Props) {
  const isDark = variant === "dark";
  const fg = isDark ? "text-white" : "text-nrs-hero";

  const subline = (
    <span
      className={`font-semibold uppercase text-nrs-accent ${
        compact
          ? "text-[8px] leading-tight tracking-[0.12em] md:text-[9px] md:tracking-[0.14em]"
          : "text-[10px] tracking-[0.16em]"
      }`}
    >
      {site.logoSubline}
    </span>
  );

  if (layout === "vertical") {
    return (
      <Link href="/" className="group inline-flex items-start gap-2 leading-none">
        <span
          className={`font-logo flex flex-col font-bold leading-[0.82] ${fg} ${
            compact ? "text-[1.15rem] tracking-[0.08em]" : "text-xl tracking-[0.06em]"
          }`}
          aria-hidden
        >
          <span>N</span>
          <span>R</span>
          <span>S</span>
        </span>
        <span className="max-w-[7.5rem] pt-0.5">{subline}</span>
      </Link>
    );
  }

  return (
    <Link href="/" className="group flex flex-col leading-none">
      <span
        className={`font-logo font-bold uppercase ${fg} ${
          compact ? "text-[1.65rem] tracking-[0.06em] md:text-[1.75rem]" : "text-3xl tracking-[0.05em] md:text-4xl"
        }`}
      >
        NRS
      </span>
      <span className="mt-1">{subline}</span>
    </Link>
  );
}
