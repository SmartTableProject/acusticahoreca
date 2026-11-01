import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { blogPosts, getPost } from "@/data/blog";

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

  const dateLabel = new Date(post.date).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <DossierPageFrame
      tone="paper"
      eyebrow={`Blog · ${post.readingMinutes} min · ${dateLabel}`}
      title={post.title}
      backHref="/blog"
      backLabel="Tutti gli articoli"
      rightSlot={
        <a
          href="/preventivo"
          className="cursor-pointer bg-nrs-accent px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-nrs-accent-hover"
        >
          Preventivo →
        </a>
      }
    >
      <div
        className="nrs-photo-bw mb-4 h-40 w-full bg-cover bg-center md:h-52"
        style={{ backgroundImage: `url(${post.cover})` }}
        role="img"
        aria-label=""
      />
      <article className="max-w-3xl space-y-4 border border-stone-400/45 bg-white/90 p-5 text-base leading-relaxed text-stone-700 md:p-6 md:text-lg">
        <p className="text-sm text-stone-500">{post.excerpt}</p>
        {post.body.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </article>
    </DossierPageFrame>
  );
}
