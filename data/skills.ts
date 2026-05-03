import {
  Fingerprint,
} from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiVercel,
  SiTurso,
  SiPostgresql,
  SiExpress,
  SiNestjs,
  SiDocker,
  SiGithubactions,
  SiRedis,
  SiFirebase,
  SiMongodb,
  SiReactquery,
  SiLinux,
} from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";

import { DrizzleIcon } from "@/components/icons/drizzle-orm";

export const MAIN_STACK = {
  Language: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "Java", icon: RiJavaLine },
  ],
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "TanStack Query", icon: SiReactquery },
  ],
  // Runtime & frameworks — kept lean (4 items max)
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "NestJS", icon: SiNestjs },
    { name: "Express", icon: SiExpress },
    { name: "Better-auth", icon: Fingerprint },
  ],
  // Data layer split from Backend to avoid the 10-item overload
  Database: [
    { name: "Drizzle ORM", icon: DrizzleIcon },
    { name: "Turso (SQLite)", icon: SiTurso },
    { name: "Neon (PostgreSQL)", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "Upstash Redis", icon: SiRedis },
  ],
  "CI/CD": [
    { name: "Git", icon: SiGit },
    { name: "Vercel", icon: SiVercel },
    { name: "Docker", icon: SiDocker },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Linux", icon: SiLinux },
  ],
};
