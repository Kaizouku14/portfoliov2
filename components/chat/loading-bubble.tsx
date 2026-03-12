import { Profile } from "@/components/shared/profile";
import { motion } from "motion/react";

const LoadingBubble = () => {
  return (
    <div className="flex items-start gap-3">
      <Profile />
      <div className="bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 text-foreground rounded-2xl rounded-tl-none px-4 py-3 shadow-sm mt-1">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="size-1.5 bg-primary/40 rounded-full"
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingBubble;
