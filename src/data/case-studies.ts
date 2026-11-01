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
  /** Titolo sezione foto in evidenza */
  featuredTitle?: string;
  featuredLead?: string;
  /** Foto in evidenza (es. pezzi custom) con didascalia */
  featuredShots?: { src: string; caption: string; alt: string }[];
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
      "Comfort acustico immediato: in sala si parla senza alzare la voce e i pannelli risultano parte dell’arredo, non un intervento “tecnico” a vista.",
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
    id: "cuccurucu",
    locale: "Cuccurucù",
    city: "Roma",
    image: "/portfolio/cuccurucu.jpg",
    problema:
      "Antico casale sul Tevere (Parco Capoprati, tra Ponte Milvio e Prati): travi a vista, volume alto e ampie vetrate. Bella sala storica, ma il riverbero rendeva faticose le serate piene.",
    soluzione:
      "Pannelli fonoassorbenti inseriti tra le travi del soffitto, lasciando intatta la struttura lignea del casale. Al centro: elemento a doghe in legno con illuminazione integrata, per assorbire e ordinare il volume senza «chiudere» la sala.",
    risultato:
      "Comfort acustico in un locale storico: si parla ai tavoli senza alzare la voce, restando fedeli all’atmosfera del casale e alla cantina in evidenza.",
    prodotti: ["basfon", "isole"],
    mqHint: "Casale storico · Capoprati / Ponte Milvio · soffitto a travi",
    highlights: [
      "locale storico",
      "casale sul Tevere",
      "pannelli tra le travi",
    ],
    featuredTitle: "Locale storico — soffitto fonoassorbente",
    featuredLead:
      "Pannelli integrati nelle travi del casale Capoprati: correzione acustica senza snaturare il luogo.",
    featuredShots: [
      {
        src: "/portfolio/cuccurucu.jpg",
        caption: "In evidenza — soffitto fonoassorbente e cantina del casale",
        alt: "Correzione acustica a soffitto nel ristorante storico Cuccurucù a Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/cuccurucu-5-plus.jpg",
        caption: "Sala storica — pannelli integrati nelle travi a vista",
        alt: "Pannelli fonoassorbenti tra le travi a Cuccurucù Roma - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "galbi",
    locale: "Galbi",
    city: "Roma",
    image: "/portfolio/galbi-4.jpg",
    problema:
      "Locale dal design forte, con superfici e volume che facevano lavorare il riverbero contro il comfort: bella sala, conversazioni faticose.",
    soluzione:
      "Al centro dell’intervento: quadri fonoassorbenti creati su misura sul tema del locale — pezzi unici, non pannelli “da catalogo”. Accanto, correzione a soffitto con motivo geometrico bianco/nero, integrata con struttura lignea e luci a sospensione.",
    risultato:
      "Comfort acustico e identità visiva nello stesso gesto: i quadri lavorano sul riverbero e restano parte dell’arredo Galbi.",
    prodotti: ["basfon"],
    mqHint: "Quadri fonoassorbenti custom + soffitto geometrico",
    highlights: [
      "quadri fonoassorbenti",
      "su misura · tema locale",
      "soffitto geometrico",
    ],
    featuredTitle: "Quadri fonoassorbenti su misura",
    featuredLead:
      "Creati sul tema del locale: assorbono il riverbero e restano pezzi d’arredo.",
    featuredShots: [
      {
        src: "/portfolio/galbi-3.jpg",
        caption: "In laboratorio — quadro fonoassorbente su misura",
        alt: "Quadro fonoassorbente su misura per Galbi in fase di realizzazione - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/galbi-4.jpg",
        caption: "In sala — quadro fonoassorbente sul tema del locale",
        alt: "Quadro fonoassorbente a tema installato presso Galbi a Roma - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "alla-lampara",
    locale: "Alla Lampara",
    city: "Roma",
    image: "/portfolio/alla-lampara.jpg",
    problema:
      "Nelle serate piene la sala diventava un unico rumore di fondo: al tavolo bisognava alzare la voce per farsi capire, con fatica per ospiti e servizio.",
    soluzione:
      "Correzione su pareti e soffitto con moduli Hexagon e isole SoundOff, scelte e finite per restare coerenti con l’arredo esistente — non «pannelli da cantiere».",
    risultato:
      "Si torna a parlare al tavolo senza gridare. Il comfort si sente dalla prima serata di lavoro, senza snaturare il locale.",
    prodotti: ["isole", "hexagon-kit"],
    mqHint: "Sala media · soffitto + pareti",
    highlights: ["pareti + soffitto", "Hexagon + isole", "Roma"],
    featuredTitle: "Intervento in sala",
    featuredLead:
      "Pareti e soffitto trattati insieme: meno riverbero, stesso carattere del locale.",
    featuredShots: [
      {
        src: "/portfolio/alla-lampara.jpg",
        caption: "Alla Lampara — correzione su superfici critiche",
        alt: "Pannelli fonoassorbenti presso Alla Lampara a Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/la-lampara.jpg",
        caption: "Dettaglio sala — finiture integrate nell’arredo",
        alt: "Intervento acustico Alla Lampara Roma - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "da-dante",
    locale: "Da Dante",
    city: "Roma",
    image: "/portfolio/da-dante.jpg",
    problema:
      "Soffitto alto e superfici dure: il riverbero restava lungo e rendeva la sala faticosa, soprattutto nei picchi di servizio.",
    soluzione:
      "Focus a soffitto con pannelli Basfon e isole SoundOff dimensionati sul volume reale della sala, senza chiudere l’altezza architettonica.",
    risultato:
      "Meno eco, conversazioni più chiare, ospitalità più leggibile — l’estetica del locale resta quella di prima.",
    prodotti: ["basfon", "isole"],
    mqHint: "Volume alto · focus soffitto",
    highlights: ["soffitto alto", "Basfon + isole", "Roma"],
    featuredTitle: "Correzione a soffitto",
    featuredLead:
      "Il volume alto si governa dal soffitto: assorbimento dove il riverbero nasce.",
    featuredShots: [
      {
        src: "/portfolio/da-dante.jpg",
        caption: "Da Dante — intervento a soffitto",
        alt: "Pannelli fonoassorbenti a soffitto Da Dante Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/da-dante-2.jpg",
        caption: "Sala — comfort senza snaturare l’ambiente",
        alt: "Correzione acustica Da Dante Roma - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "7su7",
    locale: "Ristorante 7su7",
    city: "Roma",
    image: "/portfolio/7su7-5.jpg",
    problema:
      "Con cover alta il parlato diventava rumore continuo: difficile distinguere le conversazioni e tenere un servizio sereno.",
    soluzione:
      "Intervento multi-superficie: moduli Hexagon e Wave SoundOff sulle zone critiche, dove il riverbero colpiva di più ospiti e staff.",
    risultato:
      "Serate più sostenibili per chi lavora in sala e più chiare per chi siede al tavolo: il locale resta vivo, non «affogato» dal rumore.",
    prodotti: ["hexagon-kit", "wave"],
    mqHint: "Sala affollata · multi-superficie",
    highlights: ["cover alta", "Hexagon + Wave", "multi-superficie"],
    featuredTitle: "Sala ad alta densità",
    featuredLead:
      "Quando la cover sale, serve assorbimento mirato — non un trattamento generico.",
    featuredShots: [
      {
        src: "/portfolio/7su7-5.jpg",
        caption: "7su7 — sala in lavoro",
        alt: "Correzione acustica Ristorante 7su7 Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/7su7.jpg",
        caption: "Dettaglio intervento — moduli su superfici critiche",
        alt: "Pannelli fonoassorbenti 7su7 Roma - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "felice",
    locale: "Felice a Testaccio",
    city: "Roma",
    image: "/portfolio/felice-a-testaccio.jpg",
    problema:
      "Trattoria storica: serviva ridurre il riverbero senza introdurre pannelli «da ufficio» che rompessero l’identità del locale.",
    soluzione:
      "Soluzioni SoundOff discrete (isole e Basfon) coordinate con materiali, luci e carattere esistente — intervento leggibile ma non invasivo.",
    risultato:
      "Comfort acustico migliorato restando fedele al brand: gli ospiti sentono la differenza, non «vedono il cantiere».",
    prodotti: ["isole", "basfon"],
    mqHint: "Identità forte · intervento discreto",
    highlights: ["locale storico", "intervento discreto", "Testaccio"],
    featuredTitle: "Identità del locale",
    featuredLead:
      "In una trattoria storica il vincolo estetico è parte del brief tecnico.",
    featuredShots: [
      {
        src: "/portfolio/felice-a-testaccio.jpg",
        caption: "Felice a Testaccio — sala",
        alt: "Correzione acustica Felice a Testaccio Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/felice-a-testaccio-2.jpg",
        caption: "Dettaglio — finiture discrete",
        alt: "Pannelli fonoassorbenti Felice a Testaccio - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "osteria-sole",
    locale: "Osteria del Sole",
    city: "Roma",
    image: "/portfolio/osteria-del-sole.jpg",
    problema:
      "Ambiente raccolto ma rumoroso nei picchi: poche superfici, tanto riverbero dove le persone si concentrano.",
    soluzione:
      "Posizionamento mirato di Wave e Hexagon SoundOff sulle zone dove il riverbero colpiva conversazione e servizio — precisione di posa, non quantità a caso.",
    risultato:
      "Conversazioni più chiare ai tavoli e meno fatica per lo staff nelle ore piene.",
    prodotti: ["wave", "hexagon-kit"],
    mqHint: "Sala raccolta · precisione di posa",
    highlights: ["posa mirata", "Wave + Hexagon", "Roma"],
    featuredTitle: "Precisione di posa",
    featuredLead:
      "In sale raccolte conta dove metti i pannelli, non solo quanti ne metti.",
    featuredShots: [
      {
        src: "/portfolio/osteria-del-sole.jpg",
        caption: "Osteria del Sole — sala",
        alt: "Correzione acustica Osteria del Sole Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/osteria-del-sole-2.jpg",
        caption: "Dettaglio intervento",
        alt: "Pannelli fonoassorbenti Osteria del Sole Roma - NRS Acustica HoReCa",
      },
    ],
  },
];
