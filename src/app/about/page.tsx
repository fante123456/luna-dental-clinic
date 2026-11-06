import type { Metadata } from "next";
import { ogImage } from "@/lib/site";
import { Ear, Leaf, MessageCircle, ShieldCheck } from "lucide-react";
import { SayHello } from "@/components/PageEndings";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container, Eyebrow, Section } from "@/components/Section";
import type { PhotoKey } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About Our Gentle Dental Team",
  description:
    "Meet the team at Luna Dental Clinic in Manchester: our story, our values and the calm, modern clinic where we care for nervous and returning patients.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Luna Dental Clinic",
    description: "Our story, our team and the values behind a calmer dental visit in Manchester.",
    url: "/about",
    images: [ogImage],
  },
};

const team: { name: string; role: string; bio: string; photo: PhotoKey }[] = [
  {
    name: "Dr Oliver Hale",
    role: "Principal Dentist",
    bio: "Twenty years in general dentistry, with a special interest in nervous patients and implant care.",
    photo: "teamLead",
  },
  {
    name: "Dr Elena Marsh",
    role: "Cosmetic & Aligner Dentist",
    bio: "Focuses on natural-looking bonding, veneers and clear aligner treatment.",
    photo: "teamCosmetic",
  },
  {
    name: "Nadia Brooks",
    role: "Patient Care Lead",
    bio: "Your first point of contact: bookings, treatment plans and making sure you feel at home.",
    photo: "teamCare",
  },
];

const values = [
  { icon: Ear, title: "Listen first", text: "Every visit begins with a conversation, not a procedure." },
  { icon: MessageCircle, title: "Explain clearly", text: "Plain words, honest options and written costs." },
  { icon: ShieldCheck, title: "Do it properly", text: "Careful, evidence-based dentistry that lasts." },
  { icon: Leaf, title: "Keep it calm", text: "Quiet rooms, soft light and no rushing." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Luna"
        title="A gentle practice, built around you"
        intro="We opened Luna to be the kind of dental clinic we would want to visit ourselves: bright, quiet, honest about cost and never in a hurry."
        photo="consultScan"
      />

      {/* Story */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow index="01">Our story</Eyebrow>
            <p className="mt-4 text-sm text-ink-muted">A fictional story for this demo clinic.</p>
          </div>
          <div data-reveal className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <h2 className="text-[2.25rem] text-navy sm:text-5xl">Started with one simple question</h2>
            <p>
              Luna began in 2019, when our principal dentist kept hearing the same thing from new patients:
              &ldquo;I have not been to a dentist in years, because I was scared.&rdquo; So we asked, what would
              make a visit feel different?
            </p>
            <p>
              The answers shaped everything: longer appointments, explaining each step before it happens,
              prices written down in advance, and a clinic that feels more like a calm studio than a hospital.
              The name comes from the moon, a soft, steady light that is there in the evenings, just like our
              late opening hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Team */}
      <Section
        index="02"
        eyebrow="Our team"
        title="Friendly faces you will get to know"
        intro="A small team means you see the same people each time."
      >
        <p className="mt-4 text-sm text-ink-muted">Team names and biographies are fictional; photos are Unsplash stock images.</p>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {team.map((m, i) => (
            <li key={m.name} data-reveal className={i === 1 ? "lg:mt-16" : ""}>
              <Photo
                name={m.photo}
                alt={`Portrait used for ${m.name}, ${m.role} (fictional team member)`}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/5] rounded-[1.5rem]"
                imgClassName="object-top"
              />
              <h3 className="mt-6 text-2xl">{m.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">{m.role}</p>
              <p className="mt-3 text-ink-muted">{m.bio}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Values */}
      <section className="on-dark bg-navy py-20 text-ice sm:py-24 lg:py-28">
        <Container>
          <div data-reveal className="max-w-2xl">
            <Eyebrow index="03" dark>
              Our values
            </Eyebrow>
            <h2 className="mt-5 text-[2.25rem] sm:text-5xl">Four promises we keep</h2>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-ice/15 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} data-reveal className="bg-navy p-7 sm:p-8">
                <Icon className="size-6 text-mint" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-2 text-ice/80">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Atmosphere */}
      <Section
        index="04"
        eyebrow="The clinic"
        title="Light, quiet and easy to relax in"
        intro="Soft daylight, calm colours and treatment rooms with a view of the screen, so you can see what we see. Step-free access on the ground floor, with a quiet room if you need a moment."
        tone="white"
      >
        <div className="mt-14 grid gap-4 sm:grid-cols-[1.4fr_1fr] sm:gap-6">
          <Photo
            name="roomBright"
            sizes="(min-width: 640px) 60vw, 100vw"
            className="aspect-[4/3] rounded-[1.5rem] sm:row-span-2 sm:aspect-auto sm:min-h-[28rem]"
          />
          <Photo name="roomCalm" sizes="(min-width: 640px) 40vw, 100vw" className="aspect-[4/3] rounded-[1.5rem]" />
          <Photo name="youngPatient" sizes="(min-width: 640px) 40vw, 100vw" className="aspect-[4/3] rounded-[1.5rem]" />
        </div>
      </Section>

      <SayHello />
    </>
  );
}
