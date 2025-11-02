export interface Conversation {
  message?: string;
  response?: string;
}

export interface ChatBubbleProps {
  conversation?: Conversation[];
  isLoading?: boolean;
}

export interface ChatMessage {
  thread_id: string;
  content: string;
}
