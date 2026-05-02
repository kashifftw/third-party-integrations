"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const steps = [
  {
    title: "Study the vendor surface",
    text: "Read auth, quotas, scopes, error codes—not just the happy path SDK.",
  },
  {
    title: "Model your boundary",
    text: "One module owns HTTP, timeouts, retries, and structured errors.",
  },
  {
    title: "Simulate chaos",
    text: "Clock skew, 429 bursts, malformed webhooks—write tests that sting.",
  },
  {
    title: "Operate it",
    text: "Logging, rotation, alerting. Integrations rot without boring hygiene.",
  },
] as const;

export function LabStepsReveal() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const reduce = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-step]");
      const bar = el.querySelector("[data-step-bar]");
      if (reduce) {
        gsap.set([bar, ...rows], { opacity: 1, scaleX: 1, x: 0 });
        return;
      }
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(rows, { opacity: 0, x: -18 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          once: true,
        },
      });
      tl.to(bar, {
        scaleX: 1,
        duration: 1.05,
        ease: "power2.inOut",
      }).to(
        rows,
        {
          opacity: 1,
          x: 0,
          duration: 0.58,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.65",
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="rounded-xl border-2 border-black/10 bg-white px-6 py-12 md:px-10 md:py-14"
    >
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl lg:text-[2.125rem]">
          How each lab unfolds
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-800 md:text-xl">
          A repeatable rhythm so you aren’t rewriting the playbook for every SaaS logo.
        </p>
      </div>
      <div
        data-step-bar
        className="my-12 hidden h-[2px] w-full bg-gradient-to-r from-black via-neutral-500 to-transparent md:block"
      />
      <div className="grid gap-10 md:grid-cols-4 md:gap-8">
        {steps.map((s, idx) => (
          <div key={s.title} data-step className="relative md:pr-2">
            <div className="font-mono text-sm font-medium text-neutral-600">
              Phase {idx + 1}
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-black">
              {s.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-800 md:text-[1.0625rem]">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
