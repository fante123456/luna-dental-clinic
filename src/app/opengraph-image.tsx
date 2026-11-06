import { ImageResponse } from "next/og";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

export const alt = "Luna Dental Clinic: modern dental care with a gentle touch, Manchester";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0B1F33",
          color: "#F7FBFF",
          position: "relative",
        }}
      >
        <svg
          width="560"
          height="560"
          viewBox="0 0 32 32"
          style={{ position: "absolute", right: -90, top: -60 }}
        >
          <path fill="#14304B" d="M20.5 3.2A13 13 0 1 0 28.8 22 10.4 10.4 0 0 1 20.5 3.2Z" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              background: "#14304B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 32 32">
              <path fill="#6EC6FF" d="M20.5 3.2A13 13 0 1 0 28.8 22 10.4 10.4 0 0 1 20.5 3.2Z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 600 }}>Luna</div>
            <div style={{ fontSize: 18, letterSpacing: 5, color: "#7DE2C3" }}>DENTAL CLINIC</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 600 }}>
            Modern dental care with a gentle touch
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#C9D6E3" }}>
            General & cosmetic dentistry · 24 Willow Street, Manchester
          </div>
        </div>
      </div>
    ),
    size,
  );
}
