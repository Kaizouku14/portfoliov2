/**
 * Centralized Framer Motion tokens.
 * Import from here — never hardcode durations, easings, or distances inline.
 *
 * @example
 * import { TRANSITION, DISTANCE } from "@/lib/motion";
 * <AnimateItem duration={TRANSITION.base.duration} distance={DISTANCE.md} />
 */

import type { Transition, Variants } from "motion/react";

// ─── Duration presets (in seconds) ────────────────────────────────────────────

export const DURATION = {
  instant: 0,
  fast: 0.2,
  base: 0.4,
  slow: 0.6,
  verySlow: 1.0,
} as const;

// ─── Easing presets ───────────────────────────────────────────────────────────

export const EASE = {
  out: "easeOut",
  inOut: "easeInOut",
  linear: "linear",
  /** Smooth cubic-bezier spring feel — good for reveals */
  spring: [0.22, 1, 0.36, 1] as [number, number, number, number],
} as const;

// ─── Distance presets (in px) ─────────────────────────────────────────────────

const DISTANCE = {
  xs: 6,
  sm: 10,
  md: 24,
  lg: 50,
} as const;

// ─── Reusable transition objects ──────────────────────────────────────────────

const TRANSITION = {
  fast: { duration: DURATION.fast, ease: EASE.out } satisfies Transition,
  base: { duration: DURATION.base, ease: EASE.out } satisfies Transition,
  slow: { duration: DURATION.slow, ease: EASE.out } satisfies Transition,
  spring: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  } satisfies Transition,
} as const;

// ─── Shared variant presets ───────────────────────────────────────────────────
// These are useful when you need raw motion.div access but still want
// consistent animation values.

export const VARIANTS = {
  /** Simple opacity fade with no translate */
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: TRANSITION.base },
  } satisfies Variants,

  /** Slide up from below + fade */
  slideUp: {
    hidden: { opacity: 0, y: DISTANCE.md },
    visible: { opacity: 1, y: 0, transition: TRANSITION.base },
  } satisfies Variants,

  /** Slide in from the right + fade */
  slideLeft: {
    hidden: { opacity: 0, x: DISTANCE.lg },
    visible: { opacity: 1, x: 0, transition: TRANSITION.slow },
  } satisfies Variants,

  /** Scale in from small */
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION.base, ease: EASE.spring },
    },
  } satisfies Variants,

  /** Stagger container — pair with any item variant */
  staggerContainer: (
    delayChildren = 0.1,
    staggerChildren = 0.1,
  ): Variants => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren, staggerChildren },
    },
  }),
} as const;
