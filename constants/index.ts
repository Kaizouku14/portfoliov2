import { Github, HomeIcon, Linkedin, MailIcon } from "lucide-react";

export enum MENU {
  HOME = "home",
  SKILL = "skill",
  PROJECTS = "projects",
}

export const MENU_ITEMS = {
  HOME: `#${MENU.HOME}`,
  SKILL: `#${MENU.SKILL}`,
  PROJECTS: `#${MENU.PROJECTS}`,
} as const;

export const SITE_CONFIG = {
  name: "Al-v Manda",
  shortName: "Al-v.",
  profession: "Web Developer",
  email: "mandaalv72@gmail.com",
} as const;

export const DOCK_DATA = {
  navbar: [{ href: MENU_ITEMS.HOME, icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kaizouku14",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/al-v-manda",
        icon: Linkedin,
      },
      email: {
        name: "Send Email",
        url: `mailto:${SITE_CONFIG.email}`,
        icon: MailIcon,
      },
    },
  },
} as const;
