import { useState, type KeyboardEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export const useChatMessages = () => {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    try {
      if (!message) return;
      await sendMessage({ text: message });
      setMessage("");
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSendMessage();
    }
  };

  return {
    messages,
    message,
    setMessage,
    status,
    error,
    handleSendMessage,
    handleKeyDown,
  };
};
