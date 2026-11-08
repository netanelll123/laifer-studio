import type { CaseStudy } from "@/content/types";

const BASE = "/case-studies/mellifant";

/**
 * "Mellifant" — an original character and an ongoing YouTube series of
 * English sing-along songs for kids. Full independent project (own IP, own
 * channel), not commissioned work — the copy says so plainly. No view or
 * subscriber numbers on purpose: they go stale within days and the site's
 * rule is no unverifiable metrics. The featured film is song 10, "Move Your
 * Body" (YouTube upload date/duration read from its watch page 2026-11-08).
 * Counts like "16 songs" come from the project's own status sheet.
 */
const caseStudy: CaseStudy = {
  slug: "mellifant",
  hero: {
    title: "Mellifant",
    subtitle:
      "An international educational project I created: a baby elephant who teaches young children English through sing-along songs.",
    tags: ["Educational Project", "Original Character", "Kids' Songs", "AI Animation"],
    video: `${BASE}/hero.mp4`,
    poster: `${BASE}/hero-poster.jpg`,
    logo: `${BASE}/logo.png`,
  },

  openingQuote: ["Little songs.", "Big discoveries."],

  blocks: [
    {
      type: "text",
      title: "An international educational project I created",
      paragraphs: [
        "Mellifant is an educational project I created myself, for children around the world. It's my own character, my own channel and my own rules — and a way to test how far a single, consistent character can carry a whole body of learning.",
        "He's a baby elephant in a blue denim cap and overalls with a yellow star on the pocket, and he teaches young children English through songs: counting, colors, fruit, brushing teeth, moving your body.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/meet-mellifant.jpg`,
      alt: "Mellifant the baby elephant dancing in a mountain meadow, with the words Meet Mellifant",
    },
    {
      type: "text",
      title: "Why English, why kids",
      paragraphs: [
        "The audience is international, so everything on screen is in English only — clear words, slow enough to sing along, never a line that could teach a child the wrong word.",
        "Every song is built as a sing-along: the lyrics appear on screen, the word being sung lights up, and the picture acts out what the word means.",
      ],
    },
    {
      type: "text",
      title: "A character that stays the same",
      paragraphs: [
        "The hardest part of a series is not the first image. It's the hundredth — keeping the same face, the same cap, the same star on the pocket, scene after scene and song after song.",
        "So before any song, I built a character sheet: turnaround, expressions, poses, details and a fixed color palette. Every new image is generated against it, and every frame gets checked — the proportions, the cap, and above all the trunk, which has to actually hold what the story says it holds.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/character-sheet.jpg`,
      alt: "Mellifant character style guide: turnaround, expressions, poses, details and color palette",
      caption: "The character sheet every song is checked against",
    },
    {
      type: "quote",
      lines: ["One character.", "Many songs.", "Same elephant."],
    },
    {
      type: "text",
      title: "How a song gets made",
      paragraphs: [
        "A song starts with the music and lyrics. From the lyrics I write a shot list — one image per idea, matched to the verb being sung.",
        "Each image is checked against the character sheet, then animated into a short clip, and every clip is reviewed frame by frame before it goes anywhere near the edit.",
        "The sing-along film itself is assembled as a designed motion piece: paper-sticker lyrics, a little star hopping from word to word, one clear direction of movement from scene to scene, and sound effects timed to the words.",
        "For each song there is also a vertical Short — not the full song squeezed into a phone, but the chorus alone as a twenty-to-thirty-second hook.",
      ],
    },
    {
      type: "gallery",
      items: [
        {
          src: `${BASE}/scene-body-head.jpg`,
          alt: "Mellifant touching his head, from the Move Your Body song",
        },
        {
          src: `${BASE}/scene-food-apples.jpg`,
          alt: "Mellifant with apples, from the Healthy Food song",
        },
        {
          src: `${BASE}/scene-brush-sunrise.jpg`,
          alt: "Mellifant at sunrise, from the Brush Them Right song",
        },
        {
          src: `${BASE}/scene-brush-moon.jpg`,
          alt: "Mellifant under the moon, from the Brush Them Right song",
        },
        {
          src: `${BASE}/scene-body-tummy.jpg`,
          alt: "Mellifant rubbing his tummy, from the Move Your Body song",
        },
        {
          src: `${BASE}/scene-food-rainbow.jpg`,
          alt: "Mellifant with a rainbow of healthy food, from the Healthy Food song",
        },
        {
          src: `${BASE}/scene-colors-paint.jpg`,
          alt: "Mellifant painting a rainbow, from the Color Song",
        },
        {
          src: `${BASE}/scene-seasons-winter.jpg`,
          alt: "Mellifant in a scarf and coat in the snow, from the Four Seasons song",
        },
      ],
    },
    {
      type: "text",
      title: "The catalog today",
      paragraphs: [
        "Sixteen songs so far, each with its own 16:9 film and its own Short: a game song, morning, counting, healthy food, fruit, birthday, shapes, animal friends, brushing teeth, body parts, colors, the four seasons, a piano song, and lullabies for bedtime.",
        "Each one is built to stand alone, but together they're becoming one small world a child can come back to.",
      ],
    },
    {
      type: "text",
      title: "What I'm learning from the audience",
      paragraphs: [
        "The channel is young, and I treat it as a live experiment. What I've learned so far is that kids' content lives and dies on its neighborhood: the songs that travel are the ones that sit naturally next to the nursery rhymes families already watch, with a thumbnail that reads from across the room — big glossy letters, a big smiling Mellifant, bright color.",
        "So the thumbnails, titles and descriptions get the same care as the films themselves.",
      ],
    },
  ],

  film: {
    title: "Featured Song — Move Your Body",
    youtubeId: "GlVjSBnJ0pQ",
    uploadDate: "2026-11-07T12:03:28-08:00",
    duration: "PT1M45S",
    poster: `${BASE}/full-poster.jpg`,
    link: {
      label: "Visit the Mellifant channel on YouTube",
      url: "https://www.youtube.com/channel/UCmyZtsKL46PxsM4BiOoxUhA",
    },
  },

  reflection: {
    title: "Looking Back",
    paragraphs: [
      "Mellifant is where I create the thing I care about most in any film: a world that holds together. A character you recognize in the first second, a rule for how everything moves, and music that tells you how to feel.",
      "The tools are new. The job is the same one it's always been — tell it clearly, and make the audience feel it.",
    ],
  },

  credits: [
    { role: "Concept · Direction · Editing", name: "Netanel Laifer" },
    { role: "Character & Scene Design", name: "Netanel Laifer" },
    { role: "Production", name: "Laifer Studio", type: "Organization" },
  ],

  cta: {
    title: "Have a character or a story worth building a world around?",
    text: "Every film begins with listening. Let's build the world that fits yours.",
    buttonLabel: "Let's Talk",
  },
};

export default caseStudy;
