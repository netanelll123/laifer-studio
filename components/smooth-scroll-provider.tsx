"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Initializes Lenis smooth scrolling for cinematic, inertial scroll. Skipped
 * entirely when the user prefers reduced motion — native scrolling takes over.
 * `lenis` is dynamically imported so its ~5KB gzipped never sits in the main
 * bundle that has to load before hydration — it's fetched in parallel right
 * after mount instead, a scroll enhancement rather than a first-paint need.
 *
 * Accessibility: smooth scrolling is applied to in-page anchor clicks only
 * (menu, CTAs, scroll cue). Focus-driven scrolling (Tab) is always instant —
 * there's no global `scroll-behavior: smooth`, and a Tab press cancels any
 * Lenis animation in flight so it can't drag the page away from the newly
 * focused element (WCAG 2.4.7 / 2.4.11).
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReduced = usePrefersReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReduced) return;

    let frame = 0;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenisRef.current = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [prefersReduced]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;

      const url = new URL(link.href);
      if (!url.hash || url.origin !== location.origin || url.pathname !== location.pathname) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      // The skip link (→ <main>) keeps its native, instant jump.
      if (!target || target.tagName === "MAIN") return;

      e.preventDefault();
      const lenis = lenisRef.current;
      if (lenis) lenis.scrollTo(target);
      else target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      history.pushState(null, "", url.hash);

      // Move focus with the scroll, as a native anchor jump would, so the
      // next Tab continues from the destination section.
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const lenis = lenisRef.current;
      if (e.key !== "Tab" || !lenis || lenis.isScrolling !== "smooth") return;
      lenis.stop();
      lenis.start();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [prefersReduced]);

  return <>{children}</>;
}
