"use client";

import React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";
import { DURATION, EASE, VARIANTS } from "@/lib/motion";

// ─── AnimateContainer ─────────────────────────────────────────────────────────

interface AnimateContainerProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
}

export const AnimateContainer = React.forwardRef<
  HTMLDivElement,
  AnimateContainerProps
>(
  (
    {
      children,
      className,
      delayChildren = 0.1,
      staggerChildren = 0.1,
      once = true,
      ...props
    },
    ref,
  ) => {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants: Variants = shouldReduceMotion
      ? // When reduced motion is preferred: no stagger, instant reveal
        { hidden: { opacity: 0 }, visible: { opacity: 1 } }
      : VARIANTS.staggerContainer(delayChildren, staggerChildren);

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.2 }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
AnimateContainer.displayName = "AnimateContainer";

// ─── AnimateItem ──────────────────────────────────────────────────────────────

interface AnimateItemProps extends HTMLMotionProps<any> {
  children?: React.ReactNode;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  as?: React.ElementType;
}

export const AnimateItem = React.forwardRef<HTMLElement, AnimateItemProps>(
  (
    {
      children,
      className,
      duration = DURATION.base,
      direction = "up",
      distance = 24,
      delay,
      as: Component = "div",
      ...props
    },
    ref,
  ) => {
    const shouldReduceMotion = useReducedMotion();

    const itemVariants: Variants = {
      hidden: {
        opacity: 0,
        // Collapse translate to 0 for users who prefer reduced motion
        y:
          !shouldReduceMotion && direction === "up"
            ? distance
            : !shouldReduceMotion && direction === "down"
              ? -distance
              : 0,
        x:
          !shouldReduceMotion && direction === "left"
            ? distance
            : !shouldReduceMotion && direction === "right"
              ? -distance
              : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? DURATION.instant : duration,
          ease: EASE.out,
          delay: shouldReduceMotion ? 0 : delay,
        },
      },
    };

    const MotionComponent = motion.create(Component);

    return (
      <MotionComponent
        ref={ref}
        variants={itemVariants}
        className={cn(className)}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  },
);
AnimateItem.displayName = "AnimateItem";
