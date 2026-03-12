import { NextResponse } from "next/server";
import { chatRequestSchema } from "@/lib/validations/chat.schema";
import { streamChatResponse } from "@/lib/services/chat.service";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = chatRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid request body", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    return await streamChatResponse(parsed.data.messages);

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
