import type { Metadata } from "next";
import { Check, Clock, Info } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { TreatmentFinder } from "@/components/PageEndings";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container } from "@/components/Section";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services } from "@/lib/services";
import { bookHref, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services in Manchester",
  description:
    "General dentistry, teeth whitening, dental implants, Invisalign, emergency appointments and cosmetic dentistry at Luna Dental Clinic, Manchester.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dental services at Luna Dental Clinic",
    description: "Six treatments, clear starting prices and gentle care in Manchester city centre.",
    url: "/services",
    images: [ogImage],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Our dental services"
        intro="Six ways we can help, from your next check-up to a brighter, straighter smile. Every treatment starts with a conversation and a written plan."
      >
        <nav aria-label="Jump to a treatment" className="mt-10">
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

      <section className="bg-white py-8 sm:py-12" aria-label="Treatment details">
        <Container>
          <p className="flex items-start gap-3 rounded-2xl bg-sky-soft px-5 py-4 text-[0.9375rem] text-navy">
            <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            Prices and durations are fictional examples for this demo clinic. A real clinic would confirm costs
            in a written treatment plan.
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
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className={`aspect-[3/2] rounded-[1.5rem] ${i % 2 === 1 ? "lg:order-2" : ""}`}
                />
                <div data-reveal>
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-full bg-sky-soft text-navy">
                      <ServiceIcon name={s.icon} className="size-5" />
                    </span>
                    <span className="font-display text-lg text-ink-muted" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                  </div>
                  <h2 id={`${s.slug}-title`} className="mt-6 text-4xl sm:text-[2.75rem]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">{s.description}</p>

                  <h3 className="mt-8 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-navy-700">
                    What is included
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-1 size-4 shrink-0 text-navy-700" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-navy/10 pt-6">
                    <div>
                      <dt className="text-sm text-ink-muted">Typical time</dt>
                      <dd className="mt-1 inline-flex items-center gap-2 font-semibold">
                        <Clock className="size-4" aria-hidden="true" />
                        {s.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-muted">Starting price</dt>
                      <dd className="mt-1 font-display text-2xl">From {s.from}</dd>
                    </div>
                  </dl>

                  <ButtonLink href={bookHref} variant="secondary" className="mt-8">
                    Book a consultation
                    <span className="sr-only"> for {s.title}</span>
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <TreatmentFinder />
    </>
  );
}
