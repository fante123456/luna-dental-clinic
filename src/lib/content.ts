import type { Lang } from "./i18n";
import type { PhotoKey } from "./photos";

// All page texts, in French (main language) and English.
// Only facts from the public listing are used; review quotes are exact.

const fr = {
  common: {
    banner: "Projet d'entraînement – site non officiel",
    skip: "Aller au contenu",
    homeSr: " – page d'accueil",
    logoSub: "Cabinet vétérinaire · Saint-Lô",
    book: "Prendre rendez-vous",
    call: "Appeler le",
    directions: "Itinéraire",
    viewOnMaps: "Voir sur Google Maps",
    newTab: "(s'ouvre dans un nouvel onglet)",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    langNav: "Langue",
    nav: { home: "Accueil", about: "Le cabinet", services: "Soins", gallery: "Galerie", contact: "Contact", credits: "Crédits photos" },
    hours: [
      { days: "Lundi – vendredi", time: "9h–12h · 15h–18h30" },
      { days: "Samedi", time: "10h–12h" },
      { days: "Dimanche", time: "Fermé" },
    ],
    hoursNote: "Consultations sur rendez-vous. Les horaires peuvent changer les jours fériés.",
    parking: "Parking sur place",
    animals: "Chiens, chats et NAC",
    rating: "4,8/5 sur Google · 133 avis",
    allReviews: "Voir tous les avis sur Google",
    reviewSource: "Avis Google",
    translated: "",
  },
  footer: {
    about: "Dr Emmanuelle Colin, vétérinaire à Saint-Lô. Chiens, chats et NAC, consultations sur rendez-vous.",
    pages: "Pages",
    visit: "Adresse",
    hours: "Horaires",
    demo: "Démo réalisée par Ammar Rajabi à titre d'entraînement. Le propriétaire peut demander sa suppression.",
    photos: "Photos d'illustration :",
    photosLink: "Unsplash",
  },
  cta: {
    firstVisit: "Prendre rendez-vous",
  },
  meta: {
    siteTitle: "Cabinet vétérinaire du Dr Colin | Vétérinaire à Saint-Lô",
    template: "%s | Dr Colin, vétérinaire à Saint-Lô",
    siteDescription:
      "Dr Emmanuelle Colin, vétérinaire à Saint-Lô (200 avenue de Paris) : chiens, chats et NAC, consultations sur rendez-vous. Tél. 02 33 05 59 94.",
    locale: "fr_FR",
    about: {
      title: "Le cabinet et le Dr Emmanuelle Colin",
      description:
        "Le cabinet vétérinaire du Dr Emmanuelle Colin à Saint-Lô : chiens, chats et NAC, 200 avenue de Paris, parking sur place, consultations sur rendez-vous.",
    },
    services: {
      title: "Soins vétérinaires à Saint-Lô",
      description:
        "Consultations, vaccins, chirurgie, dentisterie, dermatologie, imagerie, urgences et visites à domicile au cabinet vétérinaire du Dr Colin à Saint-Lô.",
    },
    gallery: {
      title: "Galerie : chiens, chats et NAC",
      description:
        "Photos d'illustration de chiens, chats et lapins, les animaux soignés au cabinet vétérinaire du Dr Colin, 200 avenue de Paris à Saint-Lô.",
    },
    contact: {
      title: "Contact et rendez-vous",
      description:
        "Rendez-vous au cabinet vétérinaire du Dr Colin, 200 avenue de Paris, Saint-Lô : 02 33 05 59 94. Lun–ven 9h–12h et 15h–18h30, sam. 10h–12h.",
    },
    credits: {
      title: "Crédits photos",
      description: "Les photographes Unsplash dont les images illustrent cette démo du cabinet vétérinaire du Dr Colin à Saint-Lô.",
    },
  },
  home: {
    eyebrow: "Cabinet vétérinaire · Saint-Lô",
    h1: ["Des soins attentifs pour votre ", "compagnon", ""],
    intro:
      "Le Dr Emmanuelle Colin reçoit chiens, chats et NAC au 200 avenue de Paris, à Saint-Lô. Consultations sur rendez-vous.",
    trust: [
      { title: "4,8/5 sur Google", text: "133 avis de clients" },
      { title: "Chiens, chats et NAC", text: "Lapins et autres petits compagnons" },
      { title: "Parking sur place", text: "200 avenue de Paris, Saint-Lô" },
    ],
    welcomeEyebrow: "Bienvenue",
    welcomeTitle: "Une vétérinaire à l'écoute, à Saint-Lô",
    welcomeText:
      "Au cabinet, le Dr Emmanuelle Colin examine votre animal et vous explique ce qu'elle observe. Dans leurs avis, les clients parlent d'un accueil chaleureux, d'explications claires et de bons conseils.",
    welcomeLink: "Découvrir le cabinet",
    servicesEyebrow: "Soins",
    servicesTitle: "Ce que propose le cabinet",
    servicesIntro: "Huit domaines de soins pour vos animaux. Tarifs sur demande, par téléphone.",
    servicesButton: "Voir tous les soins",
    whyEyebrow: "D'après les avis",
    whyTitle: "Ce que les clients remarquent",
    whyNote: "Résumé des avis Google publics.",
    reasons: [
      { title: "Un accueil chaleureux", text: "Les clients parlent d'un accueil chaleureux et d'un vrai amour des animaux." },
      { title: "Une vétérinaire à l'écoute", text: "Elle prend le temps d'écouter, et sait apaiser l'animal comme son maître." },
      { title: "Des explications claires", text: "Des explications simples et de bons conseils pour la suite des soins." },
      { title: "Un diagnostic rapide", text: "Les avis citent aussi un diagnostic rapide, et une vétérinaire qui ne pense pas qu'à l'argent." },
    ],
    reviewsEyebrow: "Avis Google",
    reviewsTitle: "Ce que disent les clients",
  },
  reviews: [
    {
      quote: "Malgré son activité intense, le docteur Colin accorde toute son attention à ses patients/clients.",
      name: "Justus V.",
    },
    {
      quote:
        "Une personne remarquable. Elle n'est pas qu'une vétérinaire, elle a de l'empathie. Elle arrive à apaiser l'animal et le maître.",
      name: "Dominique G.",
    },
    { quote: "Une vétérinaire très gentille, à l'écoute.", name: "Marielle G." },
  ],
  firstVisit: {
    eyebrow: "Votre visite",
    title: "Comment se passe une visite",
    steps: [
      {
        title: "Appelez pour prendre rendez-vous",
        text: "Les consultations se font sur rendez-vous, au 02 33 05 59 94.",
        meta: "Lun–ven 9h–12h et 15h–18h30, sam. 10h–12h",
      },
      {
        title: "Venez au cabinet",
        text: "200 avenue de Paris, à Saint-Lô. Vous pouvez vous garer sur place.",
        meta: "Parking sur place",
      },
      {
        title: "La consultation",
        text: "Le Dr Colin examine votre animal et vous explique simplement ce qu'elle observe et les suites possibles.",
        meta: "Chiens, chats et NAC",
      },
    ],
  },
  about: {
    eyebrow: "Le cabinet",
    title: "Une vétérinaire à l'écoute, à Saint-Lô",
    intro:
      "Le Dr Emmanuelle Colin soigne chiens, chats et NAC au 200 avenue de Paris. Consultations sur rendez-vous, parking sur place.",
    storyEyebrow: "Votre vétérinaire",
    storyTitle: "Dr Emmanuelle Colin",
    story: [
      "Le cabinet vétérinaire du Dr Colin reçoit vos animaux du lundi au samedi, sur rendez-vous. On y vient pour une consultation, des vaccins, un suivi, une chirurgie, ou un souci de peau ou de dents.",
      "En cas d'urgence, appelez directement le cabinet. Si votre animal ne peut pas se déplacer, des visites à domicile sont possibles : parlez-en au téléphone.",
    ],
    animalsEyebrow: "Les animaux soignés",
    animalsTitle: "Chiens, chats et NAC",
    animalsIntro: "Petits ou grands, jeunes ou âgés : appelez le cabinet si vous avez un doute pour votre animal.",
    animals: [
      { title: "Chiens", text: "Consultations, vaccins, suivi et soins.", photo: "golden" as PhotoKey },
      { title: "Chats", text: "Consultations, vaccins, suivi et soins.", photo: "catPortrait" as PhotoKey },
      { title: "NAC", text: "Lapins et autres nouveaux animaux de compagnie : renseignez-vous au téléphone.", photo: "rabbitLop" as PhotoKey },
    ],
    photoNote: "Photos d'illustration (Unsplash).",
    valuesEyebrow: "D'après les avis",
    valuesTitle: "Quatre choses qui reviennent dans les avis",
    values: [
      { title: "Accueil chaleureux", text: "Un accueil chaleureux, pour vous et votre animal." },
      { title: "À l'écoute", text: "Le temps d'écouter, d'apaiser l'animal et son maître." },
      { title: "Explications claires", text: "Des explications simples et un diagnostic rapide." },
      { title: "Bons conseils", text: "Des conseils honnêtes, d'une vétérinaire qui ne pense pas qu'à l'argent." },
    ],
  },
  findUs: {
    eyebrow: "Accès",
    title: "Venir au cabinet",
    text: "Le cabinet se trouve au 200 avenue de Paris, à Saint-Lô. Vous pouvez vous garer sur place.",
    where: "Où",
    when: "Quand",
    whenText: "Lun–ven 9h–12h et 15h–18h30, sam. 10h–12h, sur rendez-vous",
    mapLabel: "Avenue de Paris",
  },
  servicesPage: {
    eyebrow: "Soins",
    title: "Les soins proposés",
    intro:
      "Huit domaines de soins pour chiens, chats et NAC. Pour savoir si un soin convient à votre animal, ou connaître un tarif, appelez le cabinet.",
    jumpNav: "Aller à un soin",
    sectionLabel: "Détail des soins",
    note: "Tarifs sur demande, par téléphone. Les descriptions restent générales : le Dr Colin vous conseille pour votre animal.",
    howTitle: "Comment",
    howValue: "Sur rendez-vous",
    priceTitle: "Tarif",
    priceValue: "Sur demande",
    bookFor: "pour",
  },
  finder: {
    eyebrow: "Pas sûr ?",
    title: "Partez de ce que vous observez",
    text: "Choisissez la phrase qui ressemble à votre situation. En cas de doute, appelez le cabinet.",
    needs: [
      { need: "Mon animal est blessé ou ne va vraiment pas bien", slug: "urgences", note: "Appelez tout de suite" },
      { need: "Il a besoin de ses vaccins ou d'un suivi", slug: "vaccins", note: "Sur rendez-vous" },
      { need: "Il se gratte ou perd ses poils", slug: "dermatologie", note: "Sur rendez-vous" },
      { need: "Il a mauvaise haleine ou du mal à manger", slug: "dentisterie", note: "Sur rendez-vous" },
      { need: "Il doit être opéré", slug: "chirurgie", note: "Sur rendez-vous" },
      { need: "Il ne peut pas se déplacer", slug: "visites-a-domicile", note: "Appelez pour en parler" },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Chiens, chats et NAC en images",
    intro: "Les animaux que soigne le Dr Colin, en photos d'illustration.",
    nav: "Sections de la galerie",
    sectionLabel: "Galerie photo",
    note: "Photos d'illustration issues d'Unsplash : ce ne sont ni le cabinet, ni ses patients, ni son équipe.",
    photos: "photos",
    groups: [
      {
        id: "chiens",
        title: "Chiens",
        text: "Petits ou grands, jeunes ou âgés.",
        items: [
          { photo: "golden", caption: "Toujours partant", span: "sm:row-span-2" },
          { photo: "corgi", caption: "Jeune chiot" },
          { photo: "boxerPuppy", caption: "Au repos" },
          { photo: "blackDog", caption: "Petit gabarit" },
          { photo: "pettingDog", caption: "En confiance" },
        ],
      },
      {
        id: "chats",
        title: "Chats",
        text: "Câlins ou plus réservés.",
        items: [
          { photo: "catPortrait", caption: "Regard curieux", span: "sm:row-span-2" },
          { photo: "catWindow", caption: "Près de la fenêtre" },
          { photo: "catTuxedo", caption: "Poils longs" },
          { photo: "catCalico", caption: "Bien installé" },
          { photo: "catHeld", caption: "Dans les bras" },
        ],
      },
      {
        id: "nac",
        title: "NAC",
        text: "Lapins et autres nouveaux animaux de compagnie.",
        items: [
          { photo: "rabbitLop", caption: "Lapin bélier" },
          { photo: "rabbitGrass", caption: "Dans l'herbe" },
          { photo: "rabbitClose", caption: "Tout en oreilles" },
        ],
      },
      {
        id: "consultation",
        title: "En consultation",
        text: "À quoi ressemble un examen chez le vétérinaire.",
        items: [
          { photo: "kittenExam", caption: "Auscultation", span: "sm:col-span-2" },
          { photo: "injection", caption: "Vaccin" },
        ],
      },
    ] as { id: string; title: string; text: string; items: { photo: PhotoKey; caption: string; span?: string }[] }[],
  },
  faq: {
    eyebrow: "Avant de venir",
    title: "Questions fréquentes",
    text: "Une autre question ? Appelez le cabinet.",
    items: [
      {
        q: "Faut-il prendre rendez-vous ?",
        a: "Oui, les consultations se font sur rendez-vous. Appelez le cabinet au 02 33 05 59 94.",
      },
      {
        q: "Quels animaux sont soignés ?",
        a: "Les chiens, les chats et les NAC, comme les lapins. Pour un autre animal, renseignez-vous au téléphone.",
      },
      {
        q: "Que faire en cas d'urgence ?",
        a: "Appelez directement le cabinet au 02 33 05 59 94 pour savoir comment faire.",
      },
      {
        q: "Peut-on se garer ?",
        a: "Oui, il y a un parking sur place, au 200 avenue de Paris.",
      },
      {
        q: "Le vétérinaire peut-il venir à la maison ?",
        a: "Des visites à domicile sont possibles. Appelez le cabinet pour en parler.",
      },
      {
        q: "Quels sont les tarifs ?",
        a: "Les tarifs sont donnés sur demande, par téléphone.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Prendre rendez-vous",
    intro: "Les consultations se font sur rendez-vous, par téléphone. En cas d'urgence, appelez directement le cabinet.",
    sectionLabel: "Coordonnées et formulaire",
    findUs: "Nous trouver",
    hoursTitle: "Horaires",
    emergencyTitle: "Une urgence ?",
    emergencyText: "Appelez directement le cabinet au",
    byAppointment: "Consultations sur rendez-vous",
    formTitle: "Formulaire de contact",
    formIntro: "Ce formulaire est une démonstration : rien n'est envoyé au cabinet. Pour prendre rendez-vous, appelez le 02 33 05 59 94.",
  },
  form: {
    note: "Formulaire de démonstration : rien n'est envoyé.",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    optional: "(facultatif)",
    animal: "Votre animal",
    choose: "Choisir…",
    animals: ["Chien", "Chat", "NAC (lapin…)", "Autre"],
    reason: "Motif",
    reasons: [
      "Consultation",
      "Vaccins et suivi",
      "Chirurgie",
      "Dentisterie vétérinaire",
      "Dermatologie",
      "Imagerie médicale",
      "Visite à domicile",
      "Autre",
    ],
    message: "Message",
    submit: "Envoyer",
    demoTitle: "Formulaire de démonstration – appelez le",
    demoText: "Rien n'a été envoyé. Pour prendre rendez-vous ou poser une question, appelez le cabinet.",
    back: "Revenir au formulaire",
  },
  credits: {
    eyebrow: "Crédits",
    title: "Crédits photos",
    intro:
      "Ce site est une démo d'entraînement. Toutes les photos sont des illustrations issues d'Unsplash, sous licence Unsplash : elles ne montrent ni le cabinet, ni ses patients, ni son équipe. Merci aux photographes.",
    by: "par",
    footer: "Photos via",
    icons: "Icônes : Lucide.",
  },
};

export type Dict = typeof fr;

const en: Dict = {
  common: {
    banner: "Practice project – unofficial website",
    skip: "Skip to content",
    homeSr: " home page",
    logoSub: "Veterinary practice · Saint-Lô",
    book: "Book an appointment",
    call: "Call",
    directions: "Get directions",
    viewOnMaps: "View on Google Maps",
    newTab: "(opens in a new tab)",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNav: "Main",
    mobileNav: "Mobile",
    langNav: "Language",
    nav: { home: "Home", about: "The practice", services: "Services", gallery: "Gallery", contact: "Contact", credits: "Photo credits" },
    hours: [
      { days: "Monday – Friday", time: "9am–12pm · 3pm–6:30pm" },
      { days: "Saturday", time: "10am–12pm" },
      { days: "Sunday", time: "Closed" },
    ],
    hoursNote: "Appointments only. Hours may vary on public holidays.",
    parking: "On-site parking",
    animals: "Dogs, cats and small pets",
    rating: "4.8/5 on Google · 133 reviews",
    allReviews: "See all reviews on Google",
    reviewSource: "Google review",
    translated: "(translated from French)",
  },
  footer: {
    about: "Dr Emmanuelle Colin, vet in Saint-Lô, France. Dogs, cats and small pets, by appointment.",
    pages: "Pages",
    visit: "Address",
    hours: "Opening hours",
    demo: "Demo made by Ammar Rajabi as a practice project. The owner can ask for it to be removed.",
    photos: "Illustration photos:",
    photosLink: "Unsplash",
  },
  cta: {
    firstVisit: "Book an appointment",
  },
  meta: {
    siteTitle: "Dr Colin Veterinary Practice | Vet in Saint-Lô",
    template: "%s | Dr Colin, vet in Saint-Lô",
    siteDescription:
      "Dr Emmanuelle Colin, vet in Saint-Lô, France (200 avenue de Paris): dogs, cats and small pets, by appointment. Phone 02 33 05 59 94.",
    locale: "en_GB",
    about: {
      title: "The practice and Dr Emmanuelle Colin",
      description:
        "Dr Emmanuelle Colin's veterinary practice in Saint-Lô: dogs, cats and small pets, 200 avenue de Paris, on-site parking, appointments only.",
    },
    services: {
      title: "Veterinary services in Saint-Lô",
      description:
        "Consultations, vaccinations, surgery, dentistry, dermatology, imaging, emergencies and home visits at Dr Colin's veterinary practice in Saint-Lô.",
    },
    gallery: {
      title: "Gallery: dogs, cats and small pets",
      description:
        "Illustration photos of dogs, cats and rabbits, the animals cared for at Dr Colin's veterinary practice, 200 avenue de Paris, Saint-Lô.",
    },
    contact: {
      title: "Contact and appointments",
      description:
        "Book at Dr Colin's veterinary practice, 200 avenue de Paris, Saint-Lô: 02 33 05 59 94. Mon–Fri 9am–12pm and 3pm–6:30pm, Sat 10am–12pm.",
    },
    credits: {
      title: "Photo credits",
      description: "The Unsplash photographers whose images illustrate this demo of Dr Colin's veterinary practice in Saint-Lô.",
    },
  },
  home: {
    eyebrow: "Veterinary practice · Saint-Lô",
    h1: ["Attentive care for your ", "companion", ""],
    intro:
      "Dr Emmanuelle Colin sees dogs, cats and small pets at 200 avenue de Paris, Saint-Lô. Appointments only.",
    trust: [
      { title: "4.8/5 on Google", text: "133 client reviews" },
      { title: "Dogs, cats and small pets", text: "Rabbits and other small companions" },
      { title: "On-site parking", text: "200 avenue de Paris, Saint-Lô" },
    ],
    welcomeEyebrow: "Welcome",
    welcomeTitle: "A vet who listens, in Saint-Lô",
    welcomeText:
      "At the practice, Dr Emmanuelle Colin examines your animal and explains what she finds. In their reviews, clients mention a warm welcome, clear explanations and good advice.",
    welcomeLink: "About the practice",
    servicesEyebrow: "Services",
    servicesTitle: "What the practice offers",
    servicesIntro: "Eight areas of care for your animals. Prices on request, by phone.",
    servicesButton: "See all services",
    whyEyebrow: "From the reviews",
    whyTitle: "What clients notice",
    whyNote: "Summary of public Google reviews.",
    reasons: [
      { title: "A warm welcome", text: "Clients mention a warm welcome and a real love of animals." },
      { title: "A vet who listens", text: "She takes time to listen, and knows how to calm both the animal and its owner." },
      { title: "Clear explanations", text: "Simple explanations and good advice for the care that follows." },
      { title: "A quick diagnosis", text: "Reviews also mention a quick diagnosis, and a vet who is not only thinking about money." },
    ],
    reviewsEyebrow: "Google reviews",
    reviewsTitle: "What clients say",
  },
  reviews: [
    {
      quote: "Despite her busy practice, Dr Colin gives her full attention to her patients and clients.",
      name: "Justus V.",
    },
    {
      quote:
        "A remarkable person. She is not just a vet, she has empathy. She manages to calm both the animal and its owner.",
      name: "Dominique G.",
    },
    { quote: "A very kind vet who listens.", name: "Marielle G." },
  ],
  firstVisit: {
    eyebrow: "Your visit",
    title: "How a visit works",
    steps: [
      {
        title: "Call to book",
        text: "Consultations are by appointment, on 02 33 05 59 94.",
        meta: "Mon–Fri 9am–12pm and 3pm–6:30pm, Sat 10am–12pm",
      },
      {
        title: "Come to the practice",
        text: "200 avenue de Paris, Saint-Lô. You can park on site.",
        meta: "On-site parking",
      },
      {
        title: "The consultation",
        text: "Dr Colin examines your animal and explains, in plain words, what she finds and the possible next steps.",
        meta: "Dogs, cats and small pets",
      },
    ],
  },
  about: {
    eyebrow: "The practice",
    title: "A vet who listens, in Saint-Lô",
    intro:
      "Dr Emmanuelle Colin cares for dogs, cats and small pets at 200 avenue de Paris. Appointments only, on-site parking.",
    storyEyebrow: "Your vet",
    storyTitle: "Dr Emmanuelle Colin",
    story: [
      "Dr Colin's veterinary practice sees your animals from Monday to Saturday, by appointment. People come for a consultation, vaccinations, a check-up, surgery, or for problems with skin or teeth.",
      "In an emergency, call the practice directly. If your animal cannot travel, home visits are possible: ask about them on the phone.",
    ],
    animalsEyebrow: "Animals we see",
    animalsTitle: "Dogs, cats and small pets",
    animalsIntro: "Small or large, young or old: call the practice if you are unsure about your animal.",
    animals: [
      { title: "Dogs", text: "Consultations, vaccinations, check-ups and care.", photo: "golden" },
      { title: "Cats", text: "Consultations, vaccinations, check-ups and care.", photo: "catPortrait" },
      { title: "Small pets", text: "Rabbits and other small companions: ask on the phone.", photo: "rabbitLop" },
    ],
    photoNote: "Illustration photos (Unsplash).",
    valuesEyebrow: "From the reviews",
    valuesTitle: "Four things reviews keep mentioning",
    values: [
      { title: "Warm welcome", text: "A warm welcome, for you and your animal." },
      { title: "Listens", text: "Time to listen, and to calm the animal and its owner." },
      { title: "Clear explanations", text: "Simple explanations and a quick diagnosis." },
      { title: "Good advice", text: "Honest advice from a vet who is not only thinking about money." },
    ],
  },
  findUs: {
    eyebrow: "Getting here",
    title: "Visit the practice",
    text: "The practice is at 200 avenue de Paris, Saint-Lô. You can park on site.",
    where: "Where",
    when: "When",
    whenText: "Mon–Fri 9am–12pm and 3pm–6:30pm, Sat 10am–12pm, by appointment",
    mapLabel: "Avenue de Paris",
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Our services",
    intro:
      "Eight areas of care for dogs, cats and small pets. To check whether a service suits your animal, or to ask about prices, call the practice.",
    jumpNav: "Jump to a service",
    sectionLabel: "Service details",
    note: "Prices on request, by phone. The descriptions stay general: Dr Colin will advise you about your own animal.",
    howTitle: "How",
    howValue: "By appointment",
    priceTitle: "Price",
    priceValue: "On request",
    bookFor: "for",
  },
  finder: {
    eyebrow: "Not sure?",
    title: "Start with what you notice",
    text: "Pick the sentence that sounds like your situation. If in doubt, call the practice.",
    needs: [
      { need: "My animal is injured or really unwell", slug: "urgences", note: "Call straight away" },
      { need: "It needs its vaccinations or a check-up", slug: "vaccins", note: "By appointment" },
      { need: "It keeps scratching or losing hair", slug: "dermatologie", note: "By appointment" },
      { need: "It has bad breath or trouble eating", slug: "dentisterie", note: "By appointment" },
      { need: "It needs an operation", slug: "chirurgie", note: "By appointment" },
      { need: "It cannot travel", slug: "visites-a-domicile", note: "Call to talk it through" },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Dogs, cats and small pets in pictures",
    intro: "The animals Dr Colin cares for, shown in illustration photos.",
    nav: "Gallery sections",
    sectionLabel: "Photo gallery",
    note: "Illustration photos from Unsplash: they do not show the practice, its patients or its team.",
    photos: "photos",
    groups: [
      {
        id: "chiens",
        title: "Dogs",
        text: "Small or large, young or old.",
        items: [
          { photo: "golden", caption: "Always ready", span: "sm:row-span-2" },
          { photo: "corgi", caption: "Young puppy" },
          { photo: "boxerPuppy", caption: "Resting" },
          { photo: "blackDog", caption: "Small breed" },
          { photo: "pettingDog", caption: "Feeling safe" },
        ],
      },
      {
        id: "chats",
        title: "Cats",
        text: "Cuddly or more reserved.",
        items: [
          { photo: "catPortrait", caption: "Curious look", span: "sm:row-span-2" },
          { photo: "catWindow", caption: "By the window" },
          { photo: "catTuxedo", caption: "Long hair" },
          { photo: "catCalico", caption: "Settled in" },
          { photo: "catHeld", caption: "In safe arms" },
        ],
      },
      {
        id: "nac",
        title: "Small pets",
        text: "Rabbits and other small companions.",
        items: [
          { photo: "rabbitLop", caption: "Lop-eared rabbit" },
          { photo: "rabbitGrass", caption: "On the grass" },
          { photo: "rabbitClose", caption: "All ears" },
        ],
      },
      {
        id: "consultation",
        title: "At the vet",
        text: "What a check-up at the vet can look like.",
        items: [
          { photo: "kittenExam", caption: "Listening to the heart", span: "sm:col-span-2" },
          { photo: "injection", caption: "Vaccination" },
        ],
      },
    ],
  },
  faq: {
    eyebrow: "Before you come",
    title: "Common questions",
    text: "Another question? Call the practice.",
    items: [
      {
        q: "Do I need an appointment?",
        a: "Yes, consultations are by appointment. Call the practice on 02 33 05 59 94.",
      },
      {
        q: "Which animals does the practice see?",
        a: "Dogs, cats and small pets such as rabbits. For another animal, ask on the phone.",
      },
      {
        q: "What should I do in an emergency?",
        a: "Call the practice directly on 02 33 05 59 94 to find out what to do.",
      },
      {
        q: "Is there parking?",
        a: "Yes, there is on-site parking at 200 avenue de Paris.",
      },
      {
        q: "Can the vet come to my home?",
        a: "Home visits are possible. Call the practice to talk it through.",
      },
      {
        q: "How much does it cost?",
        a: "Prices are given on request, by phone.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Book an appointment",
    intro: "Consultations are by appointment, by phone. In an emergency, call the practice directly.",
    sectionLabel: "Contact details and form",
    findUs: "Find us",
    hoursTitle: "Opening hours",
    emergencyTitle: "An emergency?",
    emergencyText: "Call the practice directly on",
    byAppointment: "Appointments only",
    formTitle: "Contact form",
    formIntro: "This form is a demo: nothing is sent to the practice. To book, call 02 33 05 59 94.",
  },
  form: {
    note: "Demo form: nothing is sent.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    optional: "(optional)",
    animal: "Your animal",
    choose: "Choose…",
    animals: ["Dog", "Cat", "Small pet (rabbit…)", "Other"],
    reason: "Reason",
    reasons: [
      "Consultation",
      "Vaccinations and check-ups",
      "Surgery",
      "Veterinary dentistry",
      "Dermatology",
      "Medical imaging",
      "Home visit",
      "Other",
    ],
    message: "Message",
    submit: "Send",
    demoTitle: "Demo form – please call",
    demoText: "Nothing was sent. To book or ask a question, call the practice.",
    back: "Back to the form",
  },
  credits: {
    eyebrow: "Credits",
    title: "Photo credits",
    intro:
      "This website is a practice demo. Every photo is an illustration from Unsplash, used under the Unsplash Licence: none of them show the practice, its patients or its team. Thank you to the photographers.",
    by: "by",
    footer: "Photos via",
    icons: "Icons by Lucide.",
  },
};

export const dict: Record<Lang, Dict> = { fr, en };
