import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getCaseStudy, getCaseStudySlugs } from "@/content/case-studies";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig, sectionIds } from "@/content/site";
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

  const description = study.hero.subtitle;
  const url = `/${locale}/work/${slug}`;
  const otherLocale = routing.locales.find((l) => l !== locale);

  return {
    title: `${study.hero.title} — ${siteConfig.person.name}`,
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

  // CreativeWork (not the stricter VideoObject) since we have no verified
  // publish date to report — only reuses fields already in the content.
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.hero.title,
    description: study.hero.subtitle,
    image: `${siteConfig.url}${study.hero.poster}`,
    url: `${siteConfig.url}/${locale}/work/${slug}`,
    creator: study.credits.map((credit) => ({
      "@type": "Person",
      name: credit.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <Header />
      <main id="main-content" className="overflow-hidden">
        <CaseStudyHero hero={study.hero} />

        <div className="flex flex-col gap-20 py-20 sm:gap-28 sm:py-28">
          <CaseStudyQuote lines={study.openingQuote} />
          <CaseStudyBody blocks={study.blocks} />
          <CaseStudyVideoEmbed film={study.film} poster={study.hero.poster} />
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
