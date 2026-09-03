/**
 * Genera una bozza di settimana social (4 post) dai case study del sito.
 *
 * Uso (dal terminale, cartella acusticahoreca):
 *   node scripts/generate-social-week.mjs
 *   node scripts/generate-social-week.mjs 2026-W37
 *
 * Output: social/queue/week-YYYY-Www.json
 * Modalità: SICURA → status pending_approval (non pubblica da sola).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const HASHTAGS =
  "#acustica #ristorantiRoma #HoReCa #Roma #SoundOff";

const CASE_STUDIES = [
  {
    id: "alla-lampara",
    locale: "Alla Lampara",
    image: "alla-lampara.jpg",
    problema: "Sala piena la sera: conversazioni impossibili.",
    risultato: "Si parla al tavolo senza gridare.",
  },
  {
    id: "da-dante",
    locale: "Da Dante",
    image: "da-dante.jpg",
    problema: "Soffitto alto e superfici dure: riverbero lungo.",
    risultato: "Meno eco, più ospitalità.",
  },
  {
    id: "7su7",
    locale: "Ristorante 7su7",
    image: "7su7-5.jpg",
    problema: "Cover alta: il parlato diventava rumore continuo.",
    risultato: "Serate più comode per ospiti e staff.",
  },
  {
    id: "felice",
    locale: "Felice a Testaccio",
    image: "felice-a-testaccio.jpg",
    problema: "Serve comfort senza pannelli «da ufficio».",
    risultato: "Acustica migliorata restando fedeli all’identità.",
  },
  {
    id: "osteria-sole",
    locale: "Osteria del Sole",
    image: "osteria-del-sole.jpg",
    problema: "Ambiente raccolto ma rumoroso nei picchi.",
    risultato: "Conversazione più chiara ai tavoli.",
  },
];

const DAYS = [
  { day: "lunedì", time: "10:30", pillar: "portfolio" },
  { day: "mercoledì", time: "12:00", pillar: "problema" },
  { day: "venerdì", time: "18:30", pillar: "metodo" },
  { day: "sabato", time: "11:00", pillar: "cta" },
];

function isoWeekLabel(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

function captionFor(cs, pillar) {
  if (pillar === "portfolio") {
    return `${cs.locale}, Roma.\n\n${cs.problema}\n${cs.risultato}\n\n→ acusticahoreca.it\n→ WhatsApp 393 97 45 428\n\n${HASHTAGS}`;
  }
  if (pillar === "problema") {
    return `Se al tavolo alzano la voce, non è «atmosfera».\nÈ riverbero.\n\nCome a ${cs.locale}: ${cs.problema}\n${cs.risultato}\n\nPreventivo in 24–48h: acusticahoreca.it/contatti\n\n${HASHTAGS}`;
  }
  if (pillar === "metodo") {
    return `Metodo NRS — onesti sui tempi.\n\n• Roma e provincia → sopralluogo\n• Altrove → consulenza e preventivo online\n\nLavoro come ${cs.locale}: soluzioni discrete, risultato concreto.\n\n${HASHTAGS}`;
  }
  return `Hai un locale rumoroso?\n\nMandaci una foto.\nRispondiamo in 24–48 ore lavorative.\n\nWhatsApp 393 97 45 428\nacusticahoreca.it\n\n(Esempio: ${cs.locale})\n\n${HASHTAGS}`;
}

const weekArg = process.argv[2];
const week = weekArg && /^\d{4}-W\d{2}$/.test(weekArg) ? weekArg : isoWeekLabel();

const offset = Number(week.replace(/\D/g, "").slice(-2)) % CASE_STUDIES.length;

const posts = DAYS.map((slot, i) => {
  const cs = CASE_STUDIES[(offset + i) % CASE_STUDIES.length];
  return {
    id: `${week.toLowerCase()}-${i + 1}`,
    day: slot.day,
    suggestedTime: slot.time,
    pillar: slot.pillar,
    image: `public/portfolio/${cs.image}`,
    imageUrl: `https://www.acusticahoreca.it/portfolio/${cs.image}`,
    caption: captionFor(cs, slot.pillar),
  };
});

const payload = {
  week,
  label: `Settimana ${week}`,
  mode: "sicura",
  status: "pending_approval",
  channels: ["instagram", "facebook"],
  notes:
    "Dopo OK di Pasquale: caricare su Buffer (IG + FB) agli orari suggeriti. Non pubblicare senza approvazione.",
  posts,
};

const outDir = path.join(root, "social", "queue");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `week-${week}.json`);
fs.writeFileSync(outFile, JSON.stringify(payload, null, 2), "utf8");

console.log(`OK — bozza creata: social/queue/week-${week}.json`);
console.log(`Post: ${posts.length} · status: pending_approval`);
console.log("Prossimo passo: rivedi i testi, scrivi OK in chat, poi Buffer.");
