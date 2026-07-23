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
- `extra-groom-cinematic-board.jpg`, `extra-niko-peter-board.jpg` — two more
  character reference boards. Note: `extra-niko-peter-board.jpg` uses the
  light/cream documentation template (unlike every board actually on the
  page, which are all the dark template) — if swapping it in, pair it with
  another light-template image nearby, don't drop it next to a dark one.

## A design decision worth knowing about
The client's reference boards come in two visual templates: dark and
light/cream. The musicians board originally slotted into Section 4 was the
light one ("Niko & Peter") — sitting right next to three dark boards
(groom, bride, Chiko), it would have looked like a mismatched, out-of-place
card. Swapped it for the "Meir" board instead, which uses the same dark
template as the other three, keeping Section 4 visually consistent.
`crowd-reference.jpg` (Section 7) is also the light template, but it stands
alone there rather than next to a dark board, so it reads as its own
distinct reference card rather than a clash — left as is.

Real stills can be any aspect ratio — the layout crops to `16:10` (single
images) or a square (gallery items) via `object-cover`, so no pre-cropping is
required.
