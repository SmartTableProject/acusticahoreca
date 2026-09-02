export type PortfolioCategory = "ristorante" | "render" | "ufficio" | "tecnico";

export type PortfolioItem = {
  id: string;
  src: string;
  title: string;
  category: PortfolioCategory;
  description: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "alla-lampara",
    src: "/portfolio/Alla-Lampara.jpg",
    title: "Alla Lampara",
    category: "ristorante",
    description: "Correzione acustica a soffitto con pannelli modulari integrati nel design del locale.",
  },
  {
    id: "agenzia",
    src: "/portfolio/Agenzia.jpg",
    title: "Spazio commerciale",
    category: "ufficio",
    description: "Trattamento acustico per ambienti di lavoro e sale riunioni.",
  },
  {
    id: "7su7",
    src: "/portfolio/7su7.jpg",
    title: "Ristorante 7su7",
    category: "ristorante",
    description: "Intervento su sala ristorante ad alta affluenza — riduzione riverbero e comfort conversazione.",
  },
  {
    id: "soffitto-moderno",
    src: "/portfolio/20180608_100932.jpg",
    title: "Soffitto isole acustiche",
    category: "ristorante",
    description: "Pannelli sospesi a soffitto in ambiente open space con illuminazione integrata.",
  },
  {
    id: "bar-beige",
    src: "/portfolio/20170802_134723.jpg",
    title: "Bar e ristorazione",
    category: "ristorante",
    description: "Pannelli fonoassorbenti alternati su soffitto — soluzione estetica per HoReCa.",
  },
  {
    id: "render-v2",
    src: "/portfolio/V2-2.jpg",
    title: "Progetto 3D — sala ampia",
    category: "render",
    description: "Simulazione installazione pannelli su soffitto e parete prima dell'intervento.",
  },
  {
    id: "render-v1",
    src: "/portfolio/render_v1_21_060812.jpg",
    title: "Progetto 3D — layout personalizzato",
    category: "render",
    description: "Anteprima configurazione pannelli con forme e colori su misura.",
  },
  {
    id: "dettaglio-tecnico",
    src: "/portfolio/dettaglio-struttura-di-supporto-con-misure.jpg",
    title: "Dettaglio struttura di supporto",
    category: "tecnico",
    description: "Progettazione su misura con quote tecniche — 425×320 cm.",
  },
  {
    id: "20190128",
    src: "/portfolio/20190128_160113.jpg",
    title: "Intervento locale pubblico",
    category: "ristorante",
    description: "Correzione acustica completata — before/after acustico misurabile.",
  },
  {
    id: "20180215",
    src: "/portfolio/20180215_141018.jpg",
    title: "Sala ristorante",
    category: "ristorante",
    description: "Pannelli fonoassorbenti integrati nel soffitto esistente.",
  },
  {
    id: "20180215-b",
    src: "/portfolio/20180215_141107.jpg",
    title: "Dettaglio installazione",
    category: "tecnico",
    description: "Montaggio professionale con finiture curate.",
  },
  {
    id: "20180215-c",
    src: "/portfolio/20180215_142359.jpg",
    title: "Vista d'insieme",
    category: "ristorante",
    description: "Ambiente HoReCa dopo trattamento acustico.",
  },
];

export const categoryLabels: Record<PortfolioCategory, string> = {
  ristorante: "Ristoranti & HoReCa",
  render: "Progetti 3D",
  ufficio: "Uffici & Commerciali",
  tecnico: "Dettagli tecnici",
};
