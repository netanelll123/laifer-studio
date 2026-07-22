# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Scope

Work only within this project directory. Do not read, write, or modify files outside it.

## Project

Leifer Studio — a premium, cinematic single-page portfolio for Netanel Laifer (Creative Director / Storyteller / AI Filmmaker). It is **not** an AI-agency site: AI is framed as the tool, storytelling as the product. Bilingual (Hebrew RTL default, English LTR).

## Commands

```bash
npm run dev      # Dev server (Turbopack) at http://localhost:3000 → redirects to /he
npm run build    # Production build (runs TypeScript typecheck + generates /he, /en)
npm run start    # Serve the production build
npm run lint     # ESLint (flat config, eslint-config-next)
```

- No test runner is configured yet.
- `npm run build` is the real gate: it runs a full `tsc` typecheck and static generation. Run it before considering a change done.
- Env: copy `.env.example` → `.env.local`. `CONTACT_ENDPOINT_URL` is the external contact destination; `NEXT_PUBLIC_SITE_URL` feeds metadata/sitemap.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · next-intl 4 · Motion (framer-motion) + Lenis · React Hook Form + Zod · shadcn-style UI · Sonner. Deploy target: Vercel. No DB/CMS/auth — static, plus one Route Handler.

> GSAP was removed (2026-07-23): it was a listed dependency with zero imports anywhere in the codebase. Motion has covered every animation need so far. Re-add it only if a specific effect genuinely can't be done with Motion.

> **Next.js 16 note:** `create-next-app@latest` produced Next 16, not 15 (the original spec). Key deltas from older knowledge: Middleware is now **Proxy** (`proxy.ts`), Tailwind is **v4** (CSS-based config, no `tailwind.config.js`), and route `params` are async (`await params`). See `node_modules/next/dist/docs/` for the bundled version-accurate docs.

## Architecture

**All editable content lives under `content/` — components only render it.** See `content/README.md` for the human-facing editing guide (in Hebrew, written for the client). Never hardcode user-facing strings in `.tsx` files; add a key to both message catalogs instead.

- `content/messages/{he,en}.json` — every UI string, keyed by section. `global.d.ts` augments next-intl so `useTranslations` keys are type-checked against the catalog.
- `content/collections/{projects,services,process,testimonials}.ts` — typed arrays whose `slug` is a **literal union** defined in `content/types.ts`, so composed keys like `t(\`items.${slug}.title\`)` stay type-checked. Adding an item touches three content files (never a component): the collection array, the slug union in `content/types.ts`, and matching keys in both message catalogs.
- `content/site.ts` — non-localized config: canonical URL, person info (name/email/Wikipedia), social links, section anchor IDs, nav item order.
- `i18n/routing.ts` — locales (`he` default, `en`), `localePrefix: "always"`, and `localeDirection` (RTL/LTR). Import `Locale` and `localeDirection` from here.
- `i18n/request.ts` — per-request config; loads `content/messages/<locale>.json`.
- `i18n/navigation.ts` — locale-aware `Link`/`useRouter`/`usePathname`. **Use these, not `next/link`/`next/navigation`.**
- `proxy.ts` — next-intl middleware for locale detection/redirects (Next 16 Proxy convention).
- `app/[locale]/layout.tsx` is the **root layout** (there is intentionally no `app/layout.tsx`). It sets `<html lang/dir>`, loads bilingual fonts, injects Person JSON-LD, `generateMetadata` (OG/Twitter/hreflang), and wraps children in `NextIntlClientProvider` + `SmoothScrollProvider` + Sonner.

**Server-first components.** Sections are Server Components using `useTranslations` (works server-side in next-intl). `"use client"` is reserved for interactivity/animation: `header`, `hero`, `featured-projects`, `contact-form`, `language-toggle`, and the shared `reveal`/`video-background`/`smooth-scroll-provider`. The page (`app/[locale]/page.tsx`) just composes sections in order.

**`lib/` is code, not content** — utilities and systems components rely on, never user-facing copy: `lib/motion.ts` (shared cinematic vocabulary — fadeUp, scaleIn, maskReveal, stagger, plus the `transitions.base`/`transitions.slow` timing tokens; allowed feel is fade/reveal/scale/mask/parallax, never bounce/spin/elastic), `lib/utils.ts` (`cn()` class merging), `lib/validations/contact.ts` (Zod schema for the contact form). Every animated path is gated by `usePrefersReducedMotion()` (`hooks/`), which uses `useSyncExternalStore` and defaults to reduced (calm) on SSR. The `<Reveal>` wrapper renders statically under reduced motion. **CSS-only transitions** (hover states, header chrome) share the same easing via the `ease-cinematic` Tailwind utility (from `--ease-cinematic` in `app/globals.css`) — never repeat the raw `cubic-bezier(...)` inline; reference the token. Duration scale: 300ms (micro/hover), 500ms (cards, chrome, crossfades), 700ms (larger movement) — see the comment above `--ease-cinematic` in `globals.css`.

**Contact flow.** `contact-form.tsx` (RHF + `lib/validations/contact.ts` Zod schema; error `message`s are i18n keys resolved at render) → POSTs to `app/api/contact/route.ts`, which re-validates and forwards to `CONTACT_ENDPOINT_URL` (currently a Formspree endpoint) with an explicit `charset=utf-8` and a generated `_subject`. Unset endpoint → 501 so the UI degrades gracefully. Payload: `{ name, email, phone, company, message }`.

**Styling.** Tailwind v4 theme tokens are defined in `app/globals.css` via `@theme` (single committed dark cinematic palette, warm gold accent `--color-accent`). Custom utilities there: `.font-display`, `.text-gradient`, `.cinematic-overlay`, `.noise`, `.section-padding`. Use `cn()` from `lib/utils.ts` for class merging.

## Assets

Real content in `public/`: `videos/hero.mp4` (real, compressed showreel, ~8.4MB), `projects/air-mevorach.jpg` (real YouTube poster), `images/about-portrait.jpg` (real portrait), `logo-mark.png`/`logo-full.png` (real logo, derived from source `לוגו.png` at repo root). Still-placeholder: `projects/balkan-wedding.svg` and `projects/jerusalem-walls.svg` posters, and their `.mp4` hover clips (empty files — components fall back to the poster). Swap files in place (keep filenames) to finish — no code changes needed. See `public/README.md` and `content/README.md`.

## Conventions

- All user-facing text lives in `content/messages/*.json` (both locales kept in sync) — see `content/README.md`.
- RTL-aware layout: prefer logical properties (`ms-`/`me-`/`ps-`/`pe-`, `start`/`end`) over left/right.
- No inline styles for layout; Tailwind utilities only (the rare `style={}` is for dynamic gradients).
