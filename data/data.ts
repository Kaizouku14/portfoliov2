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
  SiSvelte,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiVercel,
  SiTurso,
  SiPostgresql,
  SiLucia,
  SiVite,
  SiLangchain,
  SiEthereum,
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
    description:
      "Develop scalable web applications using React, Next.js, TypeScript, and Node.js.",
  },
  {
    name: "API & Database Design",
    icon: Database,
    description:
      "Build efficient REST and tRPC APIs with secure data models using Drizzle ORM.",
  },
  {
    name: "UI/UX Design",
    icon: Paintbrush,
    description:
      "Design user-centered interfaces with modern, accessible, and responsive layouts.",
  },
  {
    name: "Authentication & Security",
    icon: ShieldCheck,
    description:
      "Implement secure user authentication and authorization using Better Auth and modern standards.",
  },
];

export const PROJECTS: ProjectCardProps[] = [
  {
    id: "1",
    name: "ScholarLink",
    description:
      "A centralized scholarship and internship management system for Bulacan State University Sarmiento Campus. It simplifies applications, tracking, and administration for students.",
    link: "https://sarm-scholar-link.vercel.app",
    image: "/scholar-link-logo.png",
    preview: "/scholar-link.png",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Drizzle ORM", icon: DrizzleIcon },
      { name: "Turso", icon: SiTurso },
      { name: "Better-auth", icon: Fingerprint },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/Kaizouku14/scholar-link",
    collaborators: [
      {
        profileUrl: "https://github.com/Kaizouku14",
        imageUrl: "/me.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/jocelchua.balotabot",
        imageUrl: "/jocel.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/karlgt.paguio.9",
        imageUrl: "/karl.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/itsSuprem0",
        imageUrl: "/rojie.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/avoidtor",
        imageUrl: "/placeholder.png",
      },
    ],
  },
  {
    id: "2",
    name: "Plantaria",
    description:
      "A Web3 urban farming platform built for the PSITE RAITE 2024 Hackathon. It promotes sustainable agriculture through blockchain-based transparency and user collaboration.",
    image: "/plantaria.png",
    video: "/plantaria.mp4",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Web3", icon: SiEthereum },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/pagzone/plantaria",
    collaborators: [
      {
        profileUrl: "https://github.com/Kaizouku14",
        imageUrl: "/me.jpg",
      },
      {
        profileUrl: "https://github.com/xyugen",
        imageUrl: "https://github.com/xyugen.png",
      },
      {
        profileUrl: "https://github.com/darvey-trinidad",
        imageUrl: "https://github.com/darvey-trinidad.png",
      },
      {
        profileUrl: "https://github.com/Dochiibells",
        imageUrl: "https://github.com/Dochiidev.png",
      },
      {
        profileUrl: "https://www.facebook.com/joml.amv",
        imageUrl: "/jomel.jpg",
      },
    ],
  },
  {
    id: "3",
    name: "SJDM Christian Ministry RMS",
    description:
      "A church management system for SJDM Christian Ministries that helps organize members, track events, and manage ministry operations efficiently.",
    image: "/globe.svg",
    preview: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Drizzle ORM", icon: DrizzleIcon },
      { name: "Turso", icon: SiTurso },
      { name: "Better-auth", icon: Fingerprint },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/xyugen/sjdmchristianministries-rms",
    collaborators: [
      {
        profileUrl: "https://github.com/Kaizouku14",
        imageUrl: "/me.jpg",
      },
      {
        profileUrl: "https://github.com/xyugen",
        imageUrl: "https://github.com/xyugen.png",
      },
      {
        profileUrl: "https://github.com/darvey-trinidad",
        imageUrl: "https://github.com/darvey-trinidad.png",
      },
      {
        profileUrl: "https://github.com/Dochiibells",
        imageUrl: "https://github.com/Dochiidev.png",
      },
      {
        profileUrl: "https://www.facebook.com/joml.amv",
        imageUrl: "/jomel.jpg",
      },
    ],
  },
  {
    id: "4",
    name: "InnControl",
    description:
      "A hotel management system for BSA Twin Tower in Ortigas. It manages bookings, guests, and reports to improve operational efficiency and customer experience.",
    image: "/globe.svg",
    preview: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Neon", icon: SiPostgresql },
      { name: "Drizzle ORM", icon: DrizzleIcon },
      { name: "Lucia", icon: SiLucia },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/Kaizouku14/InnControl",
    collaborators: [
      {
        profileUrl: "https://github.com/Kaizouku14",
        imageUrl: "/me.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/jocelchua.balotabot",
        imageUrl: "/jocel.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/karlgt.paguio.9",
        imageUrl: "/karl.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/itsSuprem0",
        imageUrl: "/rojie.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/avoidtor",
        imageUrl: "/placeholder.png",
      },
    ],
  },
  {
    id: "5",
    name: "Kanban Board",
    description:
      "A task management app that uses the Kanban method to help users organize projects, visualize progress, and boost productivity.",
    link: "https://kanban-board-blue-tau.vercel.app",
    image: "/globe.svg",
    preview: "/globe.svg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Neon", icon: SiPostgresql },
      { name: "Lucia", icon: SiLucia },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/Kaizouku14/kanban-board",
    collaborators: [],
  },
  {
    id: "6",
    name: "Zynkly — Modern URL Shortener",
    description:
      "A fast, privacy-focused URL shortener built with SvelteKit, Turso, and Drizzle ORM. Features include custom slugs, QR codes, password protection, link analytics, and link organization with folders.",
    link: "https://zynkly.vercel.app/",
    image: "/globe.svg",
    preview: "/zynkly-preview.png",
    technologies: [
      { name: "Svelte kit", icon: SiSvelte },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Turso", icon: SiTurso },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/Kaizouku14/IT403-Final-Project",
    collaborators: [],
  },
  {
    id: "7",
    name: "Prompt Chain",
    description:
      "An AI-powered PDF summarizer built with LangChain and Groq API. It can adjust its persona and tone dynamically to fit different use cases.",
    link: "https://prompt-chain-one.vercel.app/",
    image: "/globe.svg",
    preview: "/prompt-chain.png",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "LangChain", icon: SiLangchain },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/Kaizouku14/prompt-chain",
    collaborators: [],
  },
];
