import { UIMessage } from "ai";

export interface ChatBubbleProps {
  messages?: UIMessage[];
  isLoading?: boolean;
}

export interface ChatMessage {
  // thread_id: string;
  content: string;
}
