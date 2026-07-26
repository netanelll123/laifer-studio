# Rachel and Dave Travel Through Time — case study assets

## Real
- `hero.mp4` / `hero-poster.jpg` — the real title-card intro clip (re-encoded
  H.264, muted, faststart) and its own first frame as poster.
- `film-poster.jpg` — a distinct frame from the same clip (a few seconds
  later), so it doesn't duplicate `hero-poster.jpg`.
- `character-board.jpg` — full turnaround reference sheet for Rachel and
  Dave.
- `scene-temple-arrival.jpg` — Rachel and Dave first seeing the city and
  Temple.
- `scene-city-gate.jpg` / `scene-market-artisan.jpg` — the living city:
  streets, market, an artisan at work.
- `scene-destruction.jpg` / `scene-ruins.jpg` — used as a before/after pair:
  the walls breached (chaos, dust, crowds fleeing), then the quiet
  aftermath. Illustrates what the "Building Jerusalem" section's closing
  line refers to ("what the walls were protecting").
- `scene-kids-playing.jpg` — the exact "moment I knew it worked" scene the
  brief described (kids playing soccer in the market street).

- `film-preview.mp4` — temporary stand-in for the film embed until the real
  YouTube upload exists: the intro clip looped to match the real theme
  song's length, muxed with real audio (`ffmpeg -stream_loop -1` on the
  video + the client's MP3, `-shortest` to the audio's ~15s). Wired via the
  new `film.video` field (see `content/types.ts` and
  `components/case-study/video-embed.tsx`) — unlike the hero, this only
  plays after a direct click, so it has native `<video controls>` and real
  audio without conflicting with the site's muted-autoplay convention.

## Received but not used
- `אבק.png` (not copied into public/) — client confirmed this doesn't
  belong to this project; discarded rather than guessed into a slot.

## Still pending
- `film.youtubeId` in both `jerusalem-walls.*.ts` files. The project was
  adapted into six language versions; confirm which one's video ID belongs
  here (presumably the Hebrew original). Once set, it automatically takes
  priority over `film.video` — no other change needed, and `film-preview.mp4`
  can be deleted at that point.
