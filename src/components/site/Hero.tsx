import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient">
      <img
        src={heroImage}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" />
      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-glow/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse" />
            Trusted IT partner across India
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold text-navy-foreground leading-[1.05]">
            IT services that keep your business{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-glow to-white">
              always on.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80">
            From cloud infrastructure to cybersecurity and 24/7 helpdesk,
            Sreenivas &amp; Company delivers reliable technology so you can
            focus on growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-primary-gradient text-primary-foreground px-6 py-3 text-sm font-semibold shadow-elegant hover:opacity-95 transition"
            >
              Request a free consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-md border border-navy-foreground/25 text-navy-foreground px-6 py-3 text-sm font-semibold hover:bg-navy-foreground/10 transition"
            >
              Explore services
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "10+", v: "Years of expertise" },
              { k: "150+", v: "Clients served" },
              { k: "24/7", v: "Support coverage" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl md:text-3xl font-display font-bold text-primary-glow">
                  {s.k}
                </dt>
                <dd className="text-xs md:text-sm text-navy-foreground/70 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
