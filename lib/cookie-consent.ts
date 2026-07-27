/** Shared between the consent banner and the analytics gate: the banner
 *  writes the flag and fires the event; the gate reads/listens for both so
 *  analytics can start immediately after acceptance, without a reload. */
export const COOKIE_CONSENT_KEY = "laifer-studio-cookie-consent";
export const COOKIE_CONSENT_EVENT = "laifer-studio-cookie-consent-accepted";
