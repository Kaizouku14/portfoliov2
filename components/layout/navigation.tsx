"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MENU, SITE_CONFIG } from "@/constants";
import { useChatStore } from "@/store/use-chat.store";
import { BotMessageSquare } from "lucide-react";

const NAV_ITEMS = [
  { label: "Projects", href: `#${MENU.PROJECTS}` },
  { label: "About", href: `#about` },
  { label: "Contact", href: `#contact` },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { toggleChat } = useChatStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="flex items-center justify-between max-w-350 mx-auto px-6 md:px-10 h-16 md:h-18">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-base md:text-lg font-semibold tracking-tight hover:text-primary transition-colors cursor-pointer bg-transparent"
        >
          {SITE_CONFIG.shortName}.<span className="text-primary">dev</span>
        </button>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleChat}
            className="flex items-center justify-center size-9 rounded-lg
              border border-border hover:border-foreground/20
              transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Open AI Chat"
          >
            <BotMessageSquare className="size-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}
