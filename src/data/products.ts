/** Prodotti standard — preventivo online (fase 1, senza checkout) */
export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  idealFor: string;
  benefits: string[];
  priceFrom: string;
  priceHint: string;
  install: "fai-da-te" | "partner" | "roma";
  badge?: string;
  image: string;
  gallery: string[];
};

export const standardProducts: Product[] = [
  {
    id: "hexagon-kit",
    name: "Hexagon Kit",
    description:
      "Moduli esagonali in poliestere, tessuto personalizzabile. Ideale per pareti in sala ristorante.",
    longDescription:
      "Il kit esagonale è la scelta più richiesta nei ristoranti: moduli modulari, tessuto a scelta, montaggio guidato. Riduce il riverbero sulle pareti senza «chiudere» esteticamente la sala.",
    idealFor: "Sale ristorante, bar, pizzerie con pareti libere",
    benefits: [
      "Tessuto personalizzabile sul colore del locale",
      "Montaggio fai-da-te con guida inclusa",
      "Estetica arredo, non «pannello tecnico»",
      "Preventivo rapido su mq e quantità moduli",
    ],
    priceFrom: "Preventivo online · 24–48h",
    priceHint: "Fascia indicativa in base a mq e tessuto — ti quotiamo dopo i dati del locale.",
    install: "fai-da-te",
    badge: "Più richiesto",
    image: "/portfolio/alla-lampara.jpg",
    gallery: ["/portfolio/alla-lampara.jpg", "/portfolio/la-lampara.jpg", "/portfolio/7su7-5.jpg"],
  },
  {
    id: "basfon",
    name: "Basfon — Melammina",
    description:
      "Pannelli a soffitto ignifughi, certificati per locali pubblici. Soluzione performante ed economica per HoReCa.",
    longDescription:
      "Basfon in melammina è pensato per soffitti di locali pubblici: performance acustica, reazione al fuoco adeguata agli ambienti HoReCa, costo contenuto rispetto a soluzioni decorative complesse.",
    idealFor: "Soffitti piani, locali con budget controllato, interventi ampi",
    benefits: [
      "Ignifugo, adatto a locali aperti al pubblico",
      "Ottimo rapporto prestazioni/prezzo",
      "Ideale su grandi superfici a soffitto",
      "Installazione con partner su richiesta",
    ],
    priceFrom: "Preventivo online · 24–48h",
    priceHint: "Spesso la soluzione più economica per mq su soffitto.",
    install: "partner",
    image: "/portfolio/20180608_100932.jpg",
    gallery: ["/portfolio/20180608_100932.jpg", "/portfolio/20180215_141018.jpg"],
  },
  {
    id: "wave",
    name: "Wave High Performance",
    description:
      "Profilo onda ad alto rendimento acustico. Per sale con forte riverbero e poca superficie.",
    longDescription:
      "Wave High Performance concentra l'assorbimento dove serve: profilo a onda, alto rendimento, poco spazio occupato. Utile quando non puoi rivestire tutta la sala.",
    idealFor: "Sale riverberanti con poca superficie disponibile",
    benefits: [
      "Alto rendimento su poca superficie",
      "Design distintivo a onda",
      "Montaggio guidato fai-da-te",
      "Partner SoundOff — 2B Resine",
    ],
    priceFrom: "Preventivo online · 24–48h",
    priceHint: "Quotazione su pezzi/mq in base al layout della sala.",
    install: "fai-da-te",
    image: "/portfolio/20170802_134723.jpg",
    gallery: ["/portfolio/20170802_134723.jpg", "/portfolio/galbi.jpg"],
  },
  {
    id: "isole",
    name: "Isole acustiche sospese",
    description:
      "Pannelli flottanti a soffitto. Intervento estetico con impatto acustico immediato.",
    longDescription:
      "Le isole sospese lavorano su entrambe le facce e diventano elemento di design. Perfette quando il soffitto è alto o vuoi un intervento visibile ma elegante.",
    idealFor: "Soffitti alti, locali design, hotel e ristoranti di pregio",
    benefits: [
      "Assorbimento bilaterale",
      "Forte impatto estetico",
      "Intervento reversibile / non invasivo",
      "Posa con partner o chiavi in mano a Roma",
    ],
    priceFrom: "Preventivo online · 24–48h",
    priceHint: "Il prezzo dipende da forma, tessuto e numero di isole.",
    install: "partner",
    badge: "Design",
    image: "/portfolio/20180215_141018.jpg",
    gallery: ["/portfolio/20180215_141018.jpg", "/portfolio/felice-a-testaccio.jpg"],
  },
];

export const installLabels: Record<Product["install"], string> = {
  "fai-da-te": "Montaggio fai-da-te con guida inclusa",
  partner: "Installazione con partner (su richiesta)",
  roma: "Sopralluogo e posa — solo Roma e provincia",
};

export function getProduct(id: string) {
  return standardProducts.find((p) => p.id === id);
}
