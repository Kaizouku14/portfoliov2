import { createGroq } from "@ai-sdk/groq";

export const GROQ_MODEL = "llama-3.3-70b-versatile";

export const groq = createGroq({
  apiKey: process.env.AI_GATEWAY_API_KEY,
});
