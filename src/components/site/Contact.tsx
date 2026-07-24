import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

const services = [
  "Cloud Solutions",
  "Cybersecurity",
  "IT Helpdesk & Support",
  "Networking & Infrastructure",
  "Managed IT Services",
  "Data Backup & Recovery",
  "Other",
];

export function Contact() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      service: String(fd.get("service") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setErrorMsg("Please fill in your name, email and message.");
      setStatus("error");
      return;
    }

    try {
      await send({ data: payload });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/60">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy">
            Let's talk about your IT
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your business and challenges. We'll get back within
            one working day with next steps.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-primary-gradient flex items-center justify-center shadow-elegant shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <a href="mailto:rsphaha@gmail.com" className="text-navy font-semibold hover:text-primary">
                  rsphaha@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-primary-gradient flex items-center justify-center shadow-elegant shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Support hours</p>
                <p className="text-navy font-semibold">24 / 7 for managed clients</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-primary-gradient flex items-center justify-center shadow-elegant shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Serving</p>
                <p className="text-navy font-semibold">Clients across India</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-2xl bg-card border border-border shadow-card-soft p-8 md:p-10"
          noValidate
        >
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-14 h-14 rounded-full bg-primary-gradient flex items-center justify-center shadow-elegant">
                <CheckCircle2 className="w-7 h-7 text-primary-foreground" aria-hidden />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy">
                Thank you — we got your inquiry.
              </h3>
              <p className="mt-3 text-muted-foreground max-w-md">
                Our team will get back to you within one working day. For urgent
                requests, please email us directly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 inline-flex items-center rounded-md border border-input px-5 py-2.5 text-sm font-semibold text-navy hover:bg-accent transition"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name *" name="name" required autoComplete="name" maxLength={100} />
                <Field label="Email *" name="email" type="email" required autoComplete="email" maxLength={255} />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
                <Field label="Company" name="company" autoComplete="organization" maxLength={150} />
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Service you're interested in
                </label>
                <select
                  name="service"
                  className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-navy mb-1.5">
                  How can we help? *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  placeholder="Tell us about your project or challenge..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                />
              </div>

              {errorMsg && (
                <p className="mt-4 text-sm text-destructive" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary-gradient text-primary-foreground px-8 py-3 text-sm font-semibold shadow-elegant hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed transition"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send inquiry"
                )}
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                By submitting, you agree to be contacted by Sreenivas &amp; Company
                about your inquiry.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
