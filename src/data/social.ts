/**
 * Canali social NRS — collegati al sito e al motore contenuti (cartella /social).
 * Modalità operativa: SICURA (bozza → OK tuo → pubblicazione).
 */
export const social = {
  facebook: {
    url: "https://www.facebook.com/NRS.Soluzioni.acustiche",
    handle: "NRS.Soluzioni.acustiche",
    label: "Facebook",
  },
  instagram: {
    url: "https://www.instagram.com/nrs.acustica/",
    handle: "nrs.acustica",
    label: "Instagram",
  },
  /** Hashtag fissi (max 5 — limite Buffer/IG) */
  hashtags: [
    "#acustica",
    "#ristorantiRoma",
    "#HoReCa",
    "#Roma",
    "#SoundOff",
  ],
  /** Frequenza target */
  postsPerWeek: 4,
  /** Scheduler esterno (Buffer GraphQL API) */
  scheduler: "buffer",
} as const;

export const socialLinks = [social.facebook, social.instagram] as const;
