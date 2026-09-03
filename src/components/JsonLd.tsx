import { site } from "@/data/site";
import { portfolioStats } from "@/data/portfolio";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.tagline,
    url: site.domain,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.facebookUrl, site.instagramUrl],
    areaServed: site.marketArea,
    founder: { "@type": "Person", name: site.titolare },
    image: `${site.domain}/portfolio/alla-lampara.jpg`,
    priceRange: "€€",
    knowsAbout: [
      "Correzione acustica ristoranti",
      "Pannelli fonoassorbenti HoReCa",
      "SoundOff",
    ],
    aggregateRating: undefined,
    numberOfEmployees: 1,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Fate sopralluoghi fuori Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `I sopralluoghi con presenza diretta sono in ${site.surveyArea}. Per il resto d'Italia: consulenza online, prodotti standard e partner installazione.`,
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo per un preventivo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Rispondiamo entro ${site.responseTime} per prodotti standard e consulenza a distanza.`,
        },
      },
      {
        "@type": "Question",
        name: "Quanti locali avete trattato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Oltre ${portfolioStats.projects} locali documentati in portfolio con ${portfolioStats.photos} foto reali.`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
    />
  );
}
