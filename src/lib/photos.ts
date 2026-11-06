import type { Lang } from "./i18n";

// All photos are free-licence images from Unsplash (https://unsplash.com/license).
// They are illustrations only: not the practice, its patients or its staff.
// `slug` is the photo page: https://unsplash.com/photos/<slug>

export type Photo = {
  id: string;
  slug: string;
  alt: Record<Lang, string>;
  author: string;
  username: string;
};

/** Base URL only: src/lib/unsplash-loader.ts adds size, format and quality. */
export function photoSrc(id: string) {
  return `https://images.unsplash.com/photo-${id}`;
}

export const photos = {
  catExam: {
    id: "1733783506192-653df6185a7d",
    slug: "a-white-cat-being-examined-by-a-vet-BATIVPqWwqw",
    alt: {
      fr: "Un chat blanc à poils longs, calme sur une table d'examen, tenu par des mains gantées",
      en: "A calm long-haired white cat on an examination table, held by gloved hands",
    },
    author: "Sueda Güzeldere",
    username: "suedaaa0",
  },
  pettingDog: {
    id: "1709457671317-554beac3e2db",
    slug: "a-close-up-of-a-person-petting-a-dog-IbPez-N644w",
    alt: {
      fr: "Une main qui caresse la tête d'un golden retriever détendu",
      en: "A hand stroking the head of a relaxed golden retriever",
    },
    author: "Ulf Sandström",
    username: "ulfsandstrom",
  },
  smallDogVisit: {
    id: "1654895716780-b4664497420d",
    slug: "a-person-holding-a-dog-u2H8mUzoF2Q",
    alt: {
      fr: "Un petit chien debout sur une table d'examen, maintenu doucement par une main",
      en: "A small dog standing on an examination table, gently held by a hand",
    },
    author: "Anya Prygunova",
    username: "aprygunova",
  },
  dogExamTable: {
    id: "1770836037289-e00e5f351d11",
    slug: "veterinarian-examines-a-dog-on-an-examination-table-I3KxEBS6iOc",
    alt: {
      fr: "Un teckel noir allongé sur une table d'examen pendant une consultation vétérinaire",
      en: "A black dachshund lying on an examination table during a veterinary check",
    },
    author: "Alexander Mass",
    username: "alexandermassph",
  },
  kittenExam: {
    id: "1725409796872-8b41e8eca929",
    slug: "a-white-kitten-being-examined-by-a-veterinator-5Bi6MWlWMbw",
    alt: {
      fr: "Un chaton blanc ausculté au stéthoscope, tenu par deux mains",
      en: "A white kitten being listened to with a stethoscope, held in two hands",
    },
    author: "Judy Beth Morris",
    username: "judy_beth_morris_idaho",
  },
  injection: {
    id: "1770836037275-38b44e4b101f",
    slug: "veterinarian-gives-injection-to-a-small-dog-fQeLC7WlNm8",
    alt: {
      fr: "Un petit chien noir recevant une injection, tenu par des mains gantées",
      en: "A small black dog receiving an injection, held by gloved hands",
    },
    author: "Alexander Mass",
    username: "alexandermassph",
  },
  catCone: {
    id: "1759164955427-14ca448a839d",
    slug: "a-cat-wearing-a-cone-sits-on-a-stool-outdoors-T470rcAf6no",
    alt: {
      fr: "Un chat tigré portant une collerette, assis sur un tabouret dans un jardin",
      en: "A tabby cat wearing a protective cone, sitting on a stool in a garden",
    },
    author: "Thức Trần",
    username: "thucne",
  },
  dogTeeth: {
    id: "1770836037949-c5e8db65aa86",
    slug: "veterinarian-examines-a-black-dachshunds-teeth-yme-xntjSKY",
    alt: {
      fr: "Des mains gantées examinent les dents d'un teckel noir",
      en: "Gloved hands checking a black dachshund's teeth",
    },
    author: "Alexander Mass",
    username: "alexandermassph",
  },
  dogScratching: {
    id: "1783141489057-bde41c89f607",
    slug: "golden-retriever-scratching-its-side-on-wooden-platform-LTgEBaGMctY",
    alt: {
      fr: "Un chien au poil roux qui se gratte le flanc sur une terrasse en bois",
      en: "A red-coated dog scratching its side on a wooden deck",
    },
    author: "Priscilla Du Preez",
    username: "priscilladupreez",
  },
  ultrasound: {
    id: "1770836037183-e0b4471fe2c0",
    slug: "veterinarian-performing-ultrasound-on-a-dog-q-1iFFFN6ls",
    alt: {
      fr: "Un chien allongé sur le dos pendant une échographie, une sonde posée sur le ventre",
      en: "A dog lying on its back during an ultrasound scan, with a probe on its belly",
    },
    author: "Alexander Mass",
    username: "alexandermassph",
  },
  restingDog: {
    id: "1767978278701-220ba20b2777",
    slug: "a-tan-dog-rests-its-head-on-the-floor-NgaekLvbMkk",
    alt: {
      fr: "Un chien beige, la tête posée au sol, l'air fatigué",
      en: "A tan dog resting its head on the floor, looking tired",
    },
    author: "JIBIN SAMUEL",
    username: "jibinsamuelphotography",
  },
  sofaDog: {
    id: "1455287278107-115faab3eafa",
    slug: "selective-focused-of-brown-dog-lying-on-sofa-TkwzP_frzl4",
    alt: {
      fr: "Un chien blanc et roux allongé sur un canapé, à la maison",
      en: "A white and tan dog lying on a sofa at home",
    },
    author: "Robert Larsson",
    username: "squareddesign",
  },
  golden: {
    id: "1558788353-f76d92427f16",
    slug: "golden-retriever-x5oPmHmY3kQ",
    alt: {
      fr: "Portrait d'un golden retriever souriant sur fond bleu",
      en: "Portrait of a smiling golden retriever on a blue background",
    },
    author: "Victor G",
    username: "victor_vector",
  },
  corgi: {
    id: "1612940960267-4549a58fb257",
    slug: "brown-and-white-corgi-puppy-tycZhR54Ddk",
    alt: {
      fr: "Un chiot corgi roux et blanc sur fond rose",
      en: "A tan and white corgi puppy on a pink background",
    },
    author: "Ivana La",
    username: "heyhoneybunny",
  },
  boxerPuppy: {
    id: "1593620659530-7f98c53de278",
    slug: "brown-and-white-short-coated-dog-lying-on-gray-carpet-nM4gJR-7RWQ",
    alt: {
      fr: "Un chiot boxer fauve et blanc allongé sur un tapis gris",
      en: "A fawn and white boxer puppy lying on a grey rug",
    },
    author: "Clarke Sanders",
    username: "clarkecreates",
  },
  blackDog: {
    id: "1518020382113-a7e8fc38eac9",
    slug: "black-dog-wearing-blue-denim-collar-K4mSJ7kc0As",
    alt: {
      fr: "Un petit chien noir aux grands yeux, vêtu d'une veste en jean",
      en: "A small black dog with big eyes, wearing a denim jacket",
    },
    author: "charlesdeluvio",
    username: "charlesdeluvio",
  },
  catPortrait: {
    id: "1536589961747-e239b2abbec2",
    slug: "short-haired-white-and-brown-cat-G7kUPmzi80E",
    alt: {
      fr: "Portrait d'un chat roux et blanc aux yeux verts",
      en: "Portrait of a ginger and white cat with green eyes",
    },
    author: "Zoë Gayah Jonker",
    username: "zoegayah",
  },
  catWindow: {
    id: "1764708844823-00d2188dafd8",
    slug: "a-fluffy-cat-sits-near-a-sunlit-window-UxWy8Un2Mjc",
    alt: {
      fr: "Un chat à poils longs assis près d'une fenêtre ensoleillée",
      en: "A long-haired cat sitting by a sunny window",
    },
    author: "Jonathan Ikemura",
    username: "ikemura",
  },
  catTuxedo: {
    id: "1498100152307-ce63fd6c5424",
    slug: "shallow-focus-photography-of-tuxedo-cat-o6RbK3y7mK4",
    alt: {
      fr: "Un chat noir et blanc à poils longs sur fond sombre",
      en: "A long-haired black and white cat on a dark background",
    },
    author: "Paul Hanaoka",
    username: "plhnk",
  },
  catCalico: {
    id: "1582725461742-8ecd962c260d",
    slug: "calico-cat-on-gray-textile-mdRJhxlsuGM",
    alt: {
      fr: "Un chat tricolore assis sur une couverture grise",
      en: "A calico cat sitting on a grey blanket",
    },
    author: "Tim van der Kuip",
    username: "timmykp",
  },
  catHeld: {
    id: "1596272875729-ed2ff7d6d9c5",
    slug: "person-holding-silver-tabby-cat-tDlo2ZPlQlU",
    alt: {
      fr: "Un chat tigré gris, détendu dans les bras de son maître",
      en: "A grey tabby cat relaxing in its owner's arms",
    },
    author: "Werzk Luuuuuuu",
    username: "berzk",
  },
  rabbitLop: {
    id: "1591382386627-349b692688ff",
    slug: "brown-rabbit-on-white-textile---SDX4KWIbA",
    alt: {
      fr: "Un lapin bélier fauve couché sur une couverture blanche",
      en: "A fawn lop-eared rabbit lying on a white blanket",
    },
    author: "Erik-Jan Leusink",
    username: "ejleusink",
  },
  rabbitGrass: {
    id: "1535241749838-299277b6305f",
    slug: "white-and-brown-rabbit-kKAaCeGf5wY",
    alt: {
      fr: "Un lapin blanc et fauve assis dans l'herbe",
      en: "A white and fawn rabbit sitting on the grass",
    },
    author: "Sandy Millar",
    username: "sandym10",
  },
  rabbitClose: {
    id: "1529040181623-e04ebc611e25",
    slug: "closeup-photo-of-gray-rabbit-3FSBkX4yG80",
    alt: {
      fr: "Gros plan sur la tête d'un lapin gris et blanc",
      en: "Close-up of a grey and white rabbit's face",
    },
    author: "Emiliano Vittoriosi",
    username: "emilianovittoriosi",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
