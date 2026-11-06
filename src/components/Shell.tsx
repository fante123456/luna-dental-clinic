import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { dict } from "@/lib/content";
import { figtree, fraunces } from "@/lib/fonts";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

/** Site-wide metadata for one language. Practice demo: never indexed. */
export function rootMetadata(lang: Lang): Metadata {
  const m = dict[lang].meta;
  return {
    metadataBase: new URL(site.url),
    title: { default: m.siteTitle, template: m.template },
    description: m.siteDescription,
    applicationName: site.name,
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: { type: "website", locale: m.locale, siteName: site.name },
    twitter: { card: "summary_large_image" },
    formatDetection: { telephone: false },
  };
}


/** The full document for one language: demo banner, header, page, footer. */
export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = dict[lang].common;
  return (
    <html lang={lang} className={`${fraunces.variable} ${figtree.variable} antialiased`}>
      <head>
        {/* Photos are served straight from Unsplash's CDN: open the connection early. */}
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-navy px-5 py-3 font-semibold text-ice focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.skip}
        </a>
        <p className="bg-navy px-5 py-2 text-center text-sm font-medium text-ice">{t.banner}</p>
        <Header lang={lang} />
        <main id="main" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
