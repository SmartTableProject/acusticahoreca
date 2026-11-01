import type { Metadata } from "next";
import { PanelPreventivo } from "@/components/dossier/PanelPreventivo";
import type { PreventivoQuery } from "@/components/PreventivoWizard";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Preventivo acustica HoReCa",
  description: `Richiedi preventivo pannelli SoundOff. Risposta entro ${site.responseTime}.`,
};

type PageProps = {
  searchParams: Promise<PreventivoQuery>;
};

/** Scheda Preventivo — wizard guidato da URL (?step=) */
export default async function PreventivoPage({ searchParams }: PageProps) {
  const query = await searchParams;
  return <PanelPreventivo query={query} />;
}
