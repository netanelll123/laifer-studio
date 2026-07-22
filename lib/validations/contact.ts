import { z } from "zod";

/**
 * Contact form schema. Field messages are i18n keys (under `contact.form`),
 * resolved to localized text at render time so validation stays locale-aware.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "errors.name"),
  email: z.string().trim().email("errors.email"),
  phone: z
    .string()
    .trim()
    .min(6, "errors.phone")
    .regex(/^[+\d][\d\s()-]{5,}$/, "errors.phone"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "errors.message"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
