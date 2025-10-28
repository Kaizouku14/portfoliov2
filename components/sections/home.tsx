"use client";

import { MENU } from "@/constants/menu-options";
import { TypingAnimation } from "../ui/typing-animation";
import { EtheralShadow } from "../ui/etheral-shadow";
import { Button } from "../ui/button";
import { Download, FolderOpen } from "lucide-react";

const Home = () => {
  return (
    <section id={MENU.HOME} className="relative h-screen flex flex-col justify-center items-center w-full text-center">
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-10">
        <h1
          className="text-4xl font-extrabold
                     bg-[linear-gradient(to_right,var(--foreground),var(--muted-foreground))]
                     dark:bg-[linear-gradient(to_right,var(--foreground),var(--primary))]
                     bg-clip-text text-transparent"
        >
          Al-v.
        </h1>
        <div className="text-3xl font-bold">Web Developer</div>
      </header>

      <EtheralShadow sizing="fill" animation={{ scale: 60, speed: 70 }}>
        <div className="flex flex-col items-center p-8 md:w-7xl">
          <h1 className="text-6xl md:text-7xl font-black">Driven by curiosity, powered by passion!</h1>
          <TypingAnimation
            className="mt-2 text-2xl"
            loop
            blinkCursor={true}
            cursorStyle="underscore"
            pauseDelay={2000}
            words={[
              "Building Beautiful, Performant Web Apps",
              "Turning Ideas into Interactive Experiences",
              "Exploring the Space Between Code and Creativity",
            ]}
          />

          <p className="mt-4 text-lg max-w-2xl opacity-80">
            Crafting digital experiences where design meets performance.
          </p>
          <div className="flex gap-2 items-center mt-4">
            <Button className="font-medium flex items-center dark:text-muted-foreground cursor-pointer" variant="ghost">
              <Download className="size-5" />
              <span>Download CV</span>
            </Button>
            <Button className="cursor-pointer">
              <FolderOpen className="size-5" />
              <span>View My Work</span>
            </Button>
          </div>
        </div>
      </EtheralShadow>

      <div className="absolute bottom-0 w-full h-8 bg-[linear-gradient(to_top,oklch(0.9_0_0),transparent)] dark:bg-[linear-gradient(to_top,oklch(0.129_0.042_264.695),transparent)]" />
    </section>
  );
};

export default Home;
