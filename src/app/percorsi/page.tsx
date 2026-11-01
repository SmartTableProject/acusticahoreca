import type { Metadata } from "next";
import { DossierShell } from "@/components/dossier/DossierShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Percorsi — come interveniamo",
  description: `Tre percorsi: acquisto online, progetto a distanza, chiavi in mano ${site.surveyArea}.`,
};

/** Scheda Percorsi — pagina vera (niente redirect) */
export default function PercorsiPage() {
  return <DossierShell initialTab="percorsi" />;
}
