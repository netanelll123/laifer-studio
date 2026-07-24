# Public assets

Most media here is now real; a few pieces are still placeholders. Swap files in
place (keep the filenames) to finish — no code changes required unless noted.

## Still placeholder
- `videos/hero.mp4` — **fullscreen muted showreel loop**, currently empty. Drop a
  real file here and the hero automatically swaps from the cinematic frame
  montage to your footage — no code change. Aim for a tightly edited 20–40s reel
  of your strongest shots, 1080p+, H.264, no audio needed. Poster:
  `videos/hero-poster.svg`.
- `videos/reel-1..4.svg` — cinematic fallback "frames" the hero cross-fades (Ken
  Burns) until `hero.mp4` exists. Replace or extend via `REEL_FRAMES` in
  `components/sections/hero-background.tsx`.
- `projects/<slug>.mp4` — hover preview clips for each featured project; all
  still empty (cards fall back to the poster with a subtle zoom).

## Real
- `projects/balkan-wedding` → homepage card poster is
  `case-studies/od-yishama/hero-poster.jpg` (see that case study's own real
  media); `air-mevorach.jpg` (real YouTube poster); `jerusalem-walls.jpg` (real
  key art).
- `images/og.png` — social share card (1200×630), referenced via
  `siteConfig.ogImage`. Source design kept at `images/og.svg` for edits.
- `case-studies/od-yishama/` — real production stills; see that folder's own
  `README.md` for what's still pending.

Project slugs (stable identifiers, independent of their display titles):
`balkan-wedding`, `air-mevorach`, `jerusalem-walls`.
