/**
 * Collage home — 9 pezzi come mockup Portfolio first.
 * Solo le migliori: sale leggibili, soffitti forti, varietà tipologica.
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
    id: "la-lampara",
    src: "/portfolio/la-lampara.jpg",
    title: "Alla Lampara",
    area: "a",
    objectPosition: "center 42%",
  },
  {
    id: "felice",
    src: "/portfolio/felice-a-testaccio.jpg",
    title: "Felice a Testaccio",
    area: "b",
    objectPosition: "center 28%",
  },
  {
    id: "hotel-nazionale",
    src: "/portfolio/hotel-nazionale.jpg",
    title: "Hotel Nazionale",
    area: "c",
    objectPosition: "center 35%",
  },
  {
    id: "7su7",
    src: "/portfolio/7su7.jpg",
    title: "Ristorante 7su7",
    area: "d",
    objectPosition: "center 22%",
  },
  {
    id: "galbi",
    src: "/portfolio/galbi-4.jpg",
    title: "Galbi",
    area: "e",
    objectPosition: "center 25%",
  },
  {
    id: "cuccurucu",
    src: "/portfolio/cuccurucu-5-plus.jpg",
    title: "Cuccurucù",
    area: "f",
    objectPosition: "center 32%",
  },
  {
    id: "pizzeria-ostiense",
    src: "/portfolio/pizzeria-ostiense-4.jpg",
    title: "Pizzeria Ostiense",
    area: "g",
    objectPosition: "center 40%",
  },
  {
    id: "la-botte",
    src: "/portfolio/la-botte-10.jpg",
    title: "La Botte",
    area: "h",
    objectPosition: "center 25%",
  },
  {
    id: "strozzaquintino",
    src: "/portfolio/strozzaquintino-3.jpg",
    title: "Strozzaquintino",
    area: "i",
    objectPosition: "center 30%",
  },
];
