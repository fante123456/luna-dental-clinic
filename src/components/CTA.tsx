import { Navigation, Phone } from "lucide-react";
import { buttonClass } from "./Button";
import { dict } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

/**
 * The booking call to action. There is no online booking:
 * "Prendre rendez-vous" calls the practice, the second button opens Google Maps.
 */
export function CTA({ lang, className = "" }: { lang: Lang; className?: string }) {
  const t = dict[lang].common;
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a href={site.phoneHref} className={buttonClass("primary")}>
        <Phone className="size-4" aria-hidden="true" />
        {t.book}
        <span className="sr-only">
          {" "}
          – {t.call} {site.phone}
        </span>
      </a>
      <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
        <Navigation className="size-4" aria-hidden="true" />
        {t.directions}
        <span className="sr-only"> {t.newTab}</span>
      </a>
    </div>
  );
}
