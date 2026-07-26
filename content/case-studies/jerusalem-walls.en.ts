import type { CaseStudy } from "@/content/types";

const BASE = "/case-studies/jerusalem-walls";

/**
 * "Rachel and Dave Travel Through Time" — case study for the educational
 * animation built from an existing lesson plan about the 17th of Tammuz.
 * English is a natural adaptation of the Hebrew, not a literal translation.
 * Written per a director's-voice direction that's even stricter than the
 * other two case studies: no AI-as-subject at all, and explicit care not to
 * imply the educational content or characters were invented in this work —
 * both pre-existed and were handed over with full creative freedom on the
 * execution. Still pending: hero.mp4, the film's real YouTube ID, a
 * distinct film-poster (currently a duplicate of hero-poster.jpg), and
 * confirmation of how to credit the organization.
 */
const caseStudy: CaseStudy = {
  slug: "jerusalem-walls",
  hero: {
    title: "Rachel and Dave Travel Through Time — 17th of Tammuz",
    subtitle: "How do you turn a lesson plan into something children feel they've actually stepped into?",
    tags: ["Educational Animation", "Creative Direction", "World Building"],
    video: `${BASE}/hero.mp4`,
    poster: `${BASE}/hero-poster.jpg`,
  },

  openingQuote: [
    "The time travel isn't the central idea.",
    "It's the tool that connects kids today to Jerusalem as it once was.",
  ],

  blocks: [
    {
      type: "text",
      title: "The starting point",
      paragraphs: [
        "This project didn't start with me.",
        "The lesson plan about the 17th of Tammuz already existed.",
        "So did Rachel and Dave — in a very basic version, closer to an illustration than characters you could believe in.",
        "The organization gave me full creative freedom and didn't intervene in the creative decisions.",
      ],
    },

    {
      type: "text",
      title: "What my role was",
      paragraphs: [
        "My job was to translate the lesson plan into a visual language.",
        "Not to change the message.",
        "Not to invent a new idea.",
        "But to turn an educational concept into a cinematic experience.",
      ],
    },

    {
      type: "text",
      title: "The thought process",
      paragraphs: [
        "The first step wasn't design.",
        "It was writing the screenplay.",
        "I wanted to understand how an almost abstract idea takes shape on screen.",
        "How a child wouldn't just learn about Second Temple Jerusalem, but feel like they were actually there.",
      ],
    },

    {
      type: "text",
      title: "The time travel",
      paragraphs: [
        "Instead of explaining the history, I wanted to let kids visit it.",
      ],
    },

    {
      type: "text",
      title: "Building Jerusalem",
      paragraphs: [
        "It mattered to me that the city didn't feel like a historical reconstruction.",
        "I wanted to build a city people actually live in.",
        "See the walls. See the Temple from a distance.",
        "But just as important — see the streets, the people, the market, the children.",
        "Only once you feel the life inside the city can you understand what the walls were protecting.",
      ],
    },

    {
      type: "text",
      title: "Rachel and Dave",
      paragraphs: [
        "One of the goals was to take the early versions of Rachel and Dave and give them depth and presence.",
        "Not to reinvent them, but to turn them into characters capable of leading the viewer through the story, and feeling natural inside the world that was built.",
      ],
    },

    {
      type: "text",
      title: "The moment I knew it worked",
      paragraphs: [
        "That moment wasn't dramatic.",
        "It was watching the kids play soccer in the streets of Jerusalem.",
        "In that moment, the city stopped being a set.",
        "It became a place people live in.",
      ],
    },
  ],

  film: {
    title: "The Film",
    // TODO: replace with the real YouTube video ID.
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    poster: `${BASE}/film-poster.jpg`,
  },

  reflection: {
    title: "The scope of the project",
    paragraphs: [
      "After the Hebrew version was finished, the film was adapted into five additional languages.",
      "The process meant adjusting narration, pacing and editing for each language — while keeping the same experience across every version.",
      "The same city. The same kids. Six different languages.",
    ],
  },

  credits: [
    {
      role: "Direction · Screenplay · World Building · Editing",
      name: "Netanel Laifer",
    },
  ],

  cta: {
    title: "Have a story worth telling?",
    text: "Every film begins with listening. Let's build the world that fits your story.",
    buttonLabel: "Let's Talk",
  },
};

export default caseStudy;
