"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const principles = [
  {
    title: "Vendor truth is ephemeral",
    copy: "Cache docs locally, diff release notes RSS, pin OpenAPI shards in git—even when marketing swears backwards compatibility forever.",
  },
  {
    title: "Assume hostile networks",
    copy: "TLS alone is not governance; certify egress, capture cert chains, automate MITM regressions inside CI where safe.",
  },
  {
    title: "Teach UX to degrade",
    copy: "If an integration slips, degrade features with rationales users can relay to support—you own the apology layer.",
  },
  {
    title: "Observe before optimize",
    copy: "Trace vendor latency percentiles separately from yours; choke points move when they rebalance infra regions.",
  },
] as const;

export function PrinciplesReveal() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-prin]");
      if (prefersReducedMotion()) {
        gsap.set(cards, { opacity: 1, y: 0, rotateY: 0 });
        return;
      }
      gsap.set(cards, { opacity: 0, y: 52 });
      gsap.to(cards, {
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
        opacity: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="patterns" className="rounded-2xl border-2 border-black/12 bg-black px-6 py-12 text-white md:px-10 md:py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-400">
        Field principles
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl lg:text-[2rem]">
        Non-negotiables while wiring someone else&apos;s SLA into yours.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {principles.map(({ title, copy }) => (
          <article
            key={title}
            data-prin
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-5 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-300 md:text-lg">
              {copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
