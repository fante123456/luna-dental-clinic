import { ImageResponse } from "next/og";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1F33",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 32 32">
          <path fill="#6EC6FF" d="M20.5 3.2A13 13 0 1 0 28.8 22 10.4 10.4 0 0 1 20.5 3.2Z" />
        </svg>
      </div>
    ),
    size,
  );
}
