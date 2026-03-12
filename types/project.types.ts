import { ElementType } from "react";

export interface Tech {
  name: string;
  icon: ElementType;
}

export interface Collaborator {
  profileUrl: string;
  imageUrl: string;
}

export type MediaType = "image" | "video";

export interface ProjectMedia {
  type: MediaType;
  url: string;
  alt?: string;
}

export interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  link?: string;
  image: string;
  media: ProjectMedia[];
  technologies: Tech[];
  github: string;
  collaborators: Collaborator[];
}
