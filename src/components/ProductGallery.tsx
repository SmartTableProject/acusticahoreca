type Props = {
  name: string;
  images: string[];
  badge?: string;
};

/**
 * Galleria prodotto senza React state / senza hydration.
 * - Miniature → radio + CSS :has()
 * - Ingrandisci → HTML Popover API nativa
 */
export function ProductGallery({ name, images, badge }: Props) {
  const list: string[] = [];
  for (const src of images) {
    if (src && !list.includes(src)) list.push(src);
  }

  if (list.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center border border-stone-200 bg-stone-100 text-sm text-stone-500">
        Foto prodotto non disponibile
      </div>
    );
  }

  const group = `gal-${name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase() || "prodotto"}`;
  const popoverId = `${group}-lb`;

  const css = `
.product-gallery[data-id="${group}"] .pg-slide { display: none !important; }
.product-gallery[data-id="${group}"] .pg-thumb {
  border-color: #d6d3d1;
  box-shadow: none;
}
.product-gallery[data-id="${group}"] .pg-lb-slide { display: none !important; }
${list
  .map(
    (_, i) => `
.product-gallery[data-id="${group}"]:has(#${group}-${i}:checked) .pg-slide[data-i="${i}"] {
  display: flex !important;
}
.product-gallery[data-id="${group}"]:has(#${group}-${i}:checked) .pg-thumb[data-i="${i}"] {
  border-color: #0f766e !important;
  box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.35);
}
.product-gallery[data-id="${group}"]:has(#${group}-${i}:checked) .pg-status::after {
  content: "Foto ${i + 1} di ${list.length}. Miniatura = cambia riquadro · Ingrandisci = pieno schermo.";
}
.product-gallery[data-id="${group}"]:has(#${group}-${i}:checked) .pg-lb-slide[data-i="${i}"] {
  display: flex !important;
}
.product-gallery[data-id="${group}"]:has(#${group}-${i}:checked) .pg-lb-counter::after {
  content: "${i + 1} / ${list.length}";
}
`,
  )
  .join("\n")}
.product-gallery[data-id="${group}"] .pg-status::after {
  content: "Foto 1 di ${list.length}. Miniatura = cambia riquadro · Ingrandisci = pieno schermo.";
}
.product-gallery[data-id="${group}"] .pg-lb-counter::after {
  content: "1 / ${list.length}";
}
.product-gallery[data-id="${group}"] [popover] {
  border: none;
  padding: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background: rgba(0, 0, 0, 0.92);
  color: #fff;
}
.product-gallery[data-id="${group}"] [popover]::backdrop {
  background: rgba(0, 0, 0, 0.8);
}
`;

  return (
    <div className="product-gallery space-y-3" data-id={group} data-gallery="css-has-popover">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {list.map((_, i) => (
        <input
          key={`radio-${i}`}
          type="radio"
          name={group}
          id={`${group}-${i}`}
          value={String(i)}
          defaultChecked={i === 0}
          className="sr-only"
        />
      ))}

      <div className="relative border border-stone-200 bg-stone-50">
        <div className="relative aspect-[4/3] w-full">
          {list.map((src, i) => (
            <button
              key={`slide-${i}`}
              type="button"
              className="pg-slide absolute inset-0 cursor-zoom-in items-center justify-center p-3"
              data-i={i}
              style={{ display: i === 0 ? "flex" : "none" }}
              popoverTarget={popoverId}
              aria-label={`Ingrandisci foto ${i + 1}`}
            >
              <img
                src={src}
                alt={`${name} — foto ${i + 1}`}
                className="pointer-events-none max-h-full max-w-full object-contain"
                draggable={false}
              />
            </button>
          ))}
        </div>

        {badge ? (
          <span className="pointer-events-none absolute left-3 top-3 z-10 bg-nrs-accent px-2 py-0.5 text-[10px] font-bold uppercase text-white">
            {badge}
          </span>
        ) : null}

        <button
          type="button"
          className="absolute bottom-3 right-3 z-10 bg-nrs-hero px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-nrs-accent"
          popoverTarget={popoverId}
        >
          Ingrandisci
        </button>
      </div>

      {list.length > 1 ? (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {list.map((src, i) => (
            <label
              key={`thumb-${i}`}
              htmlFor={`${group}-${i}`}
              className="pg-thumb flex aspect-[4/3] cursor-pointer items-center justify-center border bg-stone-50 p-1 hover:border-nrs-accent"
              data-i={i}
            >
              <img
                src={src}
                alt=""
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </label>
          ))}
        </div>
      ) : null}

      <p className="pg-status text-[11px] text-stone-500" aria-live="polite" />

      <div id={popoverId} popover="auto" className="fixed inset-0 z-[9999]">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-4">
          <button
            type="button"
            className="absolute right-4 top-4 z-20 border border-white/50 bg-black/50 px-4 py-2 text-sm font-semibold text-white"
            popoverTarget={popoverId}
            popoverTargetAction="hide"
          >
            Chiudi
          </button>

          {list.map((src, i) => (
            <div
              key={`lb-${i}`}
              className="pg-lb-slide absolute inset-0 items-center justify-center p-10"
              data-i={i}
              style={{ display: i === 0 ? "flex" : "none" }}
            >
              <img
                src={src}
                alt={`${name} ingrandita — foto ${i + 1}`}
                className="max-h-[85vh] max-w-[min(96vw,1100px)] object-contain"
              />
            </div>
          ))}

          <p className="pg-lb-counter absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-sm text-white" />
        </div>
      </div>
    </div>
  );
}
