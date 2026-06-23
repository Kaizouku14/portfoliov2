import { z } from "zod";

export const chatRequestSchema = z.object({
  messages: z.array(z.any()),
});


