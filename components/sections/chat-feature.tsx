"use client";

import { m, useReducedMotion } from "motion/react";
import { BotMessageSquare, Sparkles } from "lucide-react";
import { useChatStore } from "@/store/use-chat.store";

export function ChatFeatureSection() {
  const reduce = useReducedMotion();
  const { toggleChat } = useChatStore();

  return (
    <section className="px-6 mt-6  md:px-10 py-32 md:py-40 border-t border-border">
      <div className="max-w-350 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <m.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-xs font-mono text-primary tracking-wider uppercase">
              Unique Feature
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Want to know more?
              <br />
              <span className="text-primary">Just ask.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[45ch]">
              I built an AI that knows everything about my work, experience, and
              skills. Ask it anything — it&apos;s like having a conversation
              with me without the small talk.
            </p>

            <button
              type="button"
              onClick={toggleChat}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                bg-primary text-primary-foreground font-medium text-sm
                hover:brightness-110 transition-all
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Sparkles className="size-4" />
              Open AI Chat
            </button>
          </m.div>

          <m.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <BotMessageSquare className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Al-v&apos;s AI</p>
                  <p className="text-xs text-muted-foreground">Always online</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <BotMessageSquare className="size-3 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground bg-secondary rounded-2xl rounded-tl-sm px-4 py-2.5">
                    Hello! I&apos;m Al-v. How can I help you today?
                  </p>
                </div>

                <div className="flex gap-3 justify-end">
                  <p className="text-sm bg-primary/10 text-foreground rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                    What projects has Al-v built?
                  </p>
                  <div className="size-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      A
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <BotMessageSquare className="size-3 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground bg-secondary rounded-2xl rounded-tl-sm px-4 py-2.5">
                    Al-v has built 10+ projects including ScholarLink (a
                    scholarship platform for Bulacan State University), Sail (a
                    real-time multiplayer word game), Aurafy (an AI music &
                    study companion), and MediCare (an AI-powered caregiving
                    platform). Which one would you like to know more about?
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 size-24 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </m.div>
        </div>
      </div>
    </section>
  );
}
