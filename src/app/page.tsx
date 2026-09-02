import Link from "next/link";
import { HomeShowcase } from "@/components/HomeShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductTeaser } from "@/components/ProductTeaser";
import { ServicePillars } from "@/components/ServicePillars";

export default function HomePage() {
  return (
    <>
      <HomeShowcase />

      <ServicePillars />
      <ProductTeaser />
      <HowItWorks />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/portfolio/da-dante.jpg)" }}
        />
        <div className="absolute inset-0 bg-nrs-hero/78" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 md:py-24">
          <h2 className="max-w-2xl font-serif text-2xl font-bold md:text-4xl">
            Roma e Centro Italia. Onestà sui tempi, precisione sulla soluzione.
          </h2>
          <p className="mt-4 max-w-xl text-stone-200">
            Non promettiamo sopralluoghi ovunque: preferiamo essere chiari su cosa
            possiamo fare subito e cosa richiede appuntamento in zona Roma.
          </p>
          <Link
            href="/contatti"
            className="mt-8 inline-block bg-nrs-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
