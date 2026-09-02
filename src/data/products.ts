/** Prodotti standard — preventivo online (fase 1, senza checkout) */
export type Product = {
  id: string;
  name: string;
  description: string;
  priceFrom: string;
  install: "fai-da-te" | "partner" | "roma";
  badge?: string;
  image: string;
};

export const standardProducts: Product[] = [
  {
    id: "hexagon-kit",
    name: "Hexagon Kit",
    description:
      "Moduli esagonali in poliestere, tessuto personalizzabile. Ideale per pareti in sala ristorante.",
    priceFrom: "Preventivo online · 24–48h",
    install: "fai-da-te",
    badge: "Più richiesto",
    image: "/portfolio/alla-lampara.jpg",
  },
  {
    id: "basfon",
    name: "Basfon — Melammina",
    description:
      "Pannelli a soffitto ignifughi, certificati per locali pubblici. Soluzione performante ed economica per HoReCa.",
    priceFrom: "Preventivo online · 24–48h",
    install: "partner",
    image: "/portfolio/20180608_100932.jpg",
  },
  {
    id: "wave",
    name: "Wave High Performance",
    description:
      "Profilo onda ad alto rendimento acustico. Per sale con forte riverbero e poca superficie.",
    priceFrom: "Preventivo online · 24–48h",
    install: "fai-da-te",
    image: "/portfolio/20170802_134723.jpg",
  },
  {
    id: "isole",
    name: "Isole acustiche sospese",
    description:
      "Pannelli flottanti a soffitto. Intervento estetico con impatto acustico immediato.",
    priceFrom: "Preventivo online · 24–48h",
    install: "partner",
    badge: "Design",
    image: "/portfolio/20180215_141018.jpg",
  },
];

export const installLabels: Record<Product["install"], string> = {
  "fai-da-te": "Montaggio fai-da-te con guida inclusa",
  partner: "Installazione con partner (su richiesta)",
  roma: "Sopralluogo e posa — solo Roma e provincia",
};
