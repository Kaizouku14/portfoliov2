import { CodeXml, Paintbrush, Fingerprint, Database, ShieldCheck } from "lucide-react";
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
} from "react-icons/si";
import { DrizzleIcon } from "@/components/icons/drizzle-orm";
import { ProjectCardProps } from "@/interface/project";

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
    { name: "Turso", icon: SiTurso },
    { name: "Neon", icon: SiPostgresql },
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

export const PROJECTS: ProjectCardProps[] = [
  {
    id: "1",
    name: "ScholarLink",
    description:
      "A Unified platform for scholarship and internship management system for Bulacan State University Sarmiento Campus, enabling seamless application and tracking processes.",
    link: "https://sarm-scholar-link.vercel.app",
    image: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Drizzle ORM", icon: DrizzleIcon },
      { name: "Turso", icon: SiTurso },
      { name: "Better-auth", icon: Fingerprint },
      { name: "Tailwind CSS", icon: SiReact },
    ],
    github: "https://github.com/Kaizouku14/scholar-link",
    collaborators: [
      {
        name: "Al-v Manda",
        role: "Main Developer & Designer",
        social: "https://www.linkedin.com/in/alv-manda/",
      },
    ],
  },
  {
    id: "2",
    name: "Plantaria",
    description: "A Web3-based urban farming platform developed for the PSITE RAITE 2024 Hackathon.",
    image: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiReact },
    ],
    github: "https://github.com/Kaizouku14/plantaria",
    collaborators: [
      {
        profile: "/me.jpg",
        name: "Al-v Manda",
        role: "Frontend Developer",
        social: "https://www.linkedin.com/in/alvin-manda/",
      },
    ],
  },
  {
    id: "3",
    name: "SJDM Christian Ministry RMS ",
    description: "A management system for Christian ministries church ",
    image: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Drizzle ORM", icon: DrizzleIcon },
      { name: "Turso", icon: SiTurso },
      { name: "Better-auth", icon: Fingerprint },
      { name: "Tailwind CSS", icon: SiReact },
    ],
    github: "https://github.com/Kaizouku14/plantaria",
    collaborators: [
      {
        profile: "/me.jpg",
        name: "Al-v Manda",
        role: "Frontend Developer",
        social: "https://www.linkedin.com/in/alvin-manda/",
      },
    ],
  },
  {
    id: "4",
    name: "InnControl",
    description: "A management system for Christian ministries church ",
    link: "https://plantaria.vercel.app",
    image: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Neon", icon: SiPostgresql },
      { name: "Drizzle ORM", icon: DrizzleIcon },
      { name: "Better-auth", icon: Fingerprint },
      { name: "Tailwind CSS", icon: SiReact },
    ],
    github: "https://github.com/Kaizouku14/plantaria",
    collaborators: [
      {
        profile: "/me.jpg",
        name: "Al-v Manda",
        role: "Frontend Developer",
        social: "https://www.linkedin.com/in/alvin-manda/",
      },
    ],
  },
  {
    id: "5",
    name: "Kanban-board",
    description: "A management system for Christian ministries church ",
    link: "https://plantaria.vercel.app",
    image: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Drizzle ORM", icon: DrizzleIcon },
      { name: "Better-auth", icon: Fingerprint },
      { name: "Tailwind CSS", icon: SiReact },
    ],
    github: "https://github.com/Kaizouku14/plantaria",
    collaborators: [
      {
        profile: "/me.jpg",
        name: "Al-v Manda",
        role: "Frontend Developer",
        social: "https://www.linkedin.com/in/alvin-manda/",
      },
    ],
  },
  {
    id: "6",
    name: "prompt-chain",
    description: "A management system for Christian ministries church ",
    link: "https://plantaria.vercel.app",
    image: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Drizzle ORM", icon: DrizzleIcon },
      { name: "Better-auth", icon: Fingerprint },
      { name: "Tailwind CSS", icon: SiReact },
    ],
    github: "https://github.com/Kaizouku14/plantaria",
    collaborators: [
      {
        profile: "/me.jpg",
        name: "Al-v Manda",
        role: "Frontend Developer",
        social: "https://www.linkedin.com/in/alvin-manda/",
      },
    ],
  },
];
