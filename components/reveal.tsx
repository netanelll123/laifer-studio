"use client";

import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  /** Delay before this element's entrance, in seconds. */
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "dl";
}

/**
 * Scroll-triggered entrance wrapper. Plays the given cinematic variant once when
 * scrolled into view; renders statically (no motion) under reduced-motion.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: RevealProps) {
  const prefersReduced = usePrefersReducedMotion();
  // Keyboard focus landing inside a not-yet-revealed block (e.g. tabbed to
  // just below the viewport's -12% trigger margin) must reveal it at once —
  // otherwise focus sits on an invisible element.
  const [focused, setFocused] = useState(false);
  const MotionTag = motion[as];

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      data-reveal
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      animate={focused ? "show" : undefined}
      onFocusCapture={focused ? undefined : () => setFocused(true)}
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
