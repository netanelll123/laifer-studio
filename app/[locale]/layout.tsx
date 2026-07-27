import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
import { Toaster } from "sonner";
import { routing, localeDirection, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/content/site";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { AnalyticsGate } from "@/components/analytics-gate";
import { CookieConsent } from "@/components/cookie-consent";
import "../globals.css";

// Display serif + body sans, each covering Hebrew and Latin for full bilingual support.
const display = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const otherLocale = routing.locales.find((l) => l !== locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: { he: "/he", en: "/en", "x-default": `/${routing.defaultLocale}` },
    },
    openGraph: {
      type: "website",
      locale,
      alternateLocale: otherLocale,
      url: `/${locale}`,
      title: t("title"),
      description: t("description"),
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: t("ogAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [siteConfig.ogImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering for this locale.
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const personId = `${siteConfig.url}/#person`;
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  // Only include sameAs once real profile URLs exist — an empty array would
  // otherwise fabricate "verified" social presence that isn't there yet.
  const sameAs = siteConfig.social.map((s) => s.href);

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.person.name,
        jobTitle: siteConfig.person.jobTitle,
        email: siteConfig.person.email,
        url: siteConfig.url,
        description: t("description"),
        worksFor: { "@id": organizationId },
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: tNav("brand"),
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo-full.png`,
        founder: { "@id": personId },
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: tNav("brand"),
        url: siteConfig.url,
        inLanguage: routing.locales,
        publisher: { "@id": organizationId },
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={localeDirection[locale as Locale]}
      className={`${display.variable} ${body.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          {tCommon("skipToContent")}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <NextIntlClientProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <CookieConsent />
          <Toaster
            position="top-center"
            theme="dark"
            toastOptions={{
              style: {
                background: "#131315",
                border: "1px solid rgba(244,242,238,0.1)",
                color: "#f4f2ee",
              },
            }}
          />
        </NextIntlClientProvider>
        {process.env.NODE_ENV === "production" && <AnalyticsGate />}
      </body>
    </html>
  );
}
