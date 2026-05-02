"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export function LandingHero() {
  const root = useRef<HTMLElement>(null);
  const rule = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = prefersReducedMotion();
      const targets = "[data-lh]";
      const bar = rule.current;
      if (reduce) {
        gsap.set(targets, { opacity: 1, y: 0 });
        if (bar) gsap.set(bar, { scaleX: 1 });
        return;
      }
      gsap.set(targets, { opacity: 0, y: 40 });
      if (bar) gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      const tl = gsap.timeline({ delay: 0.06 });
      tl.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.88,
        stagger: 0.1,
        ease: "power3.out",
      });
      if (bar) {
        tl.to(bar, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.55");
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="border-b border-black/12 pb-16 pt-12 md:pb-20 md:pt-16 lg:pb-24"
    >
      <p
        data-lh
        className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-600"
      >
        Learn by wiring real systems
      </p>
      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
        <h1
          data-lh
          className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-black md:text-5xl lg:text-[3.45rem]"
        >
          Third-party integrations, explained calmly.
        </h1>
        <div className="hidden shrink-0 font-mono text-xs font-medium uppercase tracking-[0.32em] text-neutral-500 md:block" data-lh>
          protocol + patience
        </div>
      </div>
      <div ref={rule} className="mt-8 h-1 w-full max-w-2xl bg-black" aria-hidden />
      <p
        data-lh
        className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-800 md:text-xl md:leading-relaxed lg:text-[1.35rem]"
      >
        Practice how external APIs fit into your app—authentication, payloads,
        retries, and the edge cases vendors rarely highlight in marketing copy.
      </p>
      <div data-lh className="mt-10 flex flex-wrap gap-3">
        <span className="rounded-full border-2 border-black/15 bg-white px-4 py-2 text-base font-medium text-black">
          OAuth 2.x &amp; OIDC patterns
        </span>
        <span className="rounded-full border-2 border-black/15 bg-white px-4 py-2 text-base font-medium text-black">
          Webhooks you can verify
        </span>
      </div>
    </section>
  );
}
