import type { CaseStudy } from "@/content/types";

const BASE = "/case-studies/od-yishama";

/**
 * "Od Yishama" — case study for Meir Kleiner's AI-filmed Balkan wedding music
 * video. Revised per an editorial direction: read as a filmmaker's account of
 * directing choices, not an AI-production log — AI is the tool, not the
 * subject. Real production stills throughout; still pending: the hero video
 * clip and the film's real YouTube ID (see
 * public/case-studies/od-yishama/README.md).
 */
const caseStudy: CaseStudy = {
  slug: "od-yishama",
  hero: {
    title: "Od Yishama",
    subtitle:
      "How you build a cinematic world that doesn't really exist — and still make the viewer believe it does.",
    tags: ["Music Video", "Creative Direction", "AI Filmmaking"],
    video: `${BASE}/hero.mp4`,
    poster: `${BASE}/hero-poster.jpg`,
  },

  openingQuote: [
    "I don't build films around technology.",
    "I build worlds people can believe in.",
  ],

  blocks: [
    {
      type: "text",
      title: "Where it began",
      paragraphs: [
        'When Meir Kleiner reached out, he wasn\'t asking for an "AI clip."',
        "He came with a very clear musical vision.",
        '"Od Yishama" was written and produced out of a deep love for Balkan music.',
        "Not as an imitation.",
        "But as a piece that understands the musical language, the instruments and the distinct atmosphere of the Balkans.",
        "His request was simple:",
        "create a visual world that feels like it was born from the music itself.",
        "The point of reference was Emir Kusturica's films.",
        "Not to copy them.",
        "But to capture the human feeling, the color, the organized chaos and the wholeness found in imperfection.",
        "From that moment I knew the goal wasn't to make pretty pictures.",
        "The goal was to build a world you could believe actually exists.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/scene-1.jpg`,
      alt: "The groom and bride stand facing each other under a chuppah in the village square, the whole village around them",
    },

    {
      type: "text",
      title: "It started with the screenplay",
      paragraphs: [
        "I didn't start with an image.",
        "I started by listening to the song. Twice.",
        "Then I wrote the screenplay.",
        "I sat with Meir, we read it together, and agreed — this was the film we wanted to tell.",
        "Only once the story was settled did I start thinking about what its world would look like.",
      ],
    },

    {
      type: "text",
      title: "Building the world before building the film",
      paragraphs: [
        "Once the screenplay existed, I didn't want to make decisions on the fly.",
        "So before a single character existed, I built the town. I called it Kleinir.",
        "Not because I couldn't have used a real location — but because I wanted complete creative freedom, inside rules I set myself.",
        "The streets. The architecture. The houses. The square.",
        "People are shaped by their surroundings. The streets, the houses and the atmosphere define them as much as their faces do.",
        "Only once Kleinir existed did I move on to the people who live there.",
        "And only then did the film begin.",
      ],
    },
    {
      type: "gallery",
      items: [
        { src: `${BASE}/village-square.jpg`, alt: "The main square", caption: "Main square" },
        { src: `${BASE}/groom-house.jpg`, alt: "The groom's house", caption: "Groom's house" },
        { src: `${BASE}/bride-house.jpg`, alt: "The bride's house", caption: "Bride's house" },
        { src: `${BASE}/village-streets.jpg`, alt: "Village streets", caption: "Village streets" },
        { src: `${BASE}/village-alley.jpg`, alt: "A village alley", caption: "A village alley" },
      ],
    },

    {
      type: "quote",
      lines: [
        "I never approached this as a film I was creating.",
        "I approached it as a story that already existed,",
        "and I simply arrived with a camera to document it.",
      ],
    },

    {
      type: "text",
      title: "Character creation",
      paragraphs: [
        "This part became personal.",
        "Before a single shot existed, I cast the film — the groom, the bride, Chiko, the musicians, and dozens of people in the background.",
        "I wasn't looking for perfect faces.",
        "I knew a character was finished the moment they felt like the neighbor's son — not a generated face, but someone I recognized.",
        "Everyone on screen needed to feel like they actually lived in Kleinir.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/character-groom-board.jpg`,
      alt: "Full character reference sheet for the groom — angles, expressions and continuity notes",
      caption: "The groom",
    },
    {
      type: "image",
      src: `${BASE}/character-bride-board.jpg`,
      alt: "Full character reference sheet for the bride — angles, expressions and continuity notes",
      caption: "The bride",
    },
    {
      type: "image",
      src: `${BASE}/character-chiko-board.jpg`,
      alt: "Full character reference sheet for Chiko — angles, expressions and movement",
      caption: "Chiko",
    },
    {
      type: "image",
      src: `${BASE}/character-musicians-board.jpg`,
      alt: "Character reference sheet for Meir, the band's clarinet and saxophone player",
      caption: "The musicians",
    },

    {
      type: "text",
      title: "The biggest challenge",
      paragraphs: [
        "The challenge here wasn't making beautiful images.",
        "It was making every shot feel like it belonged to the same physical place.",
        "I wanted the streets to connect to each other. I wanted Kleinir to hold together as one continuous world.",
        "The most demanding scene was the meeting of two processions — the groom's and the bride's — arriving from different streets into the same square.",
        "If the geography hadn't held, the viewer would have felt it instantly.",
        "Consistency isn't a technical detail. It's what makes a world believable.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/consistency-lock-board.jpg`,
      alt: "A \"locked scene\" reference board — the same square, tree, chuppah and characters held consistent across every shot",
      caption: "\"Locking\" the environment and characters — how continuity was kept from shot to shot",
    },
    {
      type: "image",
      src: `${BASE}/bride-procession.jpg`,
      alt: "The bride's procession moving through the village street, surrounded by family and musicians",
      caption: "The bride's procession — one of the two that had to meet in the same square",
    },

    {
      type: "text",
      title: "The moment I knew it worked",
      paragraphs: [
        "Up to that moment, I'd been looking at shots.",
        "The moment the groom opened his door, saw the musicians, and Chiko dancing in front of him—",
        "I stopped looking at footage.",
        "I was watching a scene from a film.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/groom-door.jpg`,
      alt: "The groom standing in his doorway, seeing the musicians and Chiko dancing in front of him",
      caption:
        "One of the early sketches — notice the groom here doesn't quite match his own reference yet.",
    },

    {
      type: "text",
      title: "People before perfection",
      paragraphs: [
        "Real communities aren't made of perfect faces.",
        "When a character looks flawless, it's hard to feel anything for them.",
        "So I built ordinary people.",
        "Faces with character. A little asymmetry. A little life.",
        "People who could have been our neighbors.",
        "The connection isn't about how polished a face looks. It's about how true it feels.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/crowd-reference.jpg`,
      alt: "Background-character reference sheet — men, women, children and elders in traditional Balkan dress, a range of ages and faces",
    },

    {
      type: "quote",
      lines: [
        "The small details,",
        "the ones most viewers never consciously notice,",
        "are exactly what create believability.",
        "They're the difference between a picture,",
        "and a place someone could have grown up in.",
      ],
    },
  ],

  film: {
    title: "The Film",
    // TODO: replace with the real YouTube video ID for "Od Yishama".
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    poster: `${BASE}/film-poster.jpg`,
  },

  reflection: {
    title: "What I learned",
    paragraphs: [
      "The film was built long before a single frame was generated.",
      "Every scene that worked, worked because of a decision made in preparation — in the screenplay, in Kleinir, in the characters — long before production began.",
      "When something doesn't feel right on screen, I don't try to fix the image.",
      "I go back and rethink the decision that created it. The image is only ever a symptom.",
      "If I had a full production budget, real actors and real locations, I would direct almost exactly the same film.",
      "The story wouldn't change. The blocking wouldn't change. The way I'd guide a performance wouldn't change.",
      "AI changed the process that got me there.",
      "It didn't change the story I wanted to tell.",
    ],
  },

  credits: [
    { role: "Artist · Music & Creative Vision", name: "Meir Kleiner" },
    {
      role: "Direction · Screenplay · World Building · AI Production · Editing",
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
