import type { Metadata } from "next";
import Link from "next/link";
import { Paw } from "@/components/Logo";
import { figtree, fraunces } from "@/lib/fonts";
import { site } from "@/lib/site";
import "./globals.css";

// One 404 page for both languages (the site has a French and an English root layout).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Page introuvable | Page not found – Dr Colin",
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${fraunces.variable} ${figtree.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <p className="bg-navy px-5 py-2 text-center text-sm font-medium text-ice">
          Projet d&apos;entraînement – site non officiel
        </p>
        <main className="flex flex-1 items-center bg-ice py-24 sm:py-32">
          <div className="mx-auto w-full max-w-2xl px-5 text-center sm:px-8">
            <Paw className="mx-auto size-14 text-sky" />
            <h1 className="mt-8 text-5xl sm:text-6xl">Page introuvable</h1>
            <p className="mt-5 text-lg text-ink-muted">
              Désolé, cette page n&apos;existe pas. Le lien est peut-être incorrect.
            </p>
            <p className="mt-6 text-lg text-ink-muted" lang="en">
              Page not found. Sorry, this page does not exist.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 font-semibold text-ice hover:bg-navy-800"
              >
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/en/"
                lang="en"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy/25 px-6 font-semibold text-navy hover:border-navy hover:bg-white"
              >
                English home page
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
