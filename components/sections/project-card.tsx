"use client";

import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { VideoModal } from "@/components/video-modal";
import { sectionIds } from "@/content/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Project } from "@/content/types";
import { cn } from "@/lib/utils";

/** One featured-project row: hover-to-play preview, alternating layout. The
 *  only interactive piece of the section, split out so the parent
 *  `FeaturedProjects` can stay a Server Component. */
export function ProjectCard({
  project,
  index,
  reversed,
}: {
  project: Project;
  index: number;
  reversed: boolean;
}) {
  const t = useTranslations("projects");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const prefersReduced = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const title = t(`items.${project.slug}.title`);
  const hasVideo = Boolean(project.video);
  const hasCaseStudy = Boolean(project.caseStudySlug);
  // A YouTube ID keeps the visitor on-site (in-page modal) instead of
  // navigating out — only relevant when there's no dedicated case study.
  const hasYoutube = Boolean(project.youtubeId) && !hasCaseStudy;
  const href = hasCaseStudy
    ? `/${locale}/work/${project.caseStudySlug}`
    : (project.url ?? `/${locale}#${sectionIds.contact}`);
  const external = Boolean(project.url) && !hasCaseStudy && !hasYoutube;
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const onEnter = () => {
    if (!hasVideo) return;
    setActive(true);
    if (!prefersReduced) void videoRef.current?.play().catch(() => {});
  };
  const onLeave = () => {
    if (!hasVideo) return;
    setActive(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const mediaInner = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.poster}
        alt=""
        aria-hidden
        loading="lazy"
        className={cn(
          "absolute inset-0 size-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105",
          hasVideo && active && !prefersReduced && "opacity-0"
        )}
      />
      {hasVideo && !prefersReduced && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-500 ease-cinematic",
            active ? "opacity-100" : "opacity-0"
          )}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
        >
          <source src={project.video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      <span className="absolute bottom-4 end-4 inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-opacity duration-500 ease-cinematic group-hover:opacity-100">
        {hasYoutube ? (
          <Play className="size-5 translate-x-0.5" fill="currentColor" />
        ) : (
          <ArrowUpRight className="size-5" />
        )}
      </span>
    </>
  );

  const mediaClassName = cn(
    "group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card [direction:ltr]",
    reversed ? "lg:order-2" : "lg:order-1"
  );

  return (
    <>
      <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Media — visual position alternates via `order`, independent of
            text direction, so RTL/LTR content is never affected by the
            layout. */}
        {hasYoutube ? (
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onFocus={onEnter}
            onBlur={onLeave}
            className={mediaClassName}
            aria-label={title}
          >
            {mediaInner}
          </button>
        ) : (
          <a
            href={href}
            {...linkProps}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onFocus={onEnter}
            onBlur={onLeave}
            className={mediaClassName}
            aria-label={external ? `${title} — ${tCommon("opensInNewTab")}` : title}
          >
            {mediaInner}
          </a>
        )}

        {/* Text — always renders in the page's real direction (RTL for
            Hebrew, LTR for English); only its position swaps for reversed
            cards. */}
        <div className={cn(reversed ? "lg:order-1" : "lg:order-2")}>
          <div className="flex items-center gap-4">
            <span className="font-display text-sm text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t(`items.${project.slug}.category`)}
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-muted-foreground">
            {t(`items.${project.slug}.description`)}
          </p>
          {hasYoutube ? (
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 ease-cinematic hover:text-accent"
            >
              {t(`items.${project.slug}.cta`)}
              <ArrowUpRight className="size-4" />
            </button>
          ) : (
            <a
              href={href}
              {...linkProps}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 ease-cinematic hover:text-accent"
            >
              {t(`items.${project.slug}.cta`)}
              {external ? <span className="sr-only"> — {tCommon("opensInNewTab")}</span> : null}
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </Reveal>

      {hasYoutube && project.youtubeId && (
        <VideoModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          youtubeId={project.youtubeId}
          title={title}
        />
      )}
    </>
  );
}
