import { MousePointerClick, FlaskConical, CodeXml, Paintbrush } from "lucide-react";

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
  Language: ["TypeScript"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Drizzle ORM", "Better-auth"],
  "CI/CD": ["Git", "Vercel"],
};

export const SKILLS = [
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
  {
    name: "Full Stack Development",
    icon: CodeXml,
    description: "Develop full stack applications using React, Next.js, TypeScript, and Node.js.",
  },
];
