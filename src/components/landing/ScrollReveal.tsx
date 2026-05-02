"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Larger y offset for taller blocks */
  y?: number;
};

export function ScrollReveal({ children, className, y = 36 }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(el, { opacity: 0, y });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      });
    }, el);

    return () => ctx.revert();
  }, [y]);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
