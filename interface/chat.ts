export interface Conversation {
  message?: string;
  response?: string;
}

export interface ChatBubbleProps {
  conversation?: Conversation[];
  isLoading?: boolean;
}
