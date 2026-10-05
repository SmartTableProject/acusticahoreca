/** Prodotti standard — preventivo online (senza checkout) */
import { retailBands } from "@/data/listino-pubblico";

export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  idealFor: string;
  benefits: string[];
  priceFrom: string;
  priceHint: string;
  /** Fascia orientativa materiale — NON è un quotazione */
  priceBand: string;
  priceBandNote: string;
  install: "fai-da-te" | "partner" | "roma";
  badge?: string;
  image: string;
  gallery: string[];
};

export const priceDisclaimer =
  "Fasce indicative sul solo materiale (ordine di grandezza). Non sono un listino né un preventivo: la quotazione reale dipende da pezzi, finitura, spedizione e tipo di posa.";

export const standardProducts: Product[] = [
  {
    id: "hexagon-kit",
    name: "Hexagon Kit",
    description:
      "Moduli esagonali in poliestere, tessuto personalizzabile. Ideale per pareti in sala ristorante.",
    longDescription:
      "Il kit esagonale è la scelta più richiesta nei ristoranti: moduli modulari, tessuto a scelta, montaggio guidato. Riduce il riverbero sulle pareti senza «chiudere» esteticamente la sala. Formato kit standard 2000×1200 mm; disponibili anche moduli singoli.",
    idealFor: "Sale ristorante, bar, pizzerie con pareti libere",
    benefits: [
      "Tessuto Pugi personalizzabile sul colore del locale",
      "Montaggio fai-da-te con guida inclusa",
      "Estetica arredo, non «pannello tecnico»",
      "Preventivo rapido su kit o pezzi",
    ],
    priceFrom: "Preventivo online · 24–48h",
    priceHint: "Fascia sul kit 2000×1200 o sui singoli moduli — ti quotiamo dopo i dati del locale.",
    priceBand: retailBands.hexagonKit.label,
    priceBandNote: retailBands.hexagonKit.note,
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
      "Basfon in melammina è pensato per soffitti di locali pubblici: performance acustica, reazione al fuoco adeguata agli ambienti HoReCa, costo contenuto. Disponibile nuda o verniciata RAL acqua (spessori 40/50 mm; formati 600×600, 1200×600).",
    idealFor: "Soffitti piani, locali con budget controllato, interventi ampi",
    benefits: [
      "Ignifugo, adatto a locali aperti al pubblico",
      "Ottimo rapporto prestazioni/prezzo in versione nuda",
      "RAL acqua per allinearsi al colore della sala",
      "Installazione con partner su richiesta",
    ],
    priceFrom: "Preventivo online · 24–48h",
    priceHint: "Nuda = fascia più bassa; RAL = fascia alta. Spesso la soluzione più economica per mq su soffitto.",
    priceBand: retailBands.basfon.label,
    priceBandNote: retailBands.basfon.note,
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
      "Wave High Performance concentra l'assorbimento dove serve: profilo a onda in melammina sp. 50 mm, alto rendimento, poco spazio occupato. Formati 600×600 e 1200×600.",
    idealFor: "Sale riverberanti con poca superficie disponibile",
    benefits: [
      "Alto rendimento su poca superficie",
      "Design distintivo a onda",
      "Montaggio guidato fai-da-te",
      "Partner SoundOff — 2B Resine",
    ],
    priceFrom: "Preventivo online · 24–48h",
    priceHint: "Quotazione a pezzo in base al layout della sala.",
    priceBand: retailBands.wave.label,
    priceBandNote: retailBands.wave.note,
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
      "Le isole sospese (sp. 80 mm, diametri Ø800 / 1000 / 1200) lavorano su entrambe le facce. Melammina base, RAL o poliestere+tessuto Pugi. Kit sospensione a parte.",
    idealFor: "Soffitti alti, locali design, hotel e ristoranti di pregio",
    benefits: [
      "Assorbimento bilaterale",
      "Tre diametri standard",
      "Finitura nuda, RAL o tessuto",
      "Posa con partner o chiavi in mano a Roma",
    ],
    priceFrom: "Preventivo online · 24–48h",
    priceHint: "Il prezzo dipende da diametro, finitura e punti di sospensione.",
    priceBand: retailBands.isole.label,
    priceBandNote: retailBands.isole.note,
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

/** Stima grezza per il wizard — solo ordine di grandezza (fasce vendita, non netti) */
export function estimateWizardBand(opts: {
  mq: number;
  superfici: string[];
}): { label: string; note: string } {
  const { mq, superfici } = opts;
  if (!mq || mq < 1) {
    return {
      label: "Indica i mq per un ordine di grandezza",
      note: priceDisclaimer,
    };
  }

  const hasIsole = superfici.includes("isole");
  const hasParete = superfici.includes("parete");
  const hasSoffitto = superfici.includes("soffitto");

  let low = 0;
  let high = 0;
  if (hasSoffitto) {
    low += mq * retailBands.basfon.eurPerMqLow;
    high += mq * retailBands.basfon.eurPerMqHigh;
  }
  if (hasParete) {
    const wallMq = Math.max(8, Math.round(mq * 0.35));
    low += wallMq * retailBands.hexagonKit.eurPerMqLow;
    high += wallMq * retailBands.hexagonKit.eurPerMqHigh;
  }
  if (hasIsole) {
    const n = Math.max(4, Math.round(mq / 12));
    low += n * retailBands.isole.eurPerIslandLow;
    high += n * retailBands.isole.eurPerIslandHigh;
  }
  if (!hasSoffitto && !hasParete && !hasIsole) {
    low = mq * 70;
    high = mq * 150;
  }

  const fmt = (n: number) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  return {
    label: `Ordine di grandezza orientativo: ${fmt(low)} – ${fmt(high)}`,
    note: priceDisclaimer,
  };
}
