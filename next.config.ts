import type { NextConfig } from "next";

// Static export for shared hosting (o2switch / Apache).
// `npm run build` writes a plain HTML/CSS/JS site to ./out
// Security headers live in public/.htaccess (next.config headers are not
// available in a static export).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  // French and English have separate root layouts (correct <html lang>),
  // so the 404 page is defined once in app/global-not-found.tsx.
  experimental: {
    globalNotFound: true,
  },
  images: {
    // Unsplash's CDN does the resizing; see src/lib/unsplash-loader.ts
    loader: "custom",
    loaderFile: "./src/lib/unsplash-loader.ts",
    qualities: [70, 75],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
