import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Correzione acustica HoReCa`,
    template: `%s | ${site.name}`,
  },
  description:
    "NRS Soluzioni Acustiche: pannelli SoundOff per ristoranti e HoReCa. Roma e Centro Italia. Acquisto online, consulenza a distanza, sopralluogo Roma.",
  keywords: [
    "correzione acustica ristorante Roma",
    "pannelli fonoassorbenti Lazio",
    "acustica horeca centro italia",
    "NRS soluzioni acustiche",
    "SoundOff 2B Resine",
  ],
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.domain,
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${geist.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
