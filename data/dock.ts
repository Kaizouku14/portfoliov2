import { MENU_ITEMS } from "@/constants/menu-options";
import { Github, HomeIcon, Layers, Lightbulb, Linkedin, MailIcon } from "lucide-react";

export const DATA = {
  navbar: [
    { href: MENU_ITEMS.HOME, icon: HomeIcon, label: "Home" },
    { href: MENU_ITEMS.ABOUT, icon: Lightbulb, label: "About" },
    { href: MENU_ITEMS.PROJECTS, icon: Layers, label: "Projects" },
  ],
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
        url: "mailto:mandaalv72@gmail.com",
        icon: MailIcon,
      },
    },
  },
};
