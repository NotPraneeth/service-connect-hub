import {
  Cloud,
  ShieldCheck,
  Headphones,
  Network,
  Laptop2,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Migration, hosting and management on AWS, Azure and Google Cloud with cost optimisation.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Endpoint protection, firewalls, audits and compliance to keep your data safe from threats.",
  },
  {
    icon: Headphones,
    title: "IT Helpdesk & Support",
    desc: "24/7 remote and on-site support for your team — fast response, transparent SLAs.",
  },
  {
    icon: Network,
    title: "Networking & Infrastructure",
    desc: "LAN, WAN, Wi-Fi and structured cabling designed for reliability and performance.",
  },
  {
    icon: Laptop2,
    title: "Managed IT Services",
    desc: "Proactive monitoring, patching and maintenance of your entire IT environment.",
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    desc: "Automated backups, disaster recovery planning and quick restore — no data left behind.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy">
            End-to-end IT services for modern businesses
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We combine deep technical expertise with a business-first mindset to
            deliver solutions that scale with you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-card p-8 shadow-card-soft hover:-translate-y-1 hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-gradient flex items-center justify-center shadow-elegant">
                <Icon className="w-6 h-6 text-primary-foreground" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold text-navy">
                {title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
