"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { scaleIn } from "@/lib/motion";
import { sectionIds } from "@/content/site";

/** Small studio-branding reel near the bottom of the page — click-to-play,
 *  inline (not a modal), same pattern as the case-study film embed. A
 *  single short clip, so no card grid is needed here. */
export function StudioReel() {
  const t = useTranslations("reel");
  const [playing, setPlaying] = useState(false);

  return (
    <section id={sectionIds.reel} className="section-padding">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <Reveal variants={scaleIn} className="mt-12">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
            {playing ? (
              <video
                src="/commercials/studio-intro.mp4"
                title={t("title")}
                className="size-full"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={t("play")}
                className="group relative block size-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/commercials/studio-intro-poster.jpg"
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
    </section>
  );
}
