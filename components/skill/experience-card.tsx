"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { AnimateItem } from "@/components/shared/animate-element";
import { ExperienceItem } from "@/data";

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <AnimateItem
      direction="up"
      distance={40}
      duration={0.7}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center size-9 rounded-full bg-primary/10 border border-primary/20 shrink-0">
          <Icon className="size-4 text-primary" />
        </div>
        <div className="w-px flex-1 bg-border mt-2" />
      </div>

      <div className="pb-8 pt-1">
        <p className="text-xs text-muted-foreground mb-1">{item.period}</p>
        <h3 className="font-bold text-base leading-tight">{item.role}</h3>
        <p className="text-sm text-primary font-medium mb-3">{item.company}</p>
        <ul className="space-y-2">
          {item.highlights.map((point, i) => (
            <li key={i} className="text-sm text-muted-foreground flex gap-2">
              <span className="text-primary shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimateItem>
  );
};

export const ExperienceTimeline = ({
  items,
}: {
  items: ExperienceItem[];
}) => {
  return (
    <div className="flex flex-col w-full md:max-w-2xl">
      {items.map((item, i) => (
        <ExperienceCard key={i} item={item} />
      ))}
    </div>
  );
};

export default ExperienceCard;
