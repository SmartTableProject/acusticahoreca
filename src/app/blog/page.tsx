import Image from "next/image";
import Link from "next/link";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { blogPosts } from "@/data/blog";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Blog Acustica HoReCa Roma",
  description: `Guide pratiche su riverbero, isole, posa e Roma. Per ristoratori, non per laboratori. ${site.name}.`,
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <DossierPageFrame
      eyebrow="Blog · Guide pratiche"
      title="Per ristoratori, non per laboratori"
      backHref="/"
      backLabel="Home"
      rightSlot={
        <a
          href="/preventivo"
          className="cursor-pointer bg-nrs-accent px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
        >
          Preventivo →
        </a>
      }
    >
      <p className="mb-4 max-w-3xl text-sm text-stone-600">
        Articoli brevi e operativi: cosa succede in sala, quando servono le
        isole, come scegliere tra posa e fai-da-te, cosa fare a Roma. Poi si
        passa al preventivo.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden border border-stone-400/50 bg-white transition hover:border-nrs-accent"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
              <Image
                src={post.cover}
                alt={`${post.title} — ${site.name}`}
                fill
                className="nrs-photo-bw object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">
                {post.readingMinutes} min di lettura
              </p>
              <h2 className="mt-1 font-serif text-lg font-bold uppercase tracking-[0.02em] text-nrs-hero group-hover:text-nrs-accent">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                {post.excerpt}
              </p>
              <span className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-nrs-accent">
                Leggi →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </DossierPageFrame>
  );
}
