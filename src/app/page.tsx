import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudies } from "@/components/CaseStudies";
import { HomeShowcase } from "@/components/HomeShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { PortfolioFeatured } from "@/components/PortfolioFeatured";
import { ProductTeaser } from "@/components/ProductTeaser";
import { ServicePillars } from "@/components/ServicePillars";
import { SocialProof } from "@/components/SocialProof";
import { TrustBar } from "@/components/TrustBar";
import { contactTierLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: site.heroHeadline,
  description: `${site.tagline} ${site.clientSubline} Preventivo online entro ${site.responseTime}.`,
  openGraph: {
    title: `${site.name} | ${site.heroHeadline}`,
    description: site.clientSubline,
    url: site.domain,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeShowcase />
      <TrustBar />
      <ServicePillars />
      <CaseStudies limit={3} />
      <SocialProof />
      <PortfolioFeatured />
      <ProductTeaser />
      <HowItWorks />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/portfolio/da-dante.jpg)" }}
        />
        <div className="absolute inset-0 bg-nrs-hero/78" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 md:py-24">
          <h2 className="max-w-2xl font-serif text-2xl font-bold uppercase tracking-[0.02em] md:text-4xl">
            {site.clientMessage}
          </h2>
          <p className="mt-4 max-w-xl text-stone-200">
            Sopralluogo in {site.surveyArea}, consulenza online altrove. Ti diciamo
            subito cosa possiamo fare e quando — senza promesse impossibili.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={contactTierLinks.preventivo}
              className="inline-block bg-nrs-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
            >
              Preventivo guidato
            </Link>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
