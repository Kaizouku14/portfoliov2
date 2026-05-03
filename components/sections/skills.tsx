"use client";

import { memo } from "react";
import { MENU } from "@/constants";
import Animate from "@/components/shared/animate";
import TechStackTree from "@/components/shared/tech-stacks";
import { ExperienceTimeline } from "@/components/skill/experience-card";
import { SectionWrapper } from "@/components/layout/section";
import { EXPERIENCE } from "@/data";

const Skill = () => {
  return (
    <SectionWrapper id={MENU.SKILL} className="md:min-h-screen">
      <Animate text="Skills & Experience" className="text-5xl font-semibold mb-12" />

      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-7xl gap-8 md:gap-16">
        <ExperienceTimeline items={EXPERIENCE} />
        <TechStackTree />
      </div>
    </SectionWrapper>
  );
};

export default memo(Skill);
