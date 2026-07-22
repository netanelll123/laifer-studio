# Od Yishama — case study assets

Placeholder media for `/work/od-yishama`. Swap files in place (keep filenames)
to ship the real thing — no code changes needed.

## Required to finish this page
- **`hero.mp4`** — currently empty. A short (10–15s), muted, looping clip for
  the article's opening. Same compression approach as `public/videos/hero.mp4`
  (H.264, ~1080p, no audio needed) keeps it light.
- **`youtubeId`** in `content/case-studies/od-yishama.he.ts` and `.en.ts` —
  currently a placeholder (`REPLACE_WITH_YOUTUBE_ID`). Replace with the real
  video ID from the film's YouTube URL (the part after `v=`).

## Nice to have (currently generated placeholder frames)
- `hero-poster.svg`, `film-poster.svg` — hero and video-embed posters.
- `scene-1.svg`, `screenplay.svg`, `processions.svg`, `groom-door.svg` — the
  four single-image beats through the article.
- `village-*.svg` (5), `character-*.svg` (4), `portrait-*.svg` (4) — the three
  galleries (locations, character sheets, portraits).

Real stills can be any aspect ratio — the layout crops to `16:10` (single
images) or a square (gallery items) via `object-cover`, so no pre-cropping is
required.
