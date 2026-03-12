import { SITE_CONFIG } from "@/constants";

export { PROJECTS } from "./projects";
export { SKILLS, MAIN_STACK } from "./skills";

export const heroHeader = {
  name: SITE_CONFIG.shortName,
  profession: SITE_CONFIG.profession,
};

export const heroContent = {
  title: "I build fast, reliable web applications.",
  typingWords: [
    "Writing clean, maintainable code",
    "Designing user-centric interfaces",
    "Solving real problems with technology",
  ],
  description: "I'm a full-stack developer specializing in React, Next.js, and creating digital experiences that just work without the fluff.",
};
