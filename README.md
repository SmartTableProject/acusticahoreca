# NRS Soluzioni Acustiche — acusticahoreca.it

Sito vetrina per correzione acustica HoReCa. Stack: Next.js 16, Tailwind CSS 4, TypeScript, Resend.

## Sviluppo locale

```bash
cd acusticahoreca
npm install
cp .env.example .env.local
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

Senza `RESEND_API_KEY` in locale il form funziona ma le richieste vengono solo loggate in console.

## Email form contatti (Resend)

### 1. Account Resend
1. Registrati su [resend.com](https://resend.com) (free: 3.000 email/mese)
2. Crea una **API Key** → copia il valore `re_...`

### 2. Verifica dominio (produzione)
1. Resend → **Domains** → Add `acusticahoreca.it`
2. Aggiungi i record DNS che Resend ti indica (su Aruba)
3. Quando verificato, imposta:
   ```
   RESEND_FROM=NRS Soluzioni Acustiche <preventivi@acusticahoreca.it>
   ```

### 3. Variabili su Vercel
**Settings → Environment Variables** (Production + Preview):

| Variabile | Valore |
|-----------|--------|
| `RESEND_API_KEY` | `re_...` dalla dashboard Resend |
| `RESEND_FROM` | `NRS Soluzioni Acustiche <preventivi@acusticahoreca.it>` |
| `NEXT_PUBLIC_GA_ID` | *(opzionale)* ID Google Analytics `G-...` |

Dopo il salvataggio: **Redeploy** il progetto.

### Cosa invia il form
- Email a **preventivi@acusticahoreca.it** con tutti i dati (reply-to = cliente)
- Email di conferma automatica al cliente

## Deploy su Vercel

1. Push su GitHub → deploy automatico
2. **Settings → Domains** → `acusticahoreca.it`

## DNS Aruba → Vercel

| Tipo | Nome | Valore |
|------|------|--------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

## Struttura

- `/` — Homepage
- `/servizi` — Tre livelli servizio
- `/portfolio` — Galleria (44 locali, 193 foto)
- `/chi-siamo` — NRS
- `/contatti` — Form preventivo
- `/privacy` — Privacy policy

## Portfolio

```bash
npm run sync-portfolio
```

Copia foto da `../selezione/ridotte` e rigenera `portfolio.generated.ts`.
