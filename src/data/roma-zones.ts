/** Zone Roma / provincia per cluster Local SEO */

export type RomaZone = {
  id: string;
  name: string;
  /** projectId da portfolio.generated collegati */
  projectIds: string[];
};

export const romaZones: RomaZone[] = [
  {
    id: "centro",
    name: "Centro Storico",
    projectIds: ["alla-lampara", "osteria-del-sole", "l-accattone"],
  },
  {
    id: "testaccio",
    name: "Testaccio",
    projectIds: ["felice-a-testaccio", "da-dante", "remo"],
  },
  {
    id: "ostiense",
    name: "Ostiense",
    projectIds: ["pizzeria-ostiense"],
  },
  {
    id: "trastevere",
    name: "Trastevere",
    projectIds: ["da-ciccillo", "cuccurucu"],
  },
  {
    id: "prati",
    name: "Prati",
    projectIds: ["hotel-nazionale", "la-botte"],
  },
  {
    id: "parioli",
    name: "Parioli",
    projectIds: ["gaudi", "fiore"],
  },
  {
    id: "san-lorenzo",
    name: "San Lorenzo",
    projectIds: ["7su7", "strozzaquintino"],
  },
  {
    id: "eur",
    name: "EUR",
    projectIds: ["caino-e-abele", "dish"],
  },
  {
    id: "ponte-milvio",
    name: "Ponte Milvio",
    projectIds: ["mad-cow", "burro-e-menta"],
  },
  {
    id: "castelli",
    name: "Castelli Romani",
    projectIds: ["max-a-trigoria", "le-palme"],
  },
  {
    id: "litorale",
    name: "Litorale Romano / Ostia / Pomezia",
    projectIds: ["sapore-di-mare", "isola-della-pizza", "taverna-latina"],
  },
];
