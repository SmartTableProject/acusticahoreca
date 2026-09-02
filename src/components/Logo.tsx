import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  variant?: "light" | "dark";
};

export function Logo({ variant = "light" }: Props) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className="group flex flex-col leading-none">
      <span
        className={`font-logo text-[1.75rem] font-semibold tracking-tight md:text-[1.85rem] ${
          isDark ? "text-white" : "text-nrs-hero"
        }`}
      >
        NRS
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-nrs-accent">
        {site.logoSubline}
      </span>
    </Link>
  );
}
