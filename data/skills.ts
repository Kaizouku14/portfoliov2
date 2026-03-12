import {
  CodeXml,
  Paintbrush,
  Fingerprint,
  Database,
  ShieldCheck,
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
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Nest.js", icon: SiNestjs },
    { name: "Drizzle ORM", icon: DrizzleIcon },
    { name: "Better-auth", icon: Fingerprint },
    { name: "Turso (SQLite)", icon: SiTurso },
    { name: "Neon (PostgreSQL)", icon: SiPostgresql },
  ],
  "CI/CD": [
    { name: "Git", icon: SiGit },
    { name: "Vercel", icon: SiVercel },
  ],
};

export const SKILLS = [
  {
    name: "Full Stack Development",
    icon: CodeXml,
    description:
      "Building full-stack web applications with React, Next.js, TypeScript, and Node.js.",
  },
  {
    name: "API & Database Design",
    icon: Database,
    description:
      "Designing and building REST and tRPC APIs, backed by solid database schemas using Drizzle ORM.",
  },
  {
    name: "UI/UX Design",
    icon: Paintbrush,
    description:
      "Creating clean, responsive, and accessible user interfaces that prioritize user experience.",
  },
  {
    name: "Authentication & Security",
    icon: ShieldCheck,
    description:
      "Implementing secure authentication flows using modern libraries like Better Auth.",
  },
];
