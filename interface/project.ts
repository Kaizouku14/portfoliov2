import { IconType } from "react-icons/lib";

interface Tech {
  name: string;
  icon: IconType;
}

interface Collaborator {
  profile?: string;
  name: string;
  role: string;
  social: string;
}

export interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  link?: string;
  image: string;
  technologies: Tech[];
  github: string;
  collaborators: Collaborator[];
}
