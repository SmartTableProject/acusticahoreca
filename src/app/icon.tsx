import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon allineato a palette Officina / logo ufficiale */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1917",
          color: "#0f766e",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.02em",
          fontFamily: "Impact, Arial Black, sans-serif",
        }}
      >
        NRS
      </div>
    ),
    { ...size },
  );
}
