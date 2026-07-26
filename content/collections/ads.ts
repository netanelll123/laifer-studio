import type { Ad } from "@/content/types";

/**
 * Short commercial/ad spots — a lighter-weight showcase section than the
 * main featured projects. Text is localized via `ads.items.<slug>` in the
 * message catalogs; media lives in `public/commercials/`.
 */
export const ads: Ad[] = [
  {
    slug: "instant-coffee",
    poster: "/commercials/instant-coffee-poster.jpg",
    video: "/commercials/instant-coffee.mp4",
  },
  {
    slug: "lemon-waffle",
    poster: "/commercials/lemon-waffle-poster.jpg",
    video: "/commercials/lemon-waffle.mp4",
  },
];
