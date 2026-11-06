import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, HeartHandshake, Phone, Siren, UserPlus } from "lucide-react";
import { ButtonLink, buttonClass } from "@/components/Button";
import { FirstVisit } from "@/components/PageEndings";
import { Photo } from "@/components/Photo";
import { Container, Eyebrow, Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { services } from "@/lib/services";
import { bookHref, site, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Luna Dental Clinic | Modern Dentist in Manchester" },
  description:
    "Luna Dental Clinic is a modern dental clinic in Manchester offering general dentistry, cosmetic treatments and gentle dental care.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Luna Dental Clinic | Modern Dentist in Manchester",
    description:
      "A modern dental clinic in Manchester offering general dentistry, cosmetic treatments and gentle dental care.",
    url: "/",
    images: [ogImage],
  },
};

const trust = [
  { icon: Clock, title: "Evening appointments", text: "Open until 7:30pm, Mon–Thu (demo hours)" },
  { icon: Siren, title: "Same-day emergencies", text: "Time kept free every day for urgent care" },
  { icon: UserPlus, title: "New patients welcome", text: "Adults, teens and families" },
];

const reasons = [
  {
    title: "We explain before we start",
    text: "You will always know what we are doing and why. Ask us to pause at any time, and we will.",
  },
  {
    title: "Clear prices, written down",
    text: "You get a written plan with costs before any treatment, so there are no surprises later.",
  },
  {
    title: "Time that is not rushed",
    text: "Longer appointments give space for questions, and for nervous patients to settle in.",
  },
  {
    title: "Modern, gentle equipment",
    text: "Digital scans instead of messy moulds, low-dose X-rays and calm, quiet treatment rooms.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "I had avoided the dentist for years. They talked me through every step and let me take breaks. I actually left feeling calm.",
    name: "Sophie R.",
    detail: "Demo patient, Ancoats",
  },
  {
    quote: "Cracked a tooth on a Monday morning and was seen the same afternoon. Kind, quick and very clear about cost.",
    name: "Daniel M.",
    detail: "Demo patient, Salford",
  },
  {
    quote: "The evening slots mean I don't have to take time off work. Lovely, bright clinic too.",
    name: "Aisha K.",
    detail: "Demo patient, Didsbury",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ice pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Dental clinic · Manchester city centre</Eyebrow>
            <h1 className="mt-6 text-[2.875rem] sm:text-[4rem] lg:text-[4.75rem]">
              Modern dental care with a <em className="italic text-navy-700">gentle</em> touch
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted sm:text-xl">
              General and cosmetic dentistry in a calm, bright clinic, with time to listen and clear prices
              before anything begins.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={bookHref}>
                Book an appointment
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <a href={site.phoneHref} className={buttonClass("secondary")}>
                <Phone className="size-4" aria-hidden="true" />
                Call {site.phone}
              </a>
            </div>
          </div>

          <div className="relative">
            <Photo
              name="hero"
              preload
              sizes="(min-width: 1200px) 540px, (min-width: 1024px) 45vw, 100vw"
              className="crescent-frame aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/6]"
              imgClassName="object-[60%_center]"
            />
          </div>
        </Container>

        <Container>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy/10 bg-navy/10 sm:grid-cols-3 lg:mt-16">
            {trust.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4 bg-white px-6 py-5 sm:flex-col sm:gap-3 lg:flex-row lg:gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-mint-soft text-navy">
                  <Icon className="size-[1.125rem]" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block font-semibold">{title}</span>
                  <span className="block text-[0.9375rem] text-ink-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow index="01">Welcome</Eyebrow>
          </div>
          <div data-reveal>
            <h2 className="text-[2.25rem] sm:text-5xl">A calmer kind of dental visit</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Luna is an independent clinic on Willow Street, a short walk from Piccadilly. We look after
              everyday dental health and help with cosmetic changes, always at a pace that feels right for
              you. If you feel nervous, tell us. Many of our patients do, and we plan around it.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-sky decoration-2 underline-offset-[6px] hover:decoration-navy"
            >
              Meet the team and our story
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Services */}
      <Section
        index="02"
        eyebrow="Treatments"
        title="Care for every stage of your smile"
        intro="From routine check-ups to straighter, brighter teeth. Prices are fictional starting points for this demo clinic; a real clinic would give a written quote before treatment."
        tone="light"
      >
        <ul className="mt-14 grid gap-x-16 lg:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </ul>
        <div className="mt-10 border-t border-navy/12 pt-10">
          <ButtonLink href="/services" variant="secondary">
            View all treatments
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      {/* Why choose us */}
      <section className="on-dark bg-navy py-20 text-ice sm:py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow index="03" dark>
              Why Luna
            </Eyebrow>
            <h2 className="mt-5 text-[2.25rem] sm:text-5xl">Gentle by design, not by chance</h2>
            <Photo
              name="reassurance"
              sizes="(min-width: 1024px) 480px, 100vw"
              className="mt-10 aspect-[4/3] rounded-[1.5rem]"
            />
          </div>
          <ol className="flex flex-col justify-center">
            {reasons.map((r, i) => (
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

      {/* Testimonials */}
      <Section
        index="04"
        eyebrow="Patient stories"
        title="What it feels like to visit"
        tone="white"
      >
        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-grey px-4 py-2 text-sm font-medium text-navy-700">
          <HeartHandshake className="size-4" aria-hidden="true" />
          Demo testimonials: fictional examples written for this portfolio project.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <TestimonialCard t={testimonials[0]} featured />
          <div className="grid gap-6">
            <TestimonialCard t={testimonials[1]} />
            <TestimonialCard t={testimonials[2]} />
          </div>
        </div>
      </Section>

      <FirstVisit />
    </>
  );
}
