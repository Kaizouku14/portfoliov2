"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "./ui/dock";
import { DATA } from "@/data/dock";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { BotMessageSquare } from "lucide-react";

const DockMenu = () => {
  return (
    <TooltipProvider>
      <Dock direction="middle" iconMagnification={60} className="z-10">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  aria-label={item.label}
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 rounded-full")}
                >
                  <item.icon className="size-4.5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 rounded-full")}
                >
                  <social.icon className="size-4.5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full size-12">
                <BotMessageSquare />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Chat with Al-v</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <AnimatedThemeToggler />
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
};

export default DockMenu;
