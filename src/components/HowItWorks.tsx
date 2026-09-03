import Image from "next/image";
import Link from "next/link";
import { contactTierLinks, site } from "@/data/site";

const steps = [
  {
    step: "01",
    title: "Scegli online",
    text: `Indica prodotto e metratura. Preventivo entro ${site.responseTime}, senza sopralluogo.`,
    image: "/portfolio/20180608_100932.jpg",
    href: contactTierLinks.preventivo,
  },
  {
    step: "02",
    title: "Consulenza a distanza",
    text: "Invia foto e planimetria. Report con mq consigliati e posizionamento.",
    image: "/portfolio/render_v1_21_060812.jpg",
    href: contactTierLinks.remote,
  },
  {
    step: "03",
    title: "Sopralluogo Roma",
    text: `Progetti complessi in ${site.surveyArea}: misurazioni e posa in opera.`,
    image: "/portfolio/20190128_160113.jpg",
    href: contactTierLinks.roma,
  },
  {
    step: "04",
    title: "Partner installazione",
    text: "Fuori Roma coordiniamo partner tecnici per la sola installazione.",
    image: "/portfolio/20180215_141107.jpg",
    href: contactTierLinks.partner,
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-stone-200 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
          Come lavoriamo
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-nrs-hero">
          Chiaro fin da subito: cosa, dove, quando
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <Link
              key={item.step}
              href={item.href}
              className="group overflow-hidden border border-stone-200 transition hover:border-nrs-accent/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <span className="absolute left-3 top-3 bg-nrs-hero/80 px-2 py-1 text-xs font-bold text-white">
                  {item.step}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-nrs-hero">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-stone-500">{site.partnerNote}</p>

        <Link
          href="/servizi"
          className="mt-6 inline-block text-sm font-semibold text-nrs-accent underline underline-offset-4 hover:text-nrs-accent-hover hover:no-underline"
        >
          Dettaglio servizi e fasce →
        </Link>
      </div>
    </section>
  );
}
