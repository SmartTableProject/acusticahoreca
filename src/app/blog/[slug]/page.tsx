import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blog";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Articolo" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
        <Link href="/blog" className="hover:text-nrs-accent">
          Blog
        </Link>
        {" / "}
        Articolo
      </p>
      <h1 className="mt-3 font-serif text-3xl font-bold text-nrs-hero md:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-stone-500">
        {new Date(post.date).toLocaleDateString("it-IT", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · {post.readingMinutes} min
      </p>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden bg-stone-100">
        <Image
          src={post.cover}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-stone-700 md:text-lg">
        {post.body.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>

      <div className="mt-12 border border-stone-200 bg-stone-50 p-6">
        <p className="font-serif text-xl font-bold text-nrs-hero">
          Vuoi un ordine di grandezza sul tuo locale?
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Wizard in 4 passi — oppure WhatsApp {site.phone}.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/preventivo"
            className="bg-nrs-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover"
          >
            Preventivo guidato
          </Link>
          <Link
            href="/acustica-ristorante-roma"
            className="border border-nrs-hero px-6 py-3 text-sm font-semibold text-nrs-hero hover:bg-white"
          >
            Acustica Roma
          </Link>
        </div>
      </div>
    </article>
  );
}
