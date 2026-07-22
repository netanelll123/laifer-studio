"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { CaseStudy } from "@/content/types";

/**
 * Case-study hero: a single short looping video (not the homepage's
 * multi-frame Ken Burns showreel — one clip is enough for an article opener),
 * title, subtitle, tag pills and a scroll cue. Visual language matches the
 * homepage Hero exactly (letterbox bars, cinematic overlay, mask-free fade
 * reveal) so the article feels like part of the same site, not a new one.
 */
export function CaseStudyHero({ hero }: { hero: CaseStudy["hero"] }) {
  const prefersReduced = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (prefersReduced) return;
    void videoRef.current?.play().catch(() => {});
  }, [prefersReduced]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden noise">
      <div className="absolute inset-0">
        {prefersReduced ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hero.poster}
            alt=""
            aria-hidden
            className="size-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            className="size-full object-cover"
            poster={hero.poster}
            autoPlay
            muted
            loop
            playsInline
            // Immediate autoplay hero — start latency matters more than the
            // bandwidth saved by a lazier hint (contrast the hover-triggered
            // project previews, which correctly use preload="none").
            preload="auto"
            aria-hidden
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        )}
        <div className="cinematic-overlay absolute inset-0" aria-hidden />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[6vh] max-h-16 bg-gradient-to-b from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[10vh] max-h-28 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <motion.div
        variants={prefersReduced ? undefined : stagger(0.14, 0.15)}
        initial={prefersReduced ? undefined : "hidden"}
        animate={prefersReduced ? undefined : "show"}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-medium leading-[1.05] text-balance [text-shadow:0_2px_44px_rgba(0,0,0,0.55)]"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 [text-shadow:0_1px_20px_rgba(0,0,0,0.55)] sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {hero.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-foreground/80 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-foreground/45">
        <motion.span
          className="flex items-center justify-center"
          animate={prefersReduced ? undefined : { opacity: [1, 0.4, 1] }}
          transition={
            prefersReduced
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </div>
    </section>
  );
}
