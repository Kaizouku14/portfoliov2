"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ProjectCardProps } from "@/interface/project";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PAGE_ROUTE } from "@/constants/page-route";

export const ProjectCard = ({ id, name, description, image, link }: ProjectCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      className="h-96 max-w-md border-border border rounded-md p-4 flex flex-col gap-3"
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src={image}
        alt={name}
        height={60}
        width={60}
        className="h-50 w-full border-border border rounded-sm object-cover "
      />
      <div className="flex flex-col gap-2 h-30">
        <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed" title={description}>
          {description}
        </p>
      </div>

      <div className={cn("flex w-full  items-center pt-2", link ? "justify-between" : "justify-end")}>
        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="size-4" />
            </Button>
          </Link>
        )}

        <Button
          variant="default"
          size="sm"
          className="gap-1 bg-primary/90 hover:bg-primary text-primary-foreground transition-all"
          onClick={() => router.push(`${PAGE_ROUTE.PROJECT}/${id}`)}
        >
          <span>Learn More</span>
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </motion.div>
  );
};
