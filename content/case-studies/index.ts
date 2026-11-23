import type { CaseStudy } from "@/content/types";
import type { Locale } from "@/i18n/routing";

/**
 * Registry of case studies. Adding a future one is purely additive: create
 * `<slug>.he.ts` / `<slug>.en.ts` next to this file (same shape as
 * `od-yishama.*.ts`), then add one entry below — no component or route
 * changes needed.
 *
 * Set `unlisted: true` for a page that should stay reachable by direct URL
 * (so it can be shared privately) but must not appear in the public
 * portfolio grid, sitemap, or JSON-LD lists.
 */
type CaseStudyEntry = {
  unlisted?: boolean;
} & Record<Locale, () => Promise<{ default: CaseStudy }>>;

const loaders: Record<string, CaseStudyEntry> = {
  "od-yishama": {
    he: () => import("./od-yishama.he"),
    en: () => import("./od-yishama.en"),
  },
  "avir-mevorach": {
    he: () => import("./avir-mevorach.he"),
    en: () => import("./avir-mevorach.en"),
  },
  "jerusalem-walls": {
    he: () => import("./jerusalem-walls.he"),
    en: () => import("./jerusalem-walls.en"),
  },
  "instant-coffee": {
    unlisted: true,
    he: () => import("./instant-coffee.he"),
    en: () => import("./instant-coffee.en"),
  },
  hashiveinu: {
    he: () => import("./hashiveinu.he"),
    en: () => import("./hashiveinu.en"),
  },
  mellifant: {
    he: () => import("./mellifant.he"),
    en: () => import("./mellifant.en"),
  },
  "lemon-waffle": {
    unlisted: true,
    he: () => import("./lemon-waffle.he"),
    en: () => import("./lemon-waffle.en"),
  },
};

/** Every case-study slug, including unlisted pages (used to generate routes). */
export function getCaseStudySlugs(): string[] {
  return Object.keys(loaders);
}

/** Case studies that may appear in the sitemap and other public listings. */
export function getListedCaseStudySlugs(): string[] {
  return Object.entries(loaders)
    .filter(([, entry]) => !entry.unlisted)
    .map(([slug]) => slug);
}

export function isUnlistedCaseStudy(slug: string): boolean {
  return Boolean(loaders[slug]?.unlisted);
}

export async function getCaseStudy(
  slug: string,
  locale: Locale
): Promise<CaseStudy | null> {
  const entry = loaders[slug];
  const loader = entry?.[locale];
  if (!loader) return null;
  const mod = await loader();
  return { ...mod.default, unlisted: Boolean(entry.unlisted || mod.default.unlisted) };
}
