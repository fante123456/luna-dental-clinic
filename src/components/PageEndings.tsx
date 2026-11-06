import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  Clock,
  FileText,
  MapPin,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { buttonClass } from "./Button";
import { CTA } from "./CTA";
import { MapSketch } from "./MapSketch";
import { Photo } from "./Photo";
import { Container, Eyebrow } from "./Section";
import { ServiceIcon } from "./ServiceIcon";
import { services } from "@/lib/services";
import { bookHref, site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Home: what actually happens on a first visit                        */
/* ------------------------------------------------------------------ */

const firstVisit = [
  {
    icon: CalendarCheck,
    title: "Choose a time that suits you",
    text: "Book online or by phone, including evenings until 7:30pm (demo hours).",
    meta: "2 minutes",
  },
  {
    icon: MessageCircle,
    title: "A calm conversation first",
    text: "We listen, check and explain what we see. Nothing happens on day one unless you want it to.",
    meta: "About 40 minutes",
  },
  {
    icon: FileText,
    title: "A written plan to take home",
    text: "Clear options and prices on paper, so you can decide in your own time.",
    meta: "No pressure",
  },
];

export function FirstVisit() {
  return (
    <section aria-labelledby="first-visit-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Photo
          name="roomCalm"
          sizes="(min-width: 1024px) 520px, 100vw"
          className="aspect-[4/3] rounded-[1.5rem] lg:aspect-[4/5]"
        />
        <div>
          <Eyebrow index="05">Your first visit</Eyebrow>
          <h2 id="first-visit-title" className="mt-5 text-[2.25rem] sm:text-5xl">
            Here is exactly what happens
          </h2>
          <ol className="mt-10">
            {firstVisit.map(({ icon: Icon, title, text, meta }, i) => (
              <li key={title} data-reveal className="relative flex gap-5 pb-8 last:pb-0">
                {i < firstVisit.length - 1 && (
                  <span className="absolute left-6 top-14 bottom-2 w-px bg-navy/15" aria-hidden="true" />
                )}
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mint-soft text-navy">
                  <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <div className="pt-1">
                  <h3 className="text-2xl">{title}</h3>
                  <p className="mt-1.5 text-ink-muted">{text}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {meta}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <CTA book="Book your first visit" className="mt-10" />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About: meet the team before you book                                */
/* ------------------------------------------------------------------ */

export function SayHello() {
  return (
    <section aria-labelledby="say-hello-title" className="bg-ice py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[2rem] border border-navy/10 bg-white lg:grid-cols-2">
          <div className="p-7 sm:p-10 lg:p-14">
            <Eyebrow index="05">Before you book</Eyebrow>
            <h2 id="say-hello-title" className="mt-5 text-[2.25rem] sm:text-5xl">
              Come and say hello first
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Nervous about dentists? Pop in for a ten-minute chat with the team. No appointment, no chair,
              just a cup of tea and a look around.
            </p>
            <dl className="mt-8 grid gap-4 text-[0.9375rem] sm:grid-cols-2">
              <div>
                <dt className="flex items-center gap-2.5 font-semibold">
                  <MapPin className="size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  Where
                </dt>
                <dd className="mt-1 pl-[1.875rem] text-ink-muted">
                  {site.address.street}, {site.address.city} {site.address.postcode}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2.5 font-semibold">
                  <Clock className="size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  When
                </dt>
                <dd className="mt-1 pl-[1.875rem] text-ink-muted">Mon–Thu until 7:30pm, Sat mornings (demo hours)</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>
                <Navigation className="size-4" aria-hidden="true" />
                Get directions
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
              <Link href={bookHref} className={buttonClass("secondary")}>
                Or book a visit
              </Link>
            </div>
          </div>
          <MapSketch className="w-full lg:aspect-auto lg:h-full lg:min-h-96" />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services: help people pick the right treatment                      */
/* ------------------------------------------------------------------ */

const needs: { need: string; slug: string; note: string }[] = [
  { need: "I have toothache, swelling or a broken tooth", slug: "emergency-dentist", note: "Same day" },
  { need: "I am due a check-up or clean", slug: "general-dentistry", note: "From £55" },
  { need: "I would like whiter teeth", slug: "teeth-whitening", note: "From £295" },
  { need: "My teeth are crooked or crowded", slug: "invisalign", note: "From £2,900" },
  { need: "I am missing a tooth", slug: "dental-implants", note: "From £2,200" },
  { need: "I want to change the shape of a tooth", slug: "cosmetic-dentistry", note: "From £180" },
];

export function TreatmentFinder() {
  return (
    <section aria-labelledby="finder-title" className="bg-ice py-20 sm:py-24 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Not sure?</Eyebrow>
          <h2 id="finder-title" className="mt-5 text-[2.25rem] sm:text-5xl">
            Start with what you need
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Pick the sentence that sounds like you. Still unsure? Book a check-up and we will talk it through
            together.
          </p>
          <CTA book="Book a check-up" className="mt-9" />
        </div>
        <ul className="divide-y divide-navy/10 rounded-[1.5rem] border border-navy/10 bg-white">
          {needs.map(({ need, slug, note }) => {
            const s = services.find((x) => x.slug === slug)!;
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

const faqs = [
  {
    q: "Will it hurt?",
    a: "Most check-ups do not hurt at all. For treatment we use numbing gel before any injection, and you can raise a hand to pause at any time.",
  },
  {
    q: "How much is a first check-up?",
    a: "From £55 for a full check-up (demo price). You get a written plan with costs before any treatment is booked.",
  },
  {
    q: "Can I bring my children?",
    a: "Yes. We see families, teenagers and adults, and we are happy to book siblings one after the other.",
  },
  {
    q: "I have not been to a dentist in years. Is that OK?",
    a: "Completely. Many of our patients say the same. We start with a conversation and go at your pace, with no judgement.",
  },
];

export function BeforeYouVisit() {
  return (
    <section aria-labelledby="faq-title" className="bg-ice py-20 sm:py-24 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Eyebrow index="06">Before you visit</Eyebrow>
          <h2 id="faq-title" className="mt-5 text-[2.25rem] sm:text-5xl">
            Questions people often ask
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Something else on your mind? Call us. A real person answers, not a menu.
          </p>
          <CTA className="mt-9" />
        </div>
        <div className="divide-y divide-navy/10 rounded-[1.5rem] border border-navy/10 bg-white">
          {faqs.map(({ q, a }, i) => (
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
