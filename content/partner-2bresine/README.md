# Catalogo partner — 2B Resine / SoundOff

**Stato:** `draft` — in attesa autorizzazione ufficiale 2B Resine per pubblicazione testi/immagini.

**Contatto partner:** marketing@2bresine.it · info@2bresine.it · Milano +39 02 3510559 · Manerbio +39 030 9383342

## Cosa abbiamo raccolto

Analisi del sito [2bresine.it](https://2bresine.it/) (sett. 2026). 2B Resine è il **produttore**; la linea design HoReCa è commercializzata anche come **SoundOff** (link esplicito da homepage 2B).

**Nota:** 2B **non ha un blog** tradizionale. I contenuti utili sono in:
- [Design antirumore](https://2bresine.it/soluzioni-acustiche-con-pannelli-insonorizzanti/) — prodotti + case study
- [Reazione al fuoco](https://2bresine.it/reazione-al-fuoco-dei-pannelli-fonoassorbenti/) — normativa + materiali
- [Azienda](https://2bresine.it/azienda/) — storia, team, processo
- Catalogo PDF storico (SlideShare) — Basfon e codici articolo

## Struttura cartella

```
content/partner-2bresine/
├── README.md                 ← questo file
├── IMPLEMENTATION.md         ← piano tecnico sito NRS
├── sources.json              ← URL e data raccolta
├── company.json              ← dati azienda (non copy-paste marketing)
├── products/*.json           ← schede prodotto draft
└── blog/*.json               ← articoli draft (adattati HoReCa / Roma)
```

## Regole prima della pubblicazione

1. **OK scritto** da 2B Resine (email o accordo) su testi, foto, marchi SoundOff/2B.
2. Rivedere **fasce prezzo** NRS con listino reale partner (le nostre sono orientative).
3. Non copiare verbatim blocchi marketing 2B: adattare tono NRS (Roma, onesti, ristoratore).
4. Citare partner: «Partner tecnico SoundOff — 2B Resine» + link a 2bresine.it dove opportuno.
5. Case study 2B (Lazzati, Pacific, ecc.) **non** vanno in portfolio NRS — solo come riferimento o citazione con permesso.

## Prossimo passo operativo

Quando arriva l’OK ufficiale:
1. Segnare `"publishStatus": "approved"` nei JSON interessati
2. Eseguire merge in `src/data/` (vedi IMPLEMENTATION.md)
3. Push sito + eventuali post social «linea SoundOff»
