# Public assets

Placeholder media lives here. Swap these files in place (keep the filenames) to
ship real work — no code changes required.

## Videos (currently empty placeholders — the site falls back gracefully)
- `videos/hero.mp4` — **fullscreen muted showreel loop.** Drop a real file here and
  the hero automatically swaps from the cinematic frame montage to your footage —
  no code change. Aim for a tightly edited 20–40s reel of your strongest shots,
  1080p+, H.264, no audio needed. Poster: `videos/hero-poster.svg`.
- `videos/reel-1..4.svg` — cinematic fallback "frames" the hero cross-fades (Ken
  Burns) until `hero.mp4` exists. Replace or extend via `REEL_FRAMES` in
  `components/sections/hero-background.tsx`.
- `projects/<slug>.mp4` — hover preview clips for each featured project.

## Images
- `projects/<slug>.svg` — project poster (replace with a real 4:3 JPG/WebP + update `lib/data/projects.ts`).
- `images/og.svg` — social share card. Replace with a 1200×630 JPG and update `siteConfig.ogImage`.

Project slugs: `balkan-wedding`, `air-mevorach`, `jerusalem-walls`.
