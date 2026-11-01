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
  /** Fatti chiave da mostrare come badge (solo dati reali) */
  highlights?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "taverna-latina",
    locale: "Taverna Latina",
    city: "Roma",
    image: "/portfolio/taverna-latina.jpg",
    problema:
      "Rivestimenti duri e ampie vetrate: il riverbero in sala era molto alto e le conversazioni faticose.",
    soluzione:
      "Pannelli fonoassorbenti in resina melamminica ad alta capacità, con circa il 70% di copertura del soffitto. Realizzata anche una “tastiera di pianoforte” a soffitto fonoassorbente. Sala da circa 100 coperti; posa completata in 12 ore.",
    risultato:
      "Comfort acustico immediato: l’ambiente è diventato estremamente confortevole e, al tempo stesso, più curato grazie ai pannelli. Risultato eccellente.",
    prodotti: ["basfon"],
    mqHint: "Sala ~100 coperti · soffitto ~70%",
    highlights: ["~100 coperti", "70% soffitto", "12 ore di posa"],
  },
  {
    id: "remo",
    locale: "Pizzeria Remo a Testaccio",
    city: "Roma",
    image: "/portfolio/remo.jpg",
    problema:
      "Riverbero molto alto sia nella cantinetta sia nella sala principale.",
    soluzione:
      "Sulla volta a botte: 1.200 “mattoni” in resina melamminica verniciati e lavorati per assomigliare ai mattoni veri (intervento di circa 20 ore). La sala interna è stata bonificata con pannelli in melammina ad alta capacità.",
    risultato:
      "Comfort acustico immediato. I mattoni fonoassorbenti hanno abbellito la sala senza togliere l’effetto accogliente della volta a botte.",
    prodotti: ["basfon"],
    mqHint: "Volta a botte + sala interna · ~20 ore",
    highlights: ["1.200 mattoni fonoassorbenti", "volta a botte", "20 ore"],
  },
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
    risultato: "Serate più silenziose e confortevoli per ospiti e staff; locale più «rilassato» acusticamente.",
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
