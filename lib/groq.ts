"use server";

import { ChatGroq } from "@langchain/groq";
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";
import { ChatMessage } from "@/interface/chat";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { ResponseFormat } from "./schema";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
  temperature: 0.65,
  maxTokens: 6124,
  maxRetries: 3,
});

const agent = createAgent({
  model,
  tools: [],
  checkpointer: new MemorySaver(),
  systemPrompt: SYSTEM_PROMPT,
  responseFormat: ResponseFormat,
});

export const chatMessage = async ({ content }: ChatMessage) => {
  const response = await agent.invoke(
    { messages: [{ role: "user", content }] },
    { configurable: { thread_id: 1 } },
  );

  return response.structuredResponse;
};
