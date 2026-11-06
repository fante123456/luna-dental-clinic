import { Anchor, Gem, Siren, Smile, Sparkles, Stethoscope, type LucideProps } from "lucide-react";
import type { Service } from "@/lib/services";

const map = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  anchor: Anchor,
  smile: Smile,
  siren: Siren,
  gem: Gem,
} satisfies Record<Service["icon"], unknown>;

export function ServiceIcon({ name, ...props }: { name: Service["icon"] } & LucideProps) {
  const Icon = map[name];
  return <Icon aria-hidden="true" strokeWidth={1.5} {...props} />;
}
