# Partner 2B Resine / SoundOff — Catalogo per vendita online NRS

**Aggiornato:** 2026-09-07  
**Stato:** bozza operativa (listino e PDF ufficiali ancora da Luca)  
**Sito NRS:** acusticahoreca.it  
**Fonti:** 2bresine.it · soundoff.it · vocale Luca 2026-09-07

## Cosa abbiamo fatto oggi

1. Riletto la vecchia lista richieste partner  
2. Incrociato con il vocale di Luca (4 tipologie, tessuto+colori, melammina nuda/verniciata, Airlite)  
3. Esplorato catalogo pubblico 2B / SoundOff  
4. Selezionato cosa **vende bene online** per HoReCa Roma  
5. Organizzato schede e materiali in questa cartella

## Struttura

```
content/partner-2bresine/
├── README.md                          ← questo file
├── richieste-luca/
│   └── LISTA-RICHIESTE-AGGIORNATA.md  ← cosa chiedere / inviare a Luca
├── prodotti-online/
│   ├── 00-CATALOGO-VENDIBILE.md       ← panoramica priorità A/B/C
│   ├── 01-hexagon.md
│   ├── 02-hexagon-kit.md
│   ├── 03-wave.md
│   ├── 04-basfon-melammina.md
│   ├── 05-isole-sospese.md
│   ├── 06-acoustic-panel.md
│   ├── 07-esagoni-di-luce.md
│   ├── 08-oniricon.md
│   └── 99-non-prioritari.md
├── materiali/
│   ├── melammina.md
│   ├── fiberfon-poliestere.md
│   ├── verniciatura-airlite.md
│   └── reazione-al-fuoco.md
├── products/*.json                    ← bozze precedenti (draft)
├── EMAIL-RICHIESTA-PARTNER.md         ← email ufficiale marchi/foto (ancora valida)
└── sources.json
```

## Verdetto rapido — cosa vendere online

| Priorità | Prodotti | Perché |
|----------|----------|--------|
| **A — subito** | Hexagon / Hexagon Kit, Wave, Basfon, Isole | Già sul sito NRS; configurabili; tipici HoReCa |
| **B — dopo listino** | Acoustic Panel (cornice), Oniricon | Premium / casi speciali |
| **C — no fase 1** | Desk divider, Habitat, Airpren industriale, piramidali grezzi | Ufficio/industria, non e-commerce HoReCa |

Le **4 tipologie** di Luca mappano così:

1. **Poliestere + tessuto** → Hexagon / Hexagon Kit (+ Fiberfon come anima)  
2. **Melammina nuda** → Basfon piano / isole grezze  
3. **Melammina verniciata RAL** → Wave, Basfon verniciato, isole verniciate  
4. **Melammina + Airlite** (premium antibatterica) → stessa famiglia verniciata, upsell

## Listino (ottobre 2026)

Ricevuto da Luca — **prezzi netti a NRS** (non pubblicare):

- [`listino/LISTINO-NETTO-2026-10.md`](listino/LISTINO-NETTO-2026-10.md)
- [`listino/listino-netto-2026-10.json`](listino/listino-netto-2026-10.json)

Fasce pubbliche sul sito (margine provvisorio ×2): `src/data/listino-pubblico.ts`

## Prossimo passo

1. Confermare con Luca formula margine + Airlite + cartella Pugi + IVA  
2. Allineare wizard preventivo ai pezzi reali (opzionale)  
3. Solo dopo OK scritto marchi: pubblicare copy tecnico derivato
