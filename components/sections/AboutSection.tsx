"use client";

import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import { aboutTexts } from "@/data/portfolio";
import { useStickyProgress } from "@/hooks/useStickyProgress";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useStickyProgress(sectionRef);

  const position = progress * (aboutTexts.length - 1);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-anchor bg-section-even lg:h-[1000vh]"
    >
      <div className="px-5 py-20 md:px-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:px-12 lg:py-[72px] xl:px-20">
        <div className="mx-auto grid w-full max-w-[1600px] gap-12 lg:grid-cols-[30%_70%] lg:gap-12">
          <Reveal
  side="left"
  className="flex flex-col items-center justify-center gap-6 lg:min-h-[calc(100vh-144px)] lg:pr-12"
>
  <Image
    src="/images/profile/profile_1.jpeg"
    alt="Pasindu Bhanuka"
    width={250}
    height={250}
    className="border-amber-50 border-10"
  />

  <h3 className="text-center text-4xl font-semibold leading-[0.88] tracking-tight text-cream md:text-4xl lg:text-[clamp(2rem,4vw,5rem)]">
    Pasindu
    <br />
    Bhanuka
  </h3>
</Reveal>
          <Reveal
            side="right"
            className="relative flex min-h-144 items-center lg:min-h-[calc(200vh-144px)] lg:pl-12"
          >
            <div className="hidden w-full lg:block">
              {aboutTexts.map((text, index) => {
                const distance = Math.abs(position - index);
                const opacity = Math.max(0, 1 - distance * 1.6);
                const translateY = (index - position) * 56;

                return (
                  <p
                    key={text}
                    className="absolute left-12 right-0 top-1/2 text-[clamp(2rem,2vw,4.5rem)] font-medium leading-[1.05] text-cream transition-opacity duration-200"
                    style={{
                      opacity,
                      transform: `translateY(calc(-50% + ${translateY}px))`,
                      pointerEvents: opacity > 0.5 ? "auto" : "none",
                    }}
                  >
                    {text}
                  </p>
                );
              })}
            </div>

            <div className="space-y-8 lg:hidden">
              {aboutTexts.map((text) => (
                <p
                  key={text}
                  className="text-3xl font-medium leading-tight text-cream md:text-5xl"
                >
                  {text}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}