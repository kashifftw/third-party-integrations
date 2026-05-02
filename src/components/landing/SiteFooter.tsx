"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const cols = [
  {
    heading: "Curriculum anchors",
    links: [
      { label: "Pillars playbook", href: "#pillars" },
      { label: "Integration pitfalls", href: "#pitfalls" },
      { label: "Weekly outlines", href: "#outline" },
      { label: "Reading list", href: "#resources" },
    ],
  },
  {
    heading: "Build surfaces",
    links: [
      { label: "Patterns panel", href: "#patterns" },
      { label: "FAQ cheatsheet", href: "#faq" },
      { label: "Stats snapshot", href: "#signals" },
      { label: "Lifecycle map", href: "#lifecycle-map" },
    ],
  },
  {
    heading: "External desks",
    links: [
      { label: "OAuth Working Group overview", href: "https://oauth.net/2/" },
      { label: "webhooks.fyi", href: "https://webhooks.fyi/" },
      { label: "Next.js Docs", href: "https://nextjs.org/docs" },
      {
        label: "MDN Fetch & CORS primer",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
      },
    ],
  },
] as const;

export function SiteFooter() {
  const root = useRef<HTMLElement>(null);
  const halo = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const haloEl = halo.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const reduce = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const pods = gsap.utils.toArray<HTMLElement>("[data-foot-pod]");
      if (reduce) {
        gsap.set(pods, { opacity: 1, y: 0 });
        if (haloEl) gsap.set(haloEl, { opacity: 0.85 });
        return;
      }
      gsap.set(pods, { opacity: 0, y: 32 });
      gsap.to(pods, {
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
      });
      if (haloEl) {
        gsap.fromTo(haloEl, { opacity: 0.55 }, {
          opacity: 0.9,
          scrollTrigger: {
            scrub: true,
            trigger: el,
            start: "top bottom",
            end: "bottom top",
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={root} id="site-footer" className="relative isolate overflow-hidden border-t border-black/15 bg-[#09090b] text-neutral-300">
      <div
        ref={halo}
        className="pointer-events-none absolute -left-[22%] top-[-42%] h-[460px] w-[460px] rounded-full bg-white/12 blur-[130px]"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-38%] right-[-14%] h-[560px] w-[560px] rounded-full bg-white/[0.06] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="grid gap-16 border-b border-white/12 pb-20 lg:grid-cols-[minmax(0,2fr)_3fr]">
          <div className="max-w-xl" data-foot-pod>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.34em] text-neutral-400">
              integrations.lab
            </p>
            <p className="mt-8 text-pretty text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-[2.55rem]">
              Documentation isn&apos;t lore—circuit-break the mystery with drills.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-400 md:text-xl">
              Sandbox-only guidance. Fold these notes into RFCs before you chase vendor support at three in the morning.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#pillars"
                className="inline-flex rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-black shadow-lg shadow-black/30 transition-colors hover:bg-neutral-100"
              >
                Enter pillars
              </a>
              <a
                href="#faq"
                className="inline-flex rounded-xl border-2 border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Jump to FAQs
              </a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {cols.map((group) => (
              <div key={group.heading} data-foot-pod>
                <h3 className="text-[15px] font-semibold uppercase tracking-[0.13em] text-neutral-400">
                  {group.heading}
                </h3>
                <ul className="mt-6 space-y-3 text-base leading-snug md:text-[1.05rem]">
                  {group.links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="block text-neutral-300 transition-colors hover:text-white"
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          data-foot-pod
          className="flex flex-col gap-5 border-white/12 py-14 text-neutral-500 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
            No vendor warranties implied—trace everything, keep auditors in the loop, name integration owners inside pull-request descriptions.
          </p>
          <span className="shrink-0 font-mono text-sm text-neutral-600">
            Telemetry-grade footer · © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
