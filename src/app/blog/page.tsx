import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog — Acustica HoReCa",
  description: `Guide pratiche su riverbero, isole, posa e Roma. ${site.name}.`,
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">Blog</p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-nrs-hero">
        Guide per ristoratori
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-600">
        Niente jargon da laboratorio: problemi reali di sala, soluzioni concrete,
        tempi onesti.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden border border-stone-200 bg-white transition hover:border-nrs-accent/50"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
              <Image
                src={post.cover}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-nrs-grey">
                {post.readingMinutes} min di lettura
              </p>
              <h2 className="mt-2 font-serif text-xl font-bold text-nrs-hero group-hover:text-nrs-accent">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                {post.excerpt}
              </p>
              <span className="mt-4 text-sm font-semibold text-nrs-accent">Leggi →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
