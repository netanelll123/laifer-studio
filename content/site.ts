/** Global, non-localized site configuration. */
export const siteConfig = {
  /** Canonical production URL — used for metadata, OG and sitemap. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://laifer.studio",
  // PNG, not SVG — WhatsApp/Facebook/LinkedIn crawlers don't reliably render
  // SVG for og:image. Source design kept at images/og.svg for future edits.
  ogImage: "/images/og.png",
  person: {
    name: "Netanel Laifer",
    email: "netanelll123@gmail.com",
    jobTitle: "Creative Director & Storyteller",
    wikipedia:
      "https://he.wikipedia.org/wiki/%D7%A0%D7%AA%D7%A0%D7%90%D7%9C_%D7%9C%D7%99%D7%99%D7%A4%D7%A8",
    /** International format, no symbols — required by the wa.me link scheme. */
    whatsapp: "972507200495",
  },
  // Real profile URLs only — no placeholder/generic homepage links.
  social: [
    { label: "Facebook", href: "https://www.facebook.com/netanel.laifer" },
    { label: "Instagram", href: "https://www.instagram.com/netanellaifer/" },
    { label: "TikTok", href: "https://www.tiktok.com/@netanellaifer" },
    { label: "YouTube", href: "https://www.youtube.com/@netanelll123" },
  ] as { label: string; href: string }[],
} as const;

/** In-page section anchors, shared by nav links and section elements. */
export const sectionIds = {
  hero: "hero",
  work: "work",
  about: "about",
  services: "services",
  process: "process",
  testimonials: "testimonials",
  contact: "contact",
} as const;

/** Nav items rendered in the header (label keys resolve against `nav.*`).
 *  "testimonials" omitted while that section is hidden — see app/[locale]/page.tsx. */
export const navItems = [
  { key: "work", href: `#${sectionIds.work}` },
  { key: "about", href: `#${sectionIds.about}` },
  { key: "services", href: `#${sectionIds.services}` },
  { key: "process", href: `#${sectionIds.process}` },
  { key: "contact", href: `#${sectionIds.contact}` },
] as const;
