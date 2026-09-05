import Image from "next/image";

import type {
  CertificationItem,
  EducationItem,
  ExtraCurricularItem,
  JobExperienceItem,
} from "@/types/portfolio";

type EducationCardProps =
  | {
      type: "education";
      item: EducationItem;
    }
  | {
      type: "certification";
      item: CertificationItem;
    }
  | {
      type: "job";
      item: JobExperienceItem;
    }
  | {
      type: "extracurricular";
      item: ExtraCurricularItem;
    };

export default function EducationCard({
  type,
  item,
}: EducationCardProps) {
  let image: string | undefined;
  let title = "";
  let subtitle: string | undefined;
  let description = "";
  let period = "";

  switch (type) {
    case "education":
      image = item.image;
      title = item.institute;
      description = item.description;
      period = `${item.fromYear} - ${item.toYear}`;
      break;

    case "certification":
      image = item.image;
      title = item.name;
      subtitle = item.institute;
      description = item.description;
      period = item.year;
      break;

    case "job":
      title = item.position;
      subtitle = item.organization;
      description = item.description;
      period = `${item.fromYear} - ${item.toYear}`;
      break;

    case "extracurricular":
      title = item.position;

      if (item.organization && item.sport) {
        subtitle = `${item.organization} | ${item.sport}`;
      } else if (item.organization) {
        subtitle = item.organization;
      } else if (item.sport) {
        subtitle = item.sport;
      }

      description = item.description;
      period = `${item.fromYear} - ${item.toYear}`;
      break;
  }

  return (
    <article
      className={`border border-cream/10 bg-nav/15 p-5 md:p-7 ${
        image ? "grid gap-5 md:grid-cols-[180px_1fr]" : ""
      }`}
    >
      {image && (
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="180px"
          />
        </div>
      )}

      <div className="flex flex-col justify-center">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted">
          {period}
        </p>

        <h3 className="text-2xl font-semibold text-cream">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm font-medium text-cream/70">
            {subtitle}
          </p>
        )}

        <p className="mt-4 text-sm leading-6 text-cream/75 md:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}