"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { scaleIn } from "@/lib/motion";
import type { CaseStudy } from "@/content/types";

/**
 * Click-to-load YouTube embed. Nothing from YouTube (script, thumbnail,
 * player) loads until the visitor clicks play — the poster is our own
 * placeholder image, so the section costs nothing on first paint.
 */
export function CaseStudyVideoEmbed({ film }: { film: CaseStudy["film"] }) {
  const t = useTranslations("caseStudy");
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8">
      <Reveal variants={scaleIn}>
        <h2 className="mb-6 text-center font-display text-3xl font-medium leading-[1.15] text-balance sm:text-4xl">
          {film.title}
        </h2>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1`}
              title={film.title}
              className="size-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={t("playVideo")}
              className="group relative block size-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={film.poster}
                alt=""
                aria-hidden
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/30" aria-hidden />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex size-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_0_50px_-10px_var(--color-accent)] transition-transform duration-300 ease-cinematic group-hover:scale-110">
                  <Play className="size-8 translate-x-0.5" fill="currentColor" />
                </span>
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </div>
  );
}
