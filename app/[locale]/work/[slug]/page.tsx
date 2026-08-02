import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCaseStudy, getCaseStudySlugs } from "@/content/case-studies";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig, sectionIds } from "@/content/site";
import { siteIds, absoluteUrl, caseStudyUrl } from "@/lib/json-ld";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { CaseStudyHero } from "@/components/case-study/hero";
import { CaseStudyQuote } from "@/components/case-study/quote";
import { CaseStudyBody } from "@/components/case-study/body";
import { CaseStudyVideoEmbed } from "@/components/case-study/video-embed";
import { CaseStudySectionText } from "@/components/case-study/section-text";
import { CaseStudyCredits } from "@/components/case-study/credits";
import { CaseStudyCta } from "@/components/case-study/cta";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getCaseStudySlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const study = await getCaseStudy(slug, locale);
  if (!study) return {};

  const t = await getTranslations({ locale, namespace: "metadata" });
  const description = study.hero.subtitle;
  const url = `/${locale}/work/${slug}`;
  const otherLocale = routing.locales.find((l) => l !== locale);

  return {
    title: `${study.hero.title} — ${t("personName")}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, `/${l}/work/${slug}`])
        ),
        "x-default": `/${routing.defaultLocale}/work/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale,
      alternateLocale: otherLocale,
      url,
      title: study.hero.title,
      description,
      images: [
        { url: study.hero.poster, width: 1920, height: 1200, alt: study.hero.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.hero.title,
      description,
      images: [study.hero.poster],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const study = await getCaseStudy(slug, locale);
  if (!study) notFound();

  const contactHref = `/${locale}#${sectionIds.contact}`;

  // CreativeWork covers every case study uniformly. Pages whose film embed
  // is a real, published YouTube upload (not the temporary local stand-in
  // some case studies use until the real edit is live) also get VideoObject
  // merged into the same node's @type — one entity describing one page,
  // rather than a second, overlapping schema block. `uploadDate` is a
  // recommended (not required) VideoObject field and is deliberately
  // omitted since we have no verified date to report.
  const isPublishedVideo = Boolean(study.film.youtubeId);
  const pageUrl = caseStudyUrl(locale, slug);

  // Credits list Netanel by his localized display name (metadata.personName)
  // alongside collaborators. Matching that exact string lets his own credit
  // resolve to the site's one canonical Person node instead of being
  // restated as a second, anonymous "Netanel Laifer" entity.
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const personName = tMeta("personName");

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": isPublishedVideo ? ["CreativeWork", "VideoObject"] : "CreativeWork",
    "@id": pageUrl,
    name: study.hero.title,
    description: study.hero.subtitle,
    image: absoluteUrl(study.hero.poster),
    url: pageUrl,
    creator: study.credits.map((credit) =>
      credit.name === personName
        ? { "@id": siteIds.person }
        : { "@type": "Person", name: credit.name }
    ),
    publisher: { "@id": siteIds.organization },
    isPartOf: { "@id": siteIds.website },
    ...(isPublishedVideo
      ? {
          thumbnailUrl: absoluteUrl(study.film.poster),
          embedUrl: `https://www.youtube-nocookie.com/embed/${study.film.youtubeId}`,
          contentUrl: `https://www.youtube.com/watch?v=${study.film.youtubeId}`,
        }
      : {}),
  };

  const tNav = await getTranslations({ locale, namespace: "nav" });
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: tNav("brand"),
        item: `${siteConfig.url}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tNav("work"),
        item: `${siteConfig.url}/${locale}#${sectionIds.work}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.hero.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main id="main-content" className="overflow-hidden">
        <CaseStudyHero hero={study.hero} />

        <div className="flex flex-col gap-20 py-20 sm:gap-28 sm:py-28">
          <CaseStudyQuote lines={study.openingQuote} />
          <CaseStudyBody blocks={study.blocks} />
          <CaseStudyVideoEmbed film={study.film} />
          <CaseStudySectionText
            title={study.reflection.title}
            paragraphs={study.reflection.paragraphs}
          />
          <CaseStudyCredits credits={study.credits} />
          <CaseStudyCta cta={study.cta} href={contactHref} />
        </div>
      </main>
      <Footer />
    </>
  );
}
