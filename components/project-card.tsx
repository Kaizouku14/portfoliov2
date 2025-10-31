import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export const ProjectCard = ({ title, description, imageSrc, link }: ProjectCardProps) => {
  return (
    <div className="h-96 max-w-md border-border border rounded-md p-4 flex flex-col gap-2">
      <Image
        src={"/me.jpg"}
        alt={title}
        height={60}
        width={60}
        className="h-50 w-full border-border border rounded-sm object-cover "
      />
      <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed" title={description}>
        {description} lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. asperiores.
        Quisquam, voluptatum. asperiores. Quisquam, voluptatum. asperiores.
      </p>
      <div className="flex justify-between items-center pt-2">
        <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-primary transition-colors">
          <span>Live Demo</span>
          <ExternalLink className="size-4" />
        </Button>

        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Button
            variant="default"
            size="sm"
            className="gap-1 bg-primary/90 hover:bg-primary text-primary-foreground transition-all"
          >
            <span>Learn More</span>
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
