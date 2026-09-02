import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.clientMessage}`,
    template: `%s | ${site.name}`,
  },
  description:
    "NRS Soluzioni Acustiche: il tuo locale, finalmente comodo. Pannelli SoundOff per ristoranti e HoReCa. Roma e Centro Italia. Preventivo online.",
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
    <html lang="it" className={`${geist.variable} ${sourceSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
