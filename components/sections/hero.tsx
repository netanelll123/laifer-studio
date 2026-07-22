"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/sections/hero-background";
import { sectionIds } from "@/content/site";
import { maskReveal, fadeUp, stagger, transitions } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/** Fullscreen cinematic hero: looping showreel background, letterbox framing,
 *  headline mask-reveal and two CTAs. Restrained, premium, minimal. */
export function Hero() {
  const t = useTranslations("hero");
  const prefersReduced = usePrefersReducedMotion();

  const container = prefersReduced ? {} : "hidden";
  const animate = prefersReduced ? {} : "show";

  // Accent the final word of the headline for a premium, editorial finish.
  const words = t("title").split(" ");
  const lastIndex = words.length - 1;

  return (
    <section
      id={sectionIds.hero}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden noise"
    >
      <HeroBackground />

      {/* Cinematic letterbox bars */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[6vh] max-h-16 bg-gradient-to-b from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[10vh] max-h-28 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <motion.div
        variants={stagger(0.14, 0.15)}
        initial={container}
        animate={animate}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/60 sm:text-xs"
        >
          {t("eyebrow")}
        </motion.span>

        <h1 className="font-display text-[clamp(2.75rem,7.2vw,6rem)] font-medium leading-[1.03] tracking-[-0.02em] text-balance [text-shadow:0_2px_44px_rgba(0,0,0,0.5)]">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden py-[0.05em] align-bottom"
            >
              <motion.span
                variants={maskReveal}
                className={`inline-block px-[0.1em] ${
                  i === lastIndex ? "text-gradient" : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 [text-shadow:0_1px_20px_rgba(0,0,0,0.55)] sm:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg">
            <a href={`#${sectionIds.work}`}>{t("ctaPrimary")}</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={`#${sectionIds.contact}`}>{t("ctaSecondary")}</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Filmmaker cue: a single, quiet showreel mark (desktop only) */}
      <span className="pointer-events-none absolute bottom-8 z-20 hidden items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/50 sm:inline-flex ltr:left-8 rtl:right-8">
        <span className="h-px w-6 bg-accent/60" aria-hidden />
        {t("reel")}
      </span>

      {/* Scroll cue */}
      <motion.a
        href={`#${sectionIds.work}`}
        aria-label={t("scroll")}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-foreground/45 transition-colors duration-300 ease-cinematic hover:text-foreground"
        initial={prefersReduced ? undefined : { opacity: 0 }}
        animate={prefersReduced ? undefined : { opacity: 1 }}
        transition={{ delay: 1.2, ...transitions.slow }}
      >
        {/* A gentle opacity pulse, not a bounce — the brief forbids bounce/spin/
            elastic motion; a fade breathes calmly instead of jumping. */}
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
      </motion.a>
    </section>
  );
}
