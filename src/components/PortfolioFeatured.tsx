"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { showcaseSlides } from "@/data/showcase-slides";
import { portfolioStats } from "@/data/portfolio";

const INTERVAL_MS = 7000;
const FADE_MS = 1600;

export function PortfolioFeatured() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = showcaseSlides.length;

  const goTo = useCallback(
    (next: number) => setIndex((next + total) % total),
    [total],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, index, goTo]);

  const active = showcaseSlides[index];

  return (
    <section className="border-y border-stone-200 bg-nrs-body py-14 md:py-20">
      <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nrs-grey">
            Portfolio · {portfolioStats.photos} foto
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-nrs-hero md:text-4xl">
            {portfolioStats.projects} locali documentati
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="text-sm font-semibold text-nrs-accent underline underline-offset-4 hover:text-nrs-accent-hover"
        >
          Esplora tutta la galleria
        </Link>
      </div>

      <div
        className="group relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 50) {
            if (delta < 0) next();
            else prev();
          }
          touchStartX.current = null;
        }}
      >
        <div className="relative mx-auto aspect-[3/4] max-h-[78vh] w-full max-w-[1400px] overflow-hidden bg-stone-200 sm:aspect-[16/10] md:aspect-[21/9]">
          {showcaseSlides.map((slide, i) => (
            <div
              key={slide.id}
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{
                opacity: i === index ? 1 : 0,
                transitionDuration: `${FADE_MS}ms`,
              }}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className={i === index ? "animate-ken-burns-soft object-cover" : "object-cover"}
                style={{ objectPosition: slide.objectPosition ?? "center center" }}
                sizes="100vw"
              />
            </div>
          ))}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-nrs-hero/75 to-transparent p-8 md:p-12">
            <p className="font-serif text-2xl font-semibold text-white md:text-3xl">{active.title}</p>
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-nrs-hero opacity-0 shadow transition hover:bg-white group-hover:opacity-100"
            aria-label="Precedente"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-nrs-hero opacity-0 shadow transition hover:bg-white group-hover:opacity-100"
            aria-label="Successiva"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
