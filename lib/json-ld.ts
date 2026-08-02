import { siteConfig } from "@/content/site";

/** Stable, locale-invariant @id anchors for entities that persist across
 *  both languages — the same person, studio, website, FAQ section and
 *  portfolio list, regardless of which locale's document you're reading.
 *  Every page that references one of these imports it from here, so no two
 *  pages ever mint a slightly different id for what is the same real-world
 *  thing. (Their translatable *properties* — name, description — still
 *  legitimately vary per locale; only the identity itself is fixed.) */
export const siteIds = {
  person: `${siteConfig.url}/#person`,
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
  faq: `${siteConfig.url}/#faq`,
  portfolio: `${siteConfig.url}/#portfolio`,
} as const;

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

/** Canonical URL of a case-study page for a given locale — used for `url`,
 *  canonical links, OG, and breadcrumb entries, where the locale-specific
 *  document address is exactly what's wanted. Not used as an `@id` (see
 *  `caseStudyId`) since the same underlying creative work has two different
 *  URLs, one per locale, and an `@id` must stay the same across both. */
export function caseStudyUrl(locale: string, slug: string): string {
  return absoluteUrl(`/${locale}/work/${slug}`);
}

/** Locale-invariant `@id` for a case-study CreativeWork — the video itself
 *  is one entity whether the page describing it is in Hebrew or English.
 *  Used by the work's own page node, the homepage ItemList entry, and the
 *  WebSite's `hasPart`, so all three resolve to one identical entity. */
export function caseStudyId(slug: string): string {
  return `${siteConfig.url}/work/${slug}#creativework`;
}

/** Locale-invariant `@id` for a Service offering — same reasoning as
 *  `caseStudyId`: the service itself doesn't change per language. */
export function serviceId(slug: string): string {
  return `${siteConfig.url}/#service-${slug}`;
}

/** BreadcrumbList for a simple Home > Page trail (legal pages, etc). Case
 *  studies build their own three-level trail inline since the middle step
 *  links to an in-page anchor rather than a route. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
