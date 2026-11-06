import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/services", priority: 0.9 },
  { path: "/gallery", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/en", priority: 0.8 },
  { path: "/en/about", priority: 0.5 },
  { path: "/en/services", priority: 0.7 },
  { path: "/en/gallery", priority: 0.4 },
  { path: "/en/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
