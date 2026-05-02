"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const items = [
  {
    q: "Do I memorize every OAuth nuance?",
    a: "No—internalize flows, threats, and where tokens live long enough that you debug without panic. Cheat sheets beat brain dumps.",
  },
  {
    q: "Webhook secret rotated—what first?",
    a: "Drain with dual verification briefly, reconcile backlog, flip traffic, revoke old verifier only after TTL covers late retries.",
  },
  {
    q: "GraphQL versus REST integration?",
    a: "Same diligence: quotas differ, pagination shape differs, caching differs. Modeling errors + auth still wins the day.",
  },
  {
    q: "When is sync enough vs eventual consistency?",
    a: "If money moves or inventory commits, reconcile; if dashboards lag, enqueue. Decide per domain, not slogan.",
  },
  {
    q: "Staging credentials never match prod—normal?",
    a: "Common. Isolate env-specific behavior behind config, bake contract tests against vendor sandboxes weekly.",
  },
  {
    q: "Vendor SDK or raw HTTP?",
    a: "SDKs accelerate happy paths—still read raw docs for limits, undocumented headers, deprecation emails.",
  },
] as const;

export function FaqReveal() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>("[data-faq-item]");
      if (prefersReducedMotion()) {
        gsap.set(blocks, { opacity: 1, x: 0 });
        return;
      }
      gsap.set(blocks, { opacity: 0, x: -24 });
      gsap.to(blocks, {
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
        opacity: 1,
        x: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="faq" className="py-16 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
        FAQ · integration craft
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black md:text-3xl">
        Answers you revisit after the first outage story.
      </h2>
      <div className="mt-10 space-y-3">
        {items.map(({ q, a }) => (
          <details
            key={q}
            data-faq-item
            className="group rounded-xl border-2 border-black/10 bg-white px-6 py-2 open:bg-[#fafafa] transition-colors"
          >
            <summary className="cursor-pointer list-none py-4 text-lg font-semibold text-black marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex w-full items-center justify-between gap-4">
                {q}
                <span className="font-mono text-sm font-medium text-neutral-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="border-t border-black/10 pb-5 pt-4 text-base leading-relaxed text-neutral-800 md:text-lg">
              {a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
