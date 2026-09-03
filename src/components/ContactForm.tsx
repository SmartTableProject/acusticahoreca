"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

type FormState = "idle" | "loading" | "success" | "error";

type Props = {
  defaultTipo?: string;
  defaultProdotto?: string;
  defaultLocale?: string;
  defaultMessaggio?: string;
  showUpload?: boolean;
};

const MAX_FILES = 3;
const MAX_BYTES = 4 * 1024 * 1024; // 4 MB ciascuno
const ALLOWED = ["image/jpeg", "image/png", "image/webp"];

export function ContactForm({
  defaultTipo = "prodotto-online",
  defaultProdotto,
  defaultLocale = "ristorante",
  defaultMessaggio = "",
  showUpload = true,
}: Props) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [tipo, setTipo] = useState(defaultTipo);
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    setTipo(defaultTipo);
  }, [defaultTipo]);

  function onFilesChange(list: FileList | null) {
    if (!list) return;
    const next = [...files];
    for (const file of Array.from(list)) {
      if (next.length >= MAX_FILES) break;
      if (!ALLOWED.includes(file.type)) {
        setMessage("Solo JPG, PNG o WebP.");
        setState("error");
        continue;
      }
      if (file.size > MAX_BYTES) {
        setMessage(`«${file.name}» supera 4 MB.`);
        setState("error");
        continue;
      }
      next.push(file);
    }
    setFiles(next.slice(0, MAX_FILES));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Re-attach selected files (input may be cleared on re-renders)
    data.delete("foto");
    for (const f of files) {
      data.append("foto", f);
    }

    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setState("error");
        setMessage(
          typeof err.error === "string"
            ? err.error
            : `Errore di invio. Scrivi a ${site.email} o chiama ${site.phone}.`,
        );
        return;
      }

      setState("success");
      setMessage(`Richiesta inviata. Ti rispondiamo entro ${site.responseTime}.`);
      form.reset();
      setFiles([]);
      setTipo(defaultTipo);
    } catch {
      setState("error");
      setMessage(`Errore di invio. Scrivi a ${site.email} o chiama ${site.phone}.`);
    }
  }

  const inputClass =
    "w-full border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-nrs-accent focus:ring-1 focus:ring-nrs-accent";

  const initialMessaggio =
    defaultMessaggio ||
    (defaultProdotto ? `Mi interessa il prodotto: ${defaultProdotto}. ` : "");

  return (
    <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
            Nome *
          </label>
          <input id="nome" name="nome" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
            Telefono
          </label>
          <input id="telefono" name="telefono" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="citta" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
            Città / Provincia *
          </label>
          <input
            id="citta"
            name="citta"
            required
            placeholder="Es. Roma, Latina, Perugia..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tipoRichiesta" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
            Tipo richiesta *
          </label>
          <select
            id="tipoRichiesta"
            name="tipoRichiesta"
            required
            className={inputClass}
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="prodotto-online">Prodotto standard — preventivo rapido</option>
            <option value="consulenza-remota">Consulenza a distanza (foto/planimetria)</option>
            <option value="sopralluogo-roma">Sopralluogo Roma e provincia</option>
            <option value="installazione-partner">Installazione con partner (fuori Roma)</option>
          </select>
        </div>
        <div>
          <label htmlFor="locale" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
            Tipo locale
          </label>
          <select
            id="locale"
            name="locale"
            className={inputClass}
            defaultValue={defaultLocale}
            key={defaultLocale}
          >
            <option value="ristorante">Ristorante / Bar</option>
            <option value="pizzeria">Pizzeria</option>
            <option value="hotel">Hotel</option>
            <option value="ufficio">Ufficio</option>
            <option value="altro">Altro</option>
          </select>
        </div>
      </div>

      {defaultProdotto && (
        <input type="hidden" name="prodotto" value={defaultProdotto} />
      )}

      <div>
        <label htmlFor="messaggio" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
          Messaggio *
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          key={initialMessaggio}
          defaultValue={initialMessaggio}
          placeholder="Descrivi il problema: troppo eco, non si sentono le conversazioni... Allega foto se puoi."
          className={inputClass}
        />
      </div>

      {showUpload && (
        <div>
          <label htmlFor="foto" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
            Foto sala / planimetria (max {MAX_FILES})
          </label>
          <input
            id="foto"
            name="foto"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={(e) => {
              onFilesChange(e.target.files);
              e.target.value = "";
            }}
            className="block w-full text-sm text-stone-600 file:mr-4 file:border-0 file:bg-nrs-hero file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-white"
          />
          <p className="mt-1 text-xs text-stone-500">JPG, PNG o WebP · max 4 MB ciascuno</p>
          {files.length > 0 && (
            <ul className="mt-2 space-y-1 text-xs text-stone-700">
              {files.map((f) => (
                <li key={f.name + f.size} className="flex items-center justify-between gap-2">
                  <span className="truncate">{f.name}</span>
                  <button
                    type="button"
                    className="shrink-0 font-semibold text-nrs-accent"
                    onClick={() => setFiles((prev) => prev.filter((x) => x !== f))}
                  >
                    Rimuovi
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-nrs-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-accent-hover disabled:opacity-60 sm:w-auto"
      >
        {state === "loading" ? "Invio..." : "Invia richiesta"}
      </button>

      {message && (
        <p
          className={`text-sm ${state === "success" ? "text-green-800" : "text-red-700"}`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
