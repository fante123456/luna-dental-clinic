import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Credits for the Unsplash photographers whose images illustrate the Luna Dental Clinic demo website.",
  alternates: { canonical: "/credits" },
  robots: { index: false, follow: true },
};

const utm = "?utm_source=luna_dental_clinic_demo&utm_medium=referral";

export default function CreditsPage() {
  // Group photos by photographer.
  const byAuthor = new Map<string, { username: string; count: number }>();
  Object.values(photos).forEach((p) => {
    const cur = byAuthor.get(p.author);
    byAuthor.set(p.author, { username: p.username, count: (cur?.count ?? 0) + 1 });
  });

  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Photo credits"
        intro="Luna Dental Clinic is a fictional clinic made for a design challenge. Every photograph on this site comes from Unsplash, used under the free Unsplash Licence. Thank you to these photographers."
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ul className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {[...byAuthor.entries()].map(([author, { username, count }]) => (
              <li key={author} className="flex items-baseline justify-between gap-4 border-b border-navy/10 py-4">
                <a
                  href={`https://unsplash.com/@${username}${utm}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline decoration-sky decoration-2 underline-offset-4 hover:decoration-navy"
                >
                  {author}
                </a>
                <span className="text-sm text-ink-muted">
                  {count} {count === 1 ? "photo" : "photos"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-ink-muted">
            Photos via{" "}
            <a
              href={`https://unsplash.com/${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline decoration-sky decoration-2 underline-offset-4"
            >
              Unsplash
            </a>
            . People shown are not patients or staff of a real clinic. Icons by Lucide.
          </p>
        </Container>
      </section>
    </>
  );
}
