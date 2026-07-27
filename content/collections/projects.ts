import type { Project } from "@/content/types";

/**
 * Featured work — a deliberate mix, not a music-video reel. Order matters:
 * no two pieces of the same kind (commercial / music video / animation) sit
 * back to back, so the scroll itself reads as "does many things," not "did
 * three clips, then some ads." Text is localized via `projects.items.<slug>`
 * in the message catalogs; media lives in `public/projects/`,
 * `public/case-studies/` and `public/commercials/`.
 *
 * `video` (hover preview) is set only when a real clip exists — otherwise the
 * card just shows the poster with a subtle zoom. `url` links the card out to
 * the full piece; `caseStudySlug` takes precedence when a dedicated page
 * exists, and pieces with neither open an in-page video modal instead
 * (YouTube if `youtubeId` is set, else the local `video` file).
 */
export const projects: Project[] = [
  {
    slug: "instant-coffee",
    poster: "/commercials/instant-coffee-poster.jpg",
    caseStudySlug: "instant-coffee",
  },
  {
    slug: "balkan-wedding",
    poster: "/case-studies/od-yishama/hero-poster.jpg",
    caseStudySlug: "od-yishama",
  },
  {
    slug: "lemon-waffle",
    poster: "/commercials/lemon-waffle-poster.jpg",
    video: "/commercials/lemon-waffle.mp4",
  },
  {
    slug: "jerusalem-walls",
    poster: "/case-studies/jerusalem-walls/hero-poster.jpg",
    caseStudySlug: "jerusalem-walls",
  },
  {
    slug: "air-mevorach",
    poster: "/case-studies/avir-mevorach/hero-poster.jpg",
    caseStudySlug: "avir-mevorach",
  },
];
