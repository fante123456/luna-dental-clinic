import Link from "next/link";
import { CircleParking, MapPin, Phone, Star } from "lucide-react";
import { Logo } from "./Logo";
import { dict } from "@/lib/content";
import { navKeys, paths, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <footer className="on-dark bg-navy text-ice">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:py-20">
        <div className="max-w-xs">
          <Logo lang={lang} tone="light" />
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-ice/75">{t.footer.about}</p>
          <p className="mt-4">
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 text-[0.9375rem] text-ice/85 underline decoration-ice/30 underline-offset-4 hover:text-ice"
            >
              <Star className="size-4 shrink-0 fill-sky text-sky" aria-hidden="true" />
              {t.common.rating}
              <span className="sr-only"> {t.common.newTab}</span>
            </a>
          </p>
        </div>

        <nav aria-label={t.footer.pages}>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mint">{t.footer.pages}</h2>
          <ul className="mt-4 space-y-1">
            {navKeys.map((k) => (
              <li key={k}>
                <Link href={paths[lang][k]} className="inline-flex min-h-10 items-center text-ice/85 hover:text-ice">
                  {t.common.nav[k]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mint">{t.footer.visit}</h2>
          <address className="mt-4 space-y-3 not-italic text-ice/85">
            <p className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-sky" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.postcode} {site.address.city}
              </span>
            </p>
            <p>
              <a href={site.phoneHref} className="inline-flex min-h-10 items-center gap-3 hover:text-ice">
                <Phone className="size-4 text-sky" aria-hidden="true" />
                {site.phone}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <CircleParking className="size-4 shrink-0 text-sky" aria-hidden="true" />
              {t.common.parking}
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mint">{t.footer.hours}</h2>
          <dl className="mt-4 space-y-2 text-[0.9375rem]">
            {t.common.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-ice/10 pb-2">
                <dt className="text-ice/75">{h.days}</dt>
                <dd className="text-right text-ice">{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-ice/70">{t.common.hoursNote}</p>
        </div>
      </div>

      <div className="border-t border-ice/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-6 text-sm text-ice/70 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.demo}</p>
          <p className="shrink-0">
            {t.footer.photos}{" "}
            <Link href={paths[lang].credits} className="underline underline-offset-4 hover:text-ice">
              {t.footer.photosLink}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
