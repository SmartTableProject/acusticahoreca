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

/** Progetti tecnici / non locali: restano in sitemap ma con copy generico */
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

function narrativeFor(projectId: string) {
  const key = NARRATIVE_BY_PROJECT[projectId] ?? projectId;
  return caseStudies.find((c) => c.id === key) ?? null;
}

export function getPortfolioCase(slug: string): PortfolioCase | null {
  const project = portfolioProjects.find((p) => p.id === slug);
  if (!project) return null;

  const story = narrativeFor(project.id);
  const isLocale = !NON_LOCALE.has(project.id);

  const cityFromStory = story?.city ?? "Roma";
  const districtHint =
    project.id === "cuccurucu"
      ? "Ponte Milvio / Capoprati"
      : undefined;

  return {
    slug: project.id,
    locale: story?.locale ?? project.name,
    city: cityFromStory,
    district: districtHint,
    problema:
      story?.problema ??
      (isLocale
        ? `Sala con riverbero elevato: conversazioni difficili e fatica acustica nelle ore di punta presso ${project.name}.`
        : `Documentazione tecnica intervento NRS — ${project.name}.`),
    soluzione:
      story?.soluzione ??
      (isLocale
        ? `Correzione acustica con prodotti SoundOff — 2B Resine selezionati per volume, superfici e vincoli estetici del locale.`
        : `Materiali e dettagli di posa SoundOff utilizzati negli interventi HoReCa NRS.`),
    risultato:
      story?.risultato ??
      (isLocale
        ? `Ambiente più confortevole al tavolo, meno eco, migliore esperienza per ospiti e staff.`
        : `Riferimento tecnico per posa e progettazione.`),
    prodotti: story?.prodotti ?? ["isole", "basfon"],
    mqHint: story?.mqHint,
    highlights: story?.highlights,
    featuredTitle: story?.featuredTitle,
    featuredLead: story?.featuredLead,
    featuredShots: story?.featuredShots,
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
