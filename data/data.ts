import { MousePointerClick, FlaskConical, CodeXml, Paintbrush, Fingerprint } from "lucide-react";
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
    description: "Develop full stack applications using React, Next.js, TypeScript, and Node.js.",
  },
  {
    name: "UI Design",
    icon: Paintbrush,
    description: "Create attractive and clear designs for responsive web applications.",
  },
  {
    name: "Prototyping",
    icon: MousePointerClick,
    description: "Build interactive prototypes to test and showcase ideas.",
  },
  {
    name: "UX Research",
    icon: FlaskConical,
    description: "Understand user needs and preferences through research.",
  },
];
