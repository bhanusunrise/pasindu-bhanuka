"use client";

import { useRef } from "react";
import EducationCard from "@/components/education/EducationCard";
import Reveal from "@/components/ui/Reveal";
import {
  certifications,
  education,
  extraCurriculars,
  jobExperiences,
} from "@/data/portfolio";
import { useStickyProgress } from "@/hooks/useStickyProgress";

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useStickyProgress(sectionRef);

  const groups = [
    {
      id: "education",
      title: "Educational Institutes",
      items: education.map((item) => (
        <EducationCard
          key={item.id}
          type="education"
          item={item}
        />
      )),
    },
    {
      id: "certifications",
      title: "Certifications & Digital Badges",
      items: certifications.map((item) => (
        <EducationCard
          key={item.id}
          type="certification"
          item={item}
        />
      )),
    },
    {
      id: "job-experience",
      title: "Professional Experience",
      items: jobExperiences.map((item) => (
        <EducationCard
          key={item.id}
          type="job"
          item={item}
        />
      )),
    },
    {
      id: "extra-curricular",
      title: "Extracurricular Activities",
      items: extraCurriculars.map((item) => (
        <EducationCard
          key={item.id}
          type="extracurricular"
          item={item}
        />
      )),
    },
  ];

  const translate = progress * (groups.length - 1) * 100;

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-anchor bg-section-even lg:h-[420vh]"
    >
      <div className="px-5 py-10 md:px-8 lg:sticky lg:top-0 lg:h-screen lg:px-12 lg:py-10 xl:px-20">
        <div className="mx-auto grid h-full max-w-[1600px] gap-14 lg:grid-cols-[40%_60%] lg:gap-12">
          <Reveal
            side="left"
            className="flex items-center lg:h-[calc(100vh-80px)] lg:pr-14"
          >
            <h2 className="text-right text-6xl font-semibold leading-[0.88] tracking-tight text-cream md:text-8xl lg:text-[clamp(5rem,8vw,9rem)]">
              My
              <br />
              Journey
            </h2>
          </Reveal>

          <Reveal
            side="right"
            className="min-w-0 lg:h-[calc(100vh-80px)]"
          >
            {/* Desktop */}
            <div className="hidden h-full overflow-hidden lg:block">
              <div
                className="h-full transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateY(-${translate}%)`,
                }}
              >
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className="flex h-full shrink-0 flex-col justify-center"
                  >
                    <h3 className="mb-6 text-2xl font-semibold text-cream">
                      {group.title}
                    </h3>

                    <div className="max-h-[calc(100vh-170px)] space-y-5 overflow-y-auto pr-2">
                      {group.items}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet / Mobile */}
            <div className="space-y-16 lg:hidden">
              {groups.map((group) => (
                <div key={group.id}>
                  <h3 className="mb-6 text-2xl font-semibold text-cream">
                    {group.title}
                  </h3>

                  <div className="space-y-5">
                    {group.items}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}