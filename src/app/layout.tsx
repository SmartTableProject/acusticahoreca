import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { FaqJsonLd, JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    default: `${site.name} | ${site.heroHeadline}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.tagline} ${site.clientSubline} Pannelli SoundOff. Preventivo entro ${site.responseTime}.`,
  keywords: [
    "correzione acustica ristorante Roma",
    "pannelli fonoassorbenti Lazio",
    "acustica horeca centro italia",
    "NRS soluzioni acustiche",
    "SoundOff 2B Resine",
    "acustica ristorante Roma",
  ],
  metadataBase: new URL(site.domain),
  openGraph: {
    title: site.name,
    description: site.clientSubline,
    url: site.domain,
    locale: "it_IT",
    type: "website",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${barlow.variable} ${barlowCondensed.variable} h-full`}>
      <head>
        <JsonLd />
        <FaqJsonLd />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
