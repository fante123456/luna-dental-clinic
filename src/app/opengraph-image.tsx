import { ImageResponse } from "next/og";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

export const alt = "Cabinet vétérinaire du Dr Colin, vétérinaire à Saint-Lô";
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
<svg width="520" height="520" viewBox="0 0 32 32" style={{ position: "absolute", right: -40, top: -30 }}>
            <g fill="#14304B">
              <ellipse cx="7.2" cy="13.2" rx="2.7" ry="3.4" transform="rotate(-24 7.2 13.2)" />
              <ellipse cx="12.6" cy="7.6" rx="2.8" ry="3.6" transform="rotate(-8 12.6 7.6)" />
              <ellipse cx="19.4" cy="7.6" rx="2.8" ry="3.6" transform="rotate(8 19.4 7.6)" />
              <ellipse cx="24.8" cy="13.2" rx="2.7" ry="3.4" transform="rotate(24 24.8 13.2)" />
              <path d="M16 14.6c-3.6 0-8 4.6-8 8.6 0 2.6 2 3.9 4.3 3.9 1.5 0 2.4-.7 3.7-.7s2.2.7 3.7.7c2.3 0 4.3-1.3 4.3-3.9 0-4-4.4-8.6-8-8.6Z" />
            </g>
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
              <g fill="#6EC6FF">
                <ellipse cx="7.2" cy="13.2" rx="2.7" ry="3.4" transform="rotate(-24 7.2 13.2)" />
                <ellipse cx="12.6" cy="7.6" rx="2.8" ry="3.6" transform="rotate(-8 12.6 7.6)" />
                <ellipse cx="19.4" cy="7.6" rx="2.8" ry="3.6" transform="rotate(8 19.4 7.6)" />
                <ellipse cx="24.8" cy="13.2" rx="2.7" ry="3.4" transform="rotate(24 24.8 13.2)" />
                <path d="M16 14.6c-3.6 0-8 4.6-8 8.6 0 2.6 2 3.9 4.3 3.9 1.5 0 2.4-.7 3.7-.7s2.2.7 3.7.7c2.3 0 4.3-1.3 4.3-3.9 0-4-4.4-8.6-8-8.6Z" />
              </g>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 600 }}>Dr Colin</div>
            <div style={{ fontSize: 18, letterSpacing: 4, color: "#7DE2C3" }}>CABINET VÉTÉRINAIRE · SAINT-LÔ</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 600 }}>
            Des soins attentifs pour votre compagnon
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#C9D6E3" }}>
            Chiens, chats et NAC · 200 avenue de Paris, Saint-Lô
          </div>
        </div>
      </div>
    ),
    size,
  );
}
