# PROJECT_MEMORY.md

Permanent knowledge base for **Leifer Studio**. This file is not documentation for humans (that's `content/README.md`) and not build instructions (that's `CLAUDE.md`) — it is the *why* behind decisions, so a future session (human or Claude) doesn't relitigate settled questions or drift from established conventions.

**Maintenance rule:** when a new important decision is made, update the relevant section in place. Don't append a dated log entry — rewrite the section so it reflects current reality. Delete anything superseded. If a section grows past what's useful, tighten it rather than letting it sprawl.

---

## Project Overview

Leifer Studio is the premium, cinematic single-page portfolio of **Netanel Laifer** — Creative Director / Cinematic Storyteller / AI Filmmaker, with a 20-year background in music journalism (discovering artists and hits). Bilingual: Hebrew (RTL) is the default locale, English (LTR) secondary. Production at `laifer.studio`, deployed on Vercel, repo `netanelll123/laifer-studio`.

No DB, no CMS, no auth. Static generation for both locales plus one Route Handler (contact form proxy). Full build/architecture reference lives in `CLAUDE.md` — read that first for commands, stack, and file layout. This document covers decisions and philosophy that `CLAUDE.md` doesn't.

## Brand Positioning

**Not an AI agency.** AI is the tool; storytelling is the product. Never let a section, headline, or case study frame AI capability itself as the achievement — the achievement is always the creative/strategic outcome.

**Not a music-video specialist, even though music videos are most of the visible work.** The real positioning: Netanel is someone who reads a market and understands an audience — proven over 20 years in music (discovering artists and hits) — and that same skill applies to any field (weddings, commercials, corporate, brand films). This is why:
- The homepage's `FeaturedProjects` list deliberately interleaves project types (no two of the same kind back-to-back) instead of grouping music videos first — see the comment in `content/collections/projects.ts`.
- The old, visually-lightweight standalone "Ad Work" section was dissolved entirely and merged into one unified `FeaturedProjects` list, specifically so visitors don't land on three clip-works before seeing anything else.
- Hero/About copy leads with the audience-reading skill, not with "20 years in music" as the headline claim.

## Target Audience

Clients commissioning music videos, commercials, corporate/brand films, and nonprofit/organizational films — primarily Hebrew-speaking (Israel), with an English version for international reach. Visitors are assumed to skim for proof (real credits, real stills, real process) over marketing claims.

## Tone of Voice

- First-person, confident, editorial — not agency-speak, not defensive.
- Hebrew copy uses **plural imperative/possessive forms** ("בואו", "שלכם") when addressing "you" collectively as the site's visitors — not the masculine-singular "בוא"/"שלך". Exception: contact-form field placeholders stay singular (they address the one person filling the form directly, not a collective "you").
- No invented metrics, credentials, certifications, or compliance claims. If a number/certification isn't independently verifiable, it doesn't go on the site.
- Service/process copy is framed as creative process, not a deliverables checklist.
- Legal/policy pages (accessibility, privacy) should read as confident and service-oriented, not defensive boilerplate — but never claim more compliance than is actually true.

## Writing Principles

- All user-facing text lives in `content/messages/{he,en}.json`, kept in sync across both locales. Never hardcode copy in `.tsx` files.
- Case studies are long-form and unique per project, so they live as their own per-locale TS modules (`content/case-studies/*.{he,en}.ts`) rather than the shared message catalogs.
- When a project is a **non-commissioned / spec / independent** piece (e.g. the Elite Instant Coffee case study), that must be disclosed clearly and prominently near the top — not buried in small print — in at least the hero tags, hero subtitle, and the case study's first body block. No ambiguity about who commissioned what.
- Grammar/agreement fixes get applied precisely to the noun/verb in question, not swept broadly — e.g. "שלכם" was corrected only where it agrees with a plural verb already in the same sentence, not globally.

## Design Philosophy

Single committed **dark cinematic** aesthetic — not a light/dark toggle. Warm, restrained gold accent (`--color-accent: #c2a06a`), never loud. Tokens defined once in `app/globals.css` via Tailwind v4 `@theme`.

Allowed motion feel: **fade, reveal, scale, mask, parallax** — smooth and restrained. Forbidden: bounce, spin, elastic, anything heavy. One easing curve site-wide (`--ease-cinematic`, `cubic-bezier(0.16, 1, 0.3, 1)`), referenced via the `ease-cinematic` Tailwind utility or `lib/motion.ts`'s `transitions.base`/`transitions.slow` — never a repeated raw `cubic-bezier(...)` inline. Duration scale: 300ms (micro/hover), 500ms (cards, chrome, crossfades), 700ms (larger movement); the hero's Ken Burns pan (1500ms/6000ms) is a deliberate, documented exception to this scale.

This is a polish/refinement project, not a redesign track — changes should read as sharpening the existing premium/editorial language, not replacing it, unless a redesign is explicitly requested.

## UI / UX Principles

- RTL-aware layout throughout: logical properties (`ms-`/`me-`/`ps-`/`pe-`, `start`/`end`) preferred over `left`/`right`.
- No inline styles for layout — Tailwind utilities only; the rare `style={}` is reserved for dynamic gradients.
- Every animated path is gated by `usePrefersReducedMotion()` (defaults to reduced/calm on SSR); the `<Reveal>` wrapper renders statically under reduced motion.
- CSS-only transitions (hover states, header chrome) share the same `ease-cinematic` token as JS-driven motion — one motion language across both.
- A visible "who's speaking" cue matters: the Hero's circular byline photo exists specifically so first-person copy has a face attached to it, not just anonymous text — keep it legible-sized, not token-sized.
- Native HTML elements over JS-driven widgets when they do the job: the FAQ accordion uses `<details>/<summary>` (keyboard/screen-reader accessible by default, keeps the section a Server Component) rather than a client-side disclosure component.

## Technical Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 (CSS-based `@theme`, no config file) · next-intl 4 (`he` default, `en` secondary, `localePrefix: "always"`) · Motion (`motion/react`) + Lenis smooth scroll · React Hook Form + Zod · shadcn-style UI primitives · Sonner toasts. Deploy target: Vercel. No DB/CMS/auth.

Full command reference, env vars, and file-layout map live in `CLAUDE.md` — do not duplicate that here; update `CLAUDE.md` when the stack itself changes.

Notable version-driven deltas from older Next.js knowledge: middleware is now **Proxy** (`proxy.ts`), route `params` are async (`await params`), Tailwind is v4 (no `tailwind.config.js`).

## Component Conventions

- **Server-first.** Sections are Server Components using `useTranslations` by default. `"use client"` is reserved for interactivity/animation only: `header`, `hero`, `featured-projects`, `contact-form`, `language-toggle`, plus the shared `reveal` / `video-background` / `smooth-scroll-provider`.
- **`lib/` is code, never content.** `lib/motion.ts` (shared motion vocabulary), `lib/utils.ts` (`cn()`), `lib/validations/contact.ts` (Zod schema).
- **Client-only browser-state hooks use `useSyncExternalStore`**, not `useState`+`useEffect` — established via `usePrefersReducedMotion()` and `useCookieConsent()`, both with a safe SSR default (reduced-motion defaults `true`/reduced; consent defaults `false`/not-yet-consented). Reuse this pattern for any future hook reading external/browser state — it also avoids the `react-hooks/set-state-in-effect` lint error.
- **`next/image` everywhere.** `fill` + `sizes` for container-driven images; `priority` reserved strictly for each page's own single LCP-critical image (don't add it speculatively); `unoptimized` only for decorative SVGs (e.g. homepage Ken Burns frames) that don't benefit from Next's image pipeline.
- **`VideoModal`** (`components/video-modal.tsx`) accepts either `youtubeId` (nocookie embed) or `videoSrc` (local file, sized by natural aspect ratio) — reused wherever a portfolio piece needs an in-page video without a full case-study page.
- **`ProjectCard`** resolves its behavior from what data a `Project` entry actually has, in priority order: `caseStudySlug` (navigates in-site) → `youtubeId` (opens modal, nocookie) → local `video` with no case study (opens modal, local file) → plain poster. Adding a new project is purely a data change in `content/collections/projects.ts` — no component changes needed for any of these paths.
- Use `i18n/navigation.ts`'s locale-aware `Link`/`useRouter`/`usePathname` — never `next/link`/`next/navigation` directly.

## Case Study Structure

Defined by the `CaseStudy` type in `content/types.ts`. Fixed shape every case study follows: `hero` (title/subtitle/tags/video/poster) → `openingQuote` → `blocks` (ordered mix of `text`/`image`/`gallery`/`quote` units — free-form body) → `film` (the closing video embed, its own poster distinct from the hero's) → `reflection` → `credits` → `cta`.

Adding a new case study is purely additive: create `<slug>.he.ts` + `<slug>.en.ts` in `content/case-studies/`, register both loaders in `content/case-studies/index.ts`. No route or component changes required.

`film.youtubeId` is omitted until a real YouTube upload exists; a local `film.video` stand-in is used in the meantime and is automatically superseded once `youtubeId` is set (YouTube takes priority when both are present).

For spec/independent (non-commissioned) work, the disclosure requirement in **Writing Principles** applies non-negotiably to the case study's hero tags and first body block.

## SEO Decisions

- **Structured data lives in `lib/json-ld.ts` + inline `<script type="application/ld+json">` per page**, not a single monolithic schema. `siteIds` (person/organization/website `@id` anchors) is the single source of truth for cross-document references — any page that needs to point at the Organization/Person/WebSite node imports `siteIds` rather than re-deriving the `#anchor` string. `breadcrumbJsonLd()` covers the simple Home > Page trail (legal pages); case studies build their own three-level trail inline since the middle step links to an in-page anchor, not a route.
- **Root layout `@graph`**: `Person` (with `image`, `knowsAbout` derived from the real Services list, `sameAs`) + `Organization` (with `contactPoint`, `logo`) + `WebSite` (no `SearchAction` — the site has no internal search, so a sitelinks searchbox would be false advertising). Deliberately **not** `LocalBusiness`/`ProfessionalService` — there's no public physical address or service-area claim anywhere in the copy, and inventing one to unlock LocalBusiness rich results would be exactly the kind of fabricated claim this project avoids.
- **Case study pages**: `CreativeWork` is the baseline type for every one. Pages whose `film.youtubeId` is a real, published upload (currently `od-yishama`, `avir-mevorach`) get `VideoObject` merged into the *same* node via `"@type": ["CreativeWork", "VideoObject"]` — one entity, two types — rather than a second overlapping schema block. `uploadDate` is deliberately omitted (recommended, not required, and we have no verified date). Case studies whose `film` is only a temporary local stand-in (`jerusalem-walls`, `instant-coffee`) stay plain `CreativeWork` — do not add `VideoObject`/`thumbnailUrl`/`embedUrl` until a real `youtubeId` exists, or the schema would describe a placeholder as if it were the finished film.
- **Homepage `@graph`** (one script, several types — not split into separate `<script>` tags): `FAQPage` (6 Q&A, source-of-truth is the `faq` message namespace, not duplicated), `ItemList` of the case-study-backed portfolio pieces (title/url/image come from each case study's own content, not the shorter homepage card copy — it's the definitive name for the linked URL; `lemon-waffle` is excluded since it has no dedicated page/URL to point at), and one `Service` entity per item in `content/collections/services.ts` (`provider` references the Organization `@id`). Note for future audits: Google's 2023 policy changes mean generic `FAQPage`/`ItemList` markup mostly won't produce a visible rich result outside specific authoritative-site or carousel-eligible categories — implemented anyway because it's valid, accurate, and genuinely useful for AI/LLM answer engines parsing the page, which was an explicit goal, not just Google's classic rich-result carousel.
- Hreflang uses **bare language codes** (`he`/`en`), not region-specific ones (`he-IL`/`en-US`) — verified against Google Search Central's own guidance, which recommends bare codes absent actual region-specific content variation. Do not "correct" this without a real content-localization-by-region reason.
- `x-default` locale choice is a deliberate tradeoff, not an oversight — don't change it without the site owner's explicit decision.
- Meta descriptions: current HE (~151 chars) and EN (~157 chars) versions were deliberately expanded from shorter drafts per an SEO audit; keep them in the 150–160 char range, not padded further.
- FAQPage JSON-LD is built server-side in `app/[locale]/page.tsx` from the `faq` message namespace and rendered via the native `<details>/<summary>` `FAQ` section — content and schema share one source of truth (the message catalog), not a separate hardcoded schema block.
- Each page's own `generateMetadata` must set its own `openGraph`/`twitter` blocks explicitly — Next.js otherwise silently inherits the **root layout's** values, which previously caused legal pages (accessibility/privacy/terms) to expose the homepage's OG title/description.

## Accessibility Decisions

- Legal baseline: Israeli Accessibility Regulations (IS 5568) formally cite **WCAG 2.0 AA**, even though IS 5568 is broadly aligned with WCAG 2.1 — the accessibility statement's wording should reflect the more cautious, legally-precise WCAG 2.0 claim, not overclaim 2.1 compliance.
- No accessibility-widget overlay (the common Israeli "תפריט נגישות" floating menu). Decision made deliberately after a cost/benefit review: not legally required, canned overlay widgets are often lower quality than the site's native accessibility work, and visually clash with the premium aesthetic. Native accessibility work (semantic landmarks, focus-visible, ARIA, reduced-motion) is the chosen approach instead.
- Global `:focus-visible` styling is handled by one rule in `app/globals.css` (`outline: 2px solid var(--color-ring)`), which covers 100% of interactive elements by default. `input`/`textarea`/`button` primitives override it with an explicit ring treatment; this is intentional layering, not a coverage gap — don't read "few explicit focus-visible classes" in an audit as a real gap without checking the cascade first.
- Decorative, word-split headline animations (mask-reveal per word) must not break the element's accessible name: wrap the real text in `aria-label` on the semantic element and mark each per-word animation span `aria-hidden="true"` (established pattern, see `hero.tsx`'s `<h1>`).
- Accessibility statement structure: intro → sections → contact (names Netanel personally, gives both email and WhatsApp) → last-updated + last-internal-review dates → forward-looking "commitment" framing (not a defensive "disclaimer").

## Performance Decisions

- `priority` on `next/image` is reserved for the actual LCP element per page — verify sitewide usage stays minimal (currently 2 legitimate uses) rather than adding it speculatively to "important-looking" images.
- Any component that branches on `usePrefersReducedMotion()` to decide *which element to render* (not just whether to animate it) must remember the hook defaults to `true` (reduced) on the server — if the "full" branch (e.g. a `<video>`) only renders post-hydration, that branch's assets are invisible to the initial HTML/LCP scan for most real users. Preferred pattern: always render the optimized `next/image` as the base layer, layer the enhancement (video) on top as a fade-in, mirroring `HeroBackground`.
- Don't chase Lighthouse score deltas without measurable real-user benefit — the standing instruction from an earlier optimization pass was to scope performance work to image delivery, LCP request discovery, and render-blocking resources, and explicitly skip speculative JS optimization.
- CSP (`next.config.ts` `headers()`) currently keeps `'unsafe-inline'` in `script-src` as a deliberate, documented tradeoff — Next's hydration payload and the Microsoft Clarity loader are inline scripts. A stricter nonce-based CSP is future work, deferred to avoid risking the live i18n routing while plumbing a nonce through `proxy.ts` → layout → every inline script.
- Analytics (GA4/Clarity) load only after explicit cookie-consent acceptance, never unconditionally — gated via `components/analytics-gate.tsx` + `hooks/use-cookie-consent.ts`.

## Completed Features

- Full bilingual (he/en) single-page portfolio: Header, Hero, FeaturedProjects, About, Services, CreativeProcess, StudioReel, FAQ, Contact, Footer.
- Unified `FeaturedProjects` list (5 pieces: instant-coffee, balkan-wedding, lemon-waffle, jerusalem-walls, air-mevorach) replacing the old separate Ad Work section.
- Three full case studies with real production media (`od-yishama`, `avir-mevorach`/air-mevorach, `jerusalem-walls`) plus one spec/independent case study (`instant-coffee`, clearly disclosed as non-commissioned).
- Contact flow: RHF + Zod form → `/api/contact` route → forwards to `CONTACT_ENDPOINT_URL` (Formspree), graceful 501 when unset. WhatsApp CTA simplified to a plain, direct invitation (no "tell me about your project" framing).
- Cookie consent gating for GA4/Clarity.
- FAQ section + FAQPage JSON-LD schema (6 Q&A pairs, both locales).
- Accessibility statement rewritten to a confident, service-oriented tone with a personal-contact section and forward-looking commitment framing.
- H1 accessible-name fix for the word-split mask-reveal headline animation.
- Legal pages (accessibility/privacy/terms) now set their own OG/Twitter metadata instead of inheriting the root layout's.

## Known Issues

- `content/collections/projects.ts`'s `jerusalem-walls` poster is still an SVG placeholder, and its hover-preview `.mp4` is an empty stand-in file (component gracefully falls back to the poster). Swap files in place under the same filenames to finish — no code change needed.
- Two unrelated files sit in `content/case-studies/` and must not be touched or included in any git operation: `horse-friendship-reel-compressed.mp4`, `horse-friendship-reel-raw.mp4` (explicitly out of scope, unrelated content).
- Form placeholders (`namePlaceholder`, message placeholder) remain grammatically singular even though `contact.title` was moved to plural ("שלכם") — left that way deliberately (the placeholder addresses the one person filling the form), but this was never explicitly confirmed by the site owner as final; revisit only if he raises it.

## Future Ideas

- A dedicated case study for `lemon-waffle`, once real supporting production material/stills exist for it (currently just a poster + hover clip on the homepage card, no case-study page).
- Nonce-based CSP (removing `'unsafe-inline'` from `script-src`) if a stricter security posture is ever prioritized over the current low-risk tradeoff.

## Decisions Made

- **AI is the tool, storytelling is the product** — never reversed, never softened into "AI-powered" as the headline claim.
- **No fabricated metrics, credentials, or compliance claims**, anywhere on the site, ever — including inside audit-response copy.
- **Independently verify external audit/report findings** (accessibility, SEO, performance) against the live build/rendered output or an authoritative source before implementing — don't implement a finding just because it was asked for. Confirmed false-positives so far: the "21% focus-visible coverage" claim (ignored a global CSS rule) and the "add he-IL/en-US hreflang" suggestion (contradicted Google's own docs). Confirmed true and acted on: the WCAG 2.0-vs-2.1 legal-citation nuance.
- **Polish, not redesign**, unless explicitly requested otherwise.
- **Work confined strictly to this project directory** — never read, write, or modify files outside it.
- Long/detailed explanations to the site owner are given in Hebrew, even when his request or the underlying technical material was in English.

## Things to Avoid

- Don't add an accessibility-widget overlay — already evaluated and declined.
- Don't re-cluster `FeaturedProjects` by type (all music videos together, etc.) — the interleaved order is intentional positioning, not an accident to "fix."
- Don't invent proof points, testimonials, certifications, or performance numbers to fill out a section — leave it honest and sparser instead.
- Don't add `priority` to `next/image` instances that aren't the actual per-page LCP element.
- Don't repeat a raw `cubic-bezier(...)` inline anywhere — always reference `ease-cinematic` / `transitions.base`/`slow`.
- Don't touch `horse-friendship-reel-compressed.mp4` / `horse-friendship-reel-raw.mp4`.
- Don't push to git without explicit confirmation for that specific push; don't use `git add -A` — stage explicit file lists.
- Don't treat a pasted external audit/report as ground truth — verify first, and say so plainly when a finding doesn't hold up.
