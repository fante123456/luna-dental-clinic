import type { NextConfig } from "next";

// Static export for shared hosting (o2switch / Apache).
// `npm run build` writes a plain HTML/CSS/JS site to ./out
// Security headers live in public/.htaccess (next.config headers are not
// available in a static export).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
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
