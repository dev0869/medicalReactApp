import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string().min(3).max(6),
});

export const RegisterSchema = z.object({
  username: z.string(),
  fullname: z.string(),
  email: z.string().email(),
  mobile: z.string().min(10),
  password: z.string(),
  subscriptionType: z.enum(["basic","standard","premium"]).optional() ||z.string().optional(),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
