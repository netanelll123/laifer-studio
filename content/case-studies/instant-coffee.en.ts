import type { CaseStudy } from "@/content/types";

const BASE = "/commercials";

/**
 * "Elite Instant Coffee" — an independent spec commercial, not a commissioned
 * project. Unlike the other case studies, transparency about that is the
 * point, not a footnote: it's stated in the hero tags, the subtitle, and its
 * own opening section, before anything else. Only one real asset exists
 * (the finished 43s clip + its poster), reused for both the hero loop and
 * the "watch the film" section — same honest handling as any case study
 * with limited media, no invented stills or credits.
 */
const caseStudy: CaseStudy = {
  slug: "instant-coffee",
  hero: {
    title: "Elite Instant Coffee",
    subtitle:
      "An independent spec commercial — not commissioned by Elite. A cinematic look at the quiet ritual hidden inside an ordinary cup of coffee.",
    tags: ["Spec Commercial", "Independent Concept", "Creative Direction"],
    video: `${BASE}/instant-coffee.mp4`,
    poster: `${BASE}/instant-coffee-poster.jpg`,
  },

  openingQuote: ["The coffee isn't the hero.", "The moment is."],

  blocks: [
    {
      type: "text",
      title: "An independent concept",
      paragraphs: [
        "This project was made entirely on my own initiative.",
        "It was not commissioned by Elite. It is not an official campaign, and it isn't affiliated with, approved by, or connected to the brand in any way.",
        "It exists for one reason: to explore how cinematic storytelling can change the way we see something as familiar as a cup of instant coffee.",
      ],
    },
    {
      type: "text",
      title: "The challenge",
      paragraphs: [
        "Make a commercial for a product everyone already knows.",
        "Without leaning on features. Without exaggerated claims. Without the formulas most coffee commercials fall back on.",
        "The more familiar the product, the harder — and the more interesting — that question becomes.",
      ],
    },
    {
      type: "text",
      title: "The insight",
      paragraphs: [
        "A cup of coffee is rarely about the coffee itself.",
        "It's the moment that shows up exactly when everything is loud: the neighbors yelling, a supermarket line that isn't moving, traffic that's already made you late.",
        "The cup doesn't cancel the chaos. It just gives you one moment of calm inside it.",
        "That's what people actually remember — not the product, but the calm it gives exactly when they need it.",
      ],
    },
    {
      type: "text",
      title: "The idea",
      paragraphs: [
        "Treat an ordinary cup of instant coffee like the subject of a short cinematic film — not an advertisement for it.",
        "Steam becomes atmosphere. Light becomes emotion. The warmth of the cup, the quiet of an early morning, a view worth pausing for — all of it becomes the story.",
        "The film never asks anyone to buy anything. It simply sits inside a moment most people already know, and lets it breathe.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/instant-coffee-poster.jpg`,
      alt: "A man leans on a balcony ledge at sunrise, holding a cup of coffee and looking out over the city",
    },
    {
      type: "text",
      title: "Visual direction",
      paragraphs: [
        "The visual language leans into cinematic lighting, close detail and unhurried pacing — the kind of intimacy that comes from getting close and staying still.",
        "Golden, low-angle light. Rich texture in the steam and the ceramic. Natural, unforced movement. Atmosphere carried as much by sound and silence as by image.",
        "Nothing in the frame asks for attention. It simply holds it.",
      ],
    },
    {
      type: "text",
      title: "Where AI fits in",
      paragraphs: [
        "AI was the production tool here, not the idea.",
        "The story came first: a man, a balcony, a cup of coffee, a city waking up. AI made it possible to produce that vision independently, without a crew or a shoot — but it never decided what the film was about.",
        "The creative direction, the pacing, the light, the restraint — that's the same work regardless of what's behind the camera.",
      ],
    },
    {
      type: "text",
      title: "The process",
      paragraphs: [
        "It moved the way it always does: creative direction and concept first, then storyboarding and visual exploration to find the right frame.",
        "From there, AI image and video generation, editing, color grading and sound design — the same finishing steps as any film, just built without a physical set.",
      ],
    },
    {
      type: "text",
      title: "What this demonstrates",
      paragraphs: [
        "This project isn't a campaign result. It's a demonstration.",
        "That an everyday product can carry real emotion, if the story is right. That a strong creative idea can be developed independently, from insight to finished film. And that AI, used with intention, is a production tool — not the message.",
      ],
    },
  ],

  film: {
    title: "The Film",
    video: `${BASE}/instant-coffee.mp4`,
    poster: `${BASE}/instant-coffee-poster.jpg`,
  },

  reflection: {
    title: "In retrospect",
    paragraphs: [
      "I didn't need a client to explore this idea. I needed the idea.",
      "Sometimes the best way to show what you can do is simply to do it — no brief, no budget, no approval process. Just a story worth telling well.",
    ],
  },

  credits: [
    { role: "Creative Direction · AI Production · Editing", name: "Netanel Laifer" },
  ],

  cta: {
    title: "Looking for a filmmaker who starts with the story?",
    text: "If you're a brand, a nonprofit or an organization looking for thoughtful visual storytelling, I'd love to hear about your next project.",
    buttonLabel: "Let's Talk",
  },
};

export default caseStudy;
