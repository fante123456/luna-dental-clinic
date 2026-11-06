import type { Lang } from "@/lib/i18n";
import { dict } from "@/lib/content";

/** Simple paw print: four toes and a main pad. */
export function Paw({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="currentColor"
    >
      <ellipse cx="7.2" cy="13.2" rx="2.7" ry="3.4" transform="rotate(-24 7.2 13.2)" />
      <ellipse cx="12.6" cy="7.6" rx="2.8" ry="3.6" transform="rotate(-8 12.6 7.6)" />
      <ellipse cx="19.4" cy="7.6" rx="2.8" ry="3.6" transform="rotate(8 19.4 7.6)" />
      <ellipse cx="24.8" cy="13.2" rx="2.7" ry="3.4" transform="rotate(24 24.8 13.2)" />
      <path d="M16 14.6c-3.6 0-8 4.6-8 8.6 0 2.6 2 3.9 4.3 3.9 1.5 0 2.4-.7 3.7-.7s2.2.7 3.7.7c2.3 0 4.3-1.3 4.3-3.9 0-4-4.4-8.6-8-8.6Z" />
    </svg>
  );
}

/** Text logo: "Dr Colin" with a small "Cabinet vétérinaire · Saint-Lô" line. */
export function Logo({
  lang,
  tone = "dark",
  compact = false,
}: {
  lang: Lang;
  tone?: "dark" | "light";
  /** Hide the small line on narrow screens (used in the header). */
  compact?: boolean;
}) {
  const text = tone === "dark" ? "text-navy" : "text-ice";
  const disc = tone === "dark" ? "bg-navy ring-navy/10" : "bg-navy-800 ring-ice/15";
  return (
    <span className={`inline-flex items-center gap-2.5 ${text}`}>
      <span className={`relative inline-flex size-9 shrink-0 items-center justify-center rounded-full ring-1 ${disc}`}>
        <Paw className="size-5 text-sky" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.375rem] tracking-tight [font-variation-settings:'SOFT'_100]">
          Dr Colin
        </span>{" "}
        <span
          className={`mt-1 text-[0.75rem] font-semibold tracking-[0.02em] opacity-80 ${compact ? "hidden sm:block" : ""}`}
        >
          {dict[lang].common.logoSub}
        </span>
      </span>
    </span>
  );
}
