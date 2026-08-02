import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { sectionIds } from "@/content/site";
import { siteIds, absoluteUrl, caseStudyUrl, caseStudyId, serviceId } from "@/lib/json-ld";
import { projects } from "@/content/collections/projects";
import { services } from "@/content/collections/services";
import { getCaseStudy } from "@/content/case-studies";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { CreativeProcess } from "@/components/sections/creative-process";
import { StudioReel } from "@/components/sections/studio-reel";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "faq" });
  const faqItems = t.raw("items") as { question: string; answer: string }[];
  const faqJsonLd = {
    "@type": "FAQPage",
    // Matches the Organization node's `subjectOf` reference in the root
    // layout — same entity, same @id, on both ends of the relationship.
    // Locale-invariant like siteIds, since it's the same FAQ section
    // regardless of which language's version of it you're reading.
    "@id": siteIds.faq,
    about: { "@id": siteIds.organization },
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  // One list entry per project that has a real dedicated case-study page —
  // the title comes from that page's own content, not the shorter homepage
  // card copy, since it's the definitive name for the linked URL.
  const tProjects = await getTranslations({ locale, namespace: "projects" });
  const caseStudyProjects = projects.filter((p) => p.caseStudySlug);
  const portfolioItemListJsonLd = {
    "@type": "ItemList",
    // Locale-invariant — it's the same list of featured work either way.
    "@id": siteIds.portfolio,
    name: tProjects("title"),
    itemListElement: (
      await Promise.all(
        caseStudyProjects.map(async (project, i) => {
          const study = await getCaseStudy(project.caseStudySlug!, locale);
          // Same condition as work/[slug]/page.tsx — keep this entry's
          // @type in sync with the fuller node declared on that page, since
          // they share one @id and shouldn't disagree about what it is.
          const isPublishedVideo = Boolean(study?.film.youtubeId);
          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": isPublishedVideo ? ["CreativeWork", "VideoObject"] : "CreativeWork",
              // Locale-invariant identity, matching this work's own page
              // node (work/[slug]/page.tsx) and the WebSite's `hasPart`
              // entry — one entity, referenced consistently everywhere.
              // `url` still points at this locale's own rendering of it.
              "@id": caseStudyId(project.caseStudySlug!),
              name: study?.hero.title,
              url: caseStudyUrl(locale, project.caseStudySlug!),
              image: absoluteUrl(project.poster),
            },
          };
        })
      )
    ).filter((entry) => Boolean(entry.item.name)),
  };

  const tServices = await getTranslations({ locale, namespace: "services" });
  const servicesJsonLd = services.map((service) => ({
    "@type": "Service",
    // Locale-invariant — the offering itself doesn't change per language.
    "@id": serviceId(service.slug),
    name: tServices(`items.${service.slug}.title`),
    description: tServices(`items.${service.slug}.description`),
    url: absoluteUrl(`/${locale}#${sectionIds.services}`),
    provider: { "@id": siteIds.organization },
  }));

  const homeJsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [faqJsonLd, portfolioItemListJsonLd, ...servicesJsonLd],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLdGraph) }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <About />
        <Services />
        <CreativeProcess />
        {/* Testimonials hidden until real client quotes replace the
            placeholder names — see components/sections/testimonials.tsx */}
        <StudioReel />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
