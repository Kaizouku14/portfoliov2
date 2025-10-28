"use client";

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { ArrowUpIcon, MessageCircleMoreIcon } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import ChatBubble from "./conversation";
import { ChatHeader } from "./chat-header";
import { useState, type KeyboardEvent } from "react";
import { Conversation } from "@/interface/chat";

const Chat = () => {
  const { isOpen } = useChat();
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<Conversation[]>([
    {
      message: "",
      response: "Hey! I’m Al-v Manda, welcome to a glimpse of what I do.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message) return;
    setIsLoading(true);
    const newConversation = [...conversation, { message, response: "..." }];
    setConversation(newConversation);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    const updatedConversation = [...newConversation, { message, response: "..." }];
    setConversation(updatedConversation);
    setMessage("");
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-3 md:right-14 w-90 rounded-t-xl rounded-b-xl flex flex-col z-50 bg-background backdrop-blur-sm border-border border shadow">
      <ChatHeader />
      <ChatBubble conversation={conversation} isLoading={isLoading} />
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
