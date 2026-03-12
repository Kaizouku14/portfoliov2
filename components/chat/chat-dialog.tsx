"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { ArrowUpIcon, MessageCircleMoreIcon } from "lucide-react";

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
    <div className="fixed bottom-3 md:right-14 w-90 rounded-t-xl rounded-b-xl flex flex-col z-50 bg-background backdrop-blur-sm border-border border shadow">
      <ChatHeader />
      <ChatBubble messages={messages} isLoading={status === "submitted"} />
      {error && (
        <div className="border-border bg-secondary-background text-muted-foreground border-2 px-3 py-2 text-center text-xs">
          Something went wrong. Try again.
        </div>
      )}
      <InputGroup className="rounded-t-none h-11 bg-background pr-1">
        <InputGroupInput
          placeholder="Ask a question about me..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <InputGroupAddon>
          <MessageCircleMoreIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            onClick={handleSendMessage}
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Chat;
