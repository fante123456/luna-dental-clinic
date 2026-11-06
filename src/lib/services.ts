import type { PhotoKey } from "./photos";

// Durations and "from" prices are fictional demo values.
export type Service = {
  slug: string;
  title: string;
  icon: "stethoscope" | "sparkles" | "anchor" | "smile" | "siren" | "gem";
  summary: string;
  description: string;
  includes: string[];
  duration: string;
  from: string;
  photo: PhotoKey;
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    icon: "stethoscope",
    summary: "Check-ups, hygiene visits and fillings to keep your mouth healthy.",
    description:
      "Unhurried check-ups where we explain what we see, in plain words, before anything happens. Regular visits help us spot small problems early, while they are still simple to treat.",
    includes: ["Full mouth and gum check", "Digital X-rays when needed", "Scale and polish", "Tooth-coloured fillings"],
    duration: "30 – 45 min",
    from: "£55",
    photo: "mirrorChair",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: "sparkles",
    summary: "Gentle, dentist-led whitening with custom trays you use at home.",
    description:
      "We check your teeth and gums first, then make trays that fit you exactly. You whiten at home at your own pace, with a review visit to make sure everything feels comfortable.",
    includes: ["Suitability check", "Custom-fitted trays", "Low-sensitivity gel", "Review appointment"],
    duration: "2 visits",
    from: "£295",
    photo: "smileProfile",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    icon: "anchor",
    summary: "A stable, natural-looking way to replace one or more missing teeth.",
    description:
      "Implants are planned carefully with 3D scans and a clear written plan. We talk you through every stage, timings and costs before you decide anything.",
    includes: ["3D scan and planning", "Implant placement", "Custom crown", "Aftercare reviews"],
    duration: "Consultation 45 min",
    from: "£2,200 per implant",
    photo: "implantModel",
  },
  {
    slug: "invisalign",
    title: "Invisalign",
    icon: "smile",
    summary: "Clear aligners to straighten teeth quietly, without fixed braces.",
    description:
      "A digital scan shows how your smile could move over time. Aligners are removable, so you can eat normally and clean your teeth as usual, with check-ins every few weeks.",
    includes: ["Digital smile scan", "Treatment preview", "Clear aligner sets", "Retainers at the end"],
    duration: "Consultation 45 min",
    from: "£2,900",
    photo: "aligners",
  },
  {
    slug: "emergency-dentist",
    title: "Emergency Dentist",
    icon: "siren",
    summary: "Same-day appointments for pain, swelling, broken teeth and lost fillings.",
    description:
      "If you are in pain, call us as early as you can. We keep time free every day for urgent cases, ease the pain first, and then explain your options calmly.",
    includes: ["Same-day slots", "Pain relief first", "Temporary repairs", "Clear next steps"],
    duration: "30 min",
    from: "£85",
    photo: "toolsGloved",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "gem",
    summary: "Bonding, veneers and small refinements that still look like you.",
    description:
      "We aim for natural results: small, careful changes in shape and shade that suit your face. You will see a preview and agree the plan together before any treatment begins.",
    includes: ["Smile consultation", "Composite bonding", "Porcelain veneers", "Shade matching"],
    duration: "60 min",
    from: "£180 per tooth",
    photo: "smileJoy",
  },
];
