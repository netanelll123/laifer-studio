"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

// Google Analytics 4. Gated on cookie consent (and production only, see
// caller) so analytics cookies are never set before the visitor agrees.
const GA_MEASUREMENT_ID = "G-8C7N5K8F14";

// Microsoft Clarity (heatmaps/session recordings). No official Next.js
// package exists for it, so this uses Clarity's own official loader snippet
// via next/script — same consent gating as GA above.
const CLARITY_PROJECT_ID = "xrghc574zg";

/** Loads GA4 + Clarity only after the visitor accepts the cookie banner
 *  (`CookieConsent`) — either because they already had, or the moment they
 *  click accept, via the shared window event (no reload needed). */
export function AnalyticsGate() {
  const enabled = useCookieConsent();

  if (!enabled) return null;

  return (
    <>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
      </Script>
    </>
  );
}
