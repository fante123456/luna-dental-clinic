import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  CircleParking,
  Clock,
  MapPin,
  Navigation,
  PawPrint,
  Phone,
  Stethoscope,
} from "lucide-react";
import { buttonClass } from "./Button";
import { CTA } from "./CTA";
import { MapSketch } from "./MapSketch";
import { Photo } from "./Photo";
import { Container, Eyebrow } from "./Section";
import { ServiceIcon } from "./ServiceIcon";
import { dict } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Home: how a visit works                                             */
/* ------------------------------------------------------------------ */

const stepIcons = [Phone, MapPin, Stethoscope];
const metaIcons = [Clock, CircleParking, PawPrint];

export function FirstVisit({ lang }: { lang: Lang }) {
  const t = dict[lang].firstVisit;
  return (
    <section aria-labelledby="first-visit-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Photo
          name="smallDogVisit"
          lang={lang}
          sizes="(min-width: 1024px) 520px, 100vw"
          className="aspect-[4/3] rounded-[1.5rem] lg:aspect-[4/5]"
        />
        <div>
          <Eyebrow index="05">{t.eyebrow}</Eyebrow>
          <h2 id="first-visit-title" className="mt-5 text-[2.25rem] sm:text-5xl">
            {t.title}
          </h2>
          <ol className="mt-10">
            {t.steps.map(({ title, text, meta }, i) => {
              const Icon = stepIcons[i];
              const MetaIcon = metaIcons[i];
              return (
                <li key={title} data-reveal className="relative flex gap-5 pb-8 last:pb-0">
                  {i < t.steps.length - 1 && (
                    <span className="absolute left-6 top-14 bottom-2 w-px bg-navy/15" aria-hidden="true" />
                  )}
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mint-soft text-navy">
                    <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <div className="pt-1">
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-1.5 text-ink-muted">{text}</p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700">
                      <MetaIcon className="size-3.5" aria-hidden="true" />
                      {meta}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
          <CTA lang={lang} className="mt-10" />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About: how to get to the practice                                   */
/* ------------------------------------------------------------------ */

export function FindUs({ lang }: { lang: Lang }) {
  const t = dict[lang].findUs;
  const c = dict[lang].common;
  return (
    <section aria-labelledby="find-us-title" className="bg-ice py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[2rem] border border-navy/10 bg-white lg:grid-cols-2">
          <div className="p-7 sm:p-10 lg:p-14">
            <Eyebrow index="04">{t.eyebrow}</Eyebrow>
            <h2 id="find-us-title" className="mt-5 text-[2.25rem] sm:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">{t.text}</p>
            <dl className="mt-8 grid gap-4 text-[0.9375rem] sm:grid-cols-2">
              <div>
                <dt className="flex items-center gap-2.5 font-semibold">
                  <MapPin className="size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  {t.where}
                </dt>
                <dd className="mt-1 pl-[1.875rem] text-ink-muted">
                  {site.address.street}, {site.address.postcode} {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2.5 font-semibold">
                  <CalendarCheck className="size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  {t.when}
                </dt>
                <dd className="mt-1 pl-[1.875rem] text-ink-muted">{t.whenText}</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>
                <Navigation className="size-4" aria-hidden="true" />
                {c.directions}
                <span className="sr-only"> {c.newTab}</span>
              </a>
              <a href={site.phoneHref} className={buttonClass("secondary")}>
                <Phone className="size-4" aria-hidden="true" />
                {c.call} {site.phone}
              </a>
            </div>
          </div>
          <MapSketch label={t.mapLabel} className="w-full lg:aspect-auto lg:h-full lg:min-h-96" />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services: help people pick the right service                        */
/* ------------------------------------------------------------------ */

export function TreatmentFinder({ lang }: { lang: Lang }) {
  const t = dict[lang].finder;
  return (
    <section aria-labelledby="finder-title" className="bg-ice py-20 sm:py-24 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 id="finder-title" className="mt-5 text-[2.25rem] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">{t.text}</p>
          <CTA lang={lang} className="mt-9" />
        </div>
        <ul className="divide-y divide-navy/10 rounded-[1.5rem] border border-navy/10 bg-white">
          {t.needs.map(({ need, slug, note }) => {
            const s = getService(lang, slug);
            return (
              <li key={slug}>
                <a
                  href={`#${slug}`}
                  className="group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-sky-soft/50 sm:px-7"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-soft text-navy transition-colors group-hover:bg-sky">
                    <ServiceIcon name={s.icon} className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{need}</span>
                    <span className="mt-0.5 block text-sm text-ink-muted">
                      {s.title} · {note}
                    </span>
                  </span>
                  <ArrowRight
                    className="size-5 shrink-0 text-navy-700 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Gallery: answer the questions people have before a first visit      */
/* ------------------------------------------------------------------ */

export function BeforeYouVisit({ lang }: { lang: Lang }) {
  const t = dict[lang].faq;
  return (
    <section aria-labelledby="faq-title" className="bg-ice py-20 sm:py-24 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Eyebrow index="05">{t.eyebrow}</Eyebrow>
          <h2 id="faq-title" className="mt-5 text-[2.25rem] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">{t.text}</p>
          <CTA lang={lang} className="mt-9" />
        </div>
        <div className="divide-y divide-navy/10 rounded-[1.5rem] border border-navy/10 bg-white">
          {t.items.map(({ q, a }, i) => (
            <details key={q} className="group px-5 sm:px-7" open={i === 0}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                <span className="font-display text-xl font-normal">{q}</span>
                <ChevronDown
                  className="size-5 shrink-0 text-navy-700 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="-mt-1 pb-6 text-ink-muted">{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
