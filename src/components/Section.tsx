import type { ReactNode } from "react";

type Props = {
  id?: string;
  /** Small editorial number, e.g. "01". */
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "white" | "dark";
  children?: ReactNode;
  className?: string;
  headerClassName?: string;
};

const tones = {
  light: "bg-ice text-navy",
  white: "bg-white text-navy",
  dark: "on-dark bg-navy text-ice",
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ index, children, dark }: { index?: string; children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-mint" : "text-navy-700"}`}
    >
      {index && (
        <span className={`font-display text-sm tracking-normal ${dark ? "text-sky" : "text-navy"}`}>{index}</span>
      )}
      {children}
    </p>
  );
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  tone = "light",
  children,
  className = "",
  headerClassName = "",
}: Props) {
  const dark = tone === "dark";
  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-24 lg:py-32 ${className}`}>
      <Container>
        {(eyebrow || title || intro) && (
          <header className={`max-w-2xl ${headerClassName}`} data-reveal>
            {eyebrow && <Eyebrow index={index} dark={dark}>{eyebrow}</Eyebrow>}
            {title && <h2 className="mt-5 text-[2.25rem] sm:text-5xl">{title}</h2>}
            {intro && (
              <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-ice/80" : "text-ink-muted"}`}>{intro}</p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
