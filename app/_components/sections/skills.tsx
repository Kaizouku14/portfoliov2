"use client";

import { MENU } from "@/constants/menu-options";
import Animate from "@/components/animate";
import TechStackTree from "@/components/tech-stacks";
import SkillCard from "@/components/skill-card";
import { SKILLS } from "@/data/data";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section id={MENU.SKILL} className="md:h-screen relative flex flex-col md:px-12 px-8 justify-center">
      <Animate text="Skills" className="text-5xl font-semibold mb-12" />

      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SkillCard name={skill.name} icon={skill.icon} description={skill.description} />
            </motion.div>
          ))}
        </div>
        <TechStackTree />
      </motion.div>
    </section>
  );
};

export default Skill;
