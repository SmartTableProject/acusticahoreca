import type { Metadata } from "next";
import { DossierShell } from "@/components/dossier/DossierShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Prodotti SoundOff",
  description: `Catalogo pannelli fonoassorbenti SoundOff per HoReCa. Preventivo entro ${site.responseTime}.`,
};

/** Scheda Prodotti — pagina vera (niente redirect) */
export default function ProdottiPage() {
  return <DossierShell initialTab="prodotti" />;
}
