"use client";

import { motion, type Variants } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  /** Delay before this element's entrance, in seconds. */
  delay?: number;
  as?: "div" | "section" | "li" | "span";
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
  const MotionTag = motion[as];

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
