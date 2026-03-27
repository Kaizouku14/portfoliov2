"use client";

import { useEffect, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import LoadingBubble from "./loading-bubble";
import { Profile } from "@/components/shared/profile";
import { ChatBubbleProps } from "@/types";
import { motion, AnimatePresence } from "motion/react";
import { AnimateItem } from "@/components/shared/animate-element";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const ChatBubble: React.FC<ChatBubbleProps> = ({ messages, isLoading }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <ScrollArea className="h-full">
      <div className="flex w-full flex-col gap-4 px-4 py-6 backdrop-blur-sm">
        <AnimatePresence initial={false}>
          {messages?.length === 0 && (
            <AnimateItem
              direction="up"
              distance={10}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-3"
            >
              <Profile />
              <div className="bg-linear-to-br from-primary/10 to-primary/5 text-foreground max-w-[85%] rounded-2xl rounded-tl-none px-4 py-3 text-sm border border-primary/10 shadow-sm leading-relaxed ">
                Hello! I&apos;m Al-v. How can I help you today?
              </div>
            </AnimateItem>
          )}

          {messages?.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn(
                "flex w-full gap-3",
                message.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              {message.role === "assistant" && <Profile />}

              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm md:max-w-[75%] leading-relaxed",
                  message.role === "assistant"
                    ? "bg-linear-to-br from-primary/10 to-primary/5 text-foreground rounded-tl-none border border-primary/10"
                    : "bg-primary text-primary-foreground rounded-tr-none",
                )}
              >
                {message.parts.map((part, i) => {
                  if (part.type === "text")
                    return (
                      <div
                        key={i}
                        className="whitespace-pre-wrap prose prose-sm dark:prose-invert"
                      >
                        <ReactMarkdown
                          components={{
                            a: ({ ...props }) => (
                              <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-bold"
                              />
                            ),
                          }}
                        >
                          {part.text}
                        </ReactMarkdown>
                      </div>
                    );
                  return null;
                })}
              </div>

              {message.role === "user" && (
                <div className="bg-primary/20 text-primary flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/30 shadow-sm">
                  <User className="size-5" />
                </div>
              )}
            </motion.div>
          ))}

          {isLoading && (
            <AnimateItem
              direction="up"
              distance={10}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <LoadingBubble />
            </AnimateItem>
          )}
        </AnimatePresence>
        <div ref={bottomRef} className="h-2" />
      </div>
    </ScrollArea>
  );
};

export default ChatBubble;
