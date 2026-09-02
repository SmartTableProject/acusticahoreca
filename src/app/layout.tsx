import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    default: `${site.name} | ${site.clientMessage}`,
    template: `%s | ${site.name}`,
  },
  description:
    "NRS Soluzioni Acustiche: Roma e Centro Italia. Sopralluogo in zona, online altrove. Pannelli SoundOff per ristoranti e HoReCa. Onesti sui tempi.",
  keywords: [
    "correzione acustica ristorante Roma",
    "pannelli fonoassorbenti Lazio",
    "acustica horeca centro italia",
    "NRS soluzioni acustiche",
    "SoundOff 2B Resine",
  ],
  openGraph: {
    title: site.name,
    description: site.clientMessage,
    url: site.domain,
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${barlow.variable} ${barlowCondensed.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
