export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  cover: string;
  /** Paragrafi del corpo — plain text, niente HTML */
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "riverbero-ristorante-perche-alzano-la-voce",
    title: "Riverbero in ristorante: perché alzano la voce",
    excerpt:
      "Non è «atmosfera»: è acustica. Cosa succede in sala piena e perché i pannelli fonoassorbenti cambiano la serata.",
    date: "2026-09-03",
    readingMinutes: 5,
    cover: "/portfolio/7su7-5.jpg",
    body: [
      "In tanti locali la sera si alza il volume delle conversazioni senza che nessuno se ne accorga. Non è cattiva educazione: è il riverbero. Le voci rimbalzano su soffitti lisci, vetrate e pavimenti duri, e ogni tavolo deve «gridare» per farsi sentire.",
      "Il risultato: clienti stanchi, staff affaticato, cover che soffre. Spesso si interviene sulla musica o sull’arredo, ma il problema resta strutturale.",
      "La correzione acustica HoReCa non chiude il locale: riduce il tempo di riverbero dove conta — soffitto, pareti, isole. Si parla al tavolo senza alzare la voce.",
      "Se riconosci questo schema nel tuo ristorante, il primo passo è una foto della sala e i mq approssimativi. Da lì possiamo dire se basta un kit a catalogo o serve un sopralluogo a Roma.",
    ],
  },
  {
    slug: "isole-soffitto-quando-servono",
    title: "Isole a soffitto: quando servono davvero",
    excerpt:
      "Pannelli flottanti: design e assorbimento bilaterale. Ideali con soffitti alti o quando non vuoi rivestire tutto.",
    date: "2026-09-03",
    readingMinutes: 4,
    cover: "/portfolio/20180215_141018.jpg",
    body: [
      "Le isole acustiche sospese lavorano su entrambe le facce e diventano elemento di arredo. Sono utili quando il soffitto è alto, quando non puoi (o non vuoi) chiudere tutta la superficie, o quando cerchi un intervento visibile ma elegante.",
      "Non sono la soluzione universale: in sale basse e molto riverberanti a volte conviene un soffitto continuo più economico. In hotel e ristoranti di pregio, invece, le isole risolvono comfort e immagine insieme.",
      "In preventivo contiamo pezzi, tessuto e tipo di sospensione — non un generico «mq a caso». Se hai soffitti alti a Roma, spesso combiniamo isole e pareti.",
    ],
  },
  {
    slug: "fai-da-te-vs-posa-professionale",
    title: "Fai-da-te vs posa professionale",
    excerpt:
      "Kit con guida inclusa o posa con partner / chiavi in mano a Roma: come scegliere senza spendere il doppio.",
    date: "2026-09-03",
    readingMinutes: 4,
    cover: "/portfolio/alla-lampara.jpg",
    body: [
      "Molti prodotti SoundOff (Hexagon, Wave) si montano in autonomia con guida inclusa: ha senso se hai uno staff tecnico, un falegname di fiducia o un periodo di chiusura breve.",
      "La posa professionale conviene quando il soffitto è complesso, servono mezzi di sollevamento, orari notturni, o vuoi un risultato «chiavi in mano». A Roma e provincia possiamo seguire noi; fuori zona collaboriamo con partner selezionati.",
      "Non c’è un approccio «migliore» in assoluto: c’è quello adatto al tuo cantiere. In preventivo ti diciamo onestamente quale strada costa meno in tempo e rischi.",
    ],
  },
  {
    slug: "acustica-roma-sopralluogo-vs-online",
    title: "Acustica a Roma: sopralluogo vs preventivo online",
    excerpt:
      "Quando basta una foto e quando serve venire in sala. Onesti sui tempi e sull’area di intervento.",
    date: "2026-09-03",
    readingMinutes: 4,
    cover: "/portfolio/da-dante.jpg",
    body: [
      "Sopralluogo in presenza: Roma e provincia. Serve quando la sala è atipica, ci sono vincoli estetici forti, o vuoi un progetto chiavi in mano con posa.",
      "Preventivo e consulenza online: ovunque. Con foto, mq e una descrizione del problema (eco, cover alta, soffitto alto) quotiamo prodotti standard e ti diciamo se serve un partner di posa fuori Roma.",
      "Non promettiamo tempi impossibili: risposta entro 24–48 ore lavorative sui casi standard. Se sei fuori area, te lo diciamo subito — senza far finta di essere ovunque.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
