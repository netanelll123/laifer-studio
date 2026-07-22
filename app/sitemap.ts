import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/content/site";
import { getCaseStudySlugs } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const languageAlternates = (path: string) => ({
    languages: Object.fromEntries(
      routing.locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])
    ),
  });

  const homeEntries: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: languageAlternates(""),
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = getCaseStudySlugs().flatMap(
    (slug) =>
      routing.locales.map((locale) => ({
        url: `${siteConfig.url}/${locale}/work/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: languageAlternates(`/work/${slug}`),
      }))
  );

  return [...homeEntries, ...caseStudyEntries];
}
