import type { Metadata } from "next";
import { Accessibility, Clock, Mail, MapPin, Navigation, Phone, Siren, TrainFront } from "lucide-react";
import { buttonClass } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { MapSketch } from "@/components/MapSketch";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { hours, site, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment",
  description:
    "Book at Luna Dental Clinic, 24 Willow Street, Manchester M1 4AB. Call 0161 555 2480 or send a message. Evening and same-day emergency appointments.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Luna Dental Clinic",
    description: "Address, opening hours and booking for Luna Dental Clinic in Manchester.",
    url: "/contact",
    images: [ogImage],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & booking"
        title="Book a visit or say hello"
        intro="Call us, email or send the form below. For toothache, swelling or a broken tooth, please phone so we can see you the same day."
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className={buttonClass("primary")}>
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phone}
          </a>
          <a href="#book" className={buttonClass("secondary")}>
            Send a booking request
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-24" aria-label="Contact details and booking form">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* Details */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl sm:text-4xl">Find us</h2>
              <address className="mt-6 space-y-5 not-italic">
                <p className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">{site.name}</span>
                    {site.address.street}, {site.address.city}
                    <br />
                    {site.address.postcode}, {site.address.country}
                  </span>
                </p>
                <p className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  <a href={site.phoneHref} className="font-semibold underline decoration-sky decoration-2 underline-offset-4">
                    {site.phone}
                  </a>
                </p>
                <p className="flex gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-navy-700" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="break-all font-semibold underline decoration-sky decoration-2 underline-offset-4">
                    {site.email}
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h2 className="flex items-center gap-3 text-3xl sm:text-4xl">
                <Clock className="size-6 text-navy-700" aria-hidden="true" />
                Opening hours
              </h2>
              <dl className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
                {hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink-muted">{h.days}</dt>
                    <dd className="text-right font-semibold">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-ink-muted">Opening hours are fictional demo content.</p>
              <p className="mt-5 flex items-start gap-3 rounded-2xl bg-mint-soft px-5 py-4 text-[0.9375rem]">
                <Siren className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="font-semibold">Dental emergency?</strong> Call {site.phone}. Same-day slots are
                  kept free every day we are open.
                </span>
              </p>
            </div>

            {/* Map block: a lightweight illustration instead of a heavy third-party embed. */}
            <figure className="overflow-hidden rounded-[1.5rem] border border-navy/10">
              <MapSketch />
              <figcaption className="flex flex-col gap-4 border-t border-navy/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="space-y-1 text-[0.9375rem]">
                  <span className="flex items-center gap-2">
                    <TrainFront className="size-4 text-navy-700" aria-hidden="true" />A short walk from Piccadilly station
                  </span>
                  <span className="flex items-center gap-2">
                    <Accessibility className="size-4 text-navy-700" aria-hidden="true" />
                    Step-free ground floor access
                  </span>
                </span>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass("secondary", "min-h-11 shrink-0 px-5")}
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Get directions
                  <span className="sr-only">(opens Google Maps in a new tab)</span>
                </a>
              </figcaption>
            </figure>
          </div>

          {/* Form */}
          <div id="book" className="scroll-mt-28">
            <div className="rounded-[2rem] border border-navy/10 bg-ice p-6 sm:p-10">
              <h2 className="text-3xl sm:text-4xl">Request an appointment</h2>
              <p className="mt-3 text-ink-muted">
                Tell us a little about what you need and we will get back to you within one working day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
