"use client";

import { useCallback, useRef, memo } from "react";
import { motion, Variants } from "motion/react";
import { Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroHeader from "@/components/layout/header";
import { MENU } from "@/constants";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { heroContent } from "@/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

// Memoized static gradient
const BottomGradient = memo(() => (
  <div className="absolute bottom-0 w-full h-8 bg-[linear-gradient(to_top,oklch(0.129_0.042_264.695),transparent)]" />
));

BottomGradient.displayName = "BottomGradient";

const HeroSection = () => {
  const projectsRef = useRef<HTMLElement | null>(null);

  const handleDownloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "alv-cv.pdf";
    link.click();
  }, []);

  const handleViewWork = useCallback(() => {
    if (!projectsRef.current) {
      projectsRef.current = document.getElementById(MENU.PROJECTS);
    }
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id={MENU.HOME}
      className="relative h-170 md:h-screen flex flex-col justify-center items-center w-full text-center"
    >
      <HeroHeader />
      <EtheralShadow sizing="fill" animation={{ scale: 60, speed: 0 }}>
        <motion.div
          className="flex flex-col items-center md:p-8 md:w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black"
            variants={itemVariants}
          >
            {heroContent.title}
          </motion.h1>

          <motion.div variants={itemVariants}>
            <TypingAnimation
              className="mt-2 text-base sm:text-2xl"
              loop
              blinkCursor
              cursorStyle="underscore"
              words={heroContent.typingWords}
            />
          </motion.div>

          <motion.p
            className="mt-4 text-sm md:text-xl max-w-xl sm:max-w-2xl opacity-80 text-muted-foreground"
            variants={descriptionVariants}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="flex gap-2 items-center mt-4"
            variants={itemVariants}
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
          </motion.div>
        </motion.div>
      </EtheralShadow>
      <BottomGradient />
    </section>
  );
};

export default memo(HeroSection);
