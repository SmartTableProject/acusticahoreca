/** Foto curate per homepage — ambienti locali, nomi reali */
export type ShowcaseSlide = {
  id: string;
  src: string;
  title: string;
  objectPosition?: string;
};

export const showcaseSlides: ShowcaseSlide[] = [
  {
    id: "7su7",
    src: "/portfolio/7su7-5.jpg",
    title: "Ristorante 7su7",
    objectPosition: "center 35%",
  },
  {
    id: "alla-lampara",
    src: "/portfolio/alla-lampara.jpg",
    title: "Alla Lampara",
    objectPosition: "center 35%",
  },
  {
    id: "da-dante",
    src: "/portfolio/da-dante.jpg",
    title: "Da Dante",
  },
  {
    id: "pizzeria-ostiense",
    src: "/portfolio/pizzeria-ostiense.jpg",
    title: "Pizzeria Ostiense",
  },
  {
    id: "felice",
    src: "/portfolio/felice-a-testaccio.jpg",
    title: "Felice a Testaccio",
  },
  {
    id: "galbi",
    src: "/portfolio/galbi.jpg",
    title: "Galbi",
  },
  {
    id: "osteria-sole",
    src: "/portfolio/osteria-del-sole.jpg",
    title: "Osteria del Sole",
  },
  {
    id: "dal-vignola",
    src: "/portfolio/dal-vignola.jpg",
    title: "Dal Vignola",
  },
  {
    id: "la-botte",
    src: "/portfolio/la-botte-10.jpg",
    title: "La Botte",
    objectPosition: "center 40%",
  },
  {
    id: "hotel-nazionale",
    src: "/portfolio/hotel-nazionale.jpg",
    title: "Hotel Nazionale",
  },
];
