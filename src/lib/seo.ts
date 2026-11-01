import type { Metadata } from "next";
import { site } from "@/data/site";
import { portfolioStats } from "@/data/portfolio";

const DESC_PROOF = `${portfolioStats.projects}+ locali reali, prodotti certificati SoundOff e preventivo in 24-48h`;

type PageSeoInput = {
  /** Keyword primaria (va nel title, max ~60 con brand) */
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

/** Metadata centralizzato: title, description, canonical, OG, Twitter, geo Roma */
export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = "/portfolio/alla-lampara.jpg",
  noIndex = false,
}: PageSeoInput): Metadata {
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const url = `${site.domain}${cleanPath}`;
  const fullTitle = title.includes(site.name) ? title : title;
  const desc = description.includes("24")
    ? description.slice(0, 155)
    : `${description} ${DESC_PROOF}.`.slice(0, 155);

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      type: "website",
      locale: "it_IT",
      siteName: site.name,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    other: {
      "geo.region": "IT-RM",
      "geo.placename": "Roma",
      "geo.position": "41.9028;12.4964",
      ICBM: "41.9028, 12.4964",
    },
  };
}

export const seoProof = DESC_PROOF;
