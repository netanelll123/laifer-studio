import type { CaseStudy } from "@/content/types";

const BASE = "/case-studies/jerusalem-walls";

/**
 * "רייצ'ל ודייב נוסעים בזמן" — case study for the educational animation
 * built from an existing lesson plan about the 17th of Tammuz. Written per
 * a director's-voice direction that's even stricter than the other two
 * case studies: no AI-as-subject at all, and explicit care not to imply the
 * educational content or characters were invented in this work — both
 * pre-existed and were handed over with full creative freedom on the
 * execution. Real hero video/poster, film-poster and production stills now
 * in place. Still pending: the film's real YouTube ID (six language
 * versions exist — confirm which one belongs here).
 */
const caseStudy: CaseStudy = {
  slug: "jerusalem-walls",
  hero: {
    title: "רייצ'ל ודייב נוסעים בזמן - י\"ז בתמוז",
    subtitle: "איך הופכים מערך שיעור לחוויה שילדים מרגישים שהם באמת נכנסים אליה?",
    tags: ["Educational Animation", "Creative Direction", "World Building"],
    video: `${BASE}/hero.mp4`,
    poster: `${BASE}/hero-poster.jpg`,
  },

  openingQuote: [
    "המסע בזמן הוא לא הרעיון המרכזי.",
    "הוא הכלי שמחבר ילדים של היום, לירושלים של פעם.",
  ],

  blocks: [
    {
      type: "text",
      title: "נקודת הפתיחה",
      paragraphs: [
        "הפרויקט הזה לא התחיל אצלי.",
        "מערך השיעור על י\"ז בתמוז כבר היה קיים.",
        "גם רייצ'ל ודייב כבר היו קיימים — בגרסה בסיסית מאוד, קרובה יותר לאיור מאשר לדמויות שאפשר להאמין בהן.",
        "הארגון נתן לי חופש יצירתי מלא ולא התערב בהחלטות היצירתיות.",
      ],
    },

    {
      type: "text",
      title: "מה היה התפקיד שלי",
      paragraphs: [
        "המשימה שלי הייתה לתרגם את מערך השיעור לשפה ויזואלית.",
        "לא לשנות את המסר.",
        "לא להמציא רעיון חדש.",
        "אלא להפוך רעיון חינוכי לחוויה קולנועית.",
      ],
    },

    {
      type: "text",
      title: "תהליך החשיבה",
      paragraphs: [
        "השלב הראשון לא היה עיצוב.",
        "הוא היה כתיבת התסריט.",
        "רציתי להבין איך רעיון כמעט מופשט קורם עור וגידים על המסך.",
        "איך ילד לא רק ילמד על ירושלים של ימי הבית השני, אלא ירגיש שהוא באמת נמצא בה.",
      ],
    },

    {
      type: "text",
      title: "המסע בזמן",
      paragraphs: [
        "במקום להסביר את ההיסטוריה, רציתי לתת לילדים לבקר בה.",
      ],
    },

    {
      type: "text",
      title: "בניית ירושלים",
      paragraphs: [
        "היה חשוב לי שהעיר לא תרגיש כמו שחזור היסטורי.",
        "רציתי לבנות עיר שחיים בה.",
        "לראות את החומות. לראות את בית המקדש מרחוק.",
        "אבל לא פחות חשוב — לראות את הרחובות, האנשים, השוק והילדים.",
        "רק כשמרגישים את החיים שבתוך העיר, אפשר להבין על מה החומות שמרו.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/scene-temple-arrival.jpg`,
      alt: "רייצ'ל ודייב עומדים יד ביד מול חומות ירושלים ובית המקדש, מוארים באור שקיעה",
      caption: "הרגע שבו העיר ובית המקדש נגלים לראשונה",
    },
    {
      type: "image",
      src: `${BASE}/scene-city-gate.jpg`,
      alt: "רייצ'ל ודייב בפתח שער העיר, מביטים לאורך רחוב שוק סואן לעבר בית המקדש",
    },
    {
      type: "image",
      src: `${BASE}/scene-market-artisan.jpg`,
      alt: "רייצ'ל ודייב צופים באומן נחושת עובד בשוק, קדר ליד עובד בגלגל חרס",
      caption: "הרחובות, האנשים והשוק — לא רק החומות",
    },
    {
      type: "image",
      src: `${BASE}/scene-destruction.jpg`,
      alt: "רייצ'ל ודייב מביטים מבעד לפרצה בחומה על עיר בכאוס, אבק ורסיסים באוויר, המונים נמלטים",
      caption: "י\"ז בתמוז: הרגע שהחומות נפרצו",
    },
    {
      type: "image",
      src: `${BASE}/scene-ruins.jpg`,
      alt: "רייצ'ל ודייב עומדים מוטרדים בין הריסות, עשן עולה מהעיר ברקע",
      caption: "השקט שאחרי",
    },

    {
      type: "text",
      title: "רייצ'ל ודייב",
      paragraphs: [
        "אחת המטרות הייתה לקחת את הגרסאות הראשוניות של רייצ'ל ודייב ולהעניק להן עומק ונוכחות.",
        "לא להמציא אותן מחדש, אלא להפוך אותן לדמויות שמסוגלות להוביל את הצופה דרך הסיפור, ולהרגיש טבעיות בתוך העולם שנבנה.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/character-board.jpg`,
      alt: "לוח דמויות מלא של רייצ'ל ודייב — זוויות, תווי פנים וגוף מכל הכיוונים",
    },

    {
      type: "text",
      title: "הרגע שבו הבנתי שזה עובד",
      paragraphs: [
        "הרגע הזה לא היה דרמטי.",
        "זה היה כשהילדים משחקים כדורגל ברחובות ירושלים.",
        "באותו רגע העיר הפסיקה להיות תפאורה.",
        "היא הפכה למקום שחיים בו.",
      ],
    },
    {
      type: "image",
      src: `${BASE}/scene-kids-playing.jpg`,
      alt: "רייצ'ל ודייב צופים בילדי העיר משחקים כדור ברחוב השוק, אור שמש חודר מבין האוהלים",
    },
  ],

  film: {
    title: "הסרט",
    // TODO: set youtubeId once the real upload is live — it'll take
    // priority over `video` automatically. `video` is a temporary stand-in
    // (looping intro clip + the real theme song) until then.
    video: `${BASE}/film-preview.mp4`,
    poster: `${BASE}/film-poster.jpg`,
  },

  reflection: {
    title: "היקף הפרויקט",
    paragraphs: [
      "לאחר השלמת הגרסה העברית, הסרט הותאם לחמש שפות נוספות.",
      "התהליך כלל התאמת קריינות, קצב ועריכה לכל שפה — תוך שמירה על אותה חוויה בכל גרסה.",
      "אותה עיר. אותם ילדים. שש שפות שונות.",
    ],
  },

  credits: [
    { role: "תוכן חינוכי ויוזמה", name: "עולם שלם" },
    {
      role: "בימוי · תסריט · בניית עולם · עריכה",
      name: "נתנאל לייפר",
    },
  ],

  cta: {
    title: "יש לכם סיפור ששווה לספר?",
    text: "כל סרט מתחיל בהקשבה. בואו נבנה יחד את העולם שמתאים לסיפור שלכם.",
    buttonLabel: "דברו איתי",
  },
};

export default caseStudy;
