import type { CaseStudy } from "@/content/types";

const BASE = "/commercials";

/**
 * "וופל לימון" — unlisted commercial. The page exists so it can be shared
 * by direct URL; there is no longer supporting production material, so this
 * keeps to the existing title, description, finished clip and poster.
 * No invented stills, quotes or credits beyond the filmmaker.
 */
const caseStudy: CaseStudy = {
  slug: "lemon-waffle",
  unlisted: true,
  hero: {
    title: "וופל לימון",
    subtitle: "פרסומת קצרה שהופכת וופל יומיומי לרגע חושי וקולנועי.",
    tags: ["פרסומת", "בימוי יצירתי"],
    video: `${BASE}/lemon-waffle.mp4`,
    poster: `${BASE}/lemon-waffle-poster.jpg`,
  },

  openingQuote: ["וופל יומיומי, לרגע חושי וקולנועי."],

  blocks: [
    {
      type: "text",
      paragraphs: [
        "פרסומת קצרה שהופכת וופל יומיומי לרגע חושי וקולנועי.",
      ],
    },
  ],

  film: {
    title: "הסרט",
    video: `${BASE}/lemon-waffle.mp4`,
    poster: `${BASE}/lemon-waffle-poster.jpg`,
  },

  reflection: {
    paragraphs: [],
  },

  credits: [{ role: "בימוי יצירתי", name: "נתנאל לייפר" }],

  cta: {
    title: "מחפשים במאי שמתחיל מהסיפור?",
    text: "אם אתם מותג, עמותה או ארגון שמחפש סיפורים חזותיים מחושבים — אשמח לשמוע על הפרויקט הבא שלכם.",
    buttonLabel: "בוא נדבר",
  },
};

export default caseStudy;
