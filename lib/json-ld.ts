import { siteConfig } from "@/content/site";

/** Stable @id anchors for the site-wide Person/Organization/WebSite graph
 *  (defined once in the root layout) — reused wherever another page's JSON-LD
 *  needs to reference one of them (e.g. a case study's `publisher`), so every
 *  reference resolves to the exact same node instead of risking a typo'd
 *  duplicate. */
export const siteIds = {
  person: `${siteConfig.url}/#person`,
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
} as const;

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
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
