import { cn } from "@/lib/utils";
import { TextAnimate } from "./ui/text-animate";

interface AnimateProps {
  text: string;
  className?: string;
  splitBy?: "text" | "word" | "character" | "line";
  delay?: number;
}

export const Animate = ({ text, splitBy = "character", delay = 1, className }: AnimateProps) => {
  return (
    <TextAnimate by={splitBy} delay={delay} once className={cn(className)}>
      {text}
    </TextAnimate>
  );
};
