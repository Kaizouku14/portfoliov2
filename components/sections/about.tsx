"use client";

import { motion, type Variants, useReducedMotion } from "motion/react";
import { aboutContent } from "@/data";

const statVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="px-6 md:px-10 py-32 md:py-40">
      <div className="max-w-350 mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-1">
            <motion.p
              initial={reduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-mono text-primary tracking-wider uppercase sticky top-28"
            >
              About
            </motion.p>
          </div>

          {/* Right content */}
          <div className="lg:col-span-4 space-y-12">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-[20ch]"
            >
              {aboutContent.title}
            </motion.h2>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[55ch]"
            >
              {aboutContent.body}
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              {aboutContent.highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial={reduce ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={statVariants}
                  className="space-y-1.5"
                >
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
