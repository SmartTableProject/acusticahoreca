/**
 * Migliora foto Cuccurucù: esposizione, contrasto, nitidezza leggera, JPEG ottimizzato.
 * Self-test: verifica file di output e dimensioni minime.
 */
import sharp from "sharp";
import { copyFileSync, existsSync, mkdirSync, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "portfolio");
const srcHero =
  "C:\\Users\\pasqu\\.cursor\\projects\\m-LAVORO-FOTO-DI-TUTTI-I-LAVORI\\assets\\cuccuruc_-2c907774-5d6d-4bc5-b886-4830b46243a6.jpg";

async function enhance(input, output, { width = 1800, hero = false } = {}) {
  let pipeline = sharp(input).rotate(); // rispetta EXIF
  const meta = await sharp(input).metadata();

  pipeline = pipeline.resize({
    width,
    height: Math.round(width * 0.75),
    fit: "inside",
    withoutEnlargement: true,
  });

  // Locale storico: tieni caldo, alza un filo ombre/contrasto, riduci rumore soft
  pipeline = pipeline
    .modulate({ brightness: hero ? 1.06 : 1.04, saturation: 1.05 })
    .linear(1.08, -8)
    .sharpen({ sigma: 0.8, m1: 0.6, m2: 0.3 })
    .jpeg({ quality: 84, mozjpeg: true, progressive: true });

  await pipeline.toFile(output);
  const st = statSync(output);
  console.log(
    `OK ${output} (${Math.round(st.size / 1024)} KB) from ${meta.width}x${meta.height}`,
  );
  return st.size;
}

async function main() {
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  if (!existsSync(srcHero)) throw new Error(`Manca hero: ${srcHero}`);

  const heroOut = join(outDir, "cuccurucu.jpg");
  const heroFeatured = join(outDir, "cuccurucu-hero.jpg");

  await enhance(srcHero, heroOut, { width: 1920, hero: true });
  // Copia “featured” identica ma più larga per scheda
  copyFileSync(heroOut, heroFeatured);

  const extras = ["cuccurucu-4.jpg", "cuccurucu-5.jpg", "cuccurucu-6.jpg"];
  for (const name of extras) {
    const input = join(outDir, name);
    if (!existsSync(input)) {
      console.warn(`Skip ${name}: non trovato`);
      continue;
    }
    const improved = join(outDir, name.replace(".jpg", "-plus.jpg"));
    await enhance(input, improved, { width: 1600 });
  }

  // Self-test
  const must = [heroOut, heroFeatured];
  for (const f of must) {
    if (!existsSync(f) || statSync(f).size < 40_000) {
      throw new Error(`Self-test FAIL: ${f}`);
    }
  }
  console.log("Self-test: foto Cuccurucù ok");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
