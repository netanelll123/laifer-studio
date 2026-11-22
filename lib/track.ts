/**
 * Lead tracking for GA4. `generate_lead` is a GA4 recommended event, so it can
 * be marked as a key event in GA without custom setup. `method` tells the
 * channels apart (form / whatsapp / email).
 *
 * GA only loads after cookie consent (see `AnalyticsGate`), so without consent
 * `window.gtag` is undefined and this is a silent no-op.
 */
type LeadMethod = "form" | "whatsapp" | "email";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLead(method: LeadMethod) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", {
    method,
    // Outbound clicks open a new tab / mail app; beacon keeps the hit alive.
    transport_type: "beacon",
  });
}
