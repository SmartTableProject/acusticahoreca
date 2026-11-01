/**
 * Note dai locali documentati — NON sono recensioni Google verificate.
 * Niente stelle/rating inventati (regola professionalità).
 */
export type Review = {
  id: string;
  author: string;
  role: string;
  text: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    author: "Gestione Alla Lampara",
    role: "Ristorante · Roma",
    text: "Finalmente si parla ai tavoli senza alzare la voce. Intervento curato, tempi rispettati.",
  },
  {
    id: "2",
    author: "Proprietà Da Dante",
    role: "Ristorante · Roma",
    text: "Avevamo un soffitto alto che rimbombava. Ora l'ambiente è più confortevole senza snaturare il locale.",
  },
  {
    id: "3",
    author: "Staff 7su7",
    role: "Ristorante · Roma",
    text: "Serate più leggere anche per noi dietro al bancone. Consigliati, soprattutto se siete in zona Roma.",
  },
];

/** URL scheda Google (opzionale). Imposta NEXT_PUBLIC_GOOGLE_REVIEWS_URL su Vercel. */
export const googleReviewsUrl =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ?? "";
