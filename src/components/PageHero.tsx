import type { ReactNode } from "react";
import { Container, Eyebrow } from "./Section";
import { Photo } from "./Photo";
import type { Lang } from "@/lib/i18n";
import type { PhotoKey } from "@/lib/photos";

/** Hero for inner pages: H1, short intro, optional photo in the crescent frame. */
export function PageHero({
  lang,
  eyebrow,
  title,
  intro,
  photo,
  children,
}: {
  lang: Lang;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  photo?: PhotoKey;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ice pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <Container
        className={photo ? "grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16" : ""}
      >
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[2.75rem] sm:text-6xl lg:text-[4.25rem]">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">{intro}</p>
          {children}
        </div>
        {photo && (
          <Photo
            name={photo}
            lang={lang}
            preload
            sizes="(min-width: 1200px) 540px, (min-width: 1024px) 45vw, 100vw"
            className="crescent-frame aspect-[4/3] lg:aspect-[5/6]"
          />
        )}
      </Container>
    </section>
  );
}
