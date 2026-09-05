import { projects } from "@/data/portfolio";

const sectionLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const contactLinks = [
  ["GitHub", "https://github.com/"],
  ["LinkedIn", "https://www.linkedin.com/"],
  ["Instagram", "https://www.instagram.com/"],
];

export default function Footer() {
  return (
    <footer className="bg-nav px-5 py-14 md:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto grid max-w-[1600px] gap-10 border-t border-cream/10 pt-10 md:grid-cols-3">
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Sections
          </h3>
          <div className="grid gap-3">
            {sectionLinks.map(([label, href]) => (
              <a key={href} href={href} className="text-cream hover:text-muted">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Contact
          </h3>
          <div className="grid gap-3">
            {contactLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-cream hover:text-muted"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Projects
          </h3>
          <div className="grid gap-3">
            {projects.map((project) => (
              <a
                key={project.id}
                href="#projects"
                className="text-cream hover:text-muted"
              >
                {project.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1600px] flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/45 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Pasindu Bhanuka.</p>
        <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
