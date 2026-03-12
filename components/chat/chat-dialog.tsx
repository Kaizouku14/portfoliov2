"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { ArrowUpIcon } from "lucide-react";

import { useChatStore } from "@/store/use-chat.store";
import ChatBubble from "./conversation";
import { ChatHeader } from "./chat-header";
import { useChatMessages } from "@/hooks/use-chat-messages";

const Chat = () => {
  const { isOpen } = useChatStore();
  const {
    messages,
    message,
    setMessage,
    status,
    error,
    handleSendMessage,
    handleKeyDown,
  } = useChatMessages();

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 md:right-10 w-[min(90vw,360px)] h-[500px] flex flex-col z-50 bg-background/80 backdrop-blur-xl border border-primary/10 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <ChatHeader />
      <div className="flex-1 overflow-hidden">
        <ChatBubble messages={messages} isLoading={status === "submitted"} />
      </div>
      {error && (
        <div className="bg-destructive/10 text-destructive text-center py-2 text-xs font-medium">
          Something went wrong. Try again.
        </div>
      )}
      <div className="p-3 border-t border-border/50 bg-background/50">
        <InputGroup className="bg-muted/50 rounded-xl px-2 h-10 border border-border focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
          <InputGroupInput
            placeholder="Ask a question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none focus-visible:ring-0 text-sm"
          />
          <InputGroupAddon align="inline-end" className="pr-1">
            <InputGroupButton
              variant="default"
              className="rounded-lg size-7 shrink-0"
              size="icon-xs"
              onClick={handleSendMessage}
              disabled={!message.trim() || status === "submitted"}
            >
              <ArrowUpIcon className="size-4" />
              <span className="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default Chat;
