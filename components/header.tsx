"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU_OPTIONS } from "@/constants/menu-options";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const SCROLL_THRESHOLD = 50;
const HEADER_OFFSET = 80;

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const ticking = useRef(false);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      if (pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }

      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", href);
        setActiveSection(href);
      }
    },
    [pathname],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updatePathSection = () => {
      if (pathname !== "/") {
        setActiveSection("");
      } else {
        setActiveSection(window.location.hash || "#home");
      }
    };

    updatePathSection();
    window.addEventListener("hashchange", updatePathSection);
    return () => window.removeEventListener("hashchange", updatePathSection);
  }, [pathname]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (pathname !== "/") {
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev,
        );
        const newSection = `#${mostVisible.target.id}`;

        if (newSection !== activeSection) {
          setActiveSection(newSection);
          window.history.replaceState(null, "", newSection);
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-20% 0px -60% 0px",
    });

    MENU_OPTIONS.forEach((opt) => {
      const id = opt.href.replace(/^#/, "");
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname, activeSection]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn("sticky z-50 mx-auto transition-all duration-300 ease-in-out py-4 w-full", isScrolled && "top-0")}
    >
      <div className="mx-auto flex justify-center md:max-w-7xl">
        <div
          className={cn(
            "rounded-2xl shadow-none transition-all duration-300 ease-in-out",
            isScrolled
              ? "border-border bg-background/75 w-120 border px-2 py-2 backdrop-blur-lg max-lg:mx-2 md:w-5xl"
              : "w-full",
          )}
        >
          <div className="flex h-12 items-center justify-between px-2">
            <Link href="/" className="flex items-center group">
              <Image
                src="/vercel.svg"
                width={70}
                height={50}
                alt="Scholar Link Logo"
                className="object-contain size-10 transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </Link>

            <nav className="block max-lg:hidden" aria-label="Main navigation">
              {MENU_OPTIONS.map((item) => {
                const isActive = isHome && activeSection === item.href;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={cn(
                      "mx-2 px-4 py-1.5 cursor-pointer inline-block transition-all duration-300 ease-in-out",
                      isActive
                        ? "text-primary bg-accent/60 border-border rounded-full border font-medium"
                        : "text-muted-foreground rounded-full bg-transparent hover:text-foreground hover:bg-accent/30",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.title}
                  </a>
                );
              })}
            </nav>

            <div className="mr-2 flex justify-end gap-2">
              <AnimatedThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
