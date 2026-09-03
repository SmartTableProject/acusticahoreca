/**
 * Elenca organizzazioni e canali Buffer (serve BUFFER_API_KEY).
 *
 * Uso:
 *   set BUFFER_API_KEY=...   (PowerShell: $env:BUFFER_API_KEY="...")
 *   node scripts/buffer-setup.mjs
 *
 * Copia BUFFER_CHANNEL_IG e BUFFER_CHANNEL_FB in .env.local / Vercel.
 */

import {
  listChannels,
  listOrganizations,
} from "./lib/buffer-client.mjs";

async function main() {
  console.log("→ Buffer: cerco organizzazioni…");
  const orgs = await listOrganizations();
  if (!orgs?.length) {
    console.error("Nessuna organizzazione trovata.");
    process.exit(1);
  }

  for (const org of orgs) {
    console.log(`\nOrganizzazione: ${org.name}`);
    console.log(`BUFFER_ORG_ID=${org.id}`);

    const channels = await listChannels(org.id);
    if (!channels?.length) {
      console.log("  (nessun canale)");
      continue;
    }

    for (const ch of channels) {
      const svc = (ch.service || "").toLowerCase();
      console.log(`  [${svc}] ${ch.name}`);
      console.log(`    id: ${ch.id}`);
      if (svc.includes("instagram")) {
        console.log(`    → BUFFER_CHANNEL_IG=${ch.id}`);
      }
      if (svc.includes("facebook")) {
        console.log(`    → BUFFER_CHANNEL_FB=${ch.id}`);
      }
    }
  }

  console.log(
    "\nProssimo passo: salva BUFFER_API_KEY, BUFFER_CHANNEL_IG, BUFFER_CHANNEL_FB in .env.local",
  );
  console.log("Poi: npm run social:buffer -- social/queue/week-XXXX.json --dry-run");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
