import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { standardProducts } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const staticRoutes = [
    "",
    "/servizi",
    "/prodotti",
    "/portfolio",
    "/blog",
    "/chi-siamo",
    "/contatti",
    "/privacy",
    "/acustica-ristorante-roma",
    "/preventivo",
  ];

  const productRoutes = standardProducts.map((p) => `/prodotti/${p.id}`);
  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...productRoutes, ...blogRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route.includes("roma") || route === "/blog" || route === "/preventivo"
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/preventivo" || route.includes("roma") || route === "/prodotti"
          ? 0.9
          : route.startsWith("/blog")
            ? 0.75
            : 0.8,
  }));
}
