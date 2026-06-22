import { SITE_CONFIG } from "@/constants";

export { PROJECTS } from "./projects";
export { MAIN_STACK } from "./skills";
export { EXPERIENCE } from "./experience";
export type { ExperienceItem } from "./experience";

export const heroHeader = {
  name: SITE_CONFIG.shortName,
  profession: SITE_CONFIG.profession,
};

export const heroContent = {
  title: "I build performant web experiences that solve real problems.",
  description: "Full-stack developer crafting production-grade applications with modern TypeScript, React, and Node.js ecosystems for the Filipino tech community.",
};

export const aboutContent = {
  title: "Engineering with purpose.",
  body: "I'm a BS Information Technology student at Bulacan State University, specializing in web and mobile development. I build full-stack applications that bridge the gap between technical complexity and human usability — from scholarship platforms to AI-powered caregiving tools. Every project starts with a real problem and ends with clean, maintainable code.",
  highlights: [
    { label: "Experience", value: "2+ years" },
    { label: "Projects", value: "10+" },
    { label: "Focus", value: "Full-Stack Web" },
    { label: "Award", value: "Magna Cum Laude" },
  ],
};


