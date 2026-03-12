"use client";

import { memo, useMemo } from "react";
import { motion, type Variants } from "motion/react";
import { MENU } from "@/constants";
import Animate from "@/components/shared/animate";
import TechStackTree from "@/components/shared/tech-stacks";
import SkillCard from "@/components/skill/skill-card";
import { SKILLS } from "@/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const MemoizedSkillCard = memo(SkillCard);

const Skill = () => {
  const skillCards = useMemo(
    () =>
      SKILLS.map((skill) => (
        <motion.div key={skill.name} variants={itemVariants}>
          <MemoizedSkillCard
            name={skill.name}
            icon={skill.icon}
            description={skill.description}
          />
        </motion.div>
      )),
    [],
  );

  return (
    <section
      id={MENU.SKILL}
      className="md:h-screen relative flex flex-col md:px-12 px-8 justify-center"
    >
      <Animate text="Skills" className="text-5xl font-semibold mb-12" />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-12">
        <motion.div
          className="grid md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCards}
        </motion.div>

        <TechStackTree />
      </div>
    </section>
  );
};

export default memo(Skill);
