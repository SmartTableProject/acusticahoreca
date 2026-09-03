import type { MetadataRoute } from "next";
import { standardProducts } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const staticRoutes = [
    "",
    "/servizi",
    "/prodotti",
    "/portfolio",
    "/chi-siamo",
    "/contatti",
    "/privacy",
    "/acustica-ristorante-roma",
  ];

  const productRoutes = standardProducts.map((p) => `/prodotti/${p.id}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.includes("roma") ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.includes("roma") || route === "/prodotti"
          ? 0.9
          : 0.8,
  }));
}
