import { ButtonLink } from "@/components/Button";
import { Crescent } from "@/components/LunaMark";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <section className="bg-ice py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <Crescent className="mx-auto size-14 text-sky" />
        <h1 className="mt-8 text-5xl sm:text-6xl">Page not found</h1>
        <p className="mt-5 text-lg text-ink-muted">
          Sorry, we could not find that page. It may have moved, or the link may be mistyped.
        </p>
        <div className="mt-9 flex justify-center">
          <ButtonLink href="/">Back to the home page</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
