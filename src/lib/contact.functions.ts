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

    // Best-effort email notification. Requires the email domain to be
    // configured; until then, inquiries are safely stored in the database
    // and viewable in the Lovable Cloud dashboard.
    try {
      const mod = await import("@/lib/email-templates/send-email").catch(() => null);
      if (mod && typeof (mod as { sendTemplateEmail?: unknown }).sendTemplateEmail === "function") {
        await (mod as {
          sendTemplateEmail: (
            name: string,
            to: string,
            opts: { templateData: Record<string, unknown> },
          ) => Promise<unknown>;
        }).sendTemplateEmail("contact-inquiry", "rsphaha@gmail.com", {
          templateData: {
            name: data.name,
            email: data.email,
            phone: data.phone || "",
            company: data.company || "",
            service: data.service || "",
            message: data.message,
          },
        });
      }
    } catch (err) {
      console.warn("[contact] email notify skipped:", err);
    }

    return { ok: true as const };
  });
