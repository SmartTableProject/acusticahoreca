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
    featuredTitle: "Tastiera a soffitto",
    featuredLead:
      "Pannelli a contrasto chiaro/scuro come tasti di pianoforte: assorbono e diventano segno del locale.",
    featuredShots: [
      {
        src: "/portfolio/taverna-latina.jpg",
        caption: "Taverna Latina — soffitto e insegna",
        alt: "Pannelli fonoassorbenti a soffitto Taverna Latina Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/taverna-latina-2.jpg",
        caption: "Dettaglio copertura soffitto",
        alt: "Dettaglio soffitto fonoassorbente Taverna Latina - NRS Acustica HoReCa",
      },
    ],
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
    featuredTitle: "1.200 mattoni sulla volta",
    featuredLead:
      "La volta a botte non è stata “nascosta”: i mattoni fonoassorbenti la raccontano ancora meglio.",
    featuredShots: [
      {
        src: "/portfolio/remo.jpg",
        caption: "Remo — volta a botte con mattoni fonoassorbenti",
        alt: "Volta a botte con mattoni fonoassorbenti Pizzeria Remo Testaccio - NRS",
      },
      {
        src: "/portfolio/remo-3.jpg",
        caption: "Dettaglio sala / cantinetta",
        alt: "Correzione acustica sala Pizzeria Remo Roma - NRS Acustica HoReCa",
      },
    ],
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
  {
    id: "la-botte",
    locale: "La Botte",
    city: "Roma",
    image: "/portfolio/la-botte-11.jpg",
    problema:
      "Soffitto liscio, mattoni a vista e zone servizio: superfici dure che facevano lavorare il riverbero contro il comfort — bella sala, conversazioni faticose nelle ore piene.",
    soluzione:
      "Pannelli fonoassorbenti su misura in palette terra: moduli a soffitto e pezzi a L che scendono in parete, coordinati con LED lineari e arredo esistente. Non pannelli «da cantiere»: elementi di design che assorbono dove serve.",
    risultato:
      "Comfort acustico e carattere del locale nello stesso gesto: si parla al tavolo senza alzare la voce, con un soffitto che resta parte dell’arredo.",
    prodotti: ["basfon"],
    mqHint: "Pannelli su misura · soffitto + passaggio a parete",
    highlights: [
      "pannelli a L su misura",
      "palette terra",
      "LED integrati",
    ],
    featuredTitle: "Pannelli su misura — soffitto e parete",
    featuredLead:
      "Moduli in toni terra che assorbono il riverbero e disegnano lo spazio: dalla copertura a soffitto ai pezzi a L verso la cantinetta.",
    featuredShots: [
      {
        src: "/portfolio/la-botte-11.jpg",
        caption: "In evidenza — pannelli a L soffitto–parete in palette terra",
        alt: "Pannelli fonoassorbenti a L su misura presso La Botte a Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/la-botte.jpg",
        caption: "Dettaglio — moduli a soffitto con LED e mattoni a vista",
        alt: "Soffitto fonoassorbente con illuminazione integrata La Botte Roma - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "pizzeria-ostiense",
    locale: "Pizzeria Ostiense",
    city: "Roma",
    image: "/portfolio/pizzeria-ostiense-2.jpg",
    problema:
      "Soffitto industriale con travi a vista e lampade: superfici dure, sala ampia, riverbero tipico delle pizzerie affollate.",
    soluzione:
      "Griglia di pannelli colorati a soffitto (rosso, verde, blu, giallo) tra le travi: correzione acustica e carattere del locale nello stesso gesto.",
    risultato:
      "Soffitto leggibile e meno “cassa di risonanza”: i colori restano il segno distintivo, i pannelli lavorano sul comfort.",
    prodotti: ["basfon", "isole"],
    mqHint: "Soffitto a griglia colorata · sala pizzeria",
    highlights: ["pannelli colorati", "travi industriali", "Ostiense"],
    featuredTitle: "Colore che assorbe",
    featuredLead:
      "Non pannelli anonimi: una scacchiera cromatica che entra nel progetto della sala.",
    featuredShots: [
      {
        src: "/portfolio/pizzeria-ostiense-2.jpg",
        caption: "Griglia colorata a soffitto tra le travi",
        alt: "Pannelli fonoassorbenti colorati Pizzeria Ostiense Roma - NRS",
      },
      {
        src: "/portfolio/pizzeria-ostiense-4.jpg",
        caption: "Vista d’insieme sala",
        alt: "Sala Pizzeria Ostiense con correzione acustica - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "strozzaquintino",
    locale: "Strozzaquintino",
    city: "Roma",
    image: "/portfolio/strozzaquintino-2.jpg",
    problema:
      "Trattoria con mattoni, vetrate e tovaglie: bella sala, ma il riverbero alzava le voci ai tavoli.",
    soluzione:
      "Pannelli rettangolari chiari a soffitto, posizionati tra i riquadri strutturali e le luci — copertura ampia senza nascondere lampadari e arredo.",
    risultato:
      "Conversazioni più chiare in un ambiente che resta “trattoria romana”, non sala tecnica.",
    prodotti: ["basfon"],
    mqHint: "Soffitto a pannelli · sala trattoria",
    highlights: ["pannelli a soffitto", "mattoni a vista", "San Lorenzo"],
    featuredTitle: "Comfort nella trattoria",
    featuredLead:
      "Pannelli chiari sul soffitto bianco: si vedono poco, si sentono subito.",
    featuredShots: [
      {
        src: "/portfolio/strozzaquintino-2.jpg",
        caption: "Sala con pannelli a soffitto e mattoni",
        alt: "Pannelli fonoassorbenti Strozzaquintino Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/strozzaquintino-3.jpg",
        caption: "Dettaglio soffitto",
        alt: "Dettaglio soffitto fonoassorbente Strozzaquintino - NRS",
      },
    ],
  },
  {
    id: "l-accattone",
    locale: "L’Accattone",
    city: "Roma",
    image: "/portfolio/laccattone-2.jpg",
    problema:
      "Volta in mattoni: architettura forte, ma curva e superfici dure che moltiplicano il riverbero.",
    soluzione:
      "Isole bianche sospese lungo la volta, illuminate: assorbono senza cancellare i mattoni.",
    risultato:
      "La volta resta protagonista; sotto si parla con meno fatica.",
    prodotti: ["isole"],
    mqHint: "Isole su volta in mattoni",
    highlights: ["isole sospese", "volta in mattoni", "Centro"],
    featuredTitle: "Isole sulla volta",
    featuredLead:
      "Tre isole chiare sulla curva in mattoni: correzione leggera, effetto scenico.",
    featuredShots: [
      {
        src: "/portfolio/laccattone-2.jpg",
        caption: "Isole bianche sulla volta",
        alt: "Isole fonoassorbenti su volta in mattoni L Accattone Roma - NRS",
      },
      {
        src: "/portfolio/laccattone-3.jpg",
        caption: "Dettaglio posa",
        alt: "Dettaglio isole acustiche L Accattone Roma - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "dal-vignola",
    locale: "Dal Vignola",
    city: "Roma",
    image: "/portfolio/dal-vignola-2.jpg",
    problema:
      "Travi in legno, foto alle pareti, fan e clima: soffitto “pieno” di impianti e riverbero.",
    soluzione:
      "Pannelli a moduli sfalsati in toni terra tra le travi, integrati con cassette clima e bocchette.",
    risultato:
      "Soffitto più quieto senza perdere il carattere rustico del locale.",
    prodotti: ["basfon"],
    mqHint: "Moduli tra travi · toni terra",
    highlights: ["moduli sfalsati", "travi legno", "toni terra"],
    featuredTitle: "Tra travi e clima",
    featuredLead:
      "I pannelli entrano nello spazio tra le travi: lavorano dove serve, restano parte dell’arredo.",
    featuredShots: [
      {
        src: "/portfolio/dal-vignola-2.jpg",
        caption: "Pannelli tra travi e climatizzatore",
        alt: "Pannelli fonoassorbenti Dal Vignola Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/dal-vignola-3.jpg",
        caption: "Vista soffitto",
        alt: "Soffitto fonoassorbente Dal Vignola Roma - NRS",
      },
    ],
  },
  {
    id: "la-forbice",
    locale: "La Forbice",
    city: "Roma",
    image: "/portfolio/la-forbice-2.jpg",
    problema:
      "Sala con archi in mattoni e soffitto liscio: il suono rimbalzava su superfici dure.",
    soluzione:
      "Pannelli a strati (base + riquadro) e fascia centrale scura, coordinati con i faretti a soffitto.",
    risultato:
      "Soffitto ordinato e più assorbente; gli archi restano in evidenza.",
    prodotti: ["basfon"],
    mqHint: "Pannelli a strati · archi in mattoni",
    highlights: ["pannelli a strati", "archi in mattoni", "Roma"],
    featuredTitle: "Soffitto a strati",
    featuredLead:
      "Moduli chiari e fascia scura: ritmo visivo e lavoro acustico insieme.",
    featuredShots: [
      {
        src: "/portfolio/la-forbice-2.jpg",
        caption: "Pannelli a strati e archi",
        alt: "Pannelli fonoassorbenti La Forbice Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/la-forbice-3.jpg",
        caption: "Dettaglio soffitto",
        alt: "Dettaglio soffitto acustico La Forbice Roma - NRS",
      },
    ],
  },
  {
    id: "buono",
    locale: "Buono",
    city: "Roma",
    image: "/portfolio/buono-2.jpg",
    problema:
      "Sala luminosa con lavagna e bancone: vetrate e superfici lisce che facevano lavorare l’eco.",
    soluzione:
      "Fila di cilindri/baffle a soffitto affiancati a lampade a sospensione colorate — assorbimento e luce nello stesso asse.",
    risultato:
      "Ambiente più quieto senza spegnere l’identità “bistro” del locale.",
    prodotti: ["isole", "basfon"],
    mqHint: "Baffle cilindrici · sala bistro",
    highlights: ["baffle a soffitto", "luci integrate", "bistro"],
    featuredTitle: "Baffle e luce",
    featuredLead:
      "Elementi a soffitto che assorbono e dialogano con le sospensioni colorate.",
    featuredShots: [
      {
        src: "/portfolio/buono-2.jpg",
        caption: "Baffle cilindrici e lampade",
        alt: "Baffle fonoassorbenti locale Buono Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/buono-3.jpg",
        caption: "Vista sala",
        alt: "Sala Buono con correzione acustica Roma - NRS",
      },
    ],
  },
  {
    id: "mad-cow",
    locale: "Mad Cow",
    city: "Roma",
    image: "/portfolio/mad-cow-2.jpg",
    problema:
      "Soffitto con tubazioni a vista, mattoni e arredo “industrial”: tanto hard surface, molto riverbero.",
    soluzione:
      "Pannelli chiari a griglia intorno a tubi e clima, rispettando l’estetica del locale.",
    risultato:
      "Comfort al tavolo senza nascondere tubi, moto e pezzi di carattere.",
    prodotti: ["basfon"],
    mqHint: "Pannelli tra impianti a vista",
    highlights: ["griglia a soffitto", "impianti a vista", "industrial"],
    featuredTitle: "Acustica industrial",
    featuredLead:
      "I pannelli convivono con tubi e cassette: correzione vera, look del locale intatto.",
    featuredShots: [
      {
        src: "/portfolio/mad-cow-2.jpg",
        caption: "Pannelli, tubazioni e clima",
        alt: "Pannelli fonoassorbenti Mad Cow Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/mad-cow-3.jpg",
        caption: "Dettaglio soffitto",
        alt: "Soffitto acustico Mad Cow Roma - NRS",
      },
    ],
  },
  {
    id: "le-palme",
    locale: "Le Palme",
    city: "Roma",
    image: "/portfolio/le-palme-2.jpg",
    problema:
      "Sala ampia con doghe e lampade a sospensione: volume alto, conversazioni faticose nelle ore piene.",
    soluzione:
      "Baffle verticali a soffitto in tono legno, tra travi e griglie aria, allineati alle luci.",
    risultato:
      "Più assorbimento senza spezzare lo stile caldo del locale.",
    prodotti: ["isole", "basfon"],
    mqHint: "Baffle verticali · tono legno",
    highlights: ["baffle verticali", "tono legno", "luci a sospensione"],
    featuredTitle: "Baffle a ritmo",
    featuredLead:
      "Serie di baffle che assorbono e disegnano il soffitto insieme alle lampade.",
    featuredShots: [
      {
        src: "/portfolio/le-palme-2.jpg",
        caption: "Baffle e lampade a sospensione",
        alt: "Baffle fonoassorbenti Le Palme Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/le-palme-3.jpg",
        caption: "Vista sala",
        alt: "Sala Le Palme correzione acustica Roma - NRS",
      },
    ],
  },
  {
    id: "caino-e-abele",
    locale: "Caino e Abele",
    city: "Roma",
    image: "/portfolio/caino-e-abele-2.jpg",
    problema:
      "Bar con soffitto curvo, vetri e metallo: superfici riflettenti e affollamento tipico del bancone.",
    soluzione:
      "Dischi fonoassorbenti di diametri diversi a soffitto, anche a mezzo disco sulle curve, tra i faretti.",
    risultato:
      "Zona bar più gestibile acusticamente, senza togliere lampadari e carattere.",
    prodotti: ["isole", "basfon"],
    mqHint: "Dischi a soffitto · zona bar",
    highlights: ["dischi a soffitto", "zone curve", "bar"],
    featuredTitle: "Dischi sul soffitto",
    featuredLead:
      "Cerchi di diametri diversi che seguono le curve del soffitto e assorbono il chiasso del bancone.",
    featuredShots: [
      {
        src: "/portfolio/caino-e-abele-2.jpg",
        caption: "Dischi acustici sopra il bancone",
        alt: "Dischi fonoassorbenti Caino e Abele Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/caino-e-abele-3.jpg",
        caption: "Dettaglio soffitto",
        alt: "Soffitto acustico Caino e Abele Roma - NRS",
      },
    ],
  },
  {
    id: "burro-e-menta",
    locale: "Burro e Menta",
    city: "Roma",
    image: "/portfolio/burro-e-menta-2.jpg",
    problema:
      "Soffitto a cassoni e superfici chiare: bella luce, ma poco assorbimento nelle ore di servizio.",
    soluzione:
      "Fasce di listelli/pannelli grigi nei cassoni, affiancate a faretti e sospensioni.",
    risultato:
      "Sala più soft al tavolo, look minimal invariato.",
    prodotti: ["basfon"],
    mqHint: "Listelli nei cassoni a soffitto",
    highlights: ["listelli a soffitto", "cassoni", "minimal"],
    featuredTitle: "Listelli nei cassoni",
    featuredLead:
      "Intervento discreto nei riquadri del soffitto: si nota poco, lavora tanto.",
    featuredShots: [
      {
        src: "/portfolio/burro-e-menta-2.jpg",
        caption: "Listelli acustici a soffitto",
        alt: "Pannelli fonoassorbenti Burro e Menta Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/burro-e-menta-3.jpg",
        caption: "Dettaglio posa",
        alt: "Dettaglio soffitto Burro e Menta Roma - NRS",
      },
    ],
  },
  {
    id: "tana-del-diavolo",
    locale: "Tana del Diavolo",
    city: "Roma",
    image: "/portfolio/tana-del-diavolo.jpg",
    problema:
      "Locale storico con lampade rosse e canalizzazioni: atmosfera forte, riverbero alto.",
    soluzione:
      "Pannelli a soffitto chiari a griglia, integrati con duct e luci a sospensione.",
    risultato:
      "Più comfort senza spegnere l’atmosfera “diavolo” del locale.",
    prodotti: ["basfon", "isole"],
    mqHint: "Griglia a soffitto · luci a sospensione",
    highlights: ["griglia a soffitto", "locale storico", "Roma"],
    featuredTitle: "Soffitto sotto le lampade rosse",
    featuredLead:
      "I pannelli restano sullo sfondo; le lampade e l’insegna restano protagoniste.",
    featuredShots: [
      {
        src: "/portfolio/tana-del-diavolo.jpg",
        caption: "Pannelli, duct e lampade rosse",
        alt: "Pannelli fonoassorbenti Tana del Diavolo Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/tana-del-diavolo-6.jpg",
        caption: "Altra vista intervento",
        alt: "Correzione acustica Tana del Diavolo Roma - NRS",
      },
    ],
  },
  {
    id: "stella-gemella",
    locale: "Stella Gemella",
    city: "Roma",
    image: "/portfolio/stella-gemella-2.jpg",
    problema:
      "Sala ampia con pilastri e soffitto a cassoni: volume grande, eco lunga nelle ore piene.",
    soluzione:
      "Pannelli chiari inseriti nei cassoni e nei riquadri, coordinati con faretti e bocchette.",
    risultato:
      "Sala più quieta al servizio, soffitto ancora ordinato e luminoso.",
    prodotti: ["basfon"],
    mqHint: "Pannelli nei cassoni · sala ampia",
    highlights: ["cassoni a soffitto", "sala ampia", "Roma"],
    featuredTitle: "Copertura nei cassoni",
    featuredLead:
      "I pannelli seguono la geometria del soffitto: correzione senza rifare l’arredo.",
    featuredShots: [
      {
        src: "/portfolio/stella-gemella-2.jpg",
        caption: "Sala e soffitto trattati",
        alt: "Pannelli fonoassorbenti Stella Gemella Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/stella-gemella-3.jpg",
        caption: "Dettaglio soffitto",
        alt: "Soffitto acustico Stella Gemella Roma - NRS",
      },
    ],
  },
  {
    id: "dish",
    locale: "Dish",
    city: "Roma",
    image: "/portfolio/dish-2.jpg",
    problema:
      "Locale contemporaneo con superfici lisce: il suono restava “vivo” troppo a lungo.",
    soluzione:
      "Pannelli e moduli a soffitto SoundOff selezionati sul layout della sala (vedi galleria).",
    risultato:
      "Ambiente più confortevole al tavolo, finitura allineata allo stile del locale.",
    prodotti: ["basfon", "isole"],
    mqHint: "Moduli a soffitto · locale contemporaneo",
    highlights: ["moduli a soffitto", "EUR", "contemporaneo"],
    featuredTitle: "Intervento documentato",
    featuredLead: "Foto reali di posa e finitura presso Dish.",
    featuredShots: [
      {
        src: "/portfolio/dish-2.jpg",
        caption: "Vista intervento",
        alt: "Correzione acustica Dish Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/dish-3.jpg",
        caption: "Dettaglio",
        alt: "Pannelli fonoassorbenti Dish Roma - NRS",
      },
    ],
  },
  {
    id: "da-michele",
    locale: "Da Michele",
    city: "Roma",
    image: "/portfolio/da-michele-2.jpg",
    problema:
      "Pizzeria/trattoria con superfici dure tipiche: chiasso di servizio e conversazioni in competizione.",
    soluzione:
      "Pannelli a soffitto SoundOff posati sul layout esistente (galleria fotografica completa).",
    risultato:
      "Sala più gestibile nelle ore piene, senza snaturare l’ambiente.",
    prodotti: ["basfon"],
    mqHint: "Pannelli a soffitto · pizzeria",
    highlights: ["soffitto trattato", "pizzeria", "Roma"],
    featuredTitle: "Posa documentata",
    featuredLead: "Intervento fotografato sul campo presso Da Michele.",
    featuredShots: [
      {
        src: "/portfolio/da-michele-2.jpg",
        caption: "Vista soffitto",
        alt: "Pannelli fonoassorbenti Da Michele Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/da-michele-3.jpg",
        caption: "Dettaglio",
        alt: "Dettaglio correzione acustica Da Michele Roma - NRS",
      },
    ],
  },
  {
    id: "l-altra-osteria",
    locale: "L’Altra Osteria",
    city: "Roma",
    image: "/portfolio/laltra-osteria-2.jpg",
    problema:
      "Osteria raccolta con superfici riflettenti: riverbero concentrato dove siedono gli ospiti.",
    soluzione:
      "Pannelli mirati a soffitto, integrati con luci esistenti.",
    risultato:
      "Conversazioni più chiare ai tavoli, atmosfera da osteria preservata.",
    prodotti: ["basfon"],
    mqHint: "Posa mirata · osteria",
    highlights: ["posa mirata", "osteria", "Roma"],
    featuredTitle: "Intervento in osteria",
    featuredLead: "Pochi pezzi giusti, dove il riverbero colpiva di più.",
    featuredShots: [
      {
        src: "/portfolio/laltra-osteria-2.jpg",
        caption: "Vista intervento",
        alt: "Correzione acustica L Altra Osteria Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/laltra-osteria-3.jpg",
        caption: "Dettaglio",
        alt: "Pannelli fonoassorbenti L Altra Osteria Roma - NRS",
      },
    ],
  },
  {
    id: "hotel-nazionale",
    locale: "Hotel Nazionale",
    city: "Roma",
    image: "/portfolio/hotel-nazionale.jpg",
    problema:
      "Spazio hospitality con esigenze di quiete: sale e percorsi dove l’eco disturba ospiti e servizio.",
    soluzione:
      "Correzione acustica SoundOff su superfici critiche (documentata in galleria).",
    risultato:
      "Ambiente più confortevole in chiave hotel, senza pesare sull’arredo.",
    prodotti: ["basfon", "isole"],
    mqHint: "Hospitality · Prati",
    highlights: ["hotel", "Prati", "SoundOff"],
    featuredTitle: "Hospitality",
    featuredLead: "Intervento NRS in contesto alberghiero a Roma.",
    featuredShots: [
      {
        src: "/portfolio/hotel-nazionale.jpg",
        caption: "Hotel Nazionale — intervento",
        alt: "Correzione acustica Hotel Nazionale Roma - NRS Acustica HoReCa",
      },
    ],
  },
  {
    id: "sapore-di-mare",
    locale: "Sapore di Mare",
    city: "Roma",
    image: "/portfolio/sapore-di-mare-2.jpg",
    problema:
      "Ristorante di pesce con superfici dure e affollamento serale: riverbero alto ai tavoli.",
    soluzione:
      "Pannelli a soffitto SoundOff sul layout della sala (foto in galleria).",
    risultato:
      "Comfort migliorato senza cambiare l’atmosfera del locale.",
    prodotti: ["basfon"],
    mqHint: "Soffitto trattato · ristorante",
    highlights: ["soffitto trattato", "ristorante", "Roma"],
    featuredTitle: "Intervento documentato",
    featuredLead: "Foto reali di posa presso Sapore di Mare.",
    featuredShots: [
      {
        src: "/portfolio/sapore-di-mare-2.jpg",
        caption: "Vista intervento",
        alt: "Pannelli fonoassorbenti Sapore di Mare Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/sapore-di-mare-3.jpg",
        caption: "Dettaglio",
        alt: "Dettaglio correzione acustica Sapore di Mare Roma - NRS",
      },
    ],
  },
  {
    id: "gaudi",
    locale: "Gaudì",
    city: "Roma",
    image: "/portfolio/gaudi-2.jpg",
    problema:
      "Locale con superfici e volume che facevano restare il suono troppo “vivo”.",
    soluzione:
      "Pannelli SoundOff a soffitto/parete secondo il progetto del locale.",
    risultato:
      "Ambiente più quieto al tavolo, finitura coerente con l’arredo.",
    prodotti: ["basfon"],
    mqHint: "Intervento documentato · Parioli",
    highlights: ["Parioli", "soffitto", "SoundOff"],
    featuredTitle: "Intervento Gaudì",
    featuredLead: "Documentazione fotografica dell’intervento NRS.",
    featuredShots: [
      {
        src: "/portfolio/gaudi-2.jpg",
        caption: "Vista intervento",
        alt: "Correzione acustica Gaudi Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/gaudi.jpg",
        caption: "Altra vista",
        alt: "Pannelli fonoassorbenti Gaudi Roma - NRS",
      },
    ],
  },
  {
    id: "da-ciccillo",
    locale: "Da Ciccillo",
    city: "Roma",
    image: "/portfolio/da-ciccillo-2.jpg",
    problema:
      "Trattoria con superfici dure tipiche: conversazioni faticose nelle ore di punta.",
    soluzione:
      "Pannelli fonoassorbenti a soffitto documentati in galleria.",
    risultato:
      "Più comfort al tavolo senza snaturare il locale.",
    prodotti: ["basfon"],
    mqHint: "Trattoria · soffitto trattato",
    highlights: ["trattoria", "soffitto", "Roma"],
    featuredTitle: "Intervento Da Ciccillo",
    featuredLead: "Foto reali di posa NRS.",
    featuredShots: [
      {
        src: "/portfolio/da-ciccillo-2.jpg",
        caption: "Vista intervento",
        alt: "Pannelli fonoassorbenti Da Ciccillo Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/da-ciccillo.jpg",
        caption: "Altra vista",
        alt: "Correzione acustica Da Ciccillo Roma - NRS",
      },
    ],
  },
  {
    id: "max-a-trigoria",
    locale: "Max a Trigoria",
    city: "Roma",
    image: "/portfolio/max-a-trigoria-2.jpg",
    problema:
      "Locale fuori dal centro con sala ampia: riverbero lungo nelle ore di servizio.",
    soluzione:
      "Pannelli SoundOff a soffitto (vedi galleria fotografica).",
    risultato:
      "Ambiente più confortevole per ospiti e staff.",
    prodotti: ["basfon"],
    mqHint: "Sala ampia · Trigoria",
    highlights: ["Trigoria", "soffitto", "SoundOff"],
    featuredTitle: "Intervento Max a Trigoria",
    featuredLead: "Documentazione fotografica dell’intervento.",
    featuredShots: [
      {
        src: "/portfolio/max-a-trigoria-2.jpg",
        caption: "Vista intervento",
        alt: "Correzione acustica Max a Trigoria Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/max-a-trigoria-3.jpg",
        caption: "Dettaglio",
        alt: "Pannelli fonoassorbenti Max a Trigoria - NRS",
      },
    ],
  },
  {
    id: "caffe-millennium",
    locale: "Caffè Millennium",
    city: "Roma",
    image: "/portfolio/caffe-millennium-2.jpg",
    problema:
      "Caffè/bar con superfici riflettenti e affollamento: chiasso di bancone e tavoli vicini.",
    soluzione:
      "Elementi fonoassorbenti a soffitto selezionati sul layout (galleria).",
    risultato:
      "Zona consumo più gestibile acusticamente.",
    prodotti: ["basfon", "isole"],
    mqHint: "Bar/caffè · soffitto",
    highlights: ["bar", "soffitto", "Roma"],
    featuredTitle: "Intervento Caffè Millennium",
    featuredLead: "Foto reali di posa NRS.",
    featuredShots: [
      {
        src: "/portfolio/caffe-millennium-2.jpg",
        caption: "Vista intervento",
        alt: "Correzione acustica Caffe Millennium Roma - NRS Acustica HoReCa",
      },
      {
        src: "/portfolio/caffe-millennium-3.jpg",
        caption: "Dettaglio",
        alt: "Pannelli fonoassorbenti Caffe Millennium Roma - NRS",
      },
    ],
  },
];
