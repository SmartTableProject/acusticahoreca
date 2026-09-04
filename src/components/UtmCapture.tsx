"use client";

import { useEffect } from "react";
import { captureUtmFromSearch, saveUtm } from "@/lib/utm";

/** Salva UTM/gclid dalla query string in sessionStorage (prima visita Ads). */
export function UtmCapture() {
  useEffect(() => {
    const captured = captureUtmFromSearch(window.location.search);
    if (captured) saveUtm(captured);
  }, []);

  return null;
}
