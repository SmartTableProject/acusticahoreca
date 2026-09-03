# Piano implementazione — contenuti 2B Resine su acusticahoreca.it

**Stato:** progettazione (non implementato in produzione finché `publishStatus !== approved`)

---

## Sintesi analisi 2bresine.it

| Elemento | Su 2B | Su NRS oggi | Azione |
|----------|-------|-------------|--------|
| Blog | ❌ (no sezione blog) | ✅ 4 articoli generici | Aggiungere 4 articoli partner (draft in `content/`) |
| Schede prodotto | ✅ pagina Design antirumore | ✅ 4 prodotti base | Arricchire specs + 2 prodotti nuovi (Hexagon, Acoustic Panel) |
| Case study | ✅ Lazzati, Pacific, Pesce d'Oro | ✅ portfolio Roma NRS | **Non** mixare — solo NRS portfolio; citare partner se OK |
| Normativa fuoco | ✅ pagina dedicata | ❌ | Blog + blocco «Sicurezza» in scheda prodotto |
| Catalogo Basfon | 📄 PDF SlideShare | ⚠️ scheda minima | Chiedere PDF aggiornato a 2B |
| SoundOff | 🔗 link da homepage | ✅ partner label | Verificare URL canonici su soundoff.it |

---

## Fase 1 — Pipeline contenuti (priorità alta)

### 1.1 Schema dati prodotto esteso

File: [`src/data/products.ts`](../../src/data/products.ts)

Aggiungere campi opzionali:

```ts
specs?: { label: string; value: string }[];
dimensions?: string[];
material?: string;
fireClass?: string;
partnerBrand?: "SoundOff" | "2B Resine";
partnerSourceUrl?: string;
publishStatus?: "draft" | "live";
```

### 1.2 Script merge partner → sito

Nuovo: `scripts/merge-partner-content.mjs`

- Legge `content/partner-2bresine/products/*.json`
- Solo record con `publishStatus: "approved"`
- Merge in `products.ts` o genera `products.partner.generated.ts`
- Build fallisce se draft presente senza flag `--allow-draft` (sicurezza)

### 1.3 Blog con stati

Estendere [`src/data/blog.ts`](../../src/data/blog.ts):

```ts
publishStatus?: "draft" | "published";
category?: "horeca" | "normativa" | "prodotti";
partnerAttribution?: string;
```

- `generateStaticParams` → solo `published`
- Draft visibili in dev con `?preview=partner`

---

## Fase 2 — UI schede prodotto (priorità alta)

File: [`src/app/prodotti/[slug]/page.tsx`](../../src/app/prodotti/[slug]/page.tsx)

Nuovi blocchi:

1. **Tabella specifiche tecniche** (da `specs[]`)
2. **Sicurezza antincendio** — Euroclasse, melammina vs poliestere (copy da blog normativa)
3. **Dimensioni disponibili** — griglia mm
4. **Partner strip** — logo testuale SoundOff / 2B + link
5. **Galleria partner** — quando arrivano foto HD

Componenti da creare:

- `ProductSpecs.tsx`
- `ProductFireSafety.tsx`
- `PartnerAttribution.tsx`

---

## Fase 3 — Blog partner (priorità media)

4 articoli pronti in `content/partner-2bresine/blog/`:

1. Reazione al fuoco ristorante
2. Comfort acustico e permanenza
3. Wave vs Hexagon
4. Normativa locali pubblici (DPCM)

Dopo OK partner:

- Merge in `blog.ts` o `blog.partner.generated.ts`
- Link incrociati da schede prodotto e landing Roma
- Sitemap aggiornata automaticamente

---

## Fase 4 — Catalogo prodotti (priorità media)

| Prodotto | Azione |
|----------|--------|
| hexagon-kit | Arricchire specs (350mm, spessori, kit sizes) |
| wave | Allineare copy 2B + dimensioni 600×600 / 1200×600 |
| basfon | Integrare dati catalogo + pagina fuoco |
| isole | **Richiedere** specs a 2B — poi pubblicare |
| hexagon | **Nuova** scheda (modulo singolo) |
| acoustic-panel | **Nuova** scheda premium (opzionale) |
| desk-divider | Escluso HoReCa — solo uffici, skip |

---

## Fase 5 — Richiesta formale a 2B (da inviare)

Email a `marketing@2bresine.it` — bozza punti:

1. Autorizzazione uso testi tecnici e marchio SoundOff/2B su acusticahoreca.it
2. Pacchetto foto prodotto HoReCa (Hexagon, Wave, Basfon, isole)
3. Schede tecniche PDF aggiornate (α, peso, montaggio)
4. Listino rivenditori / fasce per Roma-Centro Italia
5. Conferma URL soundoff.it da linkare
6. Eventuali case study riutilizzabili (testo + foto)

---

## Fase 6 — SEO e legal

- `JsonLd` Product con `brand: SoundOff`, `manufacturer: 2B Resine`
- Footer/chi-siamo: paragrafo partnership ampliato con link 2bresine.it
- Disclaimer su pagine con copy derivato partner
- `robots`: noindex su preview draft

---

## Ordine di implementazione consigliato

```
OK partner → merge script → specs UI → blog publish → nuovi prodotti → SEO
```

**Stima sviluppo:** 1–2 giorni dopo ricezione materiali (foto + OK scritto).

---

## Cosa NON fare prima dell'OK

- Pubblicare copy verbatim da 2bresine.it
- Usare case study Lazzati/Pacific come lavori NRS
- Pubblicare classi fuoco senza conferma schede aggiornate
- Linkare soundoff.it senza verificare pagine prodotto live
