import type { CaseStudy } from "@/content/types";

const BASE = "/commercials";

/**
 * "Lemon Waffle" — unlisted commercial. The page exists so it can be shared
 * by direct URL; there is no longer supporting production material, so this
 * keeps to the existing title, description, finished clip and poster.
 * No invented stills, quotes or credits beyond the filmmaker.
 */
const caseStudy: CaseStudy = {
  slug: "lemon-waffle",
  unlisted: true,
  hero: {
    title: "Lemon Waffle",
    subtitle:
      "A short commercial turning an everyday waffle into a cinematic, sensory moment.",
    tags: ["Commercial", "Creative Direction"],
    video: `${BASE}/lemon-waffle.mp4`,
    poster: `${BASE}/lemon-waffle-poster.jpg`,
  },

  openingQuote: ["An everyday waffle, as a cinematic, sensory moment."],

  blocks: [
    {
      type: "text",
      paragraphs: [
        "A short commercial turning an everyday waffle into a cinematic, sensory moment.",
      ],
    },
  ],

  film: {
    title: "The Film",
    video: `${BASE}/lemon-waffle.mp4`,
    poster: `${BASE}/lemon-waffle-poster.jpg`,
  },

  reflection: {
    paragraphs: [],
  },

  credits: [{ role: "Creative Direction", name: "Netanel Laifer" }],

  cta: {
    title: "Looking for a filmmaker who starts with the story?",
    text: "If you're a brand, a nonprofit or an organization looking for thoughtful visual storytelling, I'd love to hear about your next project.",
    buttonLabel: "Let's Talk",
  },
};

export default caseStudy;
