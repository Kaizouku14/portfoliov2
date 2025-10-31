import {
  MousePointerClick,
  FlaskConical,
  CodeXml,
  Paintbrush,
  Fingerprint,
  Database,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiGit, SiVercel } from "react-icons/si";
import { DrizzleIcon } from "@/components/icons/drizzle-orm";

export const heroHeader = {
  name: "Al-v.",
  profession: "Web Developer",
};

export const heroContent = {
  title: "Driven by curiosity, powered by passion!",
  typingWords: [
    "Building Beautiful, Performant Web Apps",
    "Turning Ideas into Interactive Experiences",
    "Exploring the Space Between Code and Creativity",
  ],
  description: "Crafting digital experiences where design meets performance.",
};

export const MAIN_STACK = {
  Language: [{ name: "TypeScript", icon: SiTypescript }],
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Drizzle ORM", icon: DrizzleIcon },
    { name: "Better-auth", icon: Fingerprint }, // placeholder
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
    description: "Develop scalable web applications using React, Next.js, TypeScript, and Node.js.",
  },
  {
    name: "API & Database Design",
    icon: Database,
    description: "Build efficient REST and tRPC APIs with secure data models using Drizzle ORM.",
  },
  {
    name: "UI/UX Design",
    icon: Paintbrush,
    description: "Design user-centered interfaces with modern, accessible, and responsive layouts.",
  },
  {
    name: "Authentication & Security",
    icon: ShieldCheck,
    description: "Implement secure user authentication and authorization using Better Auth and modern standards.",
  },
];
