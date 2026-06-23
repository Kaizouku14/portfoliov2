"use client";

import {
  m,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";
import { DURATION, EASE } from "@/lib/motion";

interface AnimateItemProps extends HTMLMotionProps<"div"> {
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
}

export function AnimateItem({
  children,
  className,
  duration = DURATION.base,
  direction = "up",
  distance = 24,
  delay,
  ...props
}: AnimateItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
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

  return (
    <m.div
      variants={itemVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </m.div>
  );
}
