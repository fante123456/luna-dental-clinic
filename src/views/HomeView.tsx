import Link from "next/link";
import { ArrowRight, CircleParking, ExternalLink, Navigation, PawPrint, Phone, Star } from "lucide-react";
import { ButtonLink, buttonClass } from "@/components/Button";
import { FirstVisit } from "@/components/PageEndings";
import { Photo } from "@/components/Photo";
import { Container, Eyebrow, Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { dict } from "@/lib/content";
import { paths, type Lang } from "@/lib/i18n";
import { getServices } from "@/lib/services";
import { site } from "@/lib/site";

const trustIcons = [Star, PawPrint, CircleParking];

export function HomeView({ lang }: { lang: Lang }) {
  const d = dict[lang];
  const t = d.home;
  const c = d.common;
  const services = getServices(lang);
  const reviews: Testimonial[] = d.reviews.map((r) => ({
    ...r,
    lang,
    detail: c.reviewSource,
    note: c.translated || undefined,
  }));
  const [before, em, after] = t.h1;

  return (
    <>
      {/* Hero */}
      <section className="bg-ice pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="mt-6 text-[2.875rem] sm:text-[4rem] lg:text-[4.75rem]">
              {before}
              <em className="italic text-navy-700">{em}</em>
              {after}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted sm:text-xl">{t.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className={buttonClass("primary")}>
                <Phone className="size-4" aria-hidden="true" />
                {c.book}
                <span className="sr-only">
                  {" "}
                  – {c.call} {site.phone}
                </span>
              </a>
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
                <Navigation className="size-4" aria-hidden="true" />
                {c.directions}
                <span className="sr-only"> {c.newTab}</span>
              </a>
            </div>
            <p className="mt-5 text-[0.9375rem] text-ink-muted">
              {c.call}{" "}
              <a href={site.phoneHref} className="font-semibold text-navy underline decoration-sky decoration-2 underline-offset-4">
                {site.phone}
              </a>
            </p>
          </div>

          <div className="relative">
            <Photo
              name="catExam"
              lang={lang}
              preload
              sizes="(min-width: 1200px) 540px, (min-width: 1024px) 45vw, 100vw"
              className="crescent-frame aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/6]"
              imgClassName="object-[50%_40%]"
            />
          </div>
        </Container>

        <Container>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 sm:grid-cols-3 lg:mt-16">
            {t.trust.map(({ title, text }, i) => {
              const Icon = trustIcons[i];
              return (
                <li key={title} className="flex items-start gap-4 bg-white px-6 py-5 sm:flex-col sm:gap-3 lg:flex-row lg:gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-mint-soft text-navy">
                    <Icon className="size-[1.125rem]" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-semibold">{title}</span>
                    <span className="block text-[0.9375rem] text-ink-muted">{text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow index="01">{t.welcomeEyebrow}</Eyebrow>
          </div>
          <div data-reveal>
            <h2 className="text-[2.25rem] sm:text-5xl">{t.welcomeTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">{t.welcomeText}</p>
            <Link
              href={paths[lang].about}
              className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-sky decoration-2 underline-offset-[6px] hover:decoration-navy"
            >
              {t.welcomeLink}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Services */}
      <Section index="02" eyebrow={t.servicesEyebrow} title={t.servicesTitle} intro={t.servicesIntro} tone="light">
        <ul className="mt-14 grid gap-x-16 lg:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} lang={lang} />
          ))}
        </ul>
        <div className="mt-10 border-t border-navy/12 pt-10">
          <ButtonLink href={paths[lang].services} variant="secondary">
            {t.servicesButton}
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      {/* What clients notice (from the reviews) */}
      <section className="on-dark bg-navy py-20 text-ice sm:py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow index="03" dark>
              {t.whyEyebrow}
            </Eyebrow>
            <h2 className="mt-5 text-[2.25rem] sm:text-5xl">{t.whyTitle}</h2>
            <p className="mt-4 text-sm text-ice/75">{t.whyNote}</p>
            <Photo
              name="pettingDog"
              lang={lang}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="mt-10 aspect-[4/3] rounded-[1.5rem]"
            />
          </div>
          <ol className="flex flex-col justify-center">
            {t.reasons.map((r, i) => (
              <li key={r.title} data-reveal className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ice/15 py-8 last:border-b">
                <span className="font-display text-2xl text-sky" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl">{r.title}</h3>
                  <p className="mt-2 text-ice/80">{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Google reviews */}
      <Section index="04" eyebrow={t.reviewsEyebrow} title={t.reviewsTitle} tone="white">
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <p className="inline-flex items-center gap-2 self-start rounded-full bg-grey px-4 py-2 text-sm font-semibold text-navy">
            <Star className="size-4 fill-navy text-navy" aria-hidden="true" />
            {c.rating}
          </p>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 self-start font-semibold underline decoration-sky decoration-2 underline-offset-[6px] hover:decoration-navy sm:self-auto"
          >
            {c.allReviews}
            <ExternalLink className="size-4" aria-hidden="true" />
            <span className="sr-only"> {c.newTab}</span>
          </a>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <TestimonialCard t={reviews[1]} featured />
          <div className="grid gap-6">
            <TestimonialCard t={reviews[0]} />
            <TestimonialCard t={reviews[2]} />
          </div>
        </div>
      </Section>

      <FirstVisit lang={lang} />
    </>
  );
}
