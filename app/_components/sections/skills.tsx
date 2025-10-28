"use client";

import { MENU } from "@/constants/menu-options";
import Animate from "@/components/animate";
import TechStackTree from "@/components/tech-stacks";
import SkillCard from "@/components/skill-card";
import { SKILLS } from "@/data/data";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section id={MENU.SKILL} className="py-16 relative flex flex-col">
      <Animate text="Skills" className="text-5xl font-semibold mb-12" />

      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 gap-6">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <SkillCard name={skill.name} icon={skill.icon} description={skill.description} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex-1 max-w-md w-full p-4 bg-card rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TechStackTree />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skill;
