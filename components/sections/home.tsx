"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { heroContent } from "@/data";
import { MENU, SITE_CONFIG } from "@/constants";

const codeLines = [
  { text: "import { Engineer } from '@al-v/dev'", delay: 0 },
  { text: "", delay: 0.15 },
  { text: "const stack = {", delay: 0.3 },
  { text: "  frontend: ['React', 'Next.js', 'Tailwind'],", delay: 0.45, indent: true },
  { text: "  backend:  ['Node.js', 'NestJS', 'tRPC'],", delay: 0.6, indent: true },
  { text: "  database: ['PostgreSQL', 'SQLite', 'Redis'],", delay: 0.75, indent: true },
  { text: "  cloud:    ['Vercel', 'Docker', 'AWS'],", delay: 0.9, indent: true },
  { text: "}", delay: 1.05 },
  { text: "", delay: 1.15 },
  { text: "// Building performant,", delay: 1.3, comment: true },
  { text: "// human-centered software.", delay: 1.4, comment: true },
];

function AnimatedCodeBlock() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl blur-2xl" />
      <pre className="relative font-mono text-[13px] leading-[1.7] bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 overflow-x-auto">
        <code>
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: line.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`whitespace-pre ${line.comment ? "text-muted-foreground italic" : "text-foreground/80"} ${line.indent ? "pl-6" : ""}`}
            >
              <span className="text-muted-foreground select-none mr-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              {line.comment ? (
                <span className="text-career-highlight/70">// {line.text.replace('// ', '')}</span>
              ) : (
                <span>{line.text}</span>
              )}
            </motion.div>
          ))}
        </code>
      </pre>
    </div>
  );
}

const HeroSection = () => {
  const projectsRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const handleViewWork = useCallback(() => {
    if (!projectsRef.current) {
      projectsRef.current = document.getElementById(MENU.PROJECTS);
    }
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 md:pt-28 pb-16">
          {/* Left: Content */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-mono text-primary tracking-wide"
              >
                {SITE_CONFIG.name}
              </motion.p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-balance">
                {heroContent.title}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[45ch]">
                {heroContent.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <motion.button
                onClick={handleViewWork}
                whileHover={reduce ? {} : { scale: 1.02 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  bg-primary text-primary-foreground font-medium text-sm
                  hover:brightness-110 transition-all
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Projects
                <ArrowRight className="size-4" />
              </motion.button>

              <motion.a
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
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <AnimatedCodeBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
