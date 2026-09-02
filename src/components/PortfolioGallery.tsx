"use client";

import { useMemo, useState } from "react";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import {
  categoryLabels,
  portfolioItems,
  portfolioProjects,
  portfolioStats,
  type PortfolioCategory,
} from "@/data/portfolio";

export function PortfolioGallery() {
  const [category, setCategory] = useState<PortfolioCategory | "all">("all");
  const [projectId, setProjectId] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set(portfolioItems.map((i) => i.category));
    return [...set] as PortfolioCategory[];
  }, []);

  const filteredProjects = useMemo(() => {
    if (category === "all") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === category);
  }, [category]);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (projectId !== "all" && item.projectId !== projectId) return false;
      return true;
    });
  }, [category, projectId]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => {
            setCategory("all");
            setProjectId("all");
          }}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
            category === "all"
              ? "bg-nrs-accent text-white"
              : "bg-stone-200 text-stone-700 hover:bg-stone-300"
          }`}
        >
          Tutti ({portfolioStats.photos})
        </button>
        {categories.map((cat) => {
          const count = portfolioItems.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat);
                setProjectId("all");
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                category === cat
                  ? "bg-nrs-accent text-white"
                  : "bg-stone-200 text-stone-700 hover:bg-stone-300"
              }`}
            >
              {categoryLabels[cat]} ({count})
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setProjectId("all")}
          className={`rounded-sm border px-3 py-1 text-xs font-medium transition ${
            projectId === "all"
              ? "border-nrs-accent bg-nrs-accent/10 text-nrs-accent"
              : "border-stone-300 text-stone-600 hover:border-stone-400"
          }`}
        >
          Tutti i locali ({filteredProjects.length})
        </button>
        {filteredProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setProjectId(project.id)}
            className={`rounded-sm border px-3 py-1 text-xs font-medium transition ${
              projectId === project.id
                ? "border-nrs-accent bg-nrs-accent/10 text-nrs-accent"
                : "border-stone-300 text-stone-600 hover:border-stone-400"
            }`}
          >
            {project.name} ({project.imageCount})
          </button>
        ))}
      </div>

      <p className="text-sm text-stone-500">
        {filteredItems.length} foto
        {projectId !== "all"
          ? ` — ${filteredProjects.find((p) => p.id === projectId)?.name ?? ""}`
          : ""}
      </p>

      <PortfolioGrid items={filteredItems} variant="gallery" />
    </div>
  );
}
