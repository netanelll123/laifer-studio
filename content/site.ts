/** Global, non-localized site configuration. */
export const siteConfig = {
  /** Canonical production URL — used for metadata, OG and sitemap. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://laifer-studio.vercel.app",
  ogImage: "/images/og.svg",
  person: {
    name: "Netanel Laifer",
    email: "netanelll123@gmail.com",
    jobTitle: "Creative Director & Storyteller",
    wikipedia:
      "https://he.wikipedia.org/wiki/%D7%A0%D7%AA%D7%A0%D7%90%D7%9C_%D7%9C%D7%99%D7%99%D7%A4%D7%A8",
    /** International format, no symbols — required by the wa.me link scheme. */
    whatsapp: "972507200495",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Vimeo", href: "https://vimeo.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
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

/** Nav items rendered in the header (label keys resolve against `nav.*`). */
export const navItems = [
  { key: "work", href: `#${sectionIds.work}` },
  { key: "about", href: `#${sectionIds.about}` },
  { key: "services", href: `#${sectionIds.services}` },
  { key: "process", href: `#${sectionIds.process}` },
  { key: "testimonials", href: `#${sectionIds.testimonials}` },
  { key: "contact", href: `#${sectionIds.contact}` },
] as const;
