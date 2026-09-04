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
**Settings → Environment Variables** (Production):

| Variabile | Valore (test senza dominio) | Valore (dominio Verified) |
|-----------|----------------------------|---------------------------|
| `RESEND_API_KEY` | `re_...` | `re_...` |
| `RESEND_FROM` | `NRS Soluzioni Acustiche <onboarding@resend.dev>` | `NRS Soluzioni Acustiche <preventivi@acusticahoreca.it>` |
| `CONTACT_INBOX` | la **tua Gmail** dell’account Resend | `preventivi@acusticahoreca.it` |
| `NEXT_PUBLIC_GA_ID` | *(opzionale)* `G-…` | stesso |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | *(opzionale)* `AW-…` | stesso |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | *(opzionale)* label conversione | stesso |

**Importante:** finché il dominio non è Verified, Resend accetta solo mittente `onboarding@resend.dev` e destinatario = email del tuo account Resend.

Dopo il salvataggio: **Redeploy** il progetto.

### Cosa invia il form
- Email a **preventivi@acusticahoreca.it** con tutti i dati (reply-to = cliente)
- Email di conferma automatica al cliente
- Se presenti: UTM / `gclid` (da dove arriva il lead Ads)

## Google Analytics + Google Ads

1. Banner cookie: **Accetta tutto** (analitica + Ads) oppure **Solo tecnici**
2. Consent Mode v2: default `denied` finché l’utente non sceglie
3. Dopo submit form → redirect `/contatti/grazie` + eventi `generate_lead` / `conversion`
4. Guida campagna Search Roma: [`content/ads/google-ads-roma.md`](content/ads/google-ads-roma.md)

Su Vercel, dopo aver creato la conversion action in Google Ads, inserisci ID e label (vedi tabella sopra) e fai Redeploy. **Non attivare la campagna** finché un form di prova non risulta come conversione.

## Deploy su Vercel

1. Push su GitHub → deploy automatico
2. **Settings → Domains** → `acusticahoreca.it`

## DNS Aruba → Vercel

| Tipo | Nome | Valore |
|------|------|--------|
| A | @ | `216.198.79.1` (verifica in dashboard Vercel) |
| CNAME | www | valore `*.vercel-dns-*.com` mostrato da Vercel |

## Struttura

- `/` — Homepage
- `/servizi` — Tre livelli servizio
- `/prodotti` — Catalogo + schede
- `/portfolio` — Galleria
- `/preventivo` — Wizard preventivo
- `/acustica-ristorante-roma` — Landing SEO / Ads Roma
- `/contatti` — Form · `/contatti/grazie` dopo invio
- `/blog` — Guide
- `/chi-siamo` — NRS
- `/privacy` — Privacy + cookie

## Portfolio

```bash
npm run sync-portfolio
```

Copia foto da `../selezione/ridotte` e rigenera `portfolio.generated.ts`.
