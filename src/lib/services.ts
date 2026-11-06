import type { Lang } from "./i18n";
import type { PhotoKey } from "./photos";

// The eight services from the practice's public directory listing.
// Texts stay general on purpose: no prices, durations or equipment claims.

export type ServiceIconName =
  | "stethoscope"
  | "syringe"
  | "scissors"
  | "bone"
  | "microscope"
  | "scan"
  | "siren"
  | "house";

type Text = { title: string; summary: string; description: string };

type ServiceData = { slug: string; icon: ServiceIconName; photo: PhotoKey; text: Record<Lang, Text> };

export type Service = { slug: string; icon: ServiceIconName; photo: PhotoKey } & Text;

const data: ServiceData[] = [
  {
    slug: "consultations",
    icon: "stethoscope",
    photo: "kittenExam",
    text: {
      fr: {
        title: "Consultations",
        summary: "Un examen de votre animal et des réponses claires à vos questions.",
        description:
          "Le Dr Colin examine votre animal, écoute ce que vous avez remarqué et vous explique simplement ce qu'elle observe. Elle vous indique ensuite les suites possibles.",
      },
      en: {
        title: "Consultations",
        summary: "A check of your animal and clear answers to your questions.",
        description:
          "Dr Colin examines your animal, listens to what you have noticed and explains what she finds in plain words. She then tells you what the next steps could be.",
      },
    },
  },
  {
    slug: "vaccins",
    icon: "syringe",
    photo: "injection",
    text: {
      fr: {
        title: "Vaccins et suivi",
        summary: "Les vaccins de votre animal et son suivi au fil des années.",
        description:
          "Vaccins et visites de suivi accompagnent votre animal tout au long de sa vie. Appelez le cabinet pour savoir quand prévoir le prochain rendez-vous.",
      },
      en: {
        title: "Vaccinations and check-ups",
        summary: "Your animal's vaccinations and regular follow-up over the years.",
        description:
          "Vaccinations and follow-up visits support your animal throughout its life. Call the practice to find out when to plan the next appointment.",
      },
    },
  },
  {
    slug: "chirurgie",
    icon: "scissors",
    photo: "catCone",
    text: {
      fr: {
        title: "Chirurgie",
        summary: "Des interventions chirurgicales, expliquées avant et après.",
        description:
          "Si votre animal a besoin d'une opération, le Dr Colin vous explique l'intervention et les soins à prévoir ensuite. Pour toute question, appelez le cabinet.",
      },
      en: {
        title: "Surgery",
        summary: "Surgical procedures, explained before and after.",
        description:
          "If your animal needs an operation, Dr Colin explains the procedure and the care needed afterwards. For any question, call the practice.",
      },
    },
  },
  {
    slug: "dentisterie",
    icon: "bone",
    photo: "dogTeeth",
    text: {
      fr: {
        title: "Dentisterie vétérinaire",
        summary: "Les dents et la bouche de votre animal.",
        description:
          "Mauvaise haleine, difficulté à manger, dents abîmées : la bouche compte aussi pour la santé de votre animal. Parlez-en lors d'une consultation.",
      },
      en: {
        title: "Veterinary dentistry",
        summary: "Your animal's teeth and mouth.",
        description:
          "Bad breath, trouble eating, damaged teeth: the mouth matters for your animal's health too. Mention it during a consultation.",
      },
    },
  },
  {
    slug: "dermatologie",
    icon: "microscope",
    photo: "dogScratching",
    text: {
      fr: {
        title: "Dermatologie",
        summary: "Démangeaisons, rougeurs, perte de poils : les problèmes de peau.",
        description:
          "Votre animal se gratte, perd ses poils ou a des rougeurs ? Le Dr Colin examine sa peau et son pelage, puis vous explique les soins possibles.",
      },
      en: {
        title: "Dermatology",
        summary: "Itching, redness, hair loss: skin problems.",
        description:
          "Is your animal scratching, losing hair or showing red patches? Dr Colin checks its skin and coat, then explains the possible treatments.",
      },
    },
  },
  {
    slug: "imagerie",
    icon: "scan",
    photo: "ultrasound",
    text: {
      fr: {
        title: "Imagerie médicale",
        summary: "Des examens d'imagerie pour mieux comprendre ce qui se passe.",
        description:
          "Quand c'est utile, l'imagerie médicale aide à préciser un diagnostic. Le Dr Colin vous dit si un examen est nécessaire, et pourquoi.",
      },
      en: {
        title: "Medical imaging",
        summary: "Imaging tests to better understand what is going on.",
        description:
          "When it helps, medical imaging can make a diagnosis clearer. Dr Colin tells you whether a test is needed, and why.",
      },
    },
  },
  {
    slug: "urgences",
    icon: "siren",
    photo: "restingDog",
    text: {
      fr: {
        title: "Urgences",
        summary: "En cas d'urgence, appelez directement le cabinet.",
        description:
          "Votre animal est blessé, a du mal à respirer ou vous inquiète ? Appelez le cabinet au 02 33 05 59 94 pour savoir comment faire.",
      },
      en: {
        title: "Emergencies",
        summary: "In an emergency, call the practice directly.",
        description:
          "Is your animal injured, struggling to breathe or worrying you? Call the practice on 02 33 05 59 94 to find out what to do.",
      },
    },
  },
  {
    slug: "visites-a-domicile",
    icon: "house",
    photo: "sofaDog",
    text: {
      fr: {
        title: "Visites à domicile",
        summary: "Quand votre animal ne peut pas se déplacer.",
        description:
          "Pour un animal âgé, stressé ou difficile à transporter, des visites à domicile sont possibles. Appelez le cabinet pour en parler.",
      },
      en: {
        title: "Home visits",
        summary: "When your animal cannot travel.",
        description:
          "For an animal that is old, anxious or hard to transport, home visits are possible. Call the practice to talk it through.",
      },
    },
  },
];

export function getServices(lang: Lang): Service[] {
  return data.map(({ text, ...rest }) => ({ ...rest, ...text[lang] }));
}

export function getService(lang: Lang, slug: string): Service {
  return getServices(lang).find((s) => s.slug === slug)!;
}
