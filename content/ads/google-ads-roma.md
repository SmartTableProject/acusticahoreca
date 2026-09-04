# Google Ads — Campagna Search Roma

Documento operativo per la prima campagna a pagamento di **NRS / acusticahoreca.it**.  
Non spendere finché tracking e conversione non sono verificati (vedi checklist in fondo).

---

## Obiettivo

- **Tipo:** Search (rete di ricerca Google)
- **Conversione primaria:** invio form preventivo / contatti → pagina `/contatti/grazie` + evento `generate_lead` / `conversion`
- **Conversione secondaria (opzionale):** click WhatsApp (`click_whatsapp`) — non ottimizzare su questa all’inizio

---

## Targeting geografico

| Impostazione | Valore consigliato |
|---|---|
| Paese | Italia |
| Focus | Roma + provincia (raggio ~30–40 km da Roma) **oppure** province RM + LT |
| Lingua | Italiano |
| Esclusioni | Resto d’Italia in fase 1 (ampliare dopo 2 settimane se CPA ok) |

---

## Budget di test

- **€8–15 / giorno** per **14 giorni** (~€110–210 totali)
- Strategia offerte: **Massimizza conversioni** (con budget basso) oppure CPC manuale €0,80–1,50 se le conversioni sono poche all’inizio
- Dopo 2 settimane: alza solo se CPA (costo per lead) ti convince

---

## URL finale (con UTM)

```
https://www.acusticahoreca.it/acustica-ristorante-roma?utm_source=google&utm_medium=cpc&utm_campaign=roma_search
```

Percorso percorso utente: Landing Roma → **Preventivo** o WhatsApp → form → `/contatti/grazie`.

---

## Keyword (tema: ristorante / HoReCa Roma)

### Exact / Phrase (prioritarie)

| Keyword | Match |
|---|---|
| acustica ristorante Roma | exact + phrase |
| pannelli fonoassorbenti Roma | phrase |
| correzione acustica ristorante | phrase |
| riverbero ristorante | phrase |
| isolamento acustico ristorante Roma | phrase |
| pannelli acustici bar Roma | phrase |
| ridotto rumore ristorante | phrase |
| fonoassorbenti locali commerciali Roma | phrase |

### Broad match modificato (con attenzione)

- acustica horeca Roma
- soffitto fonoassorbente ristorante

Aggiungi keyword **negative** subito (sotto) per non bruciare budget.

---

## Negative keyword (essenziali)

```
casa
appartamento
ufficio open space
scuola
asilo
industriale
capannone
gratis
fai da te tutorial
download
lavoro
assunzione
cv
stage
diy
isolamento termico
infissi
serramenti
vetrocamera
```

---

## 3 annunci RSA (Responsive Search Ads)

Copia allineata al sito: onesti sui tempi, sopralluogo Roma, preventivo 24–48h.

### RSA 1 — Problema riverbero

**Titoli (max 30 caratteri circa ciascuno):**

1. Acustica ristorante Roma  
2. Meno eco, più ospiti  
3. Preventivo in 24–48h  
4. Sopralluogo Roma e provincia  
5. Il locale finalmente comodo  
6. Partner tecnico SoundOff  
7. Onesti sui tempi  
8. 44 locali documentati  
9. Correzione acustica HoReCa  
10. NRS Soluzioni Acustiche  

**Descrizioni:**

1. Se al tavolo alzano la voce, è riverbero. Correzione acustica per ristoranti a Roma. Preventivo online in 24–48 ore.  
2. Sopralluogo in Roma e provincia. Online altrove. Pannelli certificati per locali pubblici. Scrivici.

### RSA 2 — Sopralluogo locale

**Titoli:**

1. Sopralluogo acustica Roma  
2. Ristoranti e bar HoReCa  
3. Misure e posa in zona  
4. Preventivo senza fuffa  
5. SoundOff per il tuo locale  
6. Risposta in 24–48h  
7. Facciamo sul serio  
8. Centro Italia — online  
9. Foto + mq = preventivo  
10. Contattaci su WhatsApp  

**Descrizioni:**

1. Non promettiamo visite ovunque: a Roma veniamo; fuori zona preventivo e consulenza a distanza.  
2. Galleria reale di interventi. Chiedi un preventivo guidato o una foto del tuo locale.

### RSA 3 — Preventivo rapido

**Titoli:**

1. Preventivo acustica Roma  
2. Pannelli fonoassorbenti  
3. Hexagon Basfon Wave  
4. Rispondiamo in 24–48h  
5. Niente prezzo inventato  
6. Quotazione su dati reali  
7. Locale comodo = cover  
8. Acustica HoReCa  
9. Richiedi preventivo ora  
10. acusticahoreca.it  

**Descrizioni:**

1. Wizard online: tipo locale, mq, soffitto o parete. Ti rispondiamo entro 24–48 ore lavorative.  
2. Prodotti certificati per pubblici esercizi. Estetica da locale, non da cantiere grezzo.

---

## Estensioni consigliate

- **Sito:** Preventivo, Portfolio, Prodotti, Contatti  
- **Call:** +39 393 97 45 428  
- **Callout:** Sopralluogo Roma · Preventivo 24–48h · Partner SoundOff · Onesti sui tempi  
- **Snippet strutturato:** Servizi → Sopralluogo, Preventivo online, Consulenza remota, Posa partner

---

## Setup tecnico (ordine)

1. Account **Google Analytics 4** → proprietà sito `acusticahoreca.it`  
2. Account **Google Ads** → collega GA4  
3. Crea conversione **Invio preventivo**:
   - Tipo: sito web / evento  
   - Oppure URL contiene `/contatti/grazie`  
   - Copia **ID** (`AW-……`) e **label** conversione  
4. Su **Vercel → Environment Variables** (Production):

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=xxxxxxxx
```

5. **Redeploy**  
6. Test: apri il sito → **Accetta tutto** → invia form di prova → verifica evento in GA4 DebugView e conversione in Ads (può richiedere qualche ora)  
7. Solo allora: attiva campagna Search

---

## Post social di supporto (settimana lancio Ads)

Due caption per Instagram/Facebook (max 5 hashtag IG):

**Post 1**  
Se al tavolo alzano la voce, non è atmosfera: è riverbero.  
A Roma facciamo sopralluogo. Online, preventivo in 24–48h.  
→ acusticahoreca.it/acustica-ristorante-roma  

#acustica #ristorantiRoma #HoReCa #Roma #SoundOff

**Post 2**  
Preventivo guidato per ristoranti: foto della sala + mq.  
Ti diciamo se basta un kit o serve venire in locale.  
WhatsApp 393 97 45 428  

#acustica #ristorantiRoma #HoReCa #Roma #SoundOff

---

## Cosa non fare in fase 1

- Display / Performance Max ampio senza conversioni stabili  
- Budget alto «per vedere»  
- Keyword generiche tipo «isolamento acustico» senza negative  
- Ottimizzare su click WhatsApp come conversione primaria
