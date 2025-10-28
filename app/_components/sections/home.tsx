"use client";

import { MENU } from "@/constants/menu-options";
import  HeroHeader  from "@/app/_components/header";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { heroContent } from "@/data/data";

const HeroSection = () => {
  return (
    <section id={MENU.HOME} className="relative h-170 md:h-screen flex flex-col justify-center items-center w-full text-center">
      <HeroHeader />

      <EtheralShadow sizing="fill" animation={{ scale: 60, speed: 70 }}>
        <motion.div
          className="flex flex-col items-center md:p-8 md:w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">{heroContent.title}</h1>

          <TypingAnimation
            className="mt-2 text-base sm:text-2xl"
            loop
            blinkCursor
            cursorStyle="underscore"
            pauseDelay={2000}
            words={heroContent.typingWords}
          />

          <motion.p
            className="mt-4 text-sm text-gray-600 md:text-xl max-w-xl sm:max-w-2xl opacity-80 dark:text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="flex gap-2 items-center mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button className="flex items-center dark:text-muted-foreground" variant="ghost">
              <Download className="size-5" />
              <span className="font-semibold">Download CV</span>
            </Button>
            <Button onClick={() => document.getElementById(MENU.PROJECTS)?.scrollIntoView({ behavior: "smooth" })}>
              <FolderOpen className="size-5" />
              <span className="font-semibold">View My Work</span>
            </Button>
          </motion.div>
        </motion.div>
      </EtheralShadow>

      <div className="absolute bottom-0 w-full h-8 bg-[linear-gradient(to_top,oklch(0.9_0_0),transparent)] dark:bg-[linear-gradient(to_top,oklch(0.129_0.042_264.695),transparent)]" />
    </section>
  );
};

export default HeroSection;
