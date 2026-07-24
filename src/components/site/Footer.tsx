export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 rounded bg-primary-gradient" />
          <span className="font-display font-semibold">Sreenivas &amp; Company</span>
        </div>
        <p className="text-navy-foreground/60">
          © {new Date().getFullYear()} Sreenivas &amp; Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
