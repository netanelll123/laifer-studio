import type { Variants, Transition } from "motion/react";

/**
 * Shared cinematic motion vocabulary. Allowed feel: fade, reveal, scale, mask,
 * parallax — smooth and restrained. Forbidden: bounce, spin, elastic, heavy.
 * Every consumer must also honor `prefers-reduced-motion`
 * (see `usePrefersReducedMotion`).
 */

const easeCinematic: Transition["ease"] = [0.16, 1, 0.3, 1];

export const transitions = {
  base: { duration: 0.7, ease: easeCinematic } satisfies Transition,
  slow: { duration: 1.1, ease: easeCinematic } satisfies Transition,
};

/** Fade + upward reveal — the default entrance for sections and text. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: transitions.base },
};

/** Gentle scale-in — for cards and imagery. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: transitions.base },
};

/** Mask reveal — headline lines wipe up from behind a clip edge. */
export const maskReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  show: { opacity: 1, y: "0%", transition: transitions.base },
};

/** Stagger container — orchestrates children entrances in sequence. */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Shared viewport config so reveals trigger once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
