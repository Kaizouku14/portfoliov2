"use client";

import React, { useRef, useEffect, CSSProperties, useMemo } from "react";
import {
  animate,
  useMotionValue,
  AnimationPlaybackControls,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ResponsiveImage {
  src: string;
  alt?: string;
  srcSet?: string;
}

interface AnimationConfig {
  preview?: boolean;
  scale: number;
  speed: number;
}

interface NoiseConfig {
  opacity: number;
  scale: number;
}

export interface EtheralShadowProps {
  type?: "preset" | "custom";
  presetIndex?: number;
  customImage?: ResponsiveImage;
  sizing?: "fill" | "stretch";
  color?: string;
  animation?: AnimationConfig;
  noise?: NoiseConfig;
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number,
): number {
  if (fromLow === fromHigh) {
    return toLow;
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

// Optimized ID generation - no state, no extra render, no ref access during render
let idCounter = 0;
const generateId = (prefix = "shadowoverlay"): string => {
  return `${prefix}-${++idCounter}`;
};

export function EtheralShadow({
  sizing = "fill",
  color = "rgba(128, 128, 128, 1)",
  animation,
  noise,
  style,
  className,
  children,
}: EtheralShadowProps) {
  // Generate ID only once using useMemo - no extra render, no ref access
  const id = useMemo(() => generateId(), []);

  // Memoize animation enabled check
  const animationEnabled = useMemo(
    () => animation && animation.scale > 0,
    [animation],
  );

  // Memoize expensive calculations
  const displacementScale = useMemo(
    () => (animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0),
    [animation],
  );

  const animationDuration = useMemo(
    () => (animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1),
    [animation],
  );

  const baseFrequency = useMemo(
    () =>
      animation
        ? `${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`
        : "0.001,0.004",
    [animation],
  );

  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);

  // Reuse motion value across renders
  const hueRotateMotionValueRef = useRef(useMotionValue(0));
  // eslint-disable-next-line react-hooks/refs
  const hueRotateMotionValue = hueRotateMotionValueRef.current;

  useEffect(() => {
    if (!feColorMatrixRef.current || !animationEnabled) {
      return;
    }

    const element = feColorMatrixRef.current;

    // Stop existing animation
    if (hueRotateAnimation.current) {
      hueRotateAnimation.current.stop();
    }

    // Reset and start animation
    hueRotateMotionValue.set(0);

    // Use direct animation with optimized callback
    hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
      duration: animationDuration / 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      ease: "linear",
      delay: 0,
      onUpdate: (value: number) => {
        // Direct attribute update - fastest approach for SVG
        element.setAttribute("values", String(value));
      },
    });

    return () => {
      if (hueRotateAnimation.current) {
        hueRotateAnimation.current.stop();
      }
    };
  }, [animationEnabled, animationDuration, hueRotateMotionValue]);

  // Memoize noise styles to prevent object recreation
  const noiseStyles = useMemo(
    () =>
      noise && noise.opacity > 0
        ? ({
            position: "absolute" as const,
            inset: 0,
            backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
            backgroundSize: noise.scale * 200,
            backgroundRepeat: "repeat" as const,
            opacity: noise.opacity / 2,
          } as CSSProperties)
        : null,
    [noise],
  );

  // Memoize mask styles
  const maskStyles = useMemo(
    () =>
      ({
        backgroundColor: color,
        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
        maskRepeat: "no-repeat" as const,
        maskPosition: "center" as const,
        width: "100%",
        height: "100%",
      }) as CSSProperties,
    [color, sizing],
  );

  // Memoize outer container style
  const outerStyle = useMemo(
    () =>
      ({
        position: "absolute" as const,
        inset: -displacementScale,
        filter: animationEnabled ? `url(#${id}) blur(4px)` : "none",
      }) as CSSProperties,
    [displacementScale, animationEnabled, id],
  );

  return (
    <div
      className={cn("relative overflow-hidden w-full h-full", className)}
      style={style}
    >
      <div style={outerStyle}>
        {animationEnabled && (
          <svg style={{ position: "absolute" }}>
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={baseFrequency}
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix
                  ref={feColorMatrixRef}
                  in="undulation"
                  type="hueRotate"
                  values="0"
                />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}
        <div style={maskStyles} />
      </div>
      {children && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          {children}
        </div>
      )}
      {noiseStyles && <div style={noiseStyles} />}
    </div>
  );
}
