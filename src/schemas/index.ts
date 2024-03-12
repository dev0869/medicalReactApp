import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string().min(3).max(6),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
