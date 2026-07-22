import type { CaseStudy } from "@/content/types";
import type { Locale } from "@/i18n/routing";

/**
 * Registry of case studies. Adding a future one is purely additive: create
 * `<slug>.he.ts` / `<slug>.en.ts` next to this file (same shape as
 * `od-yishama.*.ts`), then add one entry below — no component or route
 * changes needed.
 */
const loaders: Record<
  string,
  Record<Locale, () => Promise<{ default: CaseStudy }>>
> = {
  "od-yishama": {
    he: () => import("./od-yishama.he"),
    en: () => import("./od-yishama.en"),
  },
};

export function getCaseStudySlugs(): string[] {
  return Object.keys(loaders);
}

export async function getCaseStudy(
  slug: string,
  locale: Locale
): Promise<CaseStudy | null> {
  const loader = loaders[slug]?.[locale];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
