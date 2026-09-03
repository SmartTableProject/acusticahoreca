export const site = {
  name: "NRS Soluzioni Acustiche",
  legalName: "NRS — Noise Reduction System",
  logoSubline: "Roma e Centro Italia · Facciamo sul serio",
  logoCategory: "Soluzioni acustiche",
  /** H1 hero — parla al ristoratore */
  heroHeadline: "Il tuo locale, finalmente comodo.",
  /** Identità brand (logo, footer, SEO secondario) */
  clientMessage: "Roma e Centro Italia. Facciamo sul serio.",
  clientSubline: "Sopralluogo in zona, online altrove. Onesti sui tempi.",
  tagline: "Acustica per ristoranti e locali HoReCa. Roma e Centro Italia.",
  domain: "https://acusticahoreca.it",
  email: "preventivi@acusticahoreca.it",
  emailPreventivi: "preventivi@acusticahoreca.it",
  emailInfo: "info@acusticahoreca.it",
  phone: "+39 393 97 45 428",
  phoneTel: "+393939745428",
  whatsappUrl: "https://wa.me/393939745428",
  yearsExperience: 10,
  supplier: "SoundOff — 2B Resine",
  partnerLabel: "Partner tecnico SoundOff — 2B Resine",
  responseTime: "24–48 ore lavorative",
  priceLabel: "Preventivo online · 24–48h",
  partnerMarket: "Roma e Centro Italia",
  surveyArea: "Roma e provincia",
  marketArea: "Roma e Centro Italia",
  partnerNote:
    "Per installazioni fuori Roma collaboriamo con partner tecnici selezionati, su disponibilità.",
  piva: "10847041000",
  titolare: "Pasquale Paglialunga",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
] as const;

/** Allineati ai 3 livelli servizio (footer strip) */
export const servicePillars = [
  "Acquisto online",
  "Consulenza remota",
  "Chiavi in mano Roma",
] as const;

export const contactTierLinks = {
  online: "/contatti?tipo=prodotto-online",
  remote: "/contatti?tipo=consulenza-remota",
  roma: "/contatti?tipo=sopralluogo-roma",
  partner: "/contatti?tipo=installazione-partner",
} as const;
