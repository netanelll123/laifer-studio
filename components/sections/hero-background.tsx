"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/** Cinematic showreel frames (textless "shots"). Swapped for real footage the
 *  moment a valid `hero.mp4` loads. */
const REEL_FRAMES = [
  "/videos/reel-1.svg",
  "/videos/reel-2.svg",
  "/videos/reel-3.svg",
  "/videos/reel-4.svg",
];

// Alternate pan direction per frame so the montage never feels mechanical.
const PAN_ORIGINS = ["30% 40%", "70% 35%", "50% 70%", "65% 55%"];

const FRAME_DURATION = 5000; // ms each frame holds before crossfading

/**
 * Hero background. Renders a muted, looping showreel video when `hero.mp4` is a
 * real file; until then (or on load failure) it plays a slow Ken Burns montage
 * of cinematic frames so the hero always reads as a filmmaker's reel. Under
 * reduced-motion everything freezes to a single still.
 */
export function HeroBackground() {
  const prefersReduced = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [active, setActive] = useState(0);

  // Advance the montage while the real video isn't playing.
  useEffect(() => {
    if (prefersReduced || videoReady) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % REEL_FRAMES.length),
      FRAME_DURATION
    );
    return () => clearInterval(id);
  }, [prefersReduced, videoReady]);

  // Attempt playback; keep the video hidden until it can actually play.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReduced) return;
    void video.play().catch(() => {});
  }, [prefersReduced]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* Ken Burns montage */}
      {REEL_FRAMES.map((src, i) => {
        const isActive = prefersReduced ? i === 0 : i === active;
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className={cn(
              "absolute inset-0 size-full object-cover will-change-transform",
              !prefersReduced &&
                "transition-[opacity,transform] duration-[1500ms,6000ms] ease-cinematic",
              isActive ? "opacity-100" : "opacity-0",
              videoReady && "opacity-0"
            )}
            style={{
              transform:
                prefersReduced || !isActive ? "scale(1.06)" : "scale(1.16)",
              transformOrigin: PAN_ORIGINS[i],
            }}
          />
        );
      })}

      {/* Real showreel — shown only once it can play */}
      {!prefersReduced && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-700 ease-cinematic",
            videoReady ? "opacity-100" : "opacity-0"
          )}
          poster="/videos/hero-poster.svg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          onCanPlay={(e) => {
            // Empty placeholder files never reach a real duration.
            if (e.currentTarget.duration > 0) setVideoReady(true);
          }}
          onError={() => setVideoReady(false)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Readability + cinema treatment */}
      <div className="cinematic-overlay absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          // Softened ~15% in the mid-frame so more of the showreel reads;
          // top/bottom kept for letterbox blend and cue legibility.
          background:
            "linear-gradient(to bottom, rgba(10,10,11,0.46) 0%, rgba(10,10,11,0.18) 38%, rgba(10,10,11,0.44) 76%, rgba(10,10,11,0.88) 100%)",
        }}
      />
    </div>
  );
}
