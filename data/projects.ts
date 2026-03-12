import { Fingerprint } from "lucide-react";
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
  SiNestjs,
  SiEthereum,
  SiTrpc,
  SiFastify,
} from "react-icons/si";
import { DrizzleIcon } from "@/components/icons/drizzle-orm";
import { ProjectCardProps } from "@/types";

const TECH = {
  REACT: { name: "React", icon: SiReact },
  NEXTJS: { name: "Next.js", icon: SiNextdotjs },
  NESTJS: { name: "Nest.js", icon: SiNestjs },
  TYPESCRIPT: { name: "TypeScript", icon: SiTypescript },
  NODEJS: { name: "Node.js", icon: SiNodedotjs },
  FASTIFY: { name: "Fastify", icon: SiFastify },
  TAILWIND: { name: "Tailwind CSS", icon: SiTailwindcss },
  DRIZZLE: { name: "Drizzle ORM", icon: DrizzleIcon },
  TURSO: { name: "Turso (SQLite)", icon: SiTurso },
  NEON: { name: "Neon (PostgreSQL)", icon: SiPostgresql },
  BETTER_AUTH: { name: "Better-auth", icon: Fingerprint },
  LUCIA: { name: "Lucia", icon: SiLucia },
  VITE: { name: "Vite", icon: SiVite },
  SVELTE: { name: "Svelte kit", icon: SiSvelte },
  WEB3: { name: "Web3", icon: SiEthereum },
  TRPC: { name: "TRPC", icon: SiTrpc },
} as const;

export const PROJECTS: ProjectCardProps[] = [
  {
    id: "1",
    name: "ScholarLink - A Unified Platform",
    description:
      "A platform built for Bulacan State University to help students easily find, apply for, and track scholarships and internships in one place.",
    link: "https://sarm-scholar-link.vercel.app",
    image: "/scholar-link-logo.png",
    media: [
      { type: "image", url: "/scholar-link.png", alt: "ScholarLink Dashboard" },
      {
        type: "image",
        url: "/project-placeholder-1.png",
        alt: "ScholarLink Feature 1",
      },
      {
        type: "image",
        url: "/project-placeholder-2.png",
        alt: "ScholarLink Feature 2",
      },
    ],
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
      { profileUrl: "https://github.com/Kaizouku14", imageUrl: "/me.jpg" },
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
    id: "4",
    name: "InnControl",
    description:
      "A custom property management system built for BSA Twin Tower. It handles everything from room bookings to guest check-ins and operational reporting.",
    image: "/globe.svg",
    media: [
      { type: "image", url: "/globe.svg", alt: "InnControl Dashboard Mockup" },
      {
        type: "image",
        url: "/project-placeholder-1.png",
        alt: "InnControl Feature Preview",
      },
    ],
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
      { profileUrl: "https://github.com/Kaizouku14", imageUrl: "/me.jpg" },
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
    id: "3",
    name: "SJDM Christian Ministry RMS",
    description:
      "A member and event management platform developed for SJDM Christian Ministries to streamline their daily operations. (Screenshots omitted for client privacy).",
    image: "/globe.svg",
    media: [
      { type: "video", url: "/globe.svg", alt: "SJDM Video Preview" },
      {
        type: "image",
        url: "/project-placeholder-3.png",
        alt: "System Description and Mockups",
      },
    ],
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
      { profileUrl: "https://github.com/Kaizouku14", imageUrl: "/me.jpg" },
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
    id: "2",
    name: "Plantaria",
    description:
      "My team's entry for the PSITE RAITE 2024 Hackathon. It's a Web3 platform aimed at urban farmers, using blockchain to track produce and encourage community collaboration.",
    image: "/plantaria.png",
    media: [
      {
        type: "video",
        url: "/plantaria.mp4",
        alt: "Plantaria Video Demonstration",
      },
    ],
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
      { profileUrl: "https://github.com/Kaizouku14", imageUrl: "/me.jpg" },
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
    id: "7",
    name: "Aurafy",
    description:
      "A study app that pairs productivity tools with personalized music. It uses AI to recommend Spotify playlists based on your mood and includes built-in focus timers.",
    link: "https://aurafy-ai.vercel.app",
    image: "/globe.svg",
    media: [
      {
        type: "image",
        url: "/project-placeholder-1.png",
        alt: "Aurafy Preview 1",
      },
      {
        type: "image",
        url: "/project-placeholder-2.png",
        alt: "Aurafy Preview 2",
      },
    ],
    technologies: [
      TECH.NEXTJS,
      TECH.TYPESCRIPT,
      TECH.TAILWIND,
      TECH.TRPC,
      TECH.TURSO,
      TECH.BETTER_AUTH,
    ],
    github: "https://github.com/Kaizouku14/Aurafy",
    collaborators: [],
  },
  {
    id: "6",
    name: "Zynkly — Modern URL Shortener",
    description:
      "A fast, privacy-focused URL shortener built with SvelteKit, Turso, and Drizzle ORM. Features include custom slugs, QR codes, password protection, link analytics, and link organization with folders.",
    link: "https://zynkly.vercel.app/",
    image: "/globe.svg",
    media: [
      { type: "image", url: "/zynkly-preview.png", alt: "Zynkly Dashboard" },
      {
        type: "image",
        url: "/project-placeholder-3.png",
        alt: "Zynkly Link Analytics",
      },
    ],
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
  {
    id: "8",
    name: "Sail",
    description:
      "A full-stack multiplayer word game with AI-powered hints, real-time race mode, and stat tracking.",
    link: "https://sail-psi.vercel.app",
    image: "/globe.svg",
    media: [
      {
        type: "image",
        url: "/project-placeholder-3.png",
        alt: "Sail Preview 1",
      },
    ],
    technologies: [
      TECH.REACT,
      TECH.TAILWIND,
      TECH.TYPESCRIPT,
      TECH.NESTJS,
      TECH.FASTIFY,
      TECH.NEON,
    ],
    github: "https://github.com/Kaizouku14/sail",
    collaborators: [],
  },
  {
    id: "9",
    name: "MJA Finance Management",
    description: "A finance management system for MJA.",
    link: "",
    image: "/globe.svg",
    media: [
      {
        type: "image",
        url: "/project-placeholder-1.png",
        alt: "MJA Finance Preview",
      },
    ],
    technologies: [
      TECH.NEXTJS,
      TECH.TAILWIND,
      TECH.TURSO,
      TECH.TRPC,
      TECH.BETTER_AUTH,
    ],
    github: "",
    collaborators: [],
  },
  {
    id: "5",
    name: "Kanban Board",
    description:
      "A Trello-style task management app with drag-and-drop functionality to help users organize their work visually.",
    link: "https://kanban-board-blue-tau.vercel.app",
    image: "/globe.svg",
    media: [
      { type: "image", url: "/globe.svg", alt: "Kanban Board Preview" },
      {
        type: "image",
        url: "/project-placeholder-2.png",
        alt: "Kanban Board Drag & Drop",
      },
    ],
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
];
