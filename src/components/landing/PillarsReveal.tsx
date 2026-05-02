"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export type PillarItem = {
  title: string;
  blurb: string;
};

type Props = {
  items: PillarItem[];
};

export function PillarsReveal({ items }: Props) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduce = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const chips = gsap.utils.toArray<HTMLElement>("[data-pillar]");
      const heading = el.querySelector("[data-p-heading]");
      if (reduce) {
        gsap.set([heading, ...chips], { opacity: 1, y: 0 });
        return;
      }
      gsap.set([heading, ...chips], { opacity: 0, y: 32 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });
      tl.to(heading, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }).to(
        chips,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          stagger: 0.07,
          ease: "power2.out",
        },
        "-=0.2",
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [items]);

  return (
    <section ref={root} className="py-20 md:py-24">
      <div className="max-w-2xl" data-p-heading>
        <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl lg:text-[2.125rem]">
          Six pillars we revisit in every lab
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-800 md:text-xl">
          Narrow topics, repeated drills. Each block ends with something you could
          drop into an interview narrative or ship behind a flag.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <article
            key={item.title}
            data-pillar
            className="rounded-xl border-2 border-black/10 bg-white px-6 py-6 shadow-[0_2px_0_0_rgba(0,0,0,0.06)] transition hover:border-black/20"
          >
            <p className="font-mono text-sm font-medium text-neutral-500">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-black">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-800">
              {item.blurb}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
