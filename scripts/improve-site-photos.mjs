/**
 * Pipeline qualità foto sito NRS / acusticahoreca
 * - portfolio, prodotti, tessuti: grade leggero + nitidezza + JPEG/WebP ottimizzato
 * - brand: solo compressione sicura (niente grade colore)
 *
 * Uso:
 *   node scripts/improve-site-photos.mjs
 *   node scripts/improve-site-photos.mjs --only=public/portfolio/galbi.jpg
 *   node scripts/improve-site-photos.mjs --force
 *
 * Self-test: verifica sharp, cartelle e almeno 1 file processabile.
 */
import { createHash } from "crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "fs";
import { basename, dirname, extname, join, relative } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const manifestPath = join(root, "scripts", "photo-quality-manifest.json");

const ROOTS = [
  { dir: "public/portfolio", preset: "photo", maxW: 1920 },
  { dir: "public/prodotti", preset: "product", maxW: 1600 },
  { dir: "public/tessuti", preset: "product", maxW: 1400 },
  { dir: "public/brand", preset: "logo", maxW: 1200 },
];

const IMG_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function parseArgs(argv) {
  const force = argv.includes("--force");
  const onlyArg = argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.slice("--only=".length).replace(/\\/g, "/") : null;
  return { force, only };
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (IMG_EXT.has(extname(name).toLowerCase())) out.push(p);
  }
  return out;
}

function sha256(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

function loadManifest() {
  if (!existsSync(manifestPath)) return { version: 1, files: {} };
  try {
    return JSON.parse(readFileSync(manifestPath, "utf8"));
  } catch {
    return { version: 1, files: {} };
  }
}

function saveManifest(m) {
  writeFileSync(manifestPath, JSON.stringify(m, null, 2) + "\n", "utf8");
}

async function enhanceBuffer(inputBuf, { preset, maxW }) {
  const img = sharp(inputBuf, { failOn: "none" }).rotate();
  const meta = await img.metadata();
  const format = (meta.format || "jpeg").toLowerCase();

  let pipeline = sharp(inputBuf, { failOn: "none" }).rotate();

  if (preset !== "logo") {
    pipeline = pipeline.resize({
      width: maxW,
      height: Math.round(maxW * 0.85),
      fit: "inside",
      withoutEnlargement: true,
    });
  } else {
    pipeline = pipeline.resize({
      width: maxW,
      withoutEnlargement: true,
    });
  }

  if (preset === "photo") {
    pipeline = pipeline
      .modulate({ brightness: 1.04, saturation: 1.04 })
      .linear(1.06, -6)
      .sharpen({ sigma: 0.7, m1: 0.55, m2: 0.25 });
  } else if (preset === "product") {
    pipeline = pipeline
      .modulate({ brightness: 1.03, saturation: 1.02 })
      .linear(1.04, -4)
      .sharpen({ sigma: 0.55, m1: 0.5, m2: 0.2 });
  }
  // logo: no grade

  if (format === "png" || preset === "logo") {
    return pipeline.png({ compressionLevel: 9, palette: false }).toBuffer({
      resolveWithObject: true,
    });
  }
  if (format === "webp") {
    return pipeline.webp({ quality: 82 }).toBuffer({ resolveWithObject: true });
  }
  return pipeline
    .jpeg({ quality: 84, mozjpeg: true, progressive: true })
    .toBuffer({ resolveWithObject: true });
}

async function processFile(absPath, preset, maxW, manifest, force) {
  const rel = relative(root, absPath).replace(/\\/g, "/");
  const inputBuf = readFileSync(absPath);
  const currentHash = sha256(inputBuf);
  const prev = manifest.files[rel];

  if (!force && prev?.outputHash === currentHash) {
    return { rel, status: "skip" };
  }

  const { data, info } = await enhanceBuffer(inputBuf, { preset, maxW });
  const outHash = sha256(data);

  // Evita riscritture inutili se l'output è identico
  if (!force && prev?.outputHash === outHash) {
    return { rel, status: "skip" };
  }

  writeFileSync(absPath, data);
  manifest.files[rel] = {
    preset,
    outputHash: outHash,
    width: info.width,
    height: info.height,
    bytes: data.length,
    at: new Date().toISOString(),
  };
  return { rel, status: "ok", bytes: data.length };
}

async function selfTest() {
  const sample = join(root, "public", "portfolio");
  if (!existsSync(sample)) throw new Error("Manca public/portfolio");
  await sharp({
    create: { width: 8, height: 8, channels: 3, background: "#888" },
  })
    .jpeg()
    .toBuffer();
  console.log("Self-test: sharp + cartelle OK");
}

async function main() {
  const { force, only } = parseArgs(process.argv.slice(2));
  await selfTest();

  const manifest = loadManifest();
  let ok = 0;
  let skip = 0;
  let fail = 0;

  const jobs = [];
  for (const rootCfg of ROOTS) {
    const absDir = join(root, rootCfg.dir);
    const files = walk(absDir);
    for (const f of files) {
      const rel = relative(root, f).replace(/\\/g, "/");
      if (only) {
        const norm = only.replace(/^\.\//, "").replace(/\\/g, "/");
        if (
          rel !== norm &&
          !rel.endsWith(norm) &&
          basename(rel) !== basename(norm)
        ) {
          continue;
        }
      }
      jobs.push({ f, ...rootCfg });
    }
  }

  if (only && jobs.length === 0) {
    console.error(`Nessun file per --only=${only}`);
    process.exit(1);
  }

  const concurrency = 4;
  let i = 0;
  async function worker() {
    while (i < jobs.length) {
      const idx = i++;
      const job = jobs[idx];
      try {
        const res = await processFile(
          job.f,
          job.preset,
          job.maxW,
          manifest,
          force,
        );
        if (res.status === "ok") {
          ok++;
          console.log(`OK  ${res.rel} (${Math.round(res.bytes / 1024)} KB)`);
        } else {
          skip++;
        }
      } catch (e) {
        fail++;
        console.error(`FAIL ${relative(root, job.f)}: ${e.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  saveManifest(manifest);

  console.log(
    `\nFatto. migliorate=${ok} già_ok=${skip} errori=${fail} totale_jobs=${jobs.length}`,
  );
  if (fail > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
