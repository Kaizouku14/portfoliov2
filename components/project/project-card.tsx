import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { ProjectCardProps } from "@/types";
import { AnimateItem } from "@/components/shared/animate-element";
import Link from "next/link";
import ProjectInfoDialog from "./project-dialog";

export const ProjectCard = ({ data }: { data: ProjectCardProps }) => {
  return (
    <AnimateItem
      className="md:h-88 w-75 md:w-105 p-4 flex flex-col gap-2 "
      layout
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      direction="up"
      distance={50}
      duration={0.8}
    >
      <ProjectInfoDialog data={data} />
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col gap-2 md:h-30 h-20">
          <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors truncate w-50 md:w-full">
            {data.name}
          </h3>
          <p
            className="text-sm text-muted-foreground line-clamp-2 leading-relaxed"
            title={data.description}
          >
            {data.description}
          </p>
        </div>
        <div className="flex gap-2">
          {data.github && (
            <Link href={data.github} target="_blank">
              <Button size="icon" variant="outline" className="size-8">
                <Github className="size-4" />
              </Button>
            </Link>
          )}
          {data.link && (
            <Link href={data.link} target="_blank">
              <Button size="icon" variant="outline" className="size-8">
                <ExternalLink className="size-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </AnimateItem>
  );
};
