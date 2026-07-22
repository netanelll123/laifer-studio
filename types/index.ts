import type { LucideIcon } from "lucide-react";

/*
 * Slugs are literal unions (not `string`) so that composed i18n keys like
 * `items.${slug}.title` resolve to real, type-checked message keys.
 */
export type ProjectSlug = "balkan-wedding" | "air-mevorach" | "jerusalem-walls";
export type ServiceSlug =
  | "music-videos"
  | "commercials"
  | "corporate"
  | "animation"
  | "voice-over"
  | "music-production";
export type ProcessSlug =
  | "listen"
  | "research"
  | "story"
  | "direction"
  | "production"
  | "delivery";
export type TestimonialSlug = "t1" | "t2" | "t3";

/** A featured portfolio piece. Text is resolved from i18n via `slug`. */
export interface Project {
  slug: ProjectSlug;
  /** Poster image shown before/behind the preview video. */
  poster: string;
  /** Optional looping preview clip revealed on hover (omit until a real clip exists). */
  video?: string;
  /** Optional external link (e.g. YouTube) opened from the card, until
   *  dedicated case-study pages exist. */
  url?: string;
}

/** A service offering. Title/description resolved from i18n via `slug`. */
export interface Service {
  slug: ServiceSlug;
  icon: LucideIcon;
}

/** A step in the creative process timeline. */
export interface ProcessStep {
  slug: ProcessSlug;
  icon: LucideIcon;
}

/** A client testimonial. Quote/name/role resolved from i18n via `slug`. */
export interface Testimonial {
  slug: TestimonialSlug;
  /** Optional avatar image. */
  avatar?: string;
}

/** Shape POSTed by the contact form (kept in sync with the Zod schema). */
export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
