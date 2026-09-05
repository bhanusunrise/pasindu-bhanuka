"use client";

import {
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";
import { useStickyProgress } from "@/hooks/useStickyProgress";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Visible area where project cards move.
  const viewportRef = useRef<HTMLDivElement>(null);

  // Complete vertical project list.
  const trackRef = useRef<HTMLDivElement>(null);

  // Individual project elements.
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const progress = useStickyProgress(sectionRef);

  const [startTranslate, setStartTranslate] = useState(0);
  const [endTranslate, setEndTranslate] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number | null>(null);

  useEffect(() => {
    const calculatePositions = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      const firstProject = projectRefs.current[0];
      const lastProject =
        projectRefs.current[projects.length - 1];

      if (
        !viewport ||
        !track ||
        !firstProject ||
        !lastProject
      ) {
        return;
      }

      const isDesktop = window.matchMedia(
        "(min-width: 1024px)",
      ).matches;

      if (!isDesktop) {
        setStartTranslate(0);
        setEndTranslate(0);
        setSectionHeight(null);
        return;
      }

      const viewportHeight = viewport.clientHeight;

      /*
       * Find the center of the first project relative
       * to the complete project track.
       */
      const firstCenter =
  firstProject.offsetTop +
  firstProject.offsetHeight / 2;

const lastCenter =
  lastProject.offsetTop +
  lastProject.offsetHeight / 2;

/*
 * FIRST PROJECT
 *
 * Start the first project near the top of the visible
 * project viewport instead of centering the entire card.
 *
 * This is important because the card can be taller than
 * the available viewport.
 */
const topPadding = 24;

const firstPosition =
  topPadding - firstProject.offsetTop;

/*
 * FINAL PROJECT
 *
 * The final project must reach the vertical center
 * before the sticky Projects section releases.
 */
const lastPosition =
  viewportHeight / 2 - lastCenter;

      setStartTranslate(firstPosition);
      setEndTranslate(lastPosition);

      /*
       * Calculate exactly how much vertical scrolling
       * is required to move from the first centered
       * project to the final centered project.
       */
      const requiredTravel = Math.abs(
        lastPosition - firstPosition,
      );

      /*
       * Sticky section height:
       *
       * viewport height
       * +
       * required internal project travel.
       *
       * Therefore the section releases only after the
       * final project reaches the center.
       */
      setSectionHeight(
        window.innerHeight + requiredTravel,
      );
    };

    calculatePositions();

    const resizeObserver = new ResizeObserver(() => {
      calculatePositions();
    });

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener(
      "resize",
      calculatePositions,
    );

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        calculatePositions,
      );
    };
  }, []);

  /*
   * Interpolate between:
   *
   * first project centered
   *             ↓
   * last project centered
   */
  const currentTranslate =
    startTranslate +
    (endTranslate - startTranslate) * progress;

  const desktopStyle = {
    "--projects-section-height": sectionHeight
      ? `${sectionHeight}px`
      : "1000vh",
  } as CSSProperties;

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={desktopStyle}
      className="
        section-anchor
        bg-section-odd
        lg:h-[var(--projects-section-height)]
      "
    >
      <div
        className="
          px-5
          py-20

          md:px-8

          lg:sticky
          lg:top-0
          lg:h-screen
          lg:px-12
          lg:py-18

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            grid
            h-full
            max-w-[1600px]
            gap-14

            lg:grid-cols-[80%_20%]
            lg:gap-14
          "
        >
          {/* Project list */}
          <Reveal
            side="left"
            className="
              min-w-0

              lg:h-[calc(100vh-144px)]
              lg:pr-8
            "
          >
            {/* Desktop */}
            <div
              ref={viewportRef}
              className="
                relative
                hidden
                h-full
                overflow-hidden
                lg:block
              "
            >
              <div
                ref={trackRef}
                className="
                  flex
                  flex-col
                  gap-[120px]
                  will-change-transform
                "
                style={{
                  transform: `translateY(${currentTranslate}px)`,
                }}
              >
                {projects.map(
                  (project, index) => (
                    <div
                      key={project.id}
                      ref={(element) => {
                        projectRefs.current[index] =
                          element;
                      }}
                      className="
                        w-full
                        shrink-0
                      "
                    >
                      <ProjectCard
                        project={project}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Tablet / Mobile */}
            <div
              className="
                space-y-24
                lg:hidden
              "
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </Reveal>

          {/* My Work */}
          <Reveal
            side="right"
            className="
              order-first
              flex
              items-center

              lg:order-none
              lg:h-[calc(100vh-144px)]
              lg:justify-end
              lg:pl-14
            "
          >
            <h2
              className="
                text-6xl
                font-semibold
                leading-[0.88]
                tracking-tight
                text-cream

                md:text-8xl

                lg:text-left
                lg:text-[clamp(5rem,8vw,9rem)]
              "
            >
              My
              <br />
              Work
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}