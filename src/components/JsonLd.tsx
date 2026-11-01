import { portfolioStats } from "@/data/portfolio";
import { retailBands } from "@/data/listino-pubblico";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

/**
 * Schema.org @graph — senza aggregateRating inventato (policy Google).
 * Review solo dalle testimonianze già pubblicate sul sito.
 */
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": [
          "LocalBusiness",
          "HomeAndConstructionBusiness",
          "ProfessionalService",
        ],
        "@id": `${site.domain}/#organization`,
        name: "NRS Soluzioni Acustiche — Acustica HoReCa",
        alternateName:
          "NRS Noise Reduction System - Partner SoundOff 2B Resine",
        legalName: site.legalName,
        url: site.domain,
        telephone: site.phoneTel,
        email: site.emailPreventivi,
        vatID: `IT${site.piva}`,
        priceRange: "€€",
        image: `${site.domain}/portfolio/alla-lampara.jpg`,
        sameAs: [site.facebookUrl, site.instagramUrl],
        areaServed: [
          { "@type": "City", name: "Roma" },
          { "@type": "AdministrativeArea", name: "Lazio" },
          { "@type": "Country", name: "Italia" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Roma",
          addressRegion: "RM",
          addressCountry: "IT",
        },
        founder: { "@type": "Person", name: site.titolare },
        knowsAbout: [
          "Correzione acustica ristoranti",
          "Pannelli fonoassorbenti HoReCa",
          "SoundOff 2B Resine",
        ],
        // Niente AggregateRating / stelle: solo note testuali dai locali documentati
        review: reviews.map((r) => ({
          "@type": "Review",
          author: {
            "@type": "Organization",
            name: `${r.author} — ${r.role}`,
          },
          reviewBody: r.text,
        })),
      },
      {
        "@type": "Product",
        "@id": `${site.domain}/prodotti/hexagon-kit#product`,
        name: "Hexagon Kit — Pannelli Fonoassorbenti Esagonali SoundOff",
        description:
          "Moduli esagonali fonoassorbenti in poliestere con tessuto personalizzabile per pareti sala ristorante. Montaggio fai-da-te con guida inclusa.",
        brand: { "@type": "Brand", name: site.supplier },
        image: `${site.domain}/prodotti/hexagon-kit.jpg`,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: String(retailBands.hexagonKit.eurPerKit),
          offerCount: "1",
          availability: "https://schema.org/InStock",
          url: `${site.domain}/prodotti/hexagon-kit`,
        },
      },
      {
        "@type": "Product",
        "@id": `${site.domain}/prodotti/basfon#product`,
        name: "Basfon — Pannelli Fonoassorbenti in Melammina Ignifughi",
        description:
          "Pannelli a soffitto ignifughi in resina melamminica, certificati per locali pubblici HoReCa.",
        brand: { "@type": "Brand", name: site.supplier },
        image: `${site.domain}/prodotti/basfon-3.jpg`,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: String(retailBands.basfon.eurPerMqLow),
          highPrice: String(retailBands.basfon.eurPerMqHigh),
          offerCount: "1",
          availability: "https://schema.org/InStock",
          url: `${site.domain}/prodotti/basfon`,
        },
      },
      {
        "@type": "Product",
        "@id": `${site.domain}/prodotti/wave#product`,
        name: "Wave High Performance — Pannelli Acustici ad Alto Rendimento",
        description:
          "Pannelli fonoassorbenti con profilo ad onda ad alto rendimento acustico per sale ristorante con forte riverbero e poca superficie utile.",
        brand: { "@type": "Brand", name: site.supplier },
        image: `${site.domain}/prodotti/wave.jpg`,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: String(retailBands.wave.eurPerPieceLow),
          highPrice: String(retailBands.wave.eurPerPieceHigh),
          offerCount: "1",
          availability: "https://schema.org/InStock",
          url: `${site.domain}/prodotti/wave`,
        },
      },
      {
        "@type": "Product",
        "@id": `${site.domain}/prodotti/isole#product`,
        name: "Isole Acustiche Sospese a Soffitto Design HoReCa",
        description:
          "Pannelli fonoassorbenti flottanti a soffitto per ristoranti e locali. Impatto acustico immediato ed estetica minimale.",
        brand: { "@type": "Brand", name: site.supplier },
        image: `${site.domain}/prodotti/isole.jpg`,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: String(retailBands.isole.eurPerIslandLow),
          highPrice: String(retailBands.isole.eurPerIslandHigh),
          offerCount: "1",
          availability: "https://schema.org/InStock",
          url: `${site.domain}/prodotti/isole`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.domain}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Quanto costa eliminare il rimbombo in un ristorante?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `I costi variano in base al volume della sala e alla formula scelta: i kit fai-da-te Hexagon partono da circa ${retailBands.hexagonKit.eurPerKit} €/kit, i pannelli ignifughi Basfon in melammina da ${retailBands.basfon.eurPerMqLow}–${retailBands.basfon.eurPerMqHigh} €/mq e le isole acustiche sospese da ${retailBands.isole.eurPerIslandLow}–${retailBands.isole.eurPerIslandHigh} €/isola. Forniamo un preventivo preciso in ${site.responseTime}.`,
            },
          },
          {
            "@type": "Question",
            name: "Fate interventi senza far chiudere il ristorante?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Sì, pianifichiamo le installazioni chiavi in mano su ${site.surveyArea} negli orari o giorni di chiusura del locale, senza polvere e senza fermo sala.`,
            },
          },
          {
            "@type": "Question",
            name: "I pannelli fonoassorbenti sono ignifughi e certificati per locali pubblici?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Tutti i materiali ${site.supplier} utilizzati sono certificati, ignifughi e pienamente conformi alle normative vigenti per ristoranti, pizzerie, bar e hotel.`,
            },
          },
          {
            "@type": "Question",
            name: "Come funziona la consulenza a distanza fuori Roma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Basta inviare foto della sala e una planimetria con le misure. In ${site.responseTime} elaboriamo un report tecnico con i metri quadri di materiale fonoassorbente consigliati, il layout di posizionamento e la fornitura diretta o tramite partner installatori. Oltre ${portfolioStats.projects} locali già documentati.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/** @deprecated FAQ è già nel grafo globale — tenuto per compatibilità import */
export function FaqJsonLd() {
  return null;
}
