"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY } from "@/lib/cookie-consent";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

/** Bottom consent bar for analytics cookies (GA4 + Clarity). Accepting
 *  writes localStorage and fires a window event so `AnalyticsGate` can start
 *  loading immediately, without a page reload. Shown until accepted — there's
 *  no reject/decline action since the only cookies in play are analytics,
 *  not anything essential-vs-optional to negotiate. */
export function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const locale = useLocale();
  const accepted = useCookieConsent();

  const accept = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
  };

  if (accepted) return null;

  return (
    <div
      role="region"
      aria-label={t("title")}
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-border bg-background/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-muted-foreground">
          {t("message")}{" "}
          <a
            href={`/${locale}/privacy`}
            className="text-foreground underline underline-offset-4 transition-colors duration-300 ease-cinematic hover:text-accent"
          >
            {t("policyLinkLabel")}
          </a>
        </p>
        <Button size="sm" onClick={accept} className="shrink-0">
          {t("acceptLabel")}
        </Button>
      </div>
    </div>
  );
}
