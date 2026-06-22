export enum MENU {
  HOME = "home",
  PROJECTS = "projects",
}

export const SITE_CONFIG = {
  name: "Al-v Manda",
  shortName: "Al-v",
  profession: "Full-Stack Developer",
  email: "mandaalv72@gmail.com",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://alvmanda.vercel.app",
} as const;

export const contactContent = {
  email: SITE_CONFIG.email,
  tagline: "Let's build something together.",
  description: "Currently based in the Philippines, open to remote opportunities, collaborations, and interesting projects.",
};


