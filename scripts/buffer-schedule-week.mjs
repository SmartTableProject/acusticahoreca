/**
 * Programma su Buffer i post di una settimana (coda JSON).
 * Modalità SICURA: di default fa solo --dry-run. Per pubblicare in coda Buffer:
 *   node scripts/buffer-schedule-week.mjs social/queue/week-2026-W37.json --confirm
 *
 * Requisiti env:
 *   BUFFER_API_KEY
 *   BUFFER_CHANNEL_IG
 *   BUFFER_CHANNEL_FB
 *
 * Le immagini devono essere URL pubblici (usa imageUrl del JSON → acusticahoreca.it).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  createScheduledPost,
  romeLocalToUtcIso,
} from "./lib/buffer-client.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function loadEnvLocal() {
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i < 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (!process.env[k]) process.env[k] = v;
  }
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const confirm = args.includes("--confirm");
  const dryRun = !confirm || args.includes("--dry-run");
  const fileArg = args.find((a) => !a.startsWith("--"));
  return { confirm, dryRun, fileArg };
}

function resolveSchedule(week, post, index) {
  const fromSchedule = week.schedule?.find((s) => s.id === post.id);
  const date =
    fromSchedule?.date ||
    post.date ||
    null;
  const time =
    fromSchedule?.time ||
    post.suggestedTime ||
    "10:30";
  return { date, time };
}

async function main() {
  loadEnvLocal();
  const { dryRun, fileArg } = parseArgs(process.argv);

  if (!fileArg) {
    console.error(
      "Uso: node scripts/buffer-schedule-week.mjs social/queue/week-YYYY-Www.json [--dry-run|--confirm]",
    );
    process.exit(1);
  }

  const weekPath = path.isAbsolute(fileArg)
    ? fileArg
    : path.join(root, fileArg);
  if (!fs.existsSync(weekPath)) {
    console.error(`File non trovato: ${weekPath}`);
    process.exit(1);
  }

  const week = JSON.parse(fs.readFileSync(weekPath, "utf8"));

  if (week.mode === "sicura" && week.status === "pending_approval" && !dryRun) {
    console.error(
      "Stop: settimana ancora pending_approval. Chiedi OK in chat, poi --confirm.",
    );
    process.exit(1);
  }

  const ig = process.env.BUFFER_CHANNEL_IG?.trim();
  const fb = process.env.BUFFER_CHANNEL_FB?.trim();
  if (!dryRun && (!ig || !fb)) {
    console.error(
      "Servono BUFFER_CHANNEL_IG e BUFFER_CHANNEL_FB. Esegui: npm run social:buffer-setup",
    );
    process.exit(1);
  }

  const channelIds = [ig, fb].filter(Boolean);
  console.log(
    dryRun
      ? "DRY-RUN (nessuna pubblicazione Buffer)"
      : "CONFIRM — invio a Buffer IG + FB",
  );
  console.log(`Settimana: ${week.week} · post: ${week.posts?.length ?? 0}`);

  const results = [];

  for (let i = 0; i < (week.posts || []).length; i++) {
    const post = week.posts[i];
    const { date, time } = resolveSchedule(week, post, i);
    const dueAt =
      date && time ? romeLocalToUtcIso(date, time) : undefined;
    const imageUrl =
      post.imageUrl ||
      (post.image
        ? `https://www.acusticahoreca.it/${post.image.replace(/^public\//, "")}`
        : undefined);

    for (const channelId of channelIds.length ? channelIds : ["IG", "FB"]) {
      const out = await createScheduledPost({
        text: post.caption,
        channelId,
        imageUrl,
        dueAtIso: dueAt,
        dryRun,
      });
      results.push({ postId: post.id, channelId, out });
      console.log(
        dryRun
          ? `  [dry] ${post.id} → ${channelId} @ ${date || "queue"} ${time || ""} | ${imageUrl || "no-img"}`
          : `  OK ${post.id} → ${channelId} post=${out.id} due=${out.dueAt}`,
      );
    }
  }

  if (!dryRun) {
    week.status = "scheduled_via_api";
    week.scheduledAt = new Date().toISOString().slice(0, 10);
    week.apiResults = results.map((r) => ({
      postId: r.postId,
      channelId: r.channelId,
      bufferPostId: r.out?.id,
      dueAt: r.out?.dueAt,
    }));
    fs.writeFileSync(weekPath, JSON.stringify(week, null, 2), "utf8");
    console.log(`Aggiornato status in ${path.relative(root, weekPath)}`);
  } else {
    console.log("\nSe l’anteprima va bene: ripeti con --confirm (dopo OK in chat).");
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
