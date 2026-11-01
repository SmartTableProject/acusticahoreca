import { PathLanding } from "@/components/dossier/PathLanding";
import { seoH1 } from "@/data/seo-copy";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Progetto Acustico a Distanza",
  description: `Consulenza acustica da remoto con foto e planimetria. 44+ locali reali, SoundOff certificati, preventivo in 24-48h.`,
  path: "/progetto-remoto",
});

/** Porta 02 — progetto a distanza */
export default function ProgettoRemotoPage() {
  return (
    <PathLanding
      eyebrow="Percorso 02 · Da remoto"
      title="Progetto a distanza"
      seoTitle={seoH1.progettoRemoto}
      lead="Ci mandi foto e planimetria: un tecnico valuta mq, soffitto e layout. Ti indichiamo prodotti e quantità senza venire in sede."
      image="/portfolio/hotel-nazionale.jpg"
      imagePos="center 30%"
      tag="Tutta Italia"
      steps={[
        {
          n: "01",
          title: "Invii materiale",
          text: "Foto della sala, misure approssimative e dove senti più eco o rumore.",
        },
        {
          n: "02",
          title: "Studio tecnico",
          text: "Analizziamo superfici e tipologici SoundOff adatti al tuo locale.",
        },
        {
          n: "03",
          title: "Preventivo chiaro",
          text: `Ricevi proposta e fasce entro ${site.responseTime}. Poi ordini o chiedi posa partner.`,
        },
      ]}
      primaryHref="/contatti?tipo=consulenza-remota"
      primaryLabel="Inizia il progetto"
      whatsappLabel="WhatsApp con foto"
    />
  );
}
