"use client";

import Image from "next/image";
import { useRef } from "react";
import { coverSlides } from "@/data/portfolio";
import { useStickyProgress } from "@/hooks/useStickyProgress";

export default function HomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useStickyProgress(sectionRef);

  const desktopTranslate = progress * (coverSlides.length - 1) * 100;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="section-anchor relative bg-section-odd lg:h-[300vh]"
    >
      <div className="overflow-hidden pt-[72px] lg:sticky lg:top-0 lg:h-screen lg:pt-[72px]">
        <div
          className="hidden h-[calc(100vh-72px)] transition-transform duration-150 ease-out lg:flex"
          style={{ transform: `translateX(-${desktopTranslate}%)` }}
        >
          {coverSlides.map((slide, index) => (
            <article
              key={slide.id}
              className="relative h-full w-full shrink-0 overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                
                priority={index === 0}
                className="object-cover"
                width={1280}
                height={540}
                sizes="100vw"
              />
              <div className="absolute inset-0 " />
              <div className="absolute inset-0 flex items-end">
                <div className="w-full px-8 pb-14 md:px-14 lg:px-20 lg:pb-20">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-muted font-passage">
                    {slide.eyebrow}
                  </p>
                  <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] text-cream xl:text-7xl 2xl:text-8xl">
                    {slide.title}
                  </h1>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="lg:hidden">
          {coverSlides.map((slide, index) => (
            <article
              key={slide.id}
              className="relative min-h-[72vh] overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-nav/50" />
              <div className="relative z-10 flex min-h-[72vh] items-end px-5 py-10 md:px-8">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted">
                    {slide.eyebrow}
                  </p>
                  <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-cream md:text-6xl">
                    {slide.title}
                  </h1>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-5 right-6 hidden text-xs uppercase tracking-[0.2em] text-cream/70 lg:block">
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
