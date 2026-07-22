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
  /** Optional external link (e.g. YouTube), opened in a new tab. */
  url?: string;
  /** Optional slug of an internal case-study page (see `content/case-studies/`).
   *  Takes precedence over `url` when both are set. */
  caseStudySlug?: string;
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

/*
 * Case studies — long-form editorial articles behind a project. Unlike the
 * short, repeated strings in `content/messages/*.json`, this copy is unique
 * per page, so it lives in its own per-locale content module (see
 * `content/case-studies/`) rather than the shared message catalogs.
 *
 * `blocks` is the reusable part of the template: an ordered list of content
 * units a future case study can mix and match freely. Hero, opening quote,
 * closing film embed, reflection, credits and CTA are modeled as fixed
 * top-level fields because every case study has exactly one of each.
 */
export type CaseStudyBlock =
  | { type: "text"; title?: string; paragraphs: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "gallery";
      items: { src: string; alt: string; caption?: string }[];
    }
  /** `lines` renders as short, separately-paced dramatic statements (the
   *  brief's quotes are broken by blank lines, not single paragraphs). */
  | { type: "quote"; lines: string[] };

export interface CaseStudy {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    tags: string[];
    video: string;
    poster: string;
  };
  openingQuote: string[];
  /** The body of the article — sections 1 through 8 of the brief, in order. */
  blocks: CaseStudyBlock[];
  film: {
    title: string;
    youtubeId: string;
  };
  reflection: {
    title?: string;
    paragraphs: string[];
  };
  credits: { role: string; name: string }[];
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
  };
}
