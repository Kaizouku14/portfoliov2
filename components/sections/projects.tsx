"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { VARIANTS, DURATION } from "@/lib/motion";
import { CaseStudyStack } from "@/components/project/case-study-stack";
import { PROJECTS } from "@/data";
import { ProjectCardProps } from "@/types";

const FEATURED_IDS = ["10", "6", "7"];

const sectionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

function MoreProjectCard({ project }: { project: ProjectCardProps }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative border border-border rounded-xl p-5 space-y-4 hover:border-foreground/20 transition-colors cursor-pointer">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-card">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight">{project.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-secondary text-secondary-foreground/70"
              >
                <tech.icon className="size-2.5" />
                {tech.name}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-1" onClick={(e) => e.stopPropagation()}>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                Live <ArrowUpRight className="size-3" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="size-3" /> Code
              </Link>
            )}
          </div>
        </div>
      </DialogTrigger>

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
                          <Safari url={project.link} videoSrc={item.url} mode="simple" />
                        ) : (
                          <Safari url={project.link} imageSrc={item.url} mode="simple" />
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
                    <AvatarCircles avatarUrls={project.collaborators} className="absolute left-1 bottom-1" />
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
                      transition={{ delay: 0.4 + index * 0.05, duration: DURATION.fast }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge className="rounded-md gap-2 px-3 py-1.5" variant="outline">
                        <tech.icon className="size-4" />
                        <span className="text-sm">{tech.name}</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="gap-2">
                        <Github className="size-4" />
                        GitHub
                      </Button>
                    </motion.div>
                  </Link>
                )}
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

const Projects = () => {
  const reduce = useReducedMotion();

  const { featured, more } = useMemo(() => {
    const featured = PROJECTS.filter((p) => FEATURED_IDS.includes(p.id));
    const more = PROJECTS.filter((p) => !FEATURED_IDS.includes(p.id));
    return { featured, more };
  }, []);

  return (
    <section className="relative mt-24 md:mt-32">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto mb-16 md:mb-20">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionTitleVariants}
          className="space-y-3"
        >
          <p className="text-xs font-mono text-primary tracking-wider uppercase">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Recent projects
          </h2>
          <p className="text-muted-foreground max-w-[40ch] text-sm sm:text-base">
            A curated selection of applications I&apos;ve built — from solo projects to team collaborations.
          </p>
        </motion.div>
      </div>

      <CaseStudyStack projects={featured} />

      {more.length > 0 && (
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto pt-32 md:pt-40">
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionTitleVariants}
            className="space-y-3 mb-10"
          >
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              Archive
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              More projects
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {more.map((project, i) => (
              <motion.div
                key={project.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                <MoreProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
