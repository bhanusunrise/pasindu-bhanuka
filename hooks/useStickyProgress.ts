"use client";

import { RefObject, useEffect, useState } from "react";

interface StickyProgressOptions {
  desktopOnly?: boolean;
}

export function useStickyProgress(
  ref: RefObject<HTMLElement | null>,
  options: StickyProgressOptions = { desktopOnly: true },
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const desktopOnly = options.desktopOnly ?? true;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (desktopOnly && !isDesktop) {
        setProgress(0);
        return;
      }

      const rect = element.getBoundingClientRect();
      const scrollableDistance = Math.max(
        element.offsetHeight - window.innerHeight,
        1,
      );

      const travelled = Math.min(
        Math.max(-rect.top, 0),
        scrollableDistance,
      );

      setProgress(travelled / scrollableDistance);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [ref, options.desktopOnly]);

  return progress;
}
