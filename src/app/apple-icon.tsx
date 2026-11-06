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
          <g fill="#6EC6FF">
            <ellipse cx="7.2" cy="13.2" rx="2.7" ry="3.4" transform="rotate(-24 7.2 13.2)" />
            <ellipse cx="12.6" cy="7.6" rx="2.8" ry="3.6" transform="rotate(-8 12.6 7.6)" />
            <ellipse cx="19.4" cy="7.6" rx="2.8" ry="3.6" transform="rotate(8 19.4 7.6)" />
            <ellipse cx="24.8" cy="13.2" rx="2.7" ry="3.4" transform="rotate(24 24.8 13.2)" />
            <path d="M16 14.6c-3.6 0-8 4.6-8 8.6 0 2.6 2 3.9 4.3 3.9 1.5 0 2.4-.7 3.7-.7s2.2.7 3.7.7c2.3 0 4.3-1.3 4.3-3.9 0-4-4.4-8.6-8-8.6Z" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
