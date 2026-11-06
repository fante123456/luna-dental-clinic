import type { Metadata } from "next";
import { dict } from "./content";
import { paths, type Lang, type PageKey } from "./i18n";
import { ogImage, site } from "./site";

/** Title, description, canonical, language alternates and Open Graph for one page. */
export function pageMeta(lang: Lang, key: PageKey): Metadata {
  const m = dict[lang].meta;
  const isHome = key === "home";
  const title = isHome ? m.siteTitle : m[key].title;
  const description = isHome ? m.siteDescription : m[key].description;
  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: paths[lang][key],
      languages: { fr: paths.fr[key], en: paths.en[key], "x-default": paths.fr[key] },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: m.locale,
      title: isHome ? title : `${title} | ${site.shortName}`,
      description,
      url: paths[lang][key],
      images: [ogImage],
    },
  };
}
