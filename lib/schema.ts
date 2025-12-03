import { z } from "zod";

export const ResponseFormat = z.object({
  response: z.string().describe("The conversational response from Al-v"),
  links: z
    .array(
      z.object({
        social: z.string().describe("Display text for the link"),
        link: z.string().describe("The actual URL"),
      }),
    )
    .optional()
    .describe("Any links mentioned in the response (LinkedIn, GitHub, etc.)"),
});
