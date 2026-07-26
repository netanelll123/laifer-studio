# Commercials & studio reel — assets

## Ad Work section (`components/sections/commercials.tsx`)
- `instant-coffee.mp4` / `instant-coffee-poster.jpg` — vertical (1080x1920)
  commercial, compressed from a much larger raw export. Real audio.
- `lemon-waffle.mp4` / `lemon-waffle-poster.jpg` — same treatment, also
  vertical.

Cards are portrait tiles (`aspect-[9/16]`) to match the source format,
click-to-play opens `VideoModal` with the video sized by its own natural
aspect ratio (not forced into a 16:9 box).

## Studio reel section (`components/sections/studio-reel.tsx`)
- `studio-intro.mp4` / `studio-intro-poster.jpg` — the real ~8s Laifer
  Studio brand/logo sting (crown mark, tagline, services, name), landscape
  (1920x1080). Click-to-play, inline (not a modal) — this section is a
  single item, not a grid.

## Received, not used here
A second, unrelated video ("HERO with voice and title...") was also
received alongside these — a ~50s narrative piece (a girl and a horse,
ending on "Friendship always takes you home!"), not a Laifer Studio brand
asset or one of the two commercials. Client confirmed the *actual*
"Laifer Studio" self-promo is the short logo clip above, not this one.
Kept out of `public/` (raw + a compressed pass) at
`content/case-studies/horse-friendship-reel-raw.mp4` and
`...-compressed.mp4` pending a decision on what it's for — not deployed,
not referenced anywhere in content.
