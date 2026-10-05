/**
 * Fasce pubbliche derivate dal listino netto 2B (ott 2026).
 * I prezzi NETTI stanno solo in content/partner-2bresine/listino/ (non importare lì dal client).
 *
 * Margine provvisorio: vendita materiale ≈ netto × 2 (finché Luca non conferma la formula).
 */
export const listinoMeta = {
  sourceDate: "2026-10-05",
  marginFactor: 2,
  marginNote:
    "Fasce calcolate con margine provvisorio ×2 sul netto 2B. Aggiornare quando Luca conferma la formula.",
  ivaNote: "Verificare con Luca se i netti sono + IVA o IVA esclusa.",
} as const;

/** Prezzi vendita orientativi (materiale) — per wizard e schede */
export const retailBands = {
  basfon: {
    /** nuda 50 mm ≈ 32,5 €/mq netto → ~65; RAL ≈ 69 netto → ~140 */
    eurPerMqLow: 55,
    eurPerMqHigh: 140,
    label: "da ~55–140 €/mq",
    note: "Nuda più economica; RAL acqua circa il doppio. Spessori 40/50 mm.",
  },
  wave: {
    /** 30 € netto / 0,36 mq → ~83 netto/mq → ~165 vendita */
    eurPerMqLow: 150,
    eurPerMqHigh: 180,
    eurPerPieceLow: 55,
    eurPerPieceHigh: 120,
    label: "da ~55–120 €/pz",
    note: "Wave sp. 50 mm: 600×600 o 1200×600. Alto rendimento su poca superficie.",
  },
  hexagonKit: {
    /** kit 150 € netto → ~300 vendita; pezzo 33 → ~66 */
    eurPerKit: 300,
    kitSize: "2000×1200 mm",
    eurPerPieceLow: 60,
    eurPerPieceHigh: 70,
    eurPerMqLow: 120,
    eurPerMqHigh: 160,
    label: "da ~300 €/kit",
    note: "Kit ufficiale 2000×1200. Singolo Hexagon (conf. adesivo) da ~60–70 €/pz.",
  },
  isole: {
    /** Ø800 base 60→120; Ø1200 tessuto 150→300 + sosp. 12 */
    eurPerIslandLow: 130,
    eurPerIslandHigh: 320,
    label: "da ~130–320 €/isola",
    note: "Sp. 80 mm. RAL/tessuto più del base. + kit sospensione (~12 € / 4 punti).",
  },
  fiberfon: {
    eurPerMqLow: 40,
    eurPerMqHigh: 50,
    label: "da ~40–50 €/mq",
    note: "Solo sp. 50 mm; bianca o nera nuda (prima del tessuto Pugi).",
  },
} as const;
