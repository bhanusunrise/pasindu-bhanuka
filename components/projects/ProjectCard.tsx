import Image from "next/image";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex w-full flex-col justify-center lg:pr-10">
      <div className="relative mb-6 aspect-[16/9] overflow-hidden border border-cream">
        <Image
  src={project.image}
  alt={`${project.name} preview`}
  fill
  className="object-cover"
  // Doubled the target widths (45vw -> 90vw, 100vw -> 200vw) 
  // to force Next.js to provide high-density Retina assets
  sizes="(min-width: 1024px) 90vw, 200vw"
  quality={10} // 90 is ideal; 100 heavily spikes file size with diminishing returns
  priority // Optional: add if this image is above-the-fold (LCP)
/>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="border border-muted/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
          {project.category} Project
        </span>
      </div>

      <h3 className="mb-4 text-3xl font-semibold text-cream md:text-4xl">
        {project.name}
      </h3>

      <ul className="mb-5 list-disc space-y-2 pl-5 text-sm leading-6 text-cream/80 md:text-base">
        {project.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {project.techStack?.length ? (
        <div className="mb-5 grid gap-2 sm:grid-cols-2">
          {project.techStack.map((item) => (
            <div
              key={`${item.purpose}-${item.stack}`}
              className="border border-cream/10 bg-nav/15 p-3"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                {item.purpose}
              </p>
              <p className="mt-1 text-sm text-cream">{item.stack}</p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-5 text-sm font-medium">
        {project.websiteUrl ? (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-cream underline decoration-muted/50 underline-offset-4 hover:text-muted"
          >
            Website
          </a>
        ) : null}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-cream underline decoration-muted/50 underline-offset-4 hover:text-muted"
          >
            GitHub
          </a>
        ) : null}
      </div>

      {project.seoKeywords?.length ? (
        <p className="mt-5 text-xs leading-5 text-cream/45">
          {project.seoKeywords.join(" · ")}
        </p>
      ) : null}
    </article>
  );
}
