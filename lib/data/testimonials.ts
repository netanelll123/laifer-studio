import type { Testimonial } from "@/types";

/**
 * Client testimonials. Quote/name/role localized via `testimonials.items.<slug>`.
 * Add an `avatar` path (in `public/images/`) or, later, a video source per item.
 */
export const testimonials: Testimonial[] = [
  { slug: "t1" },
  { slug: "t2" },
  { slug: "t3" },
];
