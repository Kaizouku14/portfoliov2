"use server";
const message = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});
