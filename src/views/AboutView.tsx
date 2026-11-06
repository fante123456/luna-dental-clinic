import { Ear, Heart, MessageCircle, ShieldCheck } from "lucide-react";
import { Paw } from "@/components/Logo";
import { FindUs } from "@/components/PageEndings";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container, Eyebrow, Section } from "@/components/Section";
import { dict } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

const valueIcons = [Heart, Ear, MessageCircle, ShieldCheck];

export function AboutView({ lang }: { lang: Lang }) {
  const t = dict[lang].about;
  const c = dict[lang].common;
  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} title={t.title} intro={t.intro} photo="dogExamTable" />

      {/* The vet */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow index="01">{t.storyEyebrow}</Eyebrow>
            <span className="mt-8 flex size-20 items-center justify-center rounded-full bg-navy" aria-hidden="true">
              <Paw className="size-10 text-sky" />
            </span>
          </div>
          <div data-reveal className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <h2 className="text-[2.25rem] text-navy sm:text-5xl">{t.storyTitle}</h2>
            {t.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold text-navy">
              <span>{site.name}</span>
              <span>
                {site.address.street}, {site.address.postcode} {site.address.city}
              </span>
              <a href={site.phoneHref} className="underline decoration-sky decoration-2 underline-offset-4">
                {site.phone}
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* Animals */}
      <Section index="02" eyebrow={t.animalsEyebrow} title={t.animalsTitle} intro={t.animalsIntro}>
        <p className="mt-4 text-sm text-ink-muted">{t.photoNote}</p>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {t.animals.map((a, i) => (
            <li key={a.title} data-reveal className={i === 1 ? "lg:mt-16" : ""}>
              <Photo
                name={a.photo}
                lang={lang}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/5] rounded-[1.5rem]"
              />
              <h3 className="mt-6 text-2xl">{a.title}</h3>
              <p className="mt-3 text-ink-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* From the reviews */}
      <section className="on-dark bg-navy py-20 text-ice sm:py-24 lg:py-28">
        <Container>
          <div data-reveal className="max-w-2xl">
            <Eyebrow index="03" dark>
              {t.valuesEyebrow}
            </Eyebrow>
            <h2 className="mt-5 text-[2.25rem] sm:text-5xl">{t.valuesTitle}</h2>
            <p className="mt-4 text-sm text-ice/75">{c.rating}</p>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-ice/15 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map(({ title, text }, i) => {
              const Icon = valueIcons[i];
              return (
                <li key={title} data-reveal className="bg-navy p-7 sm:p-8">
                  <Icon className="size-6 text-mint" aria-hidden="true" strokeWidth={1.5} />
                  <h3 className="mt-6 text-2xl">{title}</h3>
                  <p className="mt-2 text-ice/80">{text}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <FindUs lang={lang} />
    </>
  );
}
