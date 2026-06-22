"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MAIN_STACK, EXPERIENCE } from "@/data";

function SkillCategory({
  category,
  items,
  index,
}: {
  category: string;
  items: { name: string; icon: React.ComponentType<{ className?: string }> }[];
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-3"
    >
      <p className="text-xs font-mono text-primary tracking-wider uppercase">
        {category}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech.name}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-secondary text-secondary-foreground/80 border border-border/50"
          >
            <tech.icon className="size-3.5" />
            {tech.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceEntry({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[number];
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 pb-10 last:pb-0 border-l border-border"
    >
      <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
      <div className="space-y-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-semibold text-sm">{item.role}</h3>
          <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
        </div>
        <p className="text-xs text-primary font-medium">{item.company}</p>
        <ul className="space-y-1.5">
          {item.highlights.map((point, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary/40 mt-1.5 shrink-0">—</span>
              <span className="mt-2">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const Skills = () => {
  const categories = useMemo(
    () => Object.entries(MAIN_STACK),
    [],
  );

  return (
    <section className="px-6 md:px-10 py-32 md:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Experience */}
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-mono text-primary tracking-wider uppercase">
                Timeline
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Experience
              </h2>
            </div>
            <div>
              {EXPERIENCE.map((item, i) => (
                <ExperienceEntry key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-mono text-primary tracking-wider uppercase">
                Toolbox
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Technologies & tools
              </h2>
            </div>
            <div className="space-y-8">
              {categories.map(([category, items], i) => (
                <SkillCategory
                  key={category}
                  category={category}
                  items={items}
                  index={i}
                />
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Skills;
