import { createGroq } from "@ai-sdk/groq";

export const groq = createGroq({
  apiKey: process.env.AI_GATEWAY_API_KEY,
});
