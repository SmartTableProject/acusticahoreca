import Image from "next/image";
import Link from "next/link";
import { contactTierLinks, site } from "@/data/site";

const pillars = [
  {
    title: "Acquisto online",
    text: `Kit standard SoundOff. ${site.priceLabel}. Spedizione senza sopralluogo.`,
    image: "/portfolio/20180608_100932.jpg",
    alt: "Isole acustiche a soffitto in locale HoReCa",
    href: contactTierLinks.online,
  },
  {
    title: "Progetto a distanza",
    text: "Foto + planimetria. Report con mq consigliati e layout suggerito.",
    image: "/portfolio/render_v1_21_060812.jpg",
    alt: "Render 3D progetto acustico",
    href: contactTierLinks.remote,
  },
  {
    title: "Chiavi in mano Roma",
    text: `Sopralluogo, posa e collaudo solo in ${site.surveyArea}.`,
    image: "/portfolio/alla-lampara.jpg",
    alt: "Ristorante Alla Lampara dopo intervento acustico",
    href: contactTierLinks.roma,
  },
];

export function ServicePillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((item) => (
          <Link key={item.title} href={item.href} className="group overflow-hidden bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="border border-t-0 border-stone-200 p-6 transition group-hover:border-nrs-accent/40">
              <h2 className="text-sm font-bold uppercase tracking-wide text-nrs-accent">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.text}</p>
              <p className="mt-3 text-xs font-semibold text-nrs-hero group-hover:text-nrs-accent">
                Richiedi preventivo →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
