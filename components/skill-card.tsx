import { motion } from "framer-motion";
import { ElementType } from "react";

interface SkillCardProps {
  name: string;
  icon: ElementType;
  description: string;
}

const SkillCard = ({ name, icon: Icon, description }: SkillCardProps) => {
  return (
    <motion.div
      className="p-4 h-50 w-80 flex flex-col gap-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="size-6 text-primary" />
      <span className="text-2xl font-bold">{name}</span>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default SkillCard;
