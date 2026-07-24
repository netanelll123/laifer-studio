import type { CaseStudy } from "@/content/types";

const BASE = "/case-studies/avir-mevorach";

/**
 * "Avir Mevorach" — case study for the AI-directed music video built around
 * a single idea: don't film the air, film a child who believes there isn't
 * any. English is a natural adaptation of the Hebrew, not a literal
 * translation. Written per the same director's-voice direction as
 * "Od Yishama" — AI as the production tool, not the subject. All media
 * real; the film's YouTube ID is the same one already used on the homepage
 * card.
 */
const caseStudy: CaseStudy = {
  slug: "avir-mevorach",
  hero: {
    title: "Avir Mevorach",
    subtitle: "What do you film, when you can't film air?",
    tags: ["Music Video", "Creative Direction", "AI Filmmaking"],
    video: `${BASE}/hero.mp4`,
    poster: `${BASE}/hero-poster.jpg`,
  },

  openingQuote: [
    "You don't need to film the air.",
    "You need to film a child who believes there isn't any.",
  ],

  blocks: [
    {
      type: "text",
      title: "Choosing the song",
      paragraphs: [
        "I composed \"Avir Mevorach\" to lyrics by Hagit Simcha Ben Tzvi, as part of \"The Heart Project.\"",
        "A few years later, once I started making films with AI, I was looking for a song that could become one.",
        "I didn't want to illustrate the lyrics. I wanted to find a cinematic idea that could stand on its own.",
        "\"Avir Mevorach\" was the natural choice.",
        "The first question I asked myself was simple: how do you film air?",
        "Of course, you can't.",
        "That's when I realized I was asking the wrong question entirely.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/scene-city-crowd.jpg`,
      alt: "A child in a vintage diving suit walks alone through a bustling city street, surrounded by passersby in period dress",
    },

    {
      type: "text",
      title: "The first image",
      paragraphs: [
        "Before there was a screenplay, I had one image in my head. A small boy in a diving helmet.",
        "I didn't know yet what would happen in the film. But I knew that image was the starting point.",
        "Everything else was built from there.",
      ],
    },

    {
      type: "text",
      title: "Why a child",
      paragraphs: [
        "I chose a child because children still see the world differently — they ask questions, they imagine, they don't always take reality for granted.",
        "I wanted the film to move through that point of view. One children could connect to naturally, but adults would find their own meaning in too.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/scene-helmet-closeup.jpg`,
      alt: "Close-up of the boy adjusting his diving helmet, steam venting from the vents as the city reflects in the glass",
    },

    {
      type: "text",
      title: "The helmet",
      paragraphs: [
        "The diving helmet became the center of the story, but it was never really the point.",
        "The helmet didn't block the air. It made him believe there wasn't any.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/scene-helmet-lift.jpg`,
      alt: "The boy lifts the helmet off his head in the middle of a city street, warm glowing light spilling out from inside",
    },

    {
      type: "quote",
      lines: [
        "The moment he removes it,",
        "the world doesn't change.",
        "He discovers the air was there all along.",
      ],
    },

    {
      type: "image",
      src: `${BASE}/scene-breathing.jpg`,
      alt: "The boy stands with his eyes closed, breathing deeply, the helmet resting beside him in golden evening light",
    },

    {
      type: "text",
      title: "The city",
      paragraphs: [
        "It mattered to me that the film didn't end there.",
        "The boy returns to the same gray city. The same streets. The same buildings.",
        "But this time, something has already changed. Not the city. The boy.",
        "And everywhere he walks, the city begins filling with flowers, color and life — not because he's creating a new world, but because the way he meets this one has changed.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/scene-meadow-run.jpg`,
      alt: "A boy runs joyfully through a green flower field, arms spread wide, in warm evening light",
    },

    {
      type: "text",
      title: "Translating an idea into a film",
      paragraphs: [
        "I was looking for one idea strong enough to hold the entire film.",
        "Once I found it, every creative decision became simpler. Every shot. Every color. Every movement. Built around that same idea.",
      ],
    },
  ],

  film: {
    title: "The Film",
    youtubeId: "btAk8xtC0eo",
    poster: `${BASE}/film-poster.jpg`,
  },

  reflection: {
    title: "In retrospect",
    paragraphs: [
      "This film reminded me that big ideas don't always start with a script.",
      "Sometimes they start with a good question. Or even a single image that won't let go.",
      "In this case, a boy in a space helmet. And from there, it all began.",
      "This isn't just another portfolio entry. It's another chapter in the same creative philosophy.",
    ],
  },

  credits: [
    { role: "Lyrics", name: "Hagit Simcha Ben Tzvi" },
    { role: "Performance", name: "Zvulun Natanov" },
    {
      role: "Composition · Direction · AI Production · Editing",
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
