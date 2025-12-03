interface SystemStructuredResponse {
  response: string;
  links?: {
    social: string;
    link: string;
  }[];
}

export interface Conversation {
  message?: string;
  system?: SystemStructuredResponse;
}

export interface ChatBubbleProps {
  conversation?: Conversation[];
  isLoading?: boolean;
}

export interface ChatMessage {
  // thread_id: string;
  content: string;
}
