import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gen = fs.readFileSync(path.join(ROOT, "src/data/portfolio.generated.ts"), "utf8");
const showcase = fs.readFileSync(path.join(ROOT, "src/data/showcase-slides.ts"), "utf8");
const pillars = fs.readFileSync(path.join(ROOT, "src/components/ServicePillars.tsx"), "utf8");
const products = fs.readFileSync(path.join(ROOT, "src/data/products.ts"), "utf8");
const portfolioPage = fs.readFileSync(path.join(ROOT, "src/app/portfolio/page.tsx"), "utf8");

const refs = new Set();
for (const file of [gen, showcase, pillars, products, portfolioPage]) {
  for (const m of file.matchAll(/"(\/portfolio\/[^"]+)"/g)) refs.add(m[1]);
}

const diskFiles = fs.readdirSync(path.join(ROOT, "public/portfolio"));
const diskLower = new Map(diskFiles.map((f) => [f.toLowerCase(), f]));

const missing = [];
const caseMismatch = [];

for (const ref of refs) {
  const name = ref.replace("/portfolio/", "");
  if (diskFiles.includes(name)) continue;
  const actual = diskLower.get(name.toLowerCase());
  if (actual) caseMismatch.push({ expected: name, actual });
  else missing.push(name);
}

console.log(`Case mismatches: ${caseMismatch.length}`);
caseMismatch.forEach(({ expected, actual }) =>
  console.log(`  ${expected}  ->  disk has "${actual}"`),
);
console.log(`Truly missing: ${missing.length}`);
missing.forEach((n) => console.log(`  ${n}`));
