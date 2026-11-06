import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { dict } from "@/lib/content";
import { paths, type Lang } from "@/lib/i18n";
import type { Service } from "@/lib/services";
import { ServiceIcon } from "./ServiceIcon";

/**
 * Compact service row used on the home page.
 * Rows (not boxed cards) keep the list calm and easy to scan.
 */
export function ServiceCard({ service, index, lang }: { service: Service; index: number; lang: Lang }) {
  const t = dict[lang].servicesPage;
  return (
    <li data-reveal className="group border-t border-navy/12">
      <Link
        href={`${paths[lang].services}#${service.slug}`}
        className="grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-2 py-7"
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-sky-soft text-navy transition-colors duration-300 group-hover:bg-sky">
          <ServiceIcon name={service.icon} className="size-5" />
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-sm text-ink-muted" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl">{service.title}</h3>
          </div>
          <p className="mt-2 text-ink-muted">{service.summary}</p>
          <p className="mt-3 text-sm font-medium text-navy-700">{t.howValue}</p>
        </div>
        <ArrowUpRight
          className="mt-1 size-5 text-navy/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}
