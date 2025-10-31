"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "./ui/dock";
import { DATA } from "@/data/dock";
import { BotMessageSquare } from "lucide-react";
import { useChat } from "@/hooks/use-chat";

const DockMenu = () => {
  const { toggleChat } = useChat();

  return (
    <TooltipProvider>
      <Dock direction="middle" className="shadow-xl">
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

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full size-12" onClick={toggleChat}>
                <BotMessageSquare />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Chat with Al-v</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

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
      </Dock>
    </TooltipProvider>
  );
};

export default DockMenu;
