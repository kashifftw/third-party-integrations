"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const pitfalls = [
  "Skipping token rotation scenarios until midnight on-call teaches them.",
  "Trusting webhook bodies without verifying signatures—you learn once, loudly.",
  "Mapping vendor errors verbatim to UX without translation or retry hints.",
  "Ignoring idempotency keys on anything that queues money or fulfillment.",
  "Hard-coding scopes in prod instead of deriving them from documented roles.",
];

export function PitfallsReveal() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const reduce = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-pit]");
      const head = el.querySelector("[data-pit-head]");
      if (reduce) {
        gsap.set([head, ...lines], { opacity: 1, y: 0 });
        return;
      }
      gsap.set([head, ...lines], { opacity: 0, y: 22 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
      tl.to(head, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }).to(
        lines,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.15",
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-20 md:py-24">
      <div data-pit-head className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl lg:text-[2.125rem]">
          Integration traps worth rehearsing early
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-800 md:text-xl">
          These are deliberately unglamorous. That is the point—they are expensive in
          production if you only encounter them live.
        </p>
      </div>
      <ul className="mt-12 divide-y divide-black/10 rounded-xl border-2 border-black/10 bg-white">
        {pitfalls.map((line) => (
          <li
            key={line}
            data-pit
            className="flex gap-4 px-6 py-5 text-base leading-relaxed text-neutral-900 md:px-8 md:py-6 md:text-lg"
          >
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
              aria-hidden
            />
            <span className="text-black">{line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
