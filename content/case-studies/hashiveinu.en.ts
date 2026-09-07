import type { CaseStudy } from "@/content/types";

const BASE = "/case-studies/hashiveinu";

/**
 * "Hashiveinu" — an AI-vocal cover of Hanan Ben Ari's hit, under the ongoing
 * "Netanel and the Machines" channel. The film follows a gradual spiritual
 * return that ends in a personal one too — reconciling with the father — as
 * a gentle (not literal) metaphor for returning to our Father in Heaven.
 * See hashiveinu.he.ts for the shared production notes (poster crop,
 * placeholder hero video).
 */
const caseStudy: CaseStudy = {
  slug: "hashiveinu",
  hero: {
    title: "Hashiveinu (AI Cover) — Hanan Ben Ari",
    subtitle: "Not starting from zero. Growing closer.",
    tags: ["AI Vocal Cover", "Music Video", "AI Animation"],
    video: `${BASE}/hero.mp4`,
    poster: `${BASE}/hero-poster.jpg`,
  },

  openingQuote: ["We don't start from zero.", "We grow closer."],

  blocks: [
    {
      type: "text",
      title: "Netanel and the Machines",
      paragraphs: [
        "\"Netanel and the Machines\" is a channel I've been running for a while: I use AI to produce vocal performances of songs that move me, and build a short film around each one.",
        "\"Hashiveinu\" is the latest chapter — a cover of a song by Hanan Ben Ari.",
      ],
    },
    {
      type: "text",
      title: "Why this song, why now",
      paragraphs: [
        "I chose this song during the Selichot period, right before the High Holidays.",
        "The word \"Hashiveinu\" — bring us back — caught me at a particular angle: not as a call to start over from zero, but as a description of growing closer.",
      ],
    },
    {
      type: "quote",
      lines: ["We don't start from zero.", "We grow closer."],
    },
    {
      type: "text",
      title: "The visual idea",
      paragraphs: [
        "The film opens on a process of returning.",
        "The main character moves closer, step by step, toward the spiritual world — toward faith, toward prayer, toward the place he'd drifted from. It isn't repentance in the classic sense, but a gentle process of growing closer and stronger in faith.",
        "As the film goes on, that spiritual return takes on a more personal, earthly meaning too.",
        "By the end, the character reconciles with his father.",
        "That meeting is also a metaphor: returning to a father on earth echoes returning to a Father in Heaven. The bond between father and son becomes a tangible picture of longing, reconciliation and closeness — between a person and his father, and between a person and his Father in Heaven.",
        "So \"Hashiveinu\" isn't only a story about returning to a place we'd drifted from — it's about how growing closer, spiritually, can reopen bonds that seemed already lost.",
      ],
    },
    {
      type: "text",
      title: "The voice",
      paragraphs: ["I created the vocal performance using Suno — the tool, not the singer."],
    },
  ],

  film: {
    title: "The Film",
    youtubeId: "FKZYMK7NFE0",
    // YouTube watch-page publishDate/duration for this video id.
    uploadDate: "2026-09-05T10:54:24-07:00",
    duration: "PT3M53S",
    poster: `${BASE}/full-poster.jpg`,
  },

  reflection: {
    title: "Looking Back",
    paragraphs: [
      "\"Netanel and the Machines\" will keep going, song after song.",
      "\"Hashiveinu\" will stay especially close to me — a story about returning, and about a father and a son.",
    ],
  },

  credits: [
    { role: "Vocal Performance (AI)", name: "Suno", type: "Organization" },
    { role: "Music & Lyrics (Original)", name: "Hanan Ben Ari" },
    { role: "Direction · Animation (AI) · Editing", name: "Netanel Laifer" },
  ],

  cta: {
    title: "Have a story worth telling?",
    text: "Every film begins with listening. Let's build the world that fits your story.",
    buttonLabel: "Let's Talk",
  },
};

export default caseStudy;
