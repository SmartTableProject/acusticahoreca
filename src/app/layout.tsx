import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { FaqJsonLd, JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { UtmCapture } from "@/components/UtmCapture";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { site } from "@/data/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `Correzione Acustica Ristoranti Roma | ${site.name}`,
    template: `%s | NRS Acustica HoReCa Roma`,
  },
  description: `${site.tagline} 44+ locali reali, prodotti certificati SoundOff e preventivo in 24-48h.`,
  keywords: [
    "correzione acustica ristorante Roma",
    "pannelli fonoassorbenti Lazio",
    "acustica horeca centro italia",
    "NRS soluzioni acustiche",
    "SoundOff 2B Resine",
    "acustica ristorante Roma",
  ],
  metadataBase: new URL(site.domain),
  alternates: { canonical: site.domain },
  openGraph: {
    title: `Correzione Acustica Ristoranti Roma | ${site.name}`,
    description: `44+ locali reali, prodotti certificati SoundOff e preventivo in 24-48h.`,
    url: site.domain,
    locale: "it_IT",
    type: "website",
    siteName: site.name,
    images: [{ url: "/portfolio/alla-lampara.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Correzione Acustica Ristoranti Roma | ${site.name}`,
    description: `44+ locali reali, prodotti certificati SoundOff e preventivo in 24-48h.`,
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "IT-RM",
    "geo.placename": "Roma",
    "geo.position": "41.9028;12.4964",
    ICBM: "41.9028, 12.4964",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${barlow.variable} ${barlowCondensed.variable} h-full`}>
      <head>
        <JsonLd />
        <FaqJsonLd />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SiteChrome>{children}</SiteChrome>
        <WhatsAppFab />
        <UtmCapture />
        <CookieBanner />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
