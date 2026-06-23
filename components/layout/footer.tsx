import { SITE_CONFIG } from "@/constants";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-350 mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Kaizouku14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/al-v-manda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
