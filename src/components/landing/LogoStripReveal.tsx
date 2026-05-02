"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const labels = [
  "Issuing APIs",
  "Ledgers",
  "SCIM dirs",
  "Chat bots",
  "SIEM relays",
  "File sync",
  "Calendar mesh",
  "Video rooms",
];

export function LogoStripReveal() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const tr = track.current;
    if (!el || !tr) return;

    gsap.registerPlugin(ScrollTrigger);

    let tween: gsap.core.Tween | null = null;
    let ctxReverted = false;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1 });
        return;
      }
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
        },
      );

      const half = tr.scrollWidth / 2;
      if (half > 0) {
        tween = gsap.fromTo(
          tr,
          { x: 0 },
          {
            x: -half,
            duration: 42,
            ease: "none",
            repeat: -1,
          },
        );
      }
    }, el);

    return () => {
      tween?.kill();
      if (!ctxReverted) ctx.revert();
      ctxReverted = true;
    };
  }, []);

  return (
    <section ref={root} aria-label="Synthetic integration categories">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
        Where teams spend integration budget
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black md:text-3xl">
        Placeholders for every backlog grooming session you will sit in.
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-neutral-800 md:text-xl">
        Names only—swap for your SOC2 questionnaires, DPIAs, procurement packets. The taxonomy stays useful.
      </p>
      <div className="relative mt-8 overflow-hidden border-y border-black/10 bg-black py-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#ececee_0%,transparent_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#ececee_0%,transparent_100%)]"
        />
        <div ref={track} className="flex w-max gap-10 whitespace-nowrap px-4">
          {[...labels, ...labels].map((txt, idx) => (
            <span
              key={`${txt}-${idx}`}
              className="font-mono text-sm font-medium uppercase tracking-[0.35em] text-white/85 md:text-base"
            >
              {txt}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
