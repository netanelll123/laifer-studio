"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { scaleIn } from "@/lib/motion";
import { VideoModal } from "@/components/video-modal";
import type { Ad } from "@/content/types";

/** One compact ad card — poster, title, click-to-play in-page modal. Posters
 *  are portrait (the source clips are vertical/reels-format), so the card
 *  itself is a tall tile rather than the 16:9 shape used elsewhere on the
 *  site. Lighter-weight than `ProjectCard`: a single self-contained tile
 *  rather than an alternating text+media row. */
export function AdCard({ ad }: { ad: Ad }) {
  const t = useTranslations("ads");
  const [modalOpen, setModalOpen] = useState(false);

  const title = t(`items.${ad.slug}.title`);
  const playable = Boolean(ad.youtubeId || ad.video);

  return (
    <Reveal variants={scaleIn}>
      <button
        type="button"
        onClick={() => playable && setModalOpen(true)}
        disabled={!playable}
        className="group relative block aspect-[9/16] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-card disabled:cursor-default"
        aria-label={title}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ad.poster}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        {playable && (
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-cinematic group-hover:opacity-100">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_0_40px_-8px_var(--color-accent)]">
              <Play className="size-6 translate-x-0.5" fill="currentColor" />
            </span>
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 p-5 text-start font-display text-xl font-medium">
          {title}
        </span>
      </button>

      {playable && (
        <VideoModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          youtubeId={ad.youtubeId}
          videoSrc={ad.video}
          title={title}
        />
      )}
    </Reveal>
  );
}
