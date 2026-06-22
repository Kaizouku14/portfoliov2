"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { contactContent, SITE_CONFIG } from "@/constants";
import Link from "next/link";

export function ContactSection() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="px-6 md:px-10 py-32 md:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-xs font-mono text-primary tracking-wider uppercase">
              Contact
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {contactContent.tagline}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[45ch]">
              {contactContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`mailto:${contactContent.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  bg-primary text-primary-foreground font-medium text-sm
                  hover:brightness-110 transition-all
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="size-4" />
                Send an email
              </a>

              <a
                href="https://github.com/Kaizouku14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  border border-border text-sm font-medium
                  hover:border-foreground/20 hover:bg-accent transition-all"
              >
                GitHub
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/al-v-manda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  border border-border text-sm font-medium
                  hover:border-foreground/20 hover:bg-accent transition-all"
              >
                LinkedIn
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
