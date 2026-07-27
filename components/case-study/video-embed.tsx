"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { scaleIn } from "@/lib/motion";
import type { CaseStudy } from "@/content/types";

/**
 * Click-to-load video embed. Nothing loads until the visitor clicks play —
 * the poster is our own image, so the section costs nothing on first paint.
 * Prefers a real YouTube embed (`film.youtubeId`); falls back to a local
 * `<video>` (`film.video`) as a temporary stand-in — e.g. a preview clip
 * with real audio — until the real upload exists. The local video isn't
 * autoplaying background chrome like the hero: it only ever plays after a
 * direct click, so an unmuted `<video controls>` here doesn't conflict with
 * the muted-autoplay convention used elsewhere on the site.
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
          {playing && film.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1`}
              title={film.title}
              className="size-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : playing && film.video ? (
            <video
              src={film.video}
              title={film.title}
              className="size-full"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={t("playVideo")}
              className="group relative block size-full"
            >
              <Image
                src={film.poster}
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
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
