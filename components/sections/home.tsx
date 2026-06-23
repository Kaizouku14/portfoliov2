"use client";

import { useCallback, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import { heroContent } from "@/data";
import { MENU, SITE_CONFIG } from "@/constants";
import { HeroParticles } from "@/components/canvas/hero-particles";

const HeroSection = () => {
  const projectsRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const handleViewWork = useCallback(() => {
    if (!projectsRef.current) {
      projectsRef.current = document.getElementById(MENU.PROJECTS);
    }
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-dvh flex items-center px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/2 to-transparent pointer-events-none" />

      <div className="w-full max-w-350 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 pb-16">
          <m.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <m.p
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-mono text-primary tracking-wide"
              >
                {SITE_CONFIG.name}
              </m.p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-balance">
                {heroContent.title}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[45ch]">
                {heroContent.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <m.button
                onClick={handleViewWork}
                whileHover={reduce ? {} : { scale: 1.02 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  bg-primary text-primary-foreground font-medium text-sm cursor-pointer
                  hover:brightness-110 transition-all
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Projects
                <ArrowRight className="size-4" />
              </m.button>

              <m.a
                href="/CV.pdf"
                target="_blank"
                whileHover={reduce ? {} : { scale: 1.02 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  border border-border text-sm font-medium
                  hover:border-foreground/20 hover:bg-accent transition-all
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Resume
              </m.a>
            </div>
          </m.div>

          <m.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block h-100"
          >
            <div className="absolute inset-0">
              <HeroParticles />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
