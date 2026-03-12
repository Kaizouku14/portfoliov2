"use client";

import { useEffect, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import LoadingBubble from "./loading-bubble";
import { Profile } from "../profile";
import { ChatBubbleProps } from "@/interface/chat";

const ChatBubble: React.FC<ChatBubbleProps> = ({ messages, isLoading }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <ScrollArea className="h-70">
      <div className="border-border bg-background flex w-full flex-col gap-4 overflow-y-auto border px-4 backdrop-blur-sm h-70 py-6">
        {messages?.map((message) => (
          <div key={message.id} className="flex flex-col gap-3">
            {message.role === "assistant" && (
              <div className="flex items-start gap-3">
                <Profile />
                <div className="bg-primary/10 text-foreground max-w-[70%] rounded-2xl px-3 py-2 text-sm shadow-inner h-auto">
                  <pre className="font-sans whitespace-pre-wrap prose">
                    {message.parts.map((part, i) => {
                      if (part.type === "text")
                        return <span key={i}>{part.text}</span>;
                      return null;
                    })}
                  </pre>
                </div>
              </div>
            )}

            {message.role === "user" && (
              <div className="flex items-start justify-end gap-3">
                <div className="flex max-w-[70%]">
                  <div className="bg-muted text-muted-foreground rounded-2xl px-3 py-2 text-sm">
                    {message.parts.map((part, i) => {
                      if (part.type === "text")
                        return <span key={i}>{part.text}</span>;
                      return null;
                    })}
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full font-bold">
                  U
                </div>
              </div>
            )}
          </div>
        ))}
        {isLoading && <LoadingBubble />}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  );
};

export default ChatBubble;
