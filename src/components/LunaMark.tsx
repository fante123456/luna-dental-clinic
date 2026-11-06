/**
 * The Luna crescent: the brand's one signature shape.
 * Used in the logo, section dividers and the CTA band.
 */
export function Crescent({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        fill="currentColor"
        d="M20.5 3.2A13 13 0 1 0 28.8 22 10.4 10.4 0 0 1 20.5 3.2Z"
      />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-navy" : "text-ice";
  const disc = tone === "dark" ? "bg-navy ring-navy/10" : "bg-navy-800 ring-ice/15";
  return (
    <span className={`inline-flex items-center gap-2.5 ${text}`}>
      <span className={`relative inline-flex size-9 items-center justify-center rounded-full ring-1 ${disc}`}>
        <Crescent className="size-5 text-sky" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.375rem] tracking-tight [font-variation-settings:'SOFT'_100]">
          Luna
        </span>{" "}
        <span className="mt-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] opacity-80">
          Dental Clinic
        </span>
      </span>
    </span>
  );
}
