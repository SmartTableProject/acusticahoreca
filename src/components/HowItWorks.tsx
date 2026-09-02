import Link from "next/link";
import { site } from "@/data/site";

const steps = [
  {
    step: "01",
    title: "Scegli online",
    text: "Configura pannelli standard (forma, colore, mq) e ricevi il prezzo senza sopralluogo. Spedizione in tutta l'area di competenza.",
  },
  {
    step: "02",
    title: "Consulenza a distanza",
    text: "Invia foto e planimetria del locale. Ti indichiamo quantità e posizionamento con un report tecnico — senza uscire da Roma.",
  },
  {
    step: "03",
    title: "Sopralluogo Roma",
    text: `Per progetti complessi in ${site.surveyArea}: sopralluogo, misurazioni e posa in opera con tempi concordati.`,
  },
  {
    step: "04",
    title: "Partner installazione",
    text: "Fuori Roma, su richiesta e disponibilità, coordiniamo partner tecnici per la sola installazione.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-stone-200 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
          Come lavoriamo
        </p>
        <h2 className="mt-2 text-3xl font-bold text-nrs-dark">
          Tecnico, trasparente, senza sprechi di tempo
        </h2>
        <p className="mt-4 max-w-2xl text-stone-600">
          Operiamo in modo snello: prodotti standard acquistabili online, consulenza
          remota per la maggior parte dei clienti, sopralluogo riservato a Roma dove
          possiamo garantire presenza diretta.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="border-l-2 border-nrs-dark pl-5"
            >
              <span className="text-xs font-bold text-nrs-grey">{item.step}</span>
              <h3 className="mt-2 font-bold text-nrs-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-stone-500">
          {site.partnerNote}
        </p>

        <Link
          href="/servizi"
          className="mt-6 inline-block text-sm font-semibold text-nrs-dark underline underline-offset-4 hover:no-underline"
        >
          Dettaglio servizi e fasce →
        </Link>
      </div>
    </section>
  );
}
