# NRS Soluzioni Acustiche — acusticahoreca.it

Sito vetrina per correzione acustica HoReCa. Stack: Next.js 16, Tailwind CSS 4, TypeScript.

## Sviluppo locale

```bash
cd acusticahoreca
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

## Deploy su Vercel (gratis)

1. Crea account su [vercel.com](https://vercel.com)
2. Collega la cartella `acusticahoreca` (o push su GitHub)
3. Importa il progetto → Deploy automatico
4. In **Settings → Domains** aggiungi `acusticahoreca.it`

## DNS Aruba → Vercel

Nel **Pannello di Controllo** di `acusticahoreca.it`:

| Tipo | Nome | Valore |
|------|------|--------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

(Vercel mostrerà i valori esatti dopo l'aggiunta del dominio.)

## Email form contatti

Il form invia a `/api/contatti` e logga su console. Per invio email reale:

1. Registrati su [resend.com](https://resend.com) (piano free)
2. Aggiungi `RESEND_API_KEY` in Vercel → Environment Variables
3. Collegare l'API route a Resend (prossimo step)

## Struttura

- `/` — Homepage
- `/servizi` — Servizi
- `/portfolio` — Galleria lavori
- `/chi-siamo` — NRS
- `/contatti` — Form preventivo

Foto portfolio in `public/portfolio/` (29 immagini da archivio lavori).
