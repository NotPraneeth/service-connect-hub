import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => ContactSchema.parse(raw))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      service: data.service || null,
      message: data.message,
    });

    if (error) {
      console.error("[contact] insert failed:", error);
      throw new Error("Could not save your inquiry. Please try again.");
    }

    // Email notification via Lovable Emails is wired up after the sender
    // domain is verified. Until then, inquiries are safely stored in the
    // database and viewable in Cloud → Tables → contact_submissions.


    return { ok: true as const };
  });
