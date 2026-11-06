import { Info } from "lucide-react";
import { BeforeYouVisit } from "@/components/PageEndings";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container, Eyebrow } from "@/components/Section";
import { dict } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

export function GalleryView({ lang }: { lang: Lang }) {
  const t = dict[lang].gallery;
  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
        <nav aria-label={t.nav} className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {t.groups.map((g) => (
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

      <section className="bg-white pb-12 pt-8 sm:pt-12" aria-label={t.sectionLabel}>
        <Container>
          <p className="flex items-start gap-3 rounded-2xl bg-sky-soft px-5 py-4 text-[0.9375rem]">
            <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            {t.note}
          </p>

          {t.groups.map((g, gi) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28 pt-16 sm:pt-24">
              <div data-reveal className="grid gap-4 md:grid-cols-[1fr_1.2fr] md:items-end">
                <div>
                  <Eyebrow index={String(gi + 1).padStart(2, "0")}>
                    {g.items.length} {t.photos}
                  </Eyebrow>
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
                        lang={lang}
                        sizes="(min-width: 1024px) 760px, (min-width: 640px) 66vw, 100vw"
                        className="h-full"
                        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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

      <BeforeYouVisit lang={lang} />
    </>
  );
}
