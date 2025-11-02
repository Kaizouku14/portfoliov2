"use client";

import Animate from "@/components/animate";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { MENU } from "@/constants/menu-options";
import { PROJECTS } from "@/data/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const view = useRef<HTMLButtonElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMoreButton = () => setSeeMore((prev) => !prev);

  useEffect(() => {
    if (seeMore) {
      const timer = setTimeout(() => {
        view.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [seeMore]);

  useEffect(() => {
    const checkOverflow = () => {
      const el = containerRef.current;
      if (!el) return;
      setIsOverflowing(el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth);
    };

    const handleResize = () => requestAnimationFrame(checkOverflow);

    window.addEventListener("resize", handleResize);
    checkOverflow();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id={MENU.PROJECTS} className="h-auto flex flex-col md:px-12 px-8 py-4 justify-center ">
      <Animate text="Projects" className="text-5xl font-semibold mb-12" />

      <div className="relative">
        <motion.div
          ref={containerRef}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden justify-center gap-6 p-4",
            seeMore ? "max-h-none" : "max-h-112",
          )}
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} data={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        {!seeMore && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>

      {isOverflowing && (
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            ref={view}
            onClick={handleSeeMoreButton}
            className={cn(
              "flex items-center gap-2 px-8 py-2.5 rounded-full font-semibold transition-all duration-300",
              "bg-linear-to-r from-primary/80 to-primary text-primary-foreground shadow-sm",
              "hover:from-primary hover:to-primary/90 hover:scale-[1.05] active:scale-[0.98]",
              "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
            )}
          >
            {seeMore ? (
              <>
                <ArrowUp className="size-4 animate-bounce-slow" />
                <span>See Less</span>
              </>
            ) : (
              <>
                <ArrowDown className="size-4 animate-bounce-slow" />
                <span>See More</span>
              </>
            )}
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
