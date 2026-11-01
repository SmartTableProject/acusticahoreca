/**
 * Collage home — 9 pezzi, solo casi studio con le foto più forti (colore nitido).
 */
export type CollageTile = {
  id: string;
  src: string;
  title: string;
  /** Area CSS grid (template fisso senza buchi) */
  area: "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i";
  objectPosition?: string;
};

export const homeCollage: CollageTile[] = [
  {
    id: "alla-lampara",
    src: "/portfolio/la-lampara.jpg",
    title: "Alla Lampara",
    area: "a",
    objectPosition: "center 38%",
  },
  {
    id: "felice",
    src: "/portfolio/felice-a-testaccio.jpg",
    title: "Felice a Testaccio",
    area: "b",
    objectPosition: "center 22%",
  },
  {
    id: "remo",
    src: "/portfolio/remo.jpg",
    title: "Pizzeria Remo",
    area: "c",
    objectPosition: "center 30%",
  },
  {
    id: "7su7",
    src: "/portfolio/7su7-5.jpg",
    title: "Ristorante 7su7",
    area: "d",
    objectPosition: "center 20%",
  },
  {
    id: "galbi",
    src: "/portfolio/galbi-4.jpg",
    title: "Galbi",
    area: "e",
    objectPosition: "center 28%",
  },
  {
    id: "cuccurucu",
    src: "/portfolio/cuccurucu-5-plus.jpg",
    title: "Cuccurucù",
    area: "f",
    objectPosition: "center 28%",
  },
  {
    id: "taverna-latina",
    src: "/portfolio/taverna-latina.jpg",
    title: "Taverna Latina",
    area: "g",
    objectPosition: "center 35%",
  },
  {
    id: "la-botte",
    src: "/portfolio/la-botte-11.jpg",
    title: "La Botte",
    area: "h",
    objectPosition: "center 32%",
  },
  {
    id: "osteria-sole",
    src: "/portfolio/osteria-del-sole.jpg",
    title: "Osteria del Sole",
    area: "i",
    objectPosition: "center 25%",
  },
];
