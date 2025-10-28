"use client";

import { useEffect, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import LoadingBubble from "./loading-bubble";

interface Conversation {
  message?: string;
  response?: string;
}

interface ChatBubbleProps {
  conversation?: Conversation[];
  isLoading?: boolean;
}

const ChatBubble = ({ conversation, isLoading }: ChatBubbleProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation, isLoading]);

  return (
    <ScrollArea className="h-60">
      <div className="border-border bg-background flex w-full max-w-xl flex-col gap-4 overflow-y-auto rounded-t-xl border px-4 shadow-sm backdrop-blur-sm h-60 py-6">
        {conversation?.length === 0 && !isLoading ? (
          <div className="text-muted-foreground flex h-80 flex-col items-center justify-center py-8 text-sm">
            <p className="text-center">No conversation yet — start chatting!</p>
          </div>
        ) : (
          <>
            {conversation?.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                {item.message && (
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full font-bold">
                      U
                    </div>
                    <div className="flex max-w-[80%]">
                      {item.message && (
                        <div className="bg-muted text-muted-foreground rounded-2xl px-3 py-2 text-sm">
                          {item.message}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {item.response && (
                  <div className="flex items-start justify-end gap-3">
                    <div className="bg-primary/10 text-foreground max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-inner h-auto">
                      <pre className="font-sans whitespace-pre-wrap prose">{item.response}</pre>
                    </div>
                    <div className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full font-bold">
                      AI
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isLoading && <LoadingBubble />}
            <div ref={bottomRef} />
          </>
        )}
      </div>
    </ScrollArea>
  );
};
export default ChatBubble;
