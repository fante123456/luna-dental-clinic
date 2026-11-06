import type { Metadata } from "next";
import { ogImage } from "@/lib/site";
import { Info } from "lucide-react";
import { BeforeYouVisit } from "@/components/PageEndings";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container, Eyebrow } from "@/components/Section";
import type { PhotoKey } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Smile Gallery & Clinic Tour",
  description:
    "Take a look inside Luna Dental Clinic in Manchester: happy smiles, calm treatment rooms, modern equipment and the team who will look after you.",
  alternates: { canonical: "/smile-gallery" },
  openGraph: {
    title: "Smile Gallery | Luna Dental Clinic",
    description: "Smiles, treatment rooms, equipment and team at a calm, modern Manchester dental clinic.",
    url: "/smile-gallery",
    images: [ogImage],
  },
};

type Item = { photo: PhotoKey; caption: string; span?: string; pos?: string };

const groups: { id: string; title: string; text: string; items: Item[] }[] = [
  {
    id: "smiles",
    title: "Smiles",
    text: "Healthy, natural smiles. The goal is always to look like yourself, only more comfortable.",
    items: [
      { photo: "smileLaugh", caption: "Relaxed and natural", span: "sm:row-span-2", pos: "object-[75%_center]" },
      { photo: "smileClose", caption: "A healthy, everyday smile" },
      { photo: "smileFriends", caption: "Smiles worth sharing" },
      { photo: "smileProfile", caption: "Clean, even and bright" },
      { photo: "smileSoft", caption: "Quiet confidence" },
    ],
  },
  {
    id: "clinic",
    title: "The clinic",
    text: "Bright, calm and easy to find, a short walk from Piccadilly.",
    items: [
      { photo: "roomBright", caption: "Daylight and soft colours", span: "sm:col-span-2" },
      { photo: "youngPatient", caption: "Families welcome" },
    ],
  },
  {
    id: "rooms",
    title: "Treatment rooms",
    text: "Comfortable chairs, a screen to see what we see, and space to breathe.",
    items: [
      { photo: "roomCalm", caption: "A quiet treatment room" },
      { photo: "roomWide", caption: "Room for questions", span: "sm:col-span-2" },
    ],
  },
  {
    id: "equipment",
    title: "Equipment",
    text: "Modern tools for accurate, gentle and efficient care.",
    items: [
      { photo: "xray", caption: "Low-dose digital X-rays", span: "sm:col-span-2" },
      { photo: "mirrorChair", caption: "Careful, clean instruments" },
      { photo: "implantModel", caption: "Implant planning models" },
      { photo: "bracesModel", caption: "Explaining orthodontics" },
      { photo: "mirrorTools", caption: "Sterilised for every patient" },
    ],
  },
  {
    id: "team",
    title: "The team at work",
    text: "Small, friendly and focused on you.",
    items: [
      { photo: "consultChair", caption: "Fitting a clear aligner" },
      { photo: "teamAtWork", caption: "Gentle, precise treatment", span: "sm:col-span-2" },
    ],
  },
];

export default function SmileGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Smile gallery"
        title="Inside Luna, in pictures"
        intro="Smiles, treatment rooms, equipment and the people who will look after you. A calm look around before your first visit."
      >
        <nav aria-label="Gallery sections" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-navy/15 bg-white px-4 text-[0.9375rem] font-medium hover:border-navy"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section className="bg-white pb-12 pt-8 sm:pt-12" aria-label="Photo gallery">
        <Container>
          <p className="flex items-start gap-3 rounded-2xl bg-sky-soft px-5 py-4 text-[0.9375rem]">
            <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            No before-and-after photos. All images are Unsplash stock photography used to illustrate this
            fictional clinic.
          </p>

          {groups.map((g, gi) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28 pt-16 sm:pt-24">
              <div data-reveal className="grid gap-4 md:grid-cols-[1fr_1.2fr] md:items-end">
                <div>
                  <Eyebrow index={String(gi + 1).padStart(2, "0")}>{g.items.length} photos</Eyebrow>
                  <h2 id={`${g.id}-title`} className="mt-4 text-4xl sm:text-5xl">
                    {g.title}
                  </h2>
                </div>
                <p className="text-lg text-ink-muted md:justify-self-end md:text-right">{g.text}</p>
              </div>
              <ul className="mt-10 grid auto-rows-[16rem] gap-4 sm:grid-cols-3 sm:auto-rows-[14rem] sm:gap-5 lg:auto-rows-[18rem]">
                {g.items.map((it) => (
                  <li key={it.photo} className={it.span ?? ""}>
                    <figure className="group relative h-full overflow-hidden rounded-[1.25rem]">
                      <Photo
                        name={it.photo}
                        sizes="(min-width: 1024px) 760px, (min-width: 640px) 66vw, 100vw"
                        className="h-full"
                        imgClassName={`${it.pos ?? ""} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                      />
                      <figcaption className="absolute bottom-3 left-3 rounded-full bg-ice/95 px-3.5 py-1.5 text-sm font-medium text-navy">
                        {it.caption}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </Container>
      </section>

      <BeforeYouVisit />
    </>
  );
}
