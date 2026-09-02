/**
 * Copia le foto da selezione/ridotte in public/portfolio
 * e genera src/data/portfolio.generated.ts
 *
 * Uso: node scripts/sync-portfolio.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SOURCE = path.resolve(ROOT, "..", "selezione", "ridotte");
const DEST = path.resolve(ROOT, "public", "portfolio");
const OUT = path.resolve(ROOT, "src", "data", "portfolio.generated.ts");

const CATEGORY_RULES = [
  { test: (n) => /render|fotomontaggio|^v2-/i.test(n), category: "render" },
  { test: (n) => /agenzia|ufficio|lab\s*100|hotel/i.test(n), category: "ufficio" },
  { test: (n) => /dettaglio|dsc_|^img/i.test(n), category: "tecnico" },
  { test: () => true, category: "ristorante" },
];

const LOCALE_ALIASES = {
  "la-botte": "La Botte",
  laccattone: "L'accattone",
  "l-accattone": "L'accattone",
  "la-lampara": "Alla Lampara",
  "alla-lampara": "Alla Lampara",
  cuccurucu: "Cuccurucu",
  gaudi: "Gaudì",
};

function slugify(originalName) {
  let base = path.basename(originalName, path.extname(originalName));
  const numbered = base.match(/^(.+?)\s*\((\d+)\)\s*$/);
  if (numbered) base = `${numbered[1]}-${numbered[2]}`;
  base = base.replace(/_/g, "-");
  return (
    base
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .toLowerCase()
      .replace(/[''`]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") + ".jpg"
  );
}

function parseLocale(name) {
  let base = path.basename(name, path.extname(name));
  base = base.replace(/\s*\(\d+\)\s*$/, "").trim();

  if (/^\d{8}[-_]/.test(base)) return `Intervento ${base.slice(0, 4)}`;
  if (/^(dsc[-_]?|img[-_]?)/i.test(base)) return "Documentazione";
  if (/^[0-9a-f-]{36}$/i.test(base)) return "Documentazione";
  if (/fotomontaggio|render|^v2-/i.test(base)) return "Progetti 3D";
  if (/^pic[-\s]?/i.test(base)) return "Documentazione";

  let key = base
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[''`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  key = key.replace(/-\d+$/, "");
  if (LOCALE_ALIASES[key]) return LOCALE_ALIASES[key];

  return base
    .replace(/[-_]\d+$/, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function guessCategory(locale, filename) {
  const key = `${locale} ${filename}`.toLowerCase();
  return CATEGORY_RULES.find((r) => r.test(key)).category;
}

function titleCase(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

function projectId(locale) {
  return locale
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

if (!fs.existsSync(SOURCE)) {
  console.error("Cartella sorgente non trovata:", SOURCE);
  process.exit(1);
}

fs.mkdirSync(DEST, { recursive: true });

const sourceFiles = fs
  .readdirSync(SOURCE)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, "it"));

const slugToMeta = new Map();
let copied = 0;
let skipped = 0;

for (const file of sourceFiles) {
  const slug = slugify(file);
  const srcPath = path.join(SOURCE, file);
  const destPath = path.join(DEST, slug);

  if (!fs.existsSync(destPath)) {
    fs.copyFileSync(srcPath, destPath);
    copied++;
  } else {
    skipped++;
  }

  const locale = parseLocale(file);
  slugToMeta.set(slug.toLowerCase(), {
    slug,
    locale,
    category: guessCategory(locale, file),
    title: titleCase(locale),
  });
}

// File extra già in portfolio (render, dettagli tecnici, ecc.)
for (const file of fs.readdirSync(DEST)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const key = file.toLowerCase();
  if (slugToMeta.has(key)) continue;

  const locale = parseLocale(file);
  slugToMeta.set(key, {
    slug: file,
    locale,
    category: guessCategory(locale, file),
    title: titleCase(locale.replace(/-/g, " ")),
  });
}

// Una sola entry per file fisico (preferisci slug lowercase)
const filesByKey = new Map();
for (const meta of slugToMeta.values()) {
  const key = meta.slug.toLowerCase();
  if (!filesByKey.has(key)) {
    filesByKey.set(key, meta);
  }
}

const entries = [...filesByKey.values()].sort((a, b) =>
  a.locale.localeCompare(b.locale, "it") || a.slug.localeCompare(b.slug),
);

const projectsMap = new Map();
for (const entry of entries) {
  const id = projectId(entry.locale);
  if (!projectsMap.has(id)) {
    projectsMap.set(id, {
      id,
      name: entry.title,
      category: entry.category,
      images: [],
    });
  }
  const project = projectsMap.get(id);
  project.images.push({
    id: `${id}-${project.images.length + 1}`,
    src: `/portfolio/${entry.slug}`,
    alt: `${entry.title} — NRS Soluzioni Acustiche`,
  });
}

const projects = [...projectsMap.values()]
  .map((p) => ({
    ...p,
    cover: p.images[0]?.src ?? "",
    imageCount: p.images.length,
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "it"));

const flatItems = projects.flatMap((p) =>
  p.images.map((img, i) => ({
    id: img.id,
    src: img.src,
    title: p.images.length > 1 ? `${p.name} (${i + 1})` : p.name,
    category: p.category,
    description: `Correzione acustica — ${p.name}`,
    projectId: p.id,
    projectName: p.name,
  })),
);

const ts = `/* Generato automaticamente da scripts/sync-portfolio.mjs — non modificare a mano */
import type { PortfolioCategory } from "./portfolio";

export type PortfolioProject = {
  id: string;
  name: string;
  category: PortfolioCategory;
  cover: string;
  imageCount: number;
  images: { id: string; src: string; alt: string }[];
};

export const portfolioProjects: PortfolioProject[] = ${JSON.stringify(projects, null, 2)};

export const portfolioItemsGenerated = ${JSON.stringify(flatItems, null, 2)} as const;

export const portfolioStats = {
  projects: ${projects.length},
  photos: ${flatItems.length},
  syncedAt: "${new Date().toISOString()}",
};
`;

fs.writeFileSync(OUT, ts, "utf8");

console.log(`Sorgente ridotte: ${sourceFiles.length} file`);
console.log(`Copiati: ${copied} | Già presenti: ${skipped}`);
console.log(`Locali/progetti: ${projects.length} | Foto in galleria: ${flatItems.length}`);
console.log(`Scritto: ${OUT}`);
