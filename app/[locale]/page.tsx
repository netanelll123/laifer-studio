import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
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
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
