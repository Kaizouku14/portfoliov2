import { ElementType } from "react";
import { AnimateItem } from "@/components/shared/animate-element";

interface SkillCardProps {
  name: string;
  icon: ElementType;
  description: string;
}

const SkillCard = ({ name, icon: Icon, description }: SkillCardProps) => {
  return (
    <AnimateItem
      className="p-4 h-50 w-80 flex flex-col gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      direction="up"
      distance={50}
      duration={0.8}
    >
      <Icon className="size-6 text-primary" />
      <span className="text-2xl font-bold">{name}</span>
      <p className="text-muted-foreground">{description}</p>
    </AnimateItem>
  );
};

export default SkillCard;
