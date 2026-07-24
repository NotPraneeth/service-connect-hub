import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Certified specialists",
    desc: "A team of trained engineers with vendor certifications across cloud, security and networking.",
  },
  {
    title: "Rapid response SLAs",
    desc: "Guaranteed response times and transparent escalation — always know where your ticket stands.",
  },
  {
    title: "Pan-India coverage",
    desc: "Remote support countrywide with on-site engineers in major cities across India.",
  },
  {
    title: "Business-first approach",
    desc: "We translate technology into outcomes: uptime, savings, and predictable operations.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.62 0.19 258 / 0.5), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.48 0.18 260 / 0.4), transparent 45%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-glow">
            Why Sreenivas &amp; Company
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy-foreground">
            The reliable IT partner your business deserves
          </h2>
          <p className="mt-5 text-navy-foreground/75 text-lg">
            Growing companies across India trust us to design, run and secure their
            technology — from a single office to multi-location deployments.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-6">
          {points.map((p) => (
            <li
              key={p.title}
              className="rounded-xl border border-primary-glow/25 bg-primary-glow/5 p-6 backdrop-blur-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-primary-glow" aria-hidden />
              <h3 className="mt-4 font-display font-semibold text-navy-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-navy-foreground/70 leading-relaxed">
                {p.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
