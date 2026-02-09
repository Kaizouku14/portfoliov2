"use client";

import React, {
  useRef,
  useEffect,
  CSSProperties,
  useMemo,
  useState,
} from "react";
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
  const id = useMemo(() => generateId(), []);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const animationEnabled = useMemo(
    () => animation && animation.scale > 0,
    [animation],
  );

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
  const hueRotateMotionValueRef = useRef(useMotionValue(0));
  // eslint-disable-next-line react-hooks/refs
  const hueRotateMotionValue = hueRotateMotionValueRef.current;

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "50px", // Start animation slightly before visible
      },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!feColorMatrixRef.current || !animationEnabled) {
      return;
    }

    const element = feColorMatrixRef.current;

    // Pause/resume based on visibility
    if (!isVisible) {
      if (hueRotateAnimation.current) {
        hueRotateAnimation.current.pause();
      }
      return;
    }

    // Resume if already exists
    if (hueRotateAnimation.current) {
      hueRotateAnimation.current.play();
      return;
    }

    // Initialize animation
    hueRotateMotionValue.set(0);

    hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
      duration: animationDuration / 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      ease: "linear",
      delay: 0,
      onUpdate: (value: number) => {
        element.setAttribute("values", String(value));
      },
    });

    return () => {
      if (hueRotateAnimation.current) {
        hueRotateAnimation.current.stop();
        hueRotateAnimation.current = null;
      }
    };
  }, [animationEnabled, isVisible, animationDuration, hueRotateMotionValue]);

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
            // OPTIMIZATION: Help browser optimize rendering
            willChange: isVisible ? "opacity" : "auto",
          } as CSSProperties)
        : null,
    [noise, isVisible],
  );

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
        // OPTIMIZATION: Force GPU layer for smoother rendering
        transform: "translateZ(0)",
      }) as CSSProperties,
    [color, sizing],
  );

  const outerStyle = useMemo(
    () =>
      ({
        position: "absolute" as const,
        inset: -displacementScale,
        filter: animationEnabled ? `url(#${id}) blur(4px)` : "none",
        // OPTIMIZATION: Tell browser this will change
        willChange: animationEnabled && isVisible ? "filter" : "auto",
        // OPTIMIZATION: Promote to own layer for GPU acceleration
        transform: "translateZ(0)",
      }) as CSSProperties,
    [displacementScale, animationEnabled, isVisible, id],
  );

  // OPTIMIZATION: CSS containment helps browser optimize painting
  const containerStyle = useMemo(
    () => ({
      ...style,
      contain: "layout style paint" as const,
    }),
    [style],
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full", className)}
      style={containerStyle}
    >
      <div style={outerStyle}>
        {animationEnabled && (
          <svg style={{ position: "absolute", width: 0, height: 0 }}>
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
