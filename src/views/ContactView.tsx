import { CalendarCheck, CircleParking, Clock, MapPin, Navigation, Phone, Siren, Star } from "lucide-react";
import { buttonClass } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { MapSketch } from "@/components/MapSketch";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { dict } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function ContactView({ lang }: { lang: Lang }) {
  const d = dict[lang];
  const t = d.contact;
  const c = d.common;
  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className={buttonClass("primary")}>
            <Phone className="size-4" aria-hidden="true" />
            {c.call} {site.phone}
          </a>
          <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
            <Navigation className="size-4" aria-hidden="true" />
            {c.directions}
            <span className="sr-only"> {c.newTab}</span>
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-24" aria-label={t.sectionLabel}>
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* Details */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl sm:text-4xl">{t.findUs}</h2>
              <address className="mt-6 space-y-5 not-italic">
                <p className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">{site.name}</span>
                    {site.vet}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.postcode} {site.address.city}, {site.address.country}
                  </span>
                </p>
                <p className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  <a href={site.phoneHref} className="font-semibold underline decoration-sky decoration-2 underline-offset-4">
                    {site.phone}
                  </a>
                </p>
                <p className="flex gap-4">
                  <Star className="mt-1 size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-sky decoration-2 underline-offset-4"
                  >
                    {c.rating}
                    <span className="sr-only"> {c.newTab}</span>
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h2 className="flex items-center gap-3 text-3xl sm:text-4xl">
                <Clock className="size-6 text-navy-700" aria-hidden="true" />
                {t.hoursTitle}
              </h2>
              <dl className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
                {c.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink-muted">{h.days}</dt>
                    <dd className="text-right font-semibold">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-ink-muted">{c.hoursNote}</p>
              <p className="mt-5 flex items-start gap-3 rounded-2xl bg-mint-soft px-5 py-4 text-[0.9375rem]">
                <Siren className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="font-semibold">{t.emergencyTitle}</strong> {t.emergencyText}{" "}
                  <a href={site.phoneHref} className="font-semibold underline underline-offset-4">
                    {site.phone}
                  </a>
                  .
                </span>
              </p>
            </div>

            {/* Map block: a lightweight illustration instead of a heavy third-party embed. */}
            <figure className="overflow-hidden rounded-[1.5rem] border border-navy/10">
              <MapSketch label={d.findUs.mapLabel} />
              <figcaption className="flex flex-col gap-4 border-t border-navy/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="space-y-1 text-[0.9375rem]">
                  <span className="flex items-center gap-2">
                    <CircleParking className="size-4 text-navy-700" aria-hidden="true" />
                    {c.parking}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarCheck className="size-4 text-navy-700" aria-hidden="true" />
                    {t.byAppointment}
                  </span>
                </span>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass("secondary", "min-h-11 shrink-0 px-5")}
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  {c.viewOnMaps}
                  <span className="sr-only"> {c.newTab}</span>
                </a>
              </figcaption>
            </figure>
          </div>

          {/* Form */}
          <div id="book" className="scroll-mt-28">
            <div className="rounded-[2rem] border border-navy/10 bg-ice p-6 sm:p-10">
              <h2 className="text-3xl sm:text-4xl">{t.formTitle}</h2>
              <p className="mt-3 text-ink-muted">{t.formIntro}</p>
              <div className="mt-8">
                <ContactForm lang={lang} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
