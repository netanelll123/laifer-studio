"use client";

import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Initializes Lenis smooth scrolling for cinematic, inertial scroll. Skipped
 * entirely when the user prefers reduced motion — native scrolling takes over.
 * `lenis` is dynamically imported so its ~5KB gzipped never sits in the main
 * bundle that has to load before hydration — it's fetched in parallel right
 * after mount instead, a scroll enhancement rather than a first-paint need.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    let lenis: import("lenis").default | undefined;
    let frame = 0;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, [prefersReduced]);

  return <>{children}</>;
}
