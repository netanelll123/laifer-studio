"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface VideoBackgroundProps {
  src: string;
  poster: string;
  className?: string;
  /** Render the cinematic vignette overlay on top of the video. */
  overlay?: boolean;
}

/**
 * Fullscreen, muted, looping background video with a poster fallback. Under
 * reduced-motion the video never plays — only the poster image shows.
 */
export function VideoBackground({
  src,
  poster,
  className,
  overlay = true,
}: VideoBackgroundProps) {
  const prefersReduced = usePrefersReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (prefersReduced) {
      video.pause();
    } else {
      // Autoplay can reject on some browsers; the poster remains as fallback.
      void video.play().catch(() => {});
    }
  }, [prefersReduced]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {prefersReduced ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          aria-hidden
          className="size-full object-cover"
        />
      ) : (
        <video
          ref={ref}
          className="size-full object-cover"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {overlay ? (
        <div className="cinematic-overlay absolute inset-0" aria-hidden />
      ) : null}
    </div>
  );
}
