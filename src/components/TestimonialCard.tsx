import { Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  /** e.g. "(translated from French)"; empty when the quote is the original. */
  note?: string;
  lang: "fr" | "en";
};

export function TestimonialCard({
  t,
  featured = false,
}: {
  t: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      data-reveal
      className={
        featured
          ? "flex h-full flex-col justify-between rounded-[2rem] bg-navy p-8 text-ice sm:p-10 lg:p-12"
          : "flex h-full flex-col justify-between rounded-[1.5rem] border border-navy/10 bg-white p-7 sm:p-8"
      }
    >
      <div>
        <Quote className={`size-7 ${featured ? "text-sky" : "text-navy/30"}`} aria-hidden="true" strokeWidth={1.5} />
        <blockquote
          className={`mt-5 font-display ${featured ? "text-[1.625rem] leading-snug sm:text-3xl" : "text-xl leading-snug"}`}
        >
          <p>{t.lang === "fr" ? `« ${t.quote} »` : `“${t.quote}”`}</p>
        </blockquote>
        {t.note && <p className={`mt-3 text-sm italic ${featured ? "text-ice/75" : "text-ink-muted"}`}>{t.note}</p>}
      </div>
      <figcaption className={`mt-8 text-sm ${featured ? "text-ice/80" : "text-ink-muted"}`}>
        <span className={`block font-semibold ${featured ? "text-ice" : "text-navy"}`}>{t.name}</span>
        {t.detail}
      </figcaption>
    </figure>
  );
}
