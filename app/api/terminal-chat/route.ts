import { groq, GROQ_MODEL } from "@/lib/groq";
import { streamText } from "ai";
import { SYSTEM_PROMPT } from "@/lib/prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { message } = await req.json();

  const result = streamText({
    model: groq(GROQ_MODEL),
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: message }],
  });

  return result.toTextStreamResponse();
}
