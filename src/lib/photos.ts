// All photos are free-licence images from Unsplash (https://unsplash.com/license).
// Each entry keeps the photographer credit used on the /credits page.

export type Photo = {
  id: string;
  alt: string;
  author: string;
  username: string;
};

/** Base URL only: src/lib/unsplash-loader.ts adds size, format and quality. */
export function photoSrc(id: string) {
  return `https://images.unsplash.com/photo-${id}`;
}

export const photos = {
  hero: {
    id: "1777331903190-341a3dd0441b",
    alt: "A dentist in light scrubs chatting with a relaxed, smiling patient in a bright, modern treatment room",
    author: "Harold Hisona",
    username: "harold_angus",
  },
  roomBright: {
    id: "1629909613654-28e377c37b09",
    alt: "A bright, spotless treatment room with a dental chair, overhead light and white cabinets",
    author: "Benyamin Bohlouli",
    username: "benyamin_bohlouli",
  },
  roomCalm: {
    id: "1704455306251-b4634215d98f",
    alt: "A calm treatment room with a pale grey dental chair, a wall screen and wooden flooring",
    author: "Kari Bjorn Photography",
    username: "karibjorn",
  },
  roomWide: {
    id: "1704455306925-1401c3012117",
    alt: "A wide view of a modern treatment room with a reclining dental chair and equipment arm",
    author: "Kari Bjorn Photography",
    username: "karibjorn",
  },
  consultScan: {
    id: "1606811841689-23dfddce3e95",
    alt: "A dentist pointing at a digital scan on a screen while explaining it to a seated patient",
    author: "Caroline LM",
    username: "carocaro1987",
  },
  consultChair: {
    id: "1606811842243-af7e16970c1f",
    alt: "A dentist preparing a clear aligner for a patient who is reclining in the dental chair",
    author: "Caroline LM",
    username: "carocaro1987",
  },
  xray: {
    id: "1588776814546-1ffcf47267a5",
    alt: "A dentist studying dental X-ray images on a bright light box",
    author: "Jonathan Borba",
    username: "jonathanborba",
  },
  implantModel: {
    id: "1593022356769-11f762e25ed9",
    alt: "A dental model showing an implant placed between two natural teeth",
    author: "Jonathan Borba",
    username: "jonathanborba",
  },
  aligners: {
    id: "1564420228450-d9a5bc8d6565",
    alt: "Hands holding clear aligners, a white aligner case and a small bottle against a pale blue background",
    author: "Candid",
    username: "candid",
  },
  bracesModel: {
    id: "1777446899714-c26de766dffd",
    alt: "A dental model of a full set of teeth with orthodontic braces",
    author: "Harold Hisona",
    username: "harold_angus",
  },
  mirrorTools: {
    id: "1606811856475-5e6fcdc6e509",
    alt: "A dental mirror and a fine metal explorer resting on a white surface",
    author: "Caroline LM",
    username: "carocaro1987",
  },
  mirrorChair: {
    id: "1698749778813-ad5f2814e50f",
    alt: "A dental mirror held up in the foreground with a softly blurred dental chair behind",
    author: "Katarzyna Zygnerska",
    username: "katasha",
  },
  toolsGloved: {
    id: "1771442873038-dda05b6ca447",
    alt: "A gloved hand holding a set of polished dental examination tools",
    author: "Katarzyna Zygnerska",
    username: "katasha",
  },
  exam: {
    id: "1606811971618-4486d14f3f99",
    alt: "A close-up of a gentle dental check with a mirror and probe",
    author: "Caroline LM",
    username: "carocaro1987",
  },
  youngPatient: {
    id: "1631051103633-24959376b92d",
    alt: "A smiling young patient giving a thumbs up from the dental chair",
    author: "Nate Johnston",
    username: "natejohnston",
  },
  reassurance: {
    id: "1758691462071-757bca955439",
    alt: "A clinician resting a reassuring hand on a patient's arm across a desk",
    author: "Vitaly Gariev",
    username: "silverkblack",
  },
  smileLaugh: {
    id: "1489278353717-f64c6ee8a4d2",
    alt: "A woman with long dark wavy hair laughing with a bright, natural smile",
    author: "Lesly Juarez",
    username: "jblesly",
  },
  smileClose: {
    id: "1567516364473-233c4b6fcfbe",
    alt: "A close-up of a woman's warm, healthy smile",
    author: "Alexander Krivitskiy",
    username: "krivitskiy",
  },
  smileJoy: {
    id: "1611695434369-a8f5d76ceb7b",
    alt: "A person with short brown hair laughing openly against a soft blue background",
    author: "nrd",
    username: "nicotitto",
  },
  smileProfile: {
    id: "1677026010083-78ec7f1b84ed",
    alt: "A side view of a smile showing clean, even white teeth",
    author: "Kamal Hoseinianzade",
    username: "teravis_sk",
  },
  smileSoft: {
    id: "1603654983938-a3ac86145bd2",
    alt: "A woman with dark hair smiling softly and looking down",
    author: "Viktor Forgacs",
    username: "sonance",
  },
  smileFriends: {
    id: "1545311630-51ea4a4c84de",
    alt: "Two friends smiling widely together outdoors",
    author: "John Karlo Mendoza",
    username: "jk2kphotos",
  },
  teamLead: {
    id: "1729162128021-f37dca3ff30d",
    alt: "Portrait of a smiling clinician with greying hair wearing a white coat",
    author: "Vidak",
    username: "vidak",
  },
  teamCosmetic: {
    id: "1770134223774-13b735e29201",
    alt: "Portrait of a smiling clinician with glasses in navy scrubs, arms folded",
    author: "Beatriz Mendez",
    username: "beatrizmendez",
  },
  teamCare: {
    id: "1758599543111-36ce5c34fceb",
    alt: "Portrait of a smiling team member with dark hair and glasses",
    author: "Vitaly Gariev",
    username: "silverkblack",
  },
  teamAtWork: {
    id: "1681939282781-341ac4f61996",
    alt: "A dental professional in blue scrubs and gloves treating a patient under the overhead light",
    author: "SoyBreno",
    username: "soybrenofotografia",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
