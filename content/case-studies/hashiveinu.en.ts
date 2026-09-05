import type { CaseStudy } from "@/content/types";

const BASE = "/case-studies/hashiveinu";

/**
 * "Hashiveinu" — an AI-vocal cover of Hanan Ben Ari's hit, under the ongoing
 * "Netanel and the Machines" channel. See hashiveinu.he.ts for the shared
 * production notes (poster crop, placeholder hero video).
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
        "\"Netanel and the Machines\" is my ongoing channel — a place where I use AI to produce vocal performances of songs that move me, and wrap each one in a film that tells the idea behind it.",
        "\"Hashiveinu\" is the newest chapter in that series — an AI cover of Hanan Ben Ari's hit.",
      ],
    },
    {
      type: "text",
      title: "Why this song, why now",
      paragraphs: [
        "I chose this moving song right during the Selichot period, ahead of the High Holidays.",
        "I wanted to carry one message: \"Hashiveinu\" (bring us back) isn't repentance starting from zero, as if nothing came before.",
        "It's growing closer — one step nearer to God, from someone who's already there, not only from someone who drifted all the way away.",
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
        "I wanted the image to say it without a word: an embrace at the front door, not a confrontation. Someone coming back, and someone waiting for them at the door.",
        "I created the entire animation myself using AI — from the first idea to the final frame.",
      ],
    },
    {
      type: "text",
      title: "The voice",
      paragraphs: [
        "The vocal performance was generated using Suno. That's the tool, not the singer — the same approach behind every project I make: AI produces, I direct.",
      ],
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
      "\"Netanel and the Machines\" will keep growing, song after song.",
      "But \"Hashiveinu\" will stay especially close — because it's not just a cover. It's a reminder, to me too.",
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
