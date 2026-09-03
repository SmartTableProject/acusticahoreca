/** Case study narrativi — prova sociale HoReCa */
export type CaseStudy = {
  id: string;
  locale: string;
  city: string;
  image: string;
  problema: string;
  soluzione: string;
  risultato: string;
  prodotti: string[];
  mqHint?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "alla-lampara",
    locale: "Alla Lampara",
    city: "Roma",
    image: "/portfolio/alla-lampara.jpg",
    problema: "Sala piena la sera: conversazioni impossibili, clienti alzavano la voce.",
    soluzione: "Pannelli a parete e isole a soffitto SoundOff, finiture integrate nell'arredo.",
    risultato: "Si parla al tavolo senza gridare. Comfort percepibile dalla prima serata.",
    prodotti: ["isole", "hexagon-kit"],
    mqHint: "Sala media · soffitto + pareti",
  },
  {
    id: "da-dante",
    locale: "Da Dante",
    city: "Roma",
    image: "/portfolio/da-dante.jpg",
    problema: "Soffitto alto e superfici dure: riverbero lungo, atmosfera faticosa.",
    soluzione: "Correzione a soffitto con prodotti SoundOff su misura per il volume della sala.",
    risultato: "Meno eco, più ospitalità — senza snaturare l'estetica del locale.",
    prodotti: ["basfon", "isole"],
    mqHint: "Volume alto · focus soffitto",
  },
  {
    id: "7su7",
    locale: "Ristorante 7su7",
    city: "Roma",
    image: "/portfolio/7su7-5.jpg",
    problema: "Cover alta: il parlato diventava rumore di fondo continuo.",
    soluzione: "Intervento completo su superfici critiche con moduli e isole.",
    risultato: "Serate più comode per ospiti e staff; locale più «rilassato» acusticamente.",
    prodotti: ["hexagon-kit", "wave"],
    mqHint: "Sala affollata · multi-superficie",
  },
  {
    id: "felice",
    locale: "Felice a Testaccio",
    city: "Roma",
    image: "/portfolio/felice-a-testaccio.jpg",
    problema: "Trattoria storica: serve comfort senza pannelli «da ufficio».",
    soluzione: "Soluzioni SoundOff discrete, coordinate con materiali e luci esistenti.",
    risultato: "Acustica migliorata restando fedele all'identità del brand.",
    prodotti: ["isole", "basfon"],
    mqHint: "Identità forte · intervento discreto",
  },
  {
    id: "osteria-sole",
    locale: "Osteria del Sole",
    city: "Roma",
    image: "/portfolio/osteria-del-sole.jpg",
    problema: "Ambiente raccolto ma rumoroso nei picchi di servizio.",
    soluzione: "Posizionamento mirato dei pannelli dove il riverbero colpiva di più.",
    risultato: "Conversazione più chiara ai tavoli, meno fatica per lo staff.",
    prodotti: ["wave", "hexagon-kit"],
    mqHint: "Sala raccolta · precisione di posa",
  },
];
