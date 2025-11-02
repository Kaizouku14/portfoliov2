import { IconType } from "react-icons/lib";

interface Tech {
  name: string;
  icon: IconType;
}

interface Collaborator {
  profileUrl: string;
  imageUrl: string;
}

export interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  link?: string;
  image: string;
  preview?: string;
  video?: string;
  technoWlogies: Tech[];
  github: string;
  collaborators: Collaborator[];
}
