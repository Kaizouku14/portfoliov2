"use client";

import { useCallback, useRef } from "react";
import { Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroHeader from "@/components/layout/header";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { heroContent } from "@/data";
import { MENU } from "@/constants";
import { AnimateContainer, AnimateItem } from "@/components/shared/animate-element";
import { SectionWrapper } from "@/components/layout/section";
import LightRays from "../ui/LightRays";

const BottomGradient = () => (
  <div className="absolute bottom-0 w-full h-10 bg-[linear-gradient(to_top,oklch(0.129_0.042_264.695),transparent)]" />
);

const HeroSection = () => {
  const projectsRef = useRef<HTMLElement | null>(null);

  const handleDownloadCV = useCallback(() => {
    window.open("/cv.pdf", "_blank");
  }, []);

  const handleViewWork = useCallback(() => {
    if (!projectsRef.current) {
      projectsRef.current = document.getElementById(MENU.PROJECTS);
    }
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
      <SectionWrapper
        id={MENU.HOME}
        className="min-h-screen items-center text-center px-4 md:px-8"
      >
      <HeroHeader />
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays "
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
      <AnimateContainer
        className="flex flex-col items-center md:p-8 md:w-7xl z-10"
        delayChildren={0}
        staggerChildren={0.2}
        initial="hidden"
        animate="visible"
      >
        <AnimateItem
          as="h1"
          className="text-5xl md:text-6xl lg:text-7xl font-black"
          duration={0.6}
        >
          {heroContent.title}
        </AnimateItem>

        <AnimateItem duration={0.6}>
          <TypingAnimation
            className="mt-2 text-base sm:text-2xl"
            loop
            blinkCursor
            cursorStyle="underscore"
            words={heroContent.typingWords}
          />
        </AnimateItem>

        <AnimateItem
          as="p"
          className="mt-4 w-80 md:w-full text-sm md:text-xl max-w-xl sm:max-w-2xl opacity-80 text-muted-foreground"
          duration={0.6}
        >
          {heroContent.description}
        </AnimateItem>

        <AnimateItem
          className="flex gap-2 items-center mt-4"
          duration={0.6}
        >
          <Button
            className="flex items-center text-muted-foreground"
            variant="ghost"
            onClick={handleDownloadCV}
          >
            <Download className="size-5" />
            <span className="font-semibold">Download CV</span>
          </Button>
          <Button onClick={handleViewWork}>
            <FolderOpen className="size-5" />
            <span className="font-semibold">View My Work</span>
          </Button>
        </AnimateItem>
      </AnimateContainer>
      <BottomGradient />
      </SectionWrapper>
  );
};

export default HeroSection;
