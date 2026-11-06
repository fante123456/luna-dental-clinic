import { Bone, House, Microscope, ScanLine, Scissors, Siren, Stethoscope, Syringe, type LucideProps } from "lucide-react";
import type { ServiceIconName } from "@/lib/services";

const map = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  scissors: Scissors,
  bone: Bone,
  microscope: Microscope,
  scan: ScanLine,
  siren: Siren,
  house: House,
} satisfies Record<ServiceIconName, unknown>;

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & LucideProps) {
  const Icon = map[name];
  return <Icon aria-hidden="true" strokeWidth={1.5} {...props} />;
}
