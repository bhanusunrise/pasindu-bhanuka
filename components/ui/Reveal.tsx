"use client";

import {
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealSide = "left" | "right" | "up";

interface RevealProps extends PropsWithChildren {
  side?: RevealSide;
  className?: string;
  delayMs?: number;
}

export default function Reveal({
  children,
  side = "up",
  className = "",
  delayMs = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "reveal",
        `reveal-${side}`,
        visible ? "reveal-visible" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
