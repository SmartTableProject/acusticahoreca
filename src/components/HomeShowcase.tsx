"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { showcaseSlides } from "@/data/showcase-slides";
import { portfolioStats } from "@/data/portfolio";
import { site } from "@/data/site";

const INTERVAL_MS = 6000;
const FADE_MS = 1400;

export function HomeShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = showcaseSlides.length;

  const goTo = useCallback(
    (next: number) => {
      setProgress(0);
      setIndex((next + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || total === 0) return;

    const tick = 50;
    const step = (tick / INTERVAL_MS) * 100;

    const id = window.setInterval(() => {
      setProgress((p) => {
        if (p + step >= 100) {
          goTo(index + 1);
          return 0;
        }
        return p + step;
      });
    }, tick);

    return () => window.clearInterval(id);
  }, [paused, index, goTo, total]);

  const active = showcaseSlides[index];

  return (
    <section
      className="group relative min-h-[88vh] overflow-hidden bg-nrs-hero text-white md:min-h-[92vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setProgress(0);
      }}
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
      {showcaseSlides.map((slide, i) => {
        const isActive = i === index;
        return (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
              zIndex: isActive ? 1 : 0,
            }}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className={`object-cover ${isActive ? "animate-ken-burns-soft" : ""}`}
              style={{ objectPosition: slide.objectPosition ?? "center center" }}
              sizes="100vw"
              priority={i < 2}
            />
          </div>
        );
      })}

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-nrs-hero via-nrs-hero/45 to-nrs-hero/15"
        aria-hidden
      />

      <div className="relative z-[3] mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-8 pt-28 md:min-h-[92vh] md:px-6 md:pb-12 md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nrs-accent">
          {site.logoSubline} · {site.marketArea}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          {site.clientMessage}
          <span className="mt-3 block text-xl font-normal italic text-stone-200 md:text-2xl">
            {site.clientSubline}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-200 md:text-lg">
          {site.yearsExperience} anni di interventi reali. Partner ufficiale{" "}
          {site.supplier}. Preventivo online o consulenza a distanza.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contatti"
            className="rounded-sm bg-nrs-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-nrs-accent-hover"
          >
            Preventivo online
          </Link>
          <Link
            href="/portfolio"
            className="rounded-sm border border-white/60 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            {portfolioStats.projects} locali in galleria
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400">
              In evidenza
            </p>
            <p className="mt-1 font-serif text-xl font-semibold md:text-2xl">{active.title}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs tabular-nums text-stone-400">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <div className="flex gap-1.5">
              {showcaseSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-nrs-accent" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Vai a ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 h-px w-full overflow-hidden bg-white/15">
          <div
            className="h-full bg-nrs-accent transition-[width] duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-[4] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-nrs-hero/30 text-white opacity-0 backdrop-blur-md transition hover:bg-nrs-hero/60 group-hover:opacity-100 md:left-8"
        aria-label="Foto precedente"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-[4] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-nrs-hero/30 text-white opacity-0 backdrop-blur-md transition hover:bg-nrs-hero/60 group-hover:opacity-100 md:right-8"
        aria-label="Foto successiva"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
