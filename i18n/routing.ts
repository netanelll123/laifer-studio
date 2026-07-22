import { defineRouting } from "next-intl/routing";

/**
 * Central i18n routing config. Hebrew is the default locale (RTL); English is
 * secondary (LTR). `localePrefix: "always"` keeps URLs explicit (`/he`, `/en`).
 */
export const routing = defineRouting({
  locales: ["he", "en"],
  defaultLocale: "he",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

/** Text direction per locale — consumed by the root layout and RTL-aware UI. */
export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  he: "rtl",
  en: "ltr",
};
