import type { CaseStudy } from "@/content/types";

const BASE = "/case-studies/od-yishama";

/**
 * "Od Yishama" — case study for Meir Kleiner's AI-filmed Balkan wedding music
 * video. English is a natural adaptation of the client's Hebrew brief, not a
 * literal translation. Media is placeholder (see
 * public/case-studies/od-yishama/README.md) pending real footage/stills and
 * the film's YouTube ID.
 */
const caseStudy: CaseStudy = {
  slug: "od-yishama",
  hero: {
    title: "Od Yishama",
    subtitle:
      "How you build a cinematic world that doesn't really exist — and still make the viewer believe it does.",
    tags: ["Music Video", "Creative Direction", "AI Filmmaking"],
    video: `${BASE}/hero.mp4`,
    poster: `${BASE}/hero-poster.svg`,
  },

  openingQuote: [
    "The biggest mistake creators working with AI make is trying to impress the viewer with effects.",
    "I tried to make them forget they were watching an AI production at all.",
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
      src: `${BASE}/scene-1.svg`,
      alt: "Cinematic frame from the film",
    },

    {
      type: "text",
      title: "It started with a script",
      paragraphs: [
        "Most AI creators start with a prompt.",
        "I started with a script.",
        "Before a single frame existed, I needed to understand the story.",
        "Only once the script was complete did I start thinking about what this world would look like.",
        "To me, the technology only shows up after the story already exists.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/screenplay.svg`,
      alt: "Screenplay notebook",
    },

    {
      type: "text",
      title: "Building the world before building the film",
      paragraphs: [
        "Once the script was ready, I realized I didn't want to make decisions on the fly.",
        "I wanted the entire world to already exist.",
        "So I paused production.",
        "And built the village.",
        "The streets.",
        "The architecture.",
        "The houses.",
        "The square.",
        "Only then did I move on to the characters.",
        "And only then did the film begin.",
      ],
    },
    {
      type: "gallery",
      items: [
        { src: `${BASE}/village-overview.svg`, alt: "The village", caption: "The village" },
        { src: `${BASE}/village-square.svg`, alt: "The main square", caption: "Main square" },
        { src: `${BASE}/groom-house.svg`, alt: "The groom's house", caption: "Groom's house" },
        { src: `${BASE}/bride-house.svg`, alt: "The bride's house", caption: "Bride's house" },
        { src: `${BASE}/village-streets.svg`, alt: "Village streets", caption: "Village streets" },
      ],
    },

    {
      type: "text",
      title: "Casting",
      paragraphs: [
        "Before creating a single shot, I cast the film.",
        "I built all the central characters in advance.",
        "The groom.",
        "The bride.",
        "Chiko.",
        "The musicians.",
        "And dozens of background characters.",
        "The goal was for everyone on screen to feel like someone who actually lives in this village.",
        "Not an AI model that happened to wander into frame.",
      ],
    },
    {
      type: "gallery",
      items: [
        { src: `${BASE}/character-groom.svg`, alt: "The groom", caption: "The groom" },
        { src: `${BASE}/character-bride.svg`, alt: "The bride", caption: "The bride" },
        { src: `${BASE}/character-chiko.svg`, alt: "Chiko", caption: "Chiko" },
        { src: `${BASE}/character-musicians.svg`, alt: "The musicians", caption: "The musicians" },
      ],
    },

    {
      type: "text",
      title: "The biggest challenge",
      paragraphs: [
        "The biggest challenge wasn't making pretty pictures.",
        "It was maintaining believability.",
        "I wanted the streets to connect to each other.",
        "For the village to feel real.",
        "For the viewer to feel that everything they see happens in the same place.",
        "The most complex shot was the meeting of the groom's procession and the bride's procession.",
        "Two processions.",
        "Different streets.",
        "The same square.",
        "If the village's geography hadn't held together—",
        "the viewer would have felt it instantly.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/processions.svg`,
      alt: "The groom's and bride's processions meeting",
    },

    {
      type: "text",
      title: "The moment I knew it worked",
      paragraphs: [
        "Up to that moment, I was looking at shots.",
        "The moment the groom opened his door, saw the musicians, and Chiko dancing in front of him—",
        "I felt like I was no longer looking at an AI experiment.",
        "I was looking at a scene from a film.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/groom-door.svg`,
      alt: "The groom opening his front door",
    },

    {
      type: "text",
      title: "Why the characters aren't perfect",
      paragraphs: [
        "I think we relate to people.",
        "Not to perfection.",
        "When a character looks like plastic,",
        "it's hard to feel anything for them.",
        "So I deliberately created ordinary people.",
        "Faces with character.",
        "A little asymmetry.",
        "A little life.",
        "People who could have been our neighbors.",
      ],
    },
    {
      type: "gallery",
      items: [
        { src: `${BASE}/portrait-1.svg`, alt: "Portrait of a village resident" },
        { src: `${BASE}/portrait-2.svg`, alt: "Portrait of a village resident" },
        { src: `${BASE}/portrait-3.svg`, alt: "Portrait of a village resident" },
        { src: `${BASE}/portrait-4.svg`, alt: "Portrait of a village resident" },
      ],
    },

    {
      type: "quote",
      lines: [
        "The small details,",
        "the ones most viewers don't even notice,",
        "are exactly what create believability.",
        "They're the difference between just another AI clip",
        "and a piece of work you can actually believe.",
      ],
    },
  ],

  film: {
    title: "The Film",
    // TODO: replace with the real YouTube video ID for "Od Yishama".
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
  },

  reflection: {
    title: "What I learned",
    paragraphs: [
      "One of the things I enjoyed most about this project was working with an artist who arrived with such a clear musical identity.",
      "When the musical vision is already formed,",
      "you can take it one step further and build a visual world that expands the experience instead of competing with it.",
      "This project sharpened something for me again: technology doesn't replace direction.",
      "It doesn't replace writing.",
      "It doesn't replace emotion.",
      "You can generate thousands of stunning images.",
      "But if there's no world you can believe in,",
      "and no characters you can relate to,",
      "the viewer stays at a distance.",
      "I'm not trying to show off what AI can do.",
      "I'm trying to tell a story.",
      "With a camera.",
      "With AI.",
      "Or with a microphone.",
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
