import { Crescent } from "./LunaMark";

/**
 * Lightweight drawn map of Willow Street (decorative).
 * Used instead of a heavy third-party map embed.
 */
export function MapSketch({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[16/10] bg-ice ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="250" fill="#EEF4FA" />
        <g fill="#E5EAF0">
          <rect x="20" y="20" width="110" height="70" rx="6" />
          <rect x="150" y="20" width="90" height="70" rx="6" />
          <rect x="260" y="20" width="120" height="70" rx="6" />
          <rect x="20" y="115" width="110" height="115" rx="6" />
          <rect x="150" y="115" width="90" height="50" rx="6" />
          <rect x="150" y="180" width="90" height="50" rx="6" />
          <rect x="260" y="115" width="120" height="115" rx="6" />
        </g>
        <path d="M0 102 H400 M140 0 V250 M250 0 V250" stroke="#FFFFFF" strokeWidth="14" />
        <path d="M0 102 H400" stroke="#D9EFFF" strokeWidth="6" />
        <rect x="285" y="140" width="70" height="60" rx="8" fill="#DCF7EE" />
      </svg>
      <div className="absolute left-[80%] top-[67%] -translate-x-1/2 -translate-y-full">
        <span className="flex size-12 items-center justify-center rounded-full bg-navy shadow-lg shadow-navy/20">
          <Crescent className="size-6 text-sky" />
        </span>
      </div>
      <span className="absolute left-4 top-[34%] rounded bg-white/90 px-2 py-0.5 text-xs font-semibold text-navy-700">
        Willow Street
      </span>
    </div>
  );
}
