"use client";

import { useEffect, useRef, useState, useCallback, useMemo, memo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import Animate from "@/components/shared/animate";
import { ProjectCard } from "@/components/project/project-card";
import { Button } from "@/components/ui/button";
import { MENU } from "@/constants";
import { PROJECTS } from "@/data";
import { cn } from "@/lib/utils";

const GradientOverlay = memo(() => (
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
));

GradientOverlay.displayName = "GradientOverlay";

const SeeMoreContent = memo(() => (
  <>
    <ArrowDown className="size-4 animate-bounce-slow" />
    <span>See More</span>
  </>
));

SeeMoreContent.displayName = "SeeMoreContent";

const SeeLessContent = memo(() => (
  <>
    <ArrowUp className="size-4 animate-bounce-slow" />
    <span>See Less</span>
  </>
));

SeeLessContent.displayName = "SeeLessContent";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewButtonRef = useRef<HTMLButtonElement | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const [isOverflowing, setIsOverflowing] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMoreButton = useCallback(() => {
    setSeeMore((prev) => !prev);
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      const el = containerRef.current;
      if (!el) return;

      const hasOverflow =
        el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;

      setIsOverflowing((prev) => (prev !== hasOverflow ? hasOverflow : prev));
    };

    checkOverflow();

    resizeObserverRef.current = new ResizeObserver(() => {
      requestAnimationFrame(checkOverflow);
    });

    if (containerRef.current) {
      resizeObserverRef.current.observe(containerRef.current);
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!seeMore) return;

    const timer = setTimeout(() => {
      viewButtonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [seeMore]);

  const containerClassName = useMemo(
    () =>
      cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden justify-center gap-2 md:gap-6 md:p-4",
        seeMore ? "max-h-none" : "max-h-112",
      ),
    [seeMore],
  );

  const buttonClassName = useMemo(
    () =>
      cn(
        "flex items-center gap-2 px-8 py-2.5 rounded-full font-semibold transition-all duration-300",
        "bg-linear-to-r from-primary/80 to-primary text-primary-foreground shadow-sm",
        "hover:from-primary hover:to-primary/90 hover:scale-[1.05] active:scale-[0.98]",
        "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
      ),
    [],
  );

  return (
    <section
      id={MENU.PROJECTS}
      className="h-auto flex flex-col md:px-12 px-8 py-4 justify-center"
    >
      <Animate text="Projects" className="text-5xl font-semibold mb-12" />

      <div className="relative">
        <motion.div
          ref={containerRef}
          className={containerClassName}
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id || index} data={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {!seeMore && <GradientOverlay />}
      </div>

      {isOverflowing && (
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            ref={viewButtonRef}
            onClick={handleSeeMoreButton}
            className={buttonClassName}
          >
            {seeMore ? <SeeLessContent /> : <SeeMoreContent />}
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default memo(Projects);
