/**
 * Rinomina tutti i file in public/portfolio in lowercase (case-sensitive deploy).
 * Su Windows serve un passaggio intermedio perché il filesystem ignora maiuscole/minuscole.
 *
 * Uso: node scripts/normalize-portfolio-names.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const DEST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "portfolio");

if (!fs.existsSync(DEST)) {
  console.error("Cartella non trovata:", DEST);
  process.exit(1);
}

let renamed = 0;

for (const file of fs.readdirSync(DEST)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const lower = file.toLowerCase();
  if (file === lower) continue;

  const from = path.join(DEST, file);
  const via = path.join(DEST, `__rename__${Date.now()}__${lower}`);
  const to = path.join(DEST, lower);

  fs.renameSync(from, via);
  fs.renameSync(via, to);
  renamed++;
  console.log(`Rinominato: ${file} -> ${lower}`);
}

console.log(`Fatto. Rinominati: ${renamed}`);
