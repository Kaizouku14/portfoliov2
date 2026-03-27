"use client";

import { memo, useMemo } from "react";
import { MENU } from "@/constants";
import Animate from "@/components/shared/animate";
import { AnimateContainer, AnimateItem } from "@/components/shared/animate-element";
import TechStackTree from "@/components/shared/tech-stacks";
import SkillCard from "@/components/skill/skill-card";
import { SectionWrapper } from "@/components/layout/section";
import { SKILLS } from "@/data";

const MemoizedSkillCard = memo(SkillCard);

const Skill = () => {
  const skillCards = useMemo(
    () =>
      SKILLS.map((skill) => (
        <MemoizedSkillCard
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          description={skill.description}
        />
      )),
    [],
  );

  return (
    <SectionWrapper id={MENU.SKILL} className="md:min-h-screen">
      <Animate text="Skills" className="text-5xl font-semibold mb-12" />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-12">
        <AnimateContainer
          className="grid md:grid-cols-2 gap-4 md:gap-6"
          delayChildren={0.2}
          staggerChildren={0.1}
          initial="hidden"
          whileInView="visible"
        >
          {skillCards}
        </AnimateContainer>

        <TechStackTree />
      </div>
    </SectionWrapper>
  );
};

export default memo(Skill);
