"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { DOCK_DATA } from "@/constants";
import { BotMessageSquare } from "lucide-react";
import { useChatStore } from "@/store/use-chat.store";

const DockMenu = () => {
  const { toggleChat } = useChatStore();

  return (
    <TooltipProvider>
      <Dock direction="middle" className="shadow-xl">
        {DOCK_DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
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

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full size-12"
                  onClick={toggleChat}
                >
                  <BotMessageSquare />
                </Button>
                <span className="absolute top-1 right-1 flex size-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-3 bg-primary"></span>
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Chat with Al-v</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DOCK_DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
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
      </Dock>
    </TooltipProvider>
  );
};

export default DockMenu;
