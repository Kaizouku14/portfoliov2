"use client";

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { ArrowUpIcon, MessageCircleMoreIcon } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import ChatBubble from "./conversation";
import { ChatHeader } from "./chat-header";

const Chat = () => {
  const { isOpen } = useChat();

  const handleSendMessage = async () => {};

  // const handleKeyDown = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (e.key === "Enter" && !e.shiftKey) {
  //     e.preventDefault();
  //     await handleSendMessage();
  //   }
  // };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-3 right-14 w-90 rounded-t-xl rounded-b-xl  flex flex-col z-50 bg-background">
      <ChatHeader />
      <ChatBubble />
      <InputGroup className="rounded-t-none h-10">
        <InputGroupInput placeholder="Ask Al-v..." />
        <InputGroupAddon>
          <MessageCircleMoreIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="default" className="rounded-full" size="icon-xs" onClick={handleSendMessage}>
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Chat;
