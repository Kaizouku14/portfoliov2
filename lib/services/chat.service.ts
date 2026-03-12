import { groq, GROQ_MODEL } from "@/lib/groq";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export async function streamChatResponse(messages: UIMessage[]) {
  const result = streamText({
    model: groq(GROQ_MODEL),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
