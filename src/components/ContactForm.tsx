"use client";

import { useState } from "react";
import { site } from "@/data/site";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nome: data.get("nome"),
      email: data.get("email"),
      telefono: data.get("telefono"),
      citta: data.get("citta"),
      tipoRichiesta: data.get("tipoRichiesta"),
      locale: data.get("locale"),
      messaggio: data.get("messaggio"),
    };

    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Invio fallito");

      setState("success");
      setMessage("Richiesta inviata. Ti rispondiamo entro 24–48 ore lavorative.");
      form.reset();
    } catch {
      setState("error");
      setMessage(
        `Errore di invio. Scrivi a ${site.emailPreventivi} o chiama ${site.phone}.`,
      );
    }
  }

  const inputClass =
    "w-full border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-nrs-dark focus:ring-1 focus:ring-nrs-dark";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
            placeholder="Es. Roma, Latina, Firenze..."
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
            defaultValue="prodotto-online"
          >
            <option value="prodotto-online">Prodotto standard — prezzo online</option>
            <option value="consulenza-remota">Consulenza a distanza (foto/planimetria)</option>
            <option value="sopralluogo-roma">Sopralluogo Roma e provincia</option>
            <option value="installazione-partner">Installazione con partner (fuori Roma)</option>
          </select>
        </div>
        <div>
          <label htmlFor="locale" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
            Tipo locale
          </label>
          <select id="locale" name="locale" className={inputClass} defaultValue="ristorante">
            <option value="ristorante">Ristorante / Bar</option>
            <option value="pizzeria">Pizzeria</option>
            <option value="hotel">Hotel</option>
            <option value="ufficio">Ufficio</option>
            <option value="altro">Altro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="messaggio" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-nrs-grey">
          Messaggio *
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          placeholder="Descrivi il problema acustico o il prodotto che ti interessa. Per consulenza remota indica se puoi inviare foto/planimetria."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-nrs-dark px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-nrs-elevated disabled:opacity-60 sm:w-auto"
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
