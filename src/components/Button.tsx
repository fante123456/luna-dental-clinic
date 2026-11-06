import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark" | "onDarkOutline";

const styles: Record<Variant, string> = {
  primary: "bg-navy text-ice hover:bg-navy-800",
  secondary: "border border-navy/25 text-navy hover:border-navy hover:bg-white",
  onDark: "bg-sky text-navy hover:bg-[#8fd3ff]",
  onDarkOutline: "border border-ice/35 text-ice hover:border-ice hover:bg-ice/5",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.9375rem] font-semibold transition-colors duration-200 ${styles[variant]} ${extra}`;
}

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", className = "", children, ...rest }: Props) {
  return (
    <Link className={buttonClass(variant, className)} {...rest}>
      {children}
    </Link>
  );
}
