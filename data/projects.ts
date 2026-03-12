import {
  Fingerprint,
} from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiSvelte,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTurso,
  SiPostgresql,
  SiLucia,
  SiVite,
  SiEthereum,
} from "react-icons/si";
import { DrizzleIcon } from "@/components/icons/drizzle-orm";
import { ProjectCardProps } from "@/types";

// Reusable tech constants — define once, reuse across projects
const TECH = {
  REACT: { name: "React", icon: SiReact },
  NEXTJS: { name: "Next.js", icon: SiNextdotjs },
  TYPESCRIPT: { name: "TypeScript", icon: SiTypescript },
  NODEJS: { name: "Node.js", icon: SiNodedotjs },
  TAILWIND: { name: "Tailwind CSS", icon: SiTailwindcss },
  DRIZZLE: { name: "Drizzle ORM", icon: DrizzleIcon },
  TURSO: { name: "Turso", icon: SiTurso },
  NEON: { name: "Neon", icon: SiPostgresql },
  BETTER_AUTH: { name: "Better-auth", icon: Fingerprint },
  LUCIA: { name: "Lucia", icon: SiLucia },
  VITE: { name: "Vite", icon: SiVite },
  SVELTE: { name: "Svelte kit", icon: SiSvelte },
  WEB3: { name: "Web3", icon: SiEthereum },
} as const;

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
      TECH.REACT,
      TECH.NEXTJS,
      TECH.TYPESCRIPT,
      TECH.NODEJS,
      TECH.DRIZZLE,
      TECH.TURSO,
      TECH.BETTER_AUTH,
      TECH.TAILWIND,
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
      TECH.REACT,
      TECH.VITE,
      TECH.WEB3,
      TECH.TYPESCRIPT,
      TECH.NODEJS,
      TECH.TAILWIND,
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
      TECH.REACT,
      TECH.NEXTJS,
      TECH.TYPESCRIPT,
      TECH.NODEJS,
      TECH.DRIZZLE,
      TECH.TURSO,
      TECH.BETTER_AUTH,
      TECH.TAILWIND,
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
      TECH.REACT,
      TECH.NEXTJS,
      TECH.TYPESCRIPT,
      TECH.NODEJS,
      TECH.NEON,
      TECH.DRIZZLE,
      TECH.LUCIA,
      TECH.TAILWIND,
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
      TECH.REACT,
      TECH.NEXTJS,
      TECH.TYPESCRIPT,
      TECH.NODEJS,
      TECH.NEON,
      TECH.LUCIA,
      TECH.TAILWIND,
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
      TECH.SVELTE,
      TECH.TYPESCRIPT,
      TECH.NODEJS,
      TECH.TURSO,
      TECH.TAILWIND,
    ],
    github: "https://github.com/Kaizouku14/IT403-Final-Project",
    collaborators: [],
  },
];
