# -*- coding: utf-8 -*-
"""Smoke test locale: route + immagini prodotti."""
from __future__ import annotations

import re
import urllib.parse
import urllib.request
from pathlib import Path

BASE = "http://127.0.0.1:3000"
ROOT = Path(__file__).resolve().parents[1]

ROUTES = [
    "/",
    "/prodotti",
    "/prodotti/hexagon-kit",
    "/prodotti/basfon",
    "/prodotti/wave",
    "/prodotti/isole",
    "/portfolio",
    "/servizi",
    "/preventivo",
    "/contatti",
    "/blog",
    "/chi-siamo",
    "/acustica-ristorante-roma",
    "/privacy",
]


def get(url: str, timeout: int = 90) -> tuple[int, bytes]:
    req = urllib.request.Request(url, headers={"User-Agent": "NRS-SmokeTest/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.status, r.read()


def main() -> None:
    ok_all = True
    print(f"Smoke test → {BASE}")

    for path in ROUTES:
        url = BASE + path
        try:
            status, body = get(url)
            mark = "OK" if status == 200 else "FAIL"
            if status != 200:
                ok_all = False
            print(f"[{mark}] {path} → {status} ({len(body)} bytes)")
        except Exception as e:
            ok_all = False
            print(f"[FAIL] {path} → {e}")

    # product images from products.ts
    text = (ROOT / "src" / "data" / "products.ts").read_text(encoding="utf-8")
    imgs = sorted(set(re.findall(r"/prodotti/[a-z0-9\-]+\.jpg", text)))
    print(f"\nImmagini catalogo: {len(imgs)}")
    for img in imgs:
        fs = ROOT / "public" / img.lstrip("/")
        if not fs.exists():
            ok_all = False
            print(f"[FAIL] file mancante {img}")
            continue
        try:
            status, body = get(BASE + img, timeout=30)
            enc = urllib.parse.quote(img)
            st2, body2 = get(f"{BASE}/_next/image?url={enc}&w=640&q=75", timeout=60)
            mark = "OK" if status == 200 and st2 == 200 and len(body) > 1000 else "FAIL"
            if mark == "FAIL":
                ok_all = False
            print(f"[{mark}] {img} static={status}/{len(body)} opt={st2}/{len(body2)}")
        except Exception as e:
            ok_all = False
            print(f"[FAIL] {img} → {e}")

    # product page must include gallery component cue
    try:
        _, html = get(BASE + "/prodotti/hexagon-kit")
        html_s = html.decode("utf-8", "replace")
        has_ingrandisci = "Ingrandisci" in html_s
        has_img = "hexagon-kit.jpg" in html_s
        mark = "OK" if has_ingrandisci and has_img else "FAIL"
        if mark == "FAIL":
            ok_all = False
        print(f"[{mark}] scheda hexagon lightbox={'yes' if has_ingrandisci else 'no'} img={'yes' if has_img else 'no'}")
    except Exception as e:
        ok_all = False
        print(f"[FAIL] scheda check → {e}")

    print("---")
    print("Tutto collegato e funzionante" if ok_all else "Attenzione: qualcosa non torna")


if __name__ == "__main__":
    main()
