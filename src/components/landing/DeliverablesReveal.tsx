"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const items = [
  "Typed client module with timeouts, telemetry hooks, cancel tokens.",
  "Postman-style collection rewritten as contract tests nightly.",
  "Webhook replay sandbox with jittered concurrency tests.",
  "Runbook that cites vendor status pages & slack bridges.",
  "Feature flag scaffold for phased vendor rollouts.",
  "Dashboard cards on error budget burn per dependency.",
];

export function DeliverablesReveal() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-del]");
      if (prefersReducedMotion()) {
        gsap.set(lines, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(lines, { opacity: 0, y: 22 });
      gsap.to(lines, {
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
        opacity: 1,
        y: 0,
        duration: 0.48,
        stagger: 0.06,
        ease: "power2.out",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-16 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
        Artifacts engineers respect
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black md:text-3xl">
        What leaves the lab beside “it works locally.”
      </h2>
      <ul className="mt-10 space-y-3">
        {items.map((line) => (
          <li
            key={line}
            data-del
            className="flex gap-4 rounded-xl border-2 border-black/10 bg-white px-6 py-4 text-base md:text-lg"
          >
            <span
              className="mt-1.5 inline-block size-2 shrink-0 rounded-sm bg-black"
              aria-hidden
            />
            <span className="leading-relaxed text-neutral-900">{line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
