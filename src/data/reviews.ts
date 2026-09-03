/** Proof sociale — recensioni/testimonianze (fino a widget Google live) */
export type Review = {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: 5;
};

export const reviews: Review[] = [
  {
    id: "1",
    author: "Gestione Alla Lampara",
    role: "Ristorante · Roma",
    text: "Finalmente si parla ai tavoli senza alzare la voce. Intervento curato, tempi rispettati.",
    rating: 5,
  },
  {
    id: "2",
    author: "Proprietà Da Dante",
    role: "Ristorante · Roma",
    text: "Avevamo un soffitto alto che rimbombava. Ora l'ambiente è più confortevole senza snaturare il locale.",
    rating: 5,
  },
  {
    id: "3",
    author: "Staff 7su7",
    role: "Ristorante · Roma",
    text: "Serate più leggere anche per noi dietro al bancone. Consigliati, soprattutto se siete in zona Roma.",
    rating: 5,
  },
];

/** URL scheda Google (opzionale). Imposta NEXT_PUBLIC_GOOGLE_REVIEWS_URL su Vercel. */
export const googleReviewsUrl =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ?? "";
