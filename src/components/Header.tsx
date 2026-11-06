"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { buttonClass } from "./Button";
import { dict } from "@/lib/content";
import { navKeys, paths, switchPath, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

function LangSwitch({ lang, pathname }: { lang: Lang; pathname: string }) {
  const t = dict[lang].common;
  const item = (code: Lang, label: string, name: string) =>
    code === lang ? (
      <span aria-current="true" className="rounded-full bg-navy px-2.5 py-1 text-ice">
        {label}
        <span className="sr-only"> ({name})</span>
      </span>
    ) : (
      <a
        href={switchPath(pathname, code)}
        hrefLang={code}
        lang={code}
        className="inline-flex min-h-11 items-center rounded-full px-2.5 text-navy/80 hover:text-navy"
      >
        {label}
        <span className="sr-only"> ({name})</span>
      </a>
    );
  return (
    <nav aria-label={t.langNav} className="text-sm font-semibold">
      <p className="flex items-center gap-0.5">
        {item("fr", "FR", "Français")}
        <span aria-hidden="true" className="text-navy/30">
          |
        </span>
        {item("en", "EN", "English")}
      </p>
    </nav>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const t = dict[lang].common;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu after navigating.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const clean = pathname.replace(/\/+$/, "") || "/";
  const home = paths[lang].home;
  const isActive = (href: string) => (href === home ? clean === home : clean.startsWith(href));
  const nav = navKeys.map((k) => ({ href: paths[lang][k], label: t.nav[k] }));

  return (
    <header className="sticky top-0 z-50 border-b border-navy/[0.07] bg-ice/90 backdrop-blur-md supports-[backdrop-filter]:bg-ice/80">
      <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8 xl:gap-6">
        <Link href={home} className="shrink-0 rounded-lg">
          <Logo lang={lang} compact />
          <span className="sr-only">{t.homeSr}</span>
        </Link>

        <nav aria-label={t.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative rounded-full px-3.5 py-2 text-[0.9375rem] font-medium text-navy/80 transition-colors hover:text-navy aria-[current=page]:text-navy aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3.5 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-sky"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 xl:gap-5">
          <a href={site.phoneHref} className="hidden items-center gap-2 text-[0.9375rem] font-semibold xl:inline-flex">
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <span className="hidden xl:block">
            <a href={site.phoneHref} className={buttonClass("primary", "min-h-11 px-5")}>
              {t.book}
            </a>
          </span>
          <LangSwitch lang={lang} pathname={pathname} />
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full border border-navy/15 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? t.menuClose : t.menuOpen}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-navy/[0.07] bg-ice xl:hidden">
        <nav aria-label={t.mobileNav} className="mx-auto max-w-[1200px] px-5 pb-8 pt-4 sm:px-8">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-navy/[0.07]">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex min-h-14 items-center font-display text-2xl aria-[current=page]:text-navy-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href={site.phoneHref} className={buttonClass("primary")}>
              {t.book}
            </a>
            <a href={site.phoneHref} className={buttonClass("secondary")}>
              <Phone className="size-4" aria-hidden="true" />
              {t.call} {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
