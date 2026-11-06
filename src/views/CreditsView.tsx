import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { dict } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { photos } from "@/lib/photos";

const utm = "?utm_source=dr_colin_demo&utm_medium=referral";

export function CreditsView({ lang }: { lang: Lang }) {
  const t = dict[lang].credits;
  const link = "font-semibold underline decoration-sky decoration-2 underline-offset-4 hover:decoration-navy";
  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ul className="grid gap-x-12 sm:grid-cols-2">
            {Object.values(photos).map((p) => (
              <li key={p.id} className="border-b border-navy/10 py-4">
                <a href={`https://unsplash.com/photos/${p.slug}${utm}`} target="_blank" rel="noopener noreferrer" className={link}>
                  {p.alt[lang]}
                </a>
                <span className="mt-1 block text-sm text-ink-muted">
                  {t.by}{" "}
                  <a href={`https://unsplash.com/@${p.username}${utm}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    {p.author}
                  </a>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-ink-muted">
            {t.footer}{" "}
            <a href={`https://unsplash.com/${utm}`} target="_blank" rel="noopener noreferrer" className={`text-navy ${link}`}>
              Unsplash
            </a>
            . {t.icons}
          </p>
        </Container>
      </section>
    </>
  );
}
