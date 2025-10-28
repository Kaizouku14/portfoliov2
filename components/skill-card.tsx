import { ElementType } from "react";

interface SkillCardProps {
  name: string;
  icon: ElementType;
  description: string;
}

const SkillCard = ({ name, icon: Icon, description }: SkillCardProps) => {
  return (
    <div className="p-4 h-50 w-80 flex flex-col gap-2">
      <Icon className="size-6 text-primary" />
      <span className="text-2xl font-bold">{name}</span>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default SkillCard;
