import { PathLanding } from "@/components/dossier/PathLanding";
import { seoH1 } from "@/data/seo-copy";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Chiavi in Mano Acustica Roma",
  description: `Sopralluogo, posa e collaudo acustico in ${site.surveyArea}. 44+ locali reali, SoundOff certificati, preventivo in 24-48h.`,
  path: "/chiavi-in-mano",
});

/** Porta 03 — chiavi in mano Roma */
export default function ChiaviInManoPage() {
  return (
    <PathLanding
      eyebrow="Percorso 03 · Consigliato"
      title="Chiavi in mano Roma"
      seoTitle={seoH1.chiaviInMano}
      lead={`Installazione completa in ${site.surveyArea}: veniamo in sede, progettiamo, posiamo e collaudiamo. Un solo interlocutore fino al locale silenzioso.`}
      image="/portfolio/alla-lampara.jpg"
      imagePos="center 42%"
      tag={site.surveyArea}
      steps={[
        {
          n: "01",
          title: "Sopralluogo",
          text: "Rilievo in sala: altezze, impianti, vincoli estetici e obiettivi di comfort.",
        },
        {
          n: "02",
          title: "Progetto e posa",
          text: "Scelta dei pannelli SoundOff, finiture e montaggio a regola d'arte.",
        },
        {
          n: "03",
          title: "Collaudo",
          text: "Verifica finale con te: comfort acustico e aspetto del locale.",
        },
      ]}
      primaryHref="/contatti?tipo=sopralluogo-roma"
      primaryLabel="Richiedi sopralluogo"
      whatsappLabel="WhatsApp Roma"
    />
  );
}
