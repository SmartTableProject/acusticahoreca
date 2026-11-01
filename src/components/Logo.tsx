import Image from "next/image";
import { site } from "@/data/site";

type Props = {
  /** light = header chiaro (NRS scuro); dark = footer scuro (NRS chiaro) */
  variant?: "light" | "dark";
  compact?: boolean;
  layout?: "horizontal" | "vertical";
};

/** Logo ufficiale sempre su PNG trasparente (v2 senza placca grigia) */
export const LOGO_SRC = "/brand/nrs-logo-v2.png";
export const LOGO_SRC_DARK = "/brand/nrs-logo-v2-dark.png";

/**
 * Logo ufficiale NRS Acustica HoReCa — sfondo sempre trasparente.
 * Non modificare file o aspetto del logo.
 */
export function Logo({ variant = "light", compact = true }: Props) {
  const src = variant === "dark" ? LOGO_SRC_DARK : LOGO_SRC;
  const w = compact ? 148 : 220;

  return (
    <a
      href="/"
      className="group inline-flex shrink-0 cursor-pointer items-center bg-transparent"
      aria-label={`${site.name} — home`}
    >
      <Image
        src={src}
        alt="NRS Acustica HoReCa"
        width={w}
        height={Math.round(w * (178 / 344))}
        className="pointer-events-none bg-transparent object-contain object-left"
        style={{ width: compact ? 148 : 220, height: "auto" }}
        sizes={compact ? "168px" : "220px"}
        priority
      />
    </a>
  );
}
