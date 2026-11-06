export type Lang = "fr" | "en";

export type PageKey = "home" | "about" | "services" | "gallery" | "contact" | "credits";

/** French is the default (no prefix); English lives under /en. */
export const paths: Record<Lang, Record<PageKey, string>> = {
  fr: {
    home: "/",
    about: "/about",
    services: "/services",
    gallery: "/gallery",
    contact: "/contact",
    credits: "/credits",
  },
  en: {
    home: "/en",
    about: "/en/about",
    services: "/en/services",
    gallery: "/en/gallery",
    contact: "/en/contact",
    credits: "/en/credits",
  },
};

export const navKeys: PageKey[] = ["home", "about", "services", "gallery", "contact"];

/** Finds the same page in the other language (falls back to its home page). */
export function switchPath(pathname: string, to: Lang): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  for (const lang of ["fr", "en"] as const) {
    for (const key of Object.keys(paths[lang]) as PageKey[]) {
      if (paths[lang][key] === clean) return paths[to][key];
    }
  }
  return paths[to].home;
}
