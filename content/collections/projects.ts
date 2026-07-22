import type { Project } from "@/content/types";

/**
 * Featured projects (exactly three). Text is localized via `projects.items.<slug>`
 * in the message catalogs; media lives in `public/projects/`.
 *
 * `video` (hover preview) is set only when a real clip exists — otherwise the
 * card just shows the poster with a subtle zoom. `url` links the card out to the
 * full piece until dedicated case-study pages are built.
 */
export const projects: Project[] = [
  {
    slug: "balkan-wedding",
    poster: "/projects/balkan-wedding.svg",
  },
  {
    slug: "air-mevorach",
    poster: "/projects/air-mevorach.jpg",
    url: "https://www.youtube.com/watch?v=btAk8xtC0eo",
  },
  {
    slug: "jerusalem-walls",
    poster: "/projects/jerusalem-walls.svg",
  },
];
