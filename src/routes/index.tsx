import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sreenivas & Company — IT Services & Solutions across India" },
      {
        name: "description",
        content:
          "Sreenivas & Company delivers cloud, cybersecurity, managed IT, networking and 24/7 helpdesk services to businesses across India.",
      },
      {
        property: "og:title",
        content: "Sreenivas & Company — IT Services across India",
      },
      {
        property: "og:description",
        content:
          "Reliable cloud, cybersecurity, managed IT and helpdesk services for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
