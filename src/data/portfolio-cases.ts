import { caseStudies } from "@/data/case-studies";
import {
  portfolioProjects,
  type PortfolioProject,
} from "@/data/portfolio";

export type PortfolioCase = {
  slug: string;
  locale: string;
  city: string;
  district?: string;
  problema: string;
  soluzione: string;
  risultato: string;
  prodotti: string[];
  mqHint?: string;
  highlights?: string[];
  featuredTitle?: string;
  featuredLead?: string;
  featuredShots?: { src: string; caption: string; alt: string }[];
  project: PortfolioProject;
  indexable: boolean;
};

/** Progetti tecnici / non locali: copy onesto da documentazione, non “falso caso ristorante” */
const NON_LOCALE = new Set([
  "dettaglio-struttura-di-supporto-con-misure",
  "documentazione",
  "progetti-3d",
  "intervento-2017",
  "intervento-2018",
  "intervento-2019",
  "agenzia",
  "lab-100",
]);

/** Collega case study narrativi agli id portfolio (se id diversi) */
const NARRATIVE_BY_PROJECT: Record<string, string> = {
  "felice-a-testaccio": "felice",
  "osteria-del-sole": "osteria-sole",
};

const DISTRICT_BY_PROJECT: Record<string, string> = {
  cuccurucu: "Ponte Milvio / Capoprati",
  "pizzeria-ostiense": "Ostiense",
  strozzaquintino: "San Lorenzo",
  "l-accattone": "Centro",
  "hotel-nazionale": "Prati",
  "la-botte": "Prati",
  remo: "Testaccio",
  felice: "Testaccio",
  "felice-a-testaccio": "Testaccio",
  "caino-e-abele": "EUR",
  dish: "EUR",
  gaudi: "Parioli",
  fiore: "Parioli",
  "max-a-trigoria": "Trigoria",
};

function narrativeFor(projectId: string) {
  const key = NARRATIVE_BY_PROJECT[projectId] ?? projectId;
  return caseStudies.find((c) => c.id === key) ?? null;
}

function autoFeatured(project: PortfolioProject, locale: string, city: string) {
  return project.images.slice(0, 2).map((img, i) => ({
    src: img.src,
    caption:
      i === 0
        ? `${locale} — intervento documentato`
        : `${locale} — dettaglio posa`,
    alt: `Pannelli fonoassorbenti presso ${locale} a ${city} - NRS Acustica HoReCa`,
  }));
}

export function getPortfolioCase(slug: string): PortfolioCase | null {
  const project = portfolioProjects.find((p) => p.id === slug);
  if (!project) return null;

  const story = narrativeFor(project.id);
  const isLocale = !NON_LOCALE.has(project.id);
  const city = story?.city ?? "Roma";
  const locale = story?.locale ?? project.name;
  const district =
    story && DISTRICT_BY_PROJECT[project.id]
      ? DISTRICT_BY_PROJECT[project.id]
      : DISTRICT_BY_PROJECT[project.id];

  if (!isLocale) {
    return {
      slug: project.id,
      locale: project.name,
      city: "Roma",
      problema: `Archivio tecnico NRS — ${project.name}: materiali, dettagli di posa o fasi di cantiere.`,
      soluzione:
        "Riferimento fotografico per progettazione e posa SoundOff — 2B Resine negli interventi HoReCa.",
      risultato:
        "Documentazione interna/espositiva: utile a tecnici e partner, non è una scheda locale pubblica “marketing”.",
      prodotti: ["basfon", "isole"],
      mqHint: "Documentazione tecnica",
      highlights: ["documentazione", `${project.imageCount} foto`],
      featuredTitle: "Archivio tecnico",
      featuredLead:
        "Foto di dettaglio, strutture e fasi — non inventiamo una storia da ristorante dove non c’è.",
      featuredShots: autoFeatured(project, project.name, "Roma"),
      project,
      indexable: true,
    };
  }

  return {
    slug: project.id,
    locale,
    city,
    district,
    problema:
      story?.problema ??
      `Locale HoReCa con superfici dure e volume di sala: riverbero e fatica acustica nelle ore di punta presso ${locale}. Le foto sotto documentano l’intervento reale.`,
    soluzione:
      story?.soluzione ??
      `Correzione acustica con prodotti SoundOff — 2B Resine a soffitto e/o parete, integrati con luci e impianti esistenti (layout visibile in galleria).`,
    risultato:
      story?.risultato ??
      `Intervento fotografato sul campo: finitura e posa reali, senza numeri inventati. Per un preventivo sul tuo locale usiamo misure e foto tue.`,
    prodotti: story?.prodotti ?? ["basfon", "isole"],
    mqHint: story?.mqHint ?? `Intervento documentato · ${project.imageCount} foto`,
    highlights: story?.highlights ?? [
      "intervento documentato",
      `${project.imageCount} foto`,
      city,
    ],
    featuredTitle: story?.featuredTitle ?? "In evidenza",
    featuredLead:
      story?.featuredLead ??
      "Selezione dalle foto reali dell’intervento. Apri la galleria sotto per tutto il set.",
    featuredShots:
      story?.featuredShots ?? autoFeatured(project, locale, city),
    project,
    indexable: true,
  };
}

export function allPortfolioCases(): PortfolioCase[] {
  return portfolioProjects
    .map((p) => getPortfolioCase(p.id))
    .filter((c): c is PortfolioCase => c !== null);
}

export function portfolioCaseSlugParams() {
  return portfolioProjects.map((p) => ({ slug: p.id }));
}

export function imageAltForCase(
  caseItem: PortfolioCase,
  productHint = "Pannelli fonoassorbenti",
) {
  return `${productHint} presso ${caseItem.locale} a ${caseItem.city} - NRS Acustica HoReCa`;
}
