export type PortfolioCategory = "ristorante" | "render" | "ufficio" | "tecnico";

export type PortfolioItem = {
  id: string;
  src: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  projectId?: string;
  projectName?: string;
};

export const categoryLabels: Record<PortfolioCategory, string> = {
  ristorante: "Ristoranti & HoReCa",
  render: "Progetti 3D",
  ufficio: "Uffici & Commerciali",
  tecnico: "Dettagli tecnici",
};

export {
  portfolioProjects,
  portfolioItemsGenerated,
  portfolioStats,
} from "./portfolio.generated";

import { portfolioItemsGenerated } from "./portfolio.generated";

/** Tutte le foto sincronizzate da selezione/ridotte */
export const portfolioItems: PortfolioItem[] = [...portfolioItemsGenerated];
