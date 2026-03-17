import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Enter a valid phone number"), // TODO need to change to georgian num
  email: z.string().email("Enter a valid email address"),
  message: z.string().optional(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
