import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { ProjectCardProps } from "@/interface/project";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectInfoDialog from "./project-dialog";

export const ProjectCard = ({ data }: { data: ProjectCardProps }) => {
  return (
    <motion.div
      className="h-88 w-105 p-4 flex flex-col gap-2"
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <ProjectInfoDialog data={data} />

      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col gap-2 h-30 ">
          <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {data.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed" title={data.description}>
            {data.description}
          </p>
        </div>
        <Link href={data.github} target="_blank">
          <Button size="icon" variant="outline">
            <Github className="size-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
