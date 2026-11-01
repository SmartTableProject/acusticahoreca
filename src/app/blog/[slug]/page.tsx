import { notFound } from "next/navigation";
import { DossierPageFrame } from "@/components/dossier/DossierPageFrame";
import { blogPosts, getPost } from "@/data/blog";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Articolo" };
  return buildPageMetadata({
    title: post.title.slice(0, 55),
    description: post.excerpt.slice(0, 155),
    path: `/blog/${post.slug}`,
    ogImage: post.cover,
  });
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
        aria-label={post.title}
      />
      <article className="max-w-3xl space-y-4 border border-stone-400/45 bg-white/90 p-5 text-base leading-relaxed text-stone-700 md:p-6 md:text-lg">
        <p className="text-sm text-stone-500">{post.excerpt}</p>
        {post.body.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </article>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border border-stone-300 bg-stone-50 px-4 py-4">
        <div>
          <p className="text-sm font-bold text-nrs-hero">
            Vuoi applicare questo al tuo locale?
          </p>
          <p className="text-xs text-stone-500">
            Preventivo in {site.responseTime} · {site.partnerLabel}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/preventivo"
            className="cursor-pointer bg-nrs-accent px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white hover:bg-nrs-accent-hover"
          >
            Richiedi preventivo
          </a>
          <a
            href="/portfolio"
            className="cursor-pointer border border-nrs-hero px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-nrs-hero hover:border-nrs-accent hover:text-nrs-accent"
          >
            Vedi casi studio
          </a>
        </div>
      </div>
    </DossierPageFrame>
  );
}
