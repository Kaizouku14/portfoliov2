"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimateContainerProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
}

export const AnimateContainer = React.forwardRef<HTMLDivElement, AnimateContainerProps>(
  ({ children, className, delayChildren = 0.1, staggerChildren = 0.1, once = true, ...props }, ref) => {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren,
          staggerChildren,
        },
      },
    };

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
  }
);
AnimateContainer.displayName = "AnimateContainer";

interface AnimateItemProps extends HTMLMotionProps<any> {
  children?: React.ReactNode;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  as?: React.ElementType;
}

export const AnimateItem = React.forwardRef<HTMLElement, AnimateItemProps>(
  ({ children, className, duration = 0.5, direction = "up", distance = 20, delay, as: Component = "div", ...props }, ref) => {
    const itemVariants: Variants = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay,
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
  }
);
AnimateItem.displayName = "AnimateItem";
