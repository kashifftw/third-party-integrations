"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const stats = [
  { label: "HTTP verbs you reconcile", value: "6+", caption: "GET to DELETE; unsafe ones need care." },
  { label: "OAuth flows to rehearse", value: "3", caption: "Auth code, PKCE, client creds." },
  { label: "Webhook guarantees", value: "0", caption: "Assume at-least-once everywhere." },
  { label: "Docs sections to mine", value: "12+", caption: "Auth, quotas, errors, versioning…" },
] as const;

export function StatsReveal() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray<HTMLElement>("[data-stat]");
      if (prefersReducedMotion()) {
        gsap.set(tiles, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(tiles, { opacity: 0, y: 42 });
      gsap.to(tiles, {
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="signals"
      className="scroll-mt-28 rounded-2xl border-2 border-black/10 bg-white px-6 py-12 md:px-10 md:py-14"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
        Benchmarks worth internalizing
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black md:text-3xl">
        Small numbers that keep scope honest.
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-neutral-800 md:text-xl">
        These are mnemonic anchors—you are not cramming trivia, you are calibrating
        how much surface area a mature integration touches.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            data-stat
            className="rounded-xl border-2 border-black/10 bg-[#fafafa] px-5 py-6"
          >
            <div className="font-mono text-3xl font-semibold tracking-tight text-black md:text-4xl">
              {s.value}
            </div>
            <p className="mt-3 text-[15px] font-semibold text-black">{s.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-[15px]">
              {s.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
