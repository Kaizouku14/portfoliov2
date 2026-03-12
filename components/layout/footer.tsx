import { SITE_CONFIG } from "@/constants";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-2 mb-20 md:mb-0">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </p>
        <p className="text-sm text-muted-foreground hidden md:block">
          {SITE_CONFIG.profession}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
