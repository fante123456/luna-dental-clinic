import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./LunaMark";
import { hours, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-dark bg-navy text-ice">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:py-20">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-ice/75">{site.tagline}. General and cosmetic dentistry in Manchester city centre.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mint">Pages</h2>
          <ul className="mt-4 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-ice/85 hover:text-ice">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mint">Visit</h2>
          <address className="mt-4 space-y-3 not-italic text-ice/85">
            <p className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-sky" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.postcode}
              </span>
            </p>
            <p>
              <a href={site.phoneHref} className="inline-flex min-h-10 items-center gap-3 hover:text-ice">
                <Phone className="size-4 text-sky" aria-hidden="true" />
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-10 items-center gap-3 break-all hover:text-ice">
                <Mail className="size-4 shrink-0 text-sky" aria-hidden="true" />
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mint">Opening hours</h2>
          <dl className="mt-4 space-y-2 text-[0.9375rem]">
            {hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-ice/10 pb-2">
                <dt className="text-ice/75">{h.days}</dt>
                <dd className="text-right text-ice">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-ice/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-6 text-sm text-ice/70 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Luna Dental Clinic. A fictional clinic created for the MX AI Academy design challenge.</p>
          <p>
            Photos from{" "}
            <Link href="/credits" className="underline underline-offset-4 hover:text-ice">
              Unsplash photographers
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
