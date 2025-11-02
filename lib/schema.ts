import { z } from "zod";

export const ResponseFormat = z.object({
  message: z.string().describe("The conversational response from Al-v"),
});
