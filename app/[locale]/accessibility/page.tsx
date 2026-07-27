import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/content/site";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import {
  LegalIntro,
  LegalSection,
  LegalList,
  type LegalSectionContent,
} from "@/components/legal/legal-page";

type Params = { locale: Locale };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "accessibility" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const url = `/${locale}/accessibility`;
  const otherLocale = routing.locales.find((l) => l !== locale);

  return {
    title: t("title"),
    description: t("intro"),
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, `/${l}/accessibility`])
        ),
        "x-default": `/${routing.defaultLocale}/accessibility`,
      },
    },
    openGraph: {
      type: "website",
      locale,
      alternateLocale: otherLocale,
      url,
      title: t("title"),
      description: t("intro"),
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: tMeta("ogAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("intro"),
      images: [siteConfig.ogImage],
    },
  };
}

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "accessibility" });
  const sections = t.raw("sections") as LegalSectionContent[];

  return (
    <>
      <Header />
      <main id="main-content" className="overflow-hidden">
        <section className="section-padding">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <LegalIntro
              eyebrow={t("eyebrow")}
              title={t("title")}
              intro={t("intro")}
            />

            {sections.map((section, i) => (
              <LegalSection key={i} title={section.title}>
                {section.list ? (
                  <LegalList items={section.list} />
                ) : (
                  <p>{section.paragraph}</p>
                )}
              </LegalSection>
            ))}

            <LegalSection title={t("contactTitle")}>
              <p>{t("contact")}</p>
              <a
                href={`mailto:${siteConfig.person.email}`}
                className="mt-2 inline-block text-sm font-medium text-foreground transition-colors duration-300 ease-cinematic hover:text-accent"
              >
                {siteConfig.person.email}
              </a>
            </LegalSection>

            <p className="mt-12 text-sm text-muted-foreground">
              {t("lastUpdated")}: {t("lastUpdatedDate")}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              {t("disclaimer")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
