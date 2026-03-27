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
      "Scholarship hunting at Bulacan State University was a mess — bulletin boards, group chats, missed deadlines. ScholarLink fixes that: one platform to discover, apply for, and track scholarships and internships. Built for our campus, but the problem isn't unique to us.",
    link: "https://sarm-scholar-link.vercel.app",
    image: "/scholarlink/scholar-link.png",
    media: [
      {
        type: "image",
        url: "/scholarlink/scholar-link.png",
        alt: "ScholarLink Dashboard",
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
        imageUrl: "/collaborators/jocel.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/karlgt.paguio.9",
        imageUrl: "/collaborators/karl.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/itsSuprem0",
        imageUrl: "/collaborators/rojie.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/avoidtor",
        imageUrl: "/placeholder.png",
      },
    ],
  },

  {
    id: "2",
    name: "SJDM Christian Ministry RMS",
    description:
      "Member and event management system for SJDM Christian Ministries, donated to the church as our contribution to their community. Handles their daily operations end-to-end. (Screenshots omitted for client privacy)",
    image: "/globe.svg",
    media: [
      {
        type: "image",
        url: "/globe.svg",
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
        imageUrl: "/collaborators/jomel.jpg",
      },
    ],
  },

  {
    id: "3",
    name: "MJA Finance Management",
    description:
      "Internship project. MJA's legacy finance system was getting hard to maintain, so we rebuilt it — modern Next.js dashboard, Turso backend, and a careful migration with sensitive data on the line. (No screenshots for privacy reasons)",
    link: "",
    image: "/globe.svg",
    media: [
      {
        type: "image",
        url: "/globe.svg",
        alt: "MJA Finance Preview",
      },
    ],
    technologies: [
      TECH.NEXTJS,
      TECH.NODEJS,
      TECH.TAILWIND,
      TECH.TURSO,
      TECH.TRPC,
      TECH.BETTER_AUTH,
    ],
    github: "",
    collaborators: [
      { profileUrl: "https://github.com/Kaizouku14", imageUrl: "/me.jpg" },
      {
        profileUrl: "https://github.com/xyugen",
        imageUrl: "https://github.com/xyugen.png",
      },
      {
        profileUrl: "https://www.facebook.com/joml.amv",
        imageUrl: "/collaborators/jomel.jpg",
      },
    ],
  },

  {
    id: "4",
    name: "InnControl",
    description:
      "Final project for System Analysis and Design. BSA Twin Tower was managing bookings and check-ins manually — InnControl fixed that with one system for bookings, check-ins, and reports. (No screenshots for privacy reasons)",
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
        imageUrl: "/collaborators/jocel.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/karlgt.paguio.9",
        imageUrl: "/collaborators/karl.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/itsSuprem0",
        imageUrl: "/collaborators/rojie.jpg",
      },
      {
        profileUrl: "https://www.facebook.com/avoidtor",
        imageUrl: "/placeholder.png",
      },
    ],
  },

  {
    id: "5",
    name: "Plantaria",
    description:
      "Our entry for the PSITE RAITE 2024 Hackathon. Urban farmers have no real way to track their produce transparently or connect with their community, so we built one. Plantaria uses blockchain to solve that, built with React and Web3 under serious time pressure.",
    image: "/plantaria/plantaria.png",
    media: [
      {
        type: "video",
        url: "/plantaria/plantaria.mp4",
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
        imageUrl: "/collaborators/jomel.jpg",
      },
    ],
  },

  {
    id: "6",
    name: "Aurafy — AI Music & Study Companion",
    description:
      "I built Aurafy because I kept switching between Spotify and a timer app while studying. It uses AI to recommend Spotify playlists based on your mood and pairs it with built-in focus timers — everything in one place so you can actually get into flow.",
    link: "https://aurafy-ai.vercel.app",
    image: "/aurafy/aurafy.png",
    media: [
      { type: "image", url: "/aurafy/aurafy.png", alt: "Sail Preview" },
      { type: "image", url: "/aurafy/aurafy-1.png", alt: "Aurafy Preview 1" },
      { type: "image", url: "/aurafy/aurafy-2.png", alt: "Aurafy Preview 2" },
      { type: "image", url: "/aurafy/aurafy-3.png", alt: "Aurafy Preview 3" },
      { type: "image", url: "/aurafy/aurafy-4.png", alt: "Aurafy Preview 4" },
      { type: "image", url: "/aurafy/aurafy-5.png", alt: "Aurafy Preview 5" },
      { type: "image", url: "/aurafy/aurafy-6.png", alt: "Aurafy Preview 6" },
      { type: "image", url: "/aurafy/aurafy-7.png", alt: "Aurafy Preview 7" },
    ],
    technologies: [
      TECH.NEXTJS,
      TECH.TYPESCRIPT,
      TECH.NODEJS,
      TECH.TAILWIND,
      TECH.TRPC,
      TECH.TURSO,
      TECH.BETTER_AUTH,
    ],
    github: "https://github.com/Kaizouku14/Aurafy",
    collaborators: [],
  },

  {
    id: "7",
    name: "Sail — A Word-guessing game",
    description:
      "Built this for fun and it got out of hand — in a good way. Sail is a real-time multiplayer word game where players race each other via WebSockets. There's an AI hint system for when you're stuck, a race mode for competitive rounds, and stat tracking so you can see exactly how your friends are losing.",
    link: "https://sail-psi.vercel.app",
    image: "/sail/sail.png",
    media: [
      { type: "image", url: "/sail/sail.png", alt: "Sail Preview" },
      { type: "image", url: "/sail/sail-1.png", alt: "Sail Preview 1" },
      { type: "image", url: "/sail/sail-2.png", alt: "Sail Preview 2" },
      { type: "image", url: "/sail/sail-3.png", alt: "Sail Preview 3" },
      { type: "image", url: "/sail/sail-4.png", alt: "Sail Preview 4" },
      { type: "image", url: "/sail/sail-5.png", alt: "Sail Preview 5" },
      { type: "image", url: "/sail/sail-6.png", alt: "Sail Preview 6" },
    ],
    technologies: [
      TECH.REACT,
      TECH.TAILWIND,
      TECH.NODEJS,
      TECH.TYPESCRIPT,
      TECH.NESTJS,
      TECH.FASTIFY,
      TECH.NEON,
    ],
    github: "https://github.com/Kaizouku14/sail",
    collaborators: [],
  },

  {
    id: "8",
    name: "Zynkly — Modern URL Shortener",
    description:
      "Final project for IT403. I didn't want to build just another basic shortener, so I kept adding features until it felt like a real product — custom slugs, QR codes, password-protected links, click analytics, and folder organization. Built with SvelteKit and Turso.",
    link: "https://zynkly.vercel.app",
    image: "/zynkly/zynkly.png",
    media: [
      { type: "image", url: "/zynkly/zynkly.png", alt: "Zynkly Dashboard" },
      { type: "image", url: "/zynkly/zynkly-1.png", alt: "Zynkly Preview 1" },
      { type: "image", url: "/zynkly/zynkly-2.png", alt: "Zynkly Preview 2" },
      { type: "image", url: "/zynkly/zynkly-3.png", alt: "Zynkly Preview 3" },
      { type: "image", url: "/zynkly/zynkly-4.png", alt: "Zynkly Preview 4" },
      { type: "image", url: "/zynkly/zynkly-5.png", alt: "Zynkly Preview 5" },
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
    id: "9",
    name: "Kanban Board",
    description:
      "Started as practice getting comfortable with drag-and-drop in React, ended up going way further than planned. Added full authentication with Lucia and a proper PostgreSQL backend. One of those projects that started as an exercise and turned into something I'd actually use.",
    link: "https://kanban-board-blue-tau.vercel.app",
    image: "/kanban/kanban.png",
    media: [
      {
        type: "image",
        url: "/kanban/kanban-1.png",
        alt: "Kanban Board Preview 1",
      },
      {
        type: "image",
        url: "/kanban/kanban-2.png",
        alt: "Kanban Board Preview 2",
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
