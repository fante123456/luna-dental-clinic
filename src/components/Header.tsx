"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./LunaMark";
import { buttonClass } from "./Button";
import { bookHref, nav, site } from "@/lib/site";

export function Header() {
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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-navy/[0.07] bg-ice/90 backdrop-blur-md supports-[backdrop-filter]:bg-ice/80">
      <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="shrink-0 rounded-lg">
          <Logo />
          <span className="sr-only"> home page</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative rounded-full px-4 py-2 text-[0.9375rem] font-medium text-navy/80 transition-colors hover:text-navy aria-[current=page]:text-navy aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-4 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-sky"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold">
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <Link href={bookHref} className={buttonClass("primary", "min-h-11 px-5")}>
            Book a visit
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full border border-navy/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-navy/[0.07] bg-ice lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[1200px] px-5 pb-8 pt-4 sm:px-8">
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
            <Link href={bookHref} className={buttonClass("primary")}>
              Book an appointment
            </Link>
            <a href={site.phoneHref} className={buttonClass("secondary")}>
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
