# Od Yishama — case study assets

Real production stills are in place throughout the article. Two things are
still needed to finish the page:

## Required to finish this page
- **`hero.mp4`** — currently empty. A short (10–15s), muted, looping clip for
  the article's opening. Same compression approach as `public/videos/hero.mp4`
  (H.264, ~1080p, no audio needed) keeps it light. `hero-poster.jpg` (a real
  still) already covers the fallback/poster.
- **`youtubeId`** in `content/case-studies/od-yishama.he.ts` and `.en.ts` —
  currently a placeholder (`REPLACE_WITH_YOUTUBE_ID`). Replace with the real
  video ID from the film's YouTube URL (the part after `v=`).

## Still placeholder (no real match provided yet)
- `screenplay.svg` — Section 2 ("It started with a script"). Swap for a real
  photo of the script/notebook if one exists, keeping the filename, or a new
  filename updated in both `od-yishama.*.ts` files.
- `processions.svg` — Section 5 (the two processions meeting in the square).

## Bonus stills (received, not currently used on the page)
- `extra-groom-cinematic-board.jpg`, `extra-meir-clarinet-board.jpg` — two
  more character reference boards. Swap either into the article (e.g.
  replacing a section-4 board, or as a new gallery block) if you'd like more
  variety — no other change needed beyond updating the `src` path.

Real stills can be any aspect ratio — the layout crops to `16:10` (single
images) or a square (gallery items) via `object-cover`, so no pre-cropping is
required.
