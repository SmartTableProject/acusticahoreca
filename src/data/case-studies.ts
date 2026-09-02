/** Case study sintetici — proof sociale per homepage */
export type CaseStudy = {
  id: string;
  locale: string;
  image: string;
  problema: string;
  soluzione: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "alla-lampara",
    locale: "Alla Lampara",
    image: "/portfolio/alla-lampara.jpg",
    problema: "Sala affollata, conversazioni impossibili la sera.",
    soluzione: "Pannelli a parete e isole a soffitto — estetica curata, meno eco.",
  },
  {
    id: "da-dante",
    locale: "Da Dante",
    image: "/portfolio/da-dante.jpg",
    problema: "Soffitto alto e superfici dure: riverbero fastidioso.",
    soluzione: "Intervento su misura con prodotti SoundOff integrati nell'ambiente.",
  },
  {
    id: "7su7",
    locale: "Ristorante 7su7",
    image: "/portfolio/7su7-5.jpg",
    problema: "Clienti alzavano la voce per farsi sentire al tavolo.",
    soluzione: "Correzione acustica completa — comfort percepibile già dalla prima serata.",
  },
];
