"use client";

import { useSyncExternalStore } from "react";
import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY } from "@/lib/cookie-consent";

function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

// Assume not yet accepted on the server, same convention as
// `usePrefersReducedMotion`'s safe SSR default.
function getServerSnapshot() {
  return false;
}

/** Tracks cookie-consent acceptance via `useSyncExternalStore`, same pattern
 *  as `usePrefersReducedMotion` — reacts to the banner's accept click (a
 *  custom event, same tab) or acceptance in another tab (`storage`). */
export function useCookieConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
