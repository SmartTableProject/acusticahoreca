"use client";

import { useEffect } from "react";
import { trackPortfolioCaseView } from "@/lib/analytics";

export function PortfolioCaseTracker({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  useEffect(() => {
    trackPortfolioCaseView({ slug, locale });
  }, [slug, locale]);

  return null;
}
