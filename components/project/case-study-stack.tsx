"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { ProjectCardProps } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Safari } from "@/components/ui/safari";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { AnimateItem } from "@/components/shared/animate-element";
import { motion } from "motion/react";
import { VARIANTS, DURATION } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

function CaseStudyCard({
  project,
  index,
  onSelect,
}: {
  project: ProjectCardProps;
  index: number;
  onSelect: () => void;
}) {
  return (
    <div
      className="case-study-card bg-background sticky top-0 min-h-dvh flex items-center justify-center py-20 px-6 md:px-10"
      data-index={index}
    >
      <div className="w-full max-w-350 mx-auto">
        <div
          onClick={onSelect}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center cursor-pointer group"
        >
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-card transition-shadow duration-500 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_30px_-8px_rgba(99,102,241,0.15)]">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-mono text-primary tracking-wider uppercase">
                Project {`${String(index + 1).padStart(2, "0")}`}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                {project.name}
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-[50ch]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground/80"
                >
                  <tech.icon className="size-3" />
                  {tech.name}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground/50">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            <div
              className="flex gap-3 pt-1"
              onClick={(e) => e.stopPropagation()}
            >
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Live Site
                  <ArrowUpRight className="size-4" />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="size-4" />
                  Source
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDialog({
  project,
  open,
  onClose,
}: {
  project: ProjectCardProps | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-6xl p-0" showCloseButton>
        <ScrollArea className="h-120 md:h-145 rounded-sm md:max-h-[91vh] p-0">
          <div className="grid md:grid-cols-2 gap-0 h-full">
            <div className="bg-muted/30 h-fit md:h-145 p-6 flex items-center justify-center">
              <div className="w-full max-w-xl relative">
                <Carousel className="w-full group">
                  <CarouselContent>
                    {project.media.map((item, idx) => (
                      <CarouselItem key={idx}>
                        {item.type === "video" ? (
                          <Safari
                            url={project.link}
                            videoSrc={item.url}
                            mode="simple"
                          />
                        ) : (
                          <Safari
                            url={project.link}
                            imageSrc={item.url}
                            mode="simple"
                          />
                        )}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.media.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background/90" />
                      <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background/90" />
                    </>
                  )}
                </Carousel>
                {project.collaborators && project.collaborators.length > 0 && (
                  <AnimateItem
                    direction="up"
                    distance={20}
                    duration={0.4}
                    delay={0.4}
                    initial="hidden"
                    animate="visible"
                  >
                    <AvatarCircles
                      avatarUrls={project.collaborators}
                      className="absolute left-1 bottom-1"
                    />
                  </AnimateItem>
                )}
              </div>
            </div>

            <div className="flex flex-col p-8 overflow-y-auto">
              <DialogHeader className="space-y-4 text-left">
                <DialogTitle className="text-2xl md:text-3xl font-bold">
                  {project.name}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-2.5 mt-6 flex-1">
                <h3 className="text-lg font-semibold">Technologies</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={VARIANTS.scaleIn}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        delay: 0.4 + index * 0.05,
                        duration: DURATION.fast,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        className="rounded-md gap-2 px-3 py-1.5"
                        variant="outline"
                      >
                        <tech.icon className="size-4" />
                        <span className="text-sm">{tech.name}</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" className="gap-2">
                        <Github className="size-4" />
                        GitHub
                      </Button>
                    </motion.div>
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="default" className="gap-2">
                        <ExternalLink className="size-4" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </Link>
                )}
              </div>

              <DialogFooter className="mt-8 pt-6 border-t">
                <DialogClose asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button type="button" variant="ghost">
                      Close
                    </Button>
                  </motion.div>
                </DialogClose>
              </DialogFooter>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export function CaseStudyStack({ projects }: { projects: ProjectCardProps[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardProps | null>(null);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    if (reduce || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".case-study-card");

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card, {
          scale: 0.95,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });

        gsap.from(cards[i + 1], {
          scale: 0.95,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="projects" ref={sectionRef} className="relative">
      <div className="relative z-10">
        {projects.map((project, i) => (
          <CaseStudyCard
            key={project.id}
            project={project}
            index={i}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectDialog
        project={selectedProject}
        open={selectedProject !== null}
        onClose={handleClose}
      />
    </section>
  );
}
