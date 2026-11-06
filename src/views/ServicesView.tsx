import { CalendarCheck, Info, Phone, Tag } from "lucide-react";
import { buttonClass } from "@/components/Button";
import { TreatmentFinder } from "@/components/PageEndings";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container } from "@/components/Section";
import { ServiceIcon } from "@/components/ServiceIcon";
import { dict } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { getServices } from "@/lib/services";
import { site } from "@/lib/site";

export function ServicesView({ lang }: { lang: Lang }) {
  const t = dict[lang].servicesPage;
  const c = dict[lang].common;
  const services = getServices(lang);
  const total = String(services.length).padStart(2, "0");

  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
        <nav aria-label={t.jumpNav} className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/15 bg-white px-4 text-[0.9375rem] font-medium hover:border-navy"
                >
                  <ServiceIcon name={s.icon} className="size-4" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section className="bg-white py-8 sm:py-12" aria-label={t.sectionLabel}>
        <Container>
          <p className="flex items-start gap-3 rounded-2xl bg-sky-soft px-5 py-4 text-[0.9375rem] text-navy">
            <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            {t.note}
          </p>

          <div className="mt-4">
            {services.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                aria-labelledby={`${s.slug}-title`}
                className="grid scroll-mt-28 items-center gap-8 border-b border-navy/10 py-14 last:border-0 sm:py-20 lg:grid-cols-2 lg:gap-16"
              >
                <Photo
                  name={s.photo}
                  lang={lang}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className={`aspect-[3/2] rounded-[1.5rem] ${i % 2 === 1 ? "lg:order-2" : ""}`}
                />
                <div data-reveal>
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-full bg-sky-soft text-navy">
                      <ServiceIcon name={s.icon} className="size-5" />
                    </span>
                    <span className="font-display text-lg text-ink-muted" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")} / {total}
                    </span>
                  </div>
                  <h2 id={`${s.slug}-title`} className="mt-6 text-4xl sm:text-[2.75rem]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg font-medium text-navy">{s.summary}</p>
                  <p className="mt-3 text-lg leading-relaxed text-ink-muted">{s.description}</p>

                  <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-navy/10 pt-6">
                    <div>
                      <dt className="text-sm text-ink-muted">{t.howTitle}</dt>
                      <dd className="mt-1 inline-flex items-center gap-2 font-semibold">
                        <CalendarCheck className="size-4" aria-hidden="true" />
                        {s.slug === "urgences" ? `${c.call} ${site.phone}` : t.howValue}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-muted">{t.priceTitle}</dt>
                      <dd className="mt-1 inline-flex items-center gap-2 font-semibold">
                        <Tag className="size-4" aria-hidden="true" />
                        {t.priceValue}
                      </dd>
                    </div>
                  </dl>

                  <a href={site.phoneHref} className={buttonClass("secondary", "mt-8")}>
                    <Phone className="size-4" aria-hidden="true" />
                    {c.book}
                    <span className="sr-only">
                      {" "}
                      {t.bookFor} {s.title} – {c.call} {site.phone}
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <TreatmentFinder lang={lang} />
    </>
  );
}
