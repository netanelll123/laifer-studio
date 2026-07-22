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

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · next-intl 4 · Motion (framer-motion) + GSAP + Lenis · React Hook Form + Zod · shadcn-style UI · Sonner. Deploy target: Vercel. No DB/CMS/auth — static, plus one Route Handler.

> **Next.js 16 note:** `create-next-app@latest` produced Next 16, not 15 (the original spec). Key deltas from older knowledge: Middleware is now **Proxy** (`proxy.ts`), Tailwind is **v4** (CSS-based config, no `tailwind.config.js`), and route `params` are async (`await params`). See `node_modules/next/dist/docs/` for the bundled version-accurate docs.

## Architecture

**i18n is the backbone.** Everything routes through a `[locale]` segment and all copy lives in message catalogs — there are no hardcoded UI strings.

- `i18n/routing.ts` — locales (`he` default, `en`), `localePrefix: "always"`, and `localeDirection` (RTL/LTR). Import `Locale` and `localeDirection` from here.
- `i18n/request.ts` — per-request config; loads `messages/<locale>.json`.
- `i18n/navigation.ts` — locale-aware `Link`/`useRouter`/`usePathname`. **Use these, not `next/link`/`next/navigation`.**
- `proxy.ts` — next-intl middleware for locale detection/redirects (Next 16 Proxy convention).
- `messages/{he,en}.json` — the single source of all text, keyed by section. `global.d.ts` augments next-intl so `useTranslations` keys are type-checked against the catalog.
- `app/[locale]/layout.tsx` is the **root layout** (there is intentionally no `app/layout.tsx`). It sets `<html lang/dir>`, loads bilingual fonts, injects Person JSON-LD, `generateMetadata` (OG/Twitter/hreflang), and wraps children in `NextIntlClientProvider` + `SmoothScrollProvider` + Sonner.

**Server-first components.** Sections are Server Components using `useTranslations` (works server-side in next-intl). `"use client"` is reserved for interactivity/animation: `header`, `hero`, `featured-projects`, `contact-form`, `language-toggle`, and the shared `reveal`/`video-background`/`smooth-scroll-provider`.

**Content is data-driven.** `lib/data/*` holds typed arrays (`projects`, `services`, `processSteps`, `testimonials`) whose `slug` is a **literal union** (see `types/index.ts`) so composed keys like `t(\`items.${slug}.title\`)` stay type-checked. Add an item = extend the data array **and** add its slug to the union **and** add its keys to both catalogs. `lib/site.ts` holds non-localized config (URL, social, nav items, section IDs). The page (`app/[locale]/page.tsx`) just composes the sections in order.

**Motion system.** `lib/motion.ts` defines the shared cinematic vocabulary (fadeUp, fadeIn, scaleIn, maskReveal, stagger) — allowed feel is fade/reveal/scale/mask/parallax, never bounce/spin/elastic. Every animated path is gated by `usePrefersReducedMotion()` (`hooks/`), which uses `useSyncExternalStore` and defaults to reduced (calm) on SSR. The `<Reveal>` wrapper renders statically under reduced motion. GSAP is installed for future advanced moments but not yet used.

**Contact flow.** `contact-form.tsx` (RHF + `lib/validations/contact.ts` Zod schema; error `message`s are i18n keys resolved at render) → POSTs to `app/api/contact/route.ts`, which re-validates and forwards to `CONTACT_ENDPOINT_URL`. Unset endpoint → 501 so the UI degrades gracefully. Payload: `{ name, email, phone, company, message }`.

**Styling.** Tailwind v4 theme tokens are defined in `app/globals.css` via `@theme` (single committed dark cinematic palette, warm gold accent `--color-accent`). Custom utilities there: `.font-display`, `.text-gradient`, `.cinematic-overlay`, `.noise`, `.section-padding`. Use `cn()` from `lib/utils.ts` for class merging.

## Assets

Placeholder media in `public/` (see `public/README.md`). SVG posters render now; `.mp4` files are empty placeholders and components fall back to posters. Swap files in place (keep filenames) to ship real work — no code changes. Project slugs: `balkan-wedding`, `air-mevorach`, `jerusalem-walls`.

## Conventions

- Keep all user-facing text in `messages/*.json` (both locales in sync).
- RTL-aware layout: prefer logical properties (`ms-`/`me-`/`ps-`/`pe-`, `start`/`end`) over left/right.
- No inline styles for layout; Tailwind utilities only (the rare `style={}` is for dynamic gradients).
