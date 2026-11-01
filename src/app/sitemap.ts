import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { portfolioProjects } from "@/data/portfolio";
import { standardProducts } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/acustica-ristorante-roma", priority: 0.9, freq: "weekly" },
    { path: "/prodotti", priority: 0.9, freq: "weekly" },
    { path: "/percorsi", priority: 0.9, freq: "weekly" },
    { path: "/servizi", priority: 0.8, freq: "monthly" },
    { path: "/preventivo", priority: 0.9, freq: "weekly" },
    { path: "/portfolio", priority: 0.85, freq: "weekly" },
    { path: "/chiavi-in-mano", priority: 0.85, freq: "monthly" },
    { path: "/progetto-remoto", priority: 0.85, freq: "monthly" },
    { path: "/blog", priority: 0.75, freq: "weekly" },
    { path: "/chi-siamo", priority: 0.6, freq: "monthly" },
    { path: "/contatti", priority: 0.7, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "monthly" },
  ];

  const productRoutes = standardProducts.map((p) => ({
    url: `${base}/prodotti/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const caseRoutes = portfolioProjects.map((p) => ({
    url: `${base}/portfolio/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...productRoutes,
    ...blogRoutes,
    ...caseRoutes,
  ];
}
