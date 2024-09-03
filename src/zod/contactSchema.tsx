import { z } from "zod";

const contactSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, { message: "Email is required" }),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject cannot exceed 100 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message cannot exceed 2000 characters"),
});

export default contactSchema;
