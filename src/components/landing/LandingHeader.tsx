"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const links = [
  { label: "Pillars", href: "#pillars" },
  { label: "Patterns", href: "#patterns" },
  { label: "FAQ", href: "#faq" },
  { label: "Outline", href: "#outline" },
];

export function LandingHeader() {
  const root = useRef<HTMLElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const barEl = bar.current;
    if (!el || !barEl) return;

    const ctx = gsap.context(() => {
      const navItems = gsap.utils.toArray<HTMLElement>("[data-nav-item]");
      if (prefersReducedMotion()) {
        gsap.set(barEl, { scaleX: 1 });
        gsap.set("[data-brand-line]", { opacity: 1, y: 0 });
        gsap.set(navItems, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(barEl, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(barEl, { scaleX: 1, duration: 1, ease: "power2.inOut", delay: 0.08 });
      gsap.fromTo(
        "[data-brand-line]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.11, ease: "power3.out", delay: 0.06 },
      );
      gsap.fromTo(
        navItems,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.32,
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={root}
      className="sticky top-0 z-20 border-b border-black/15 bg-[#fafafa]/88 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.45)] backdrop-blur-xl"
    >
      <div
        ref={bar}
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-black"
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-7 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-14 lg:px-10 lg:py-8">
        <div className="max-w-xl">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-neutral-700" data-brand-line>
            Field notes · integrations
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-x-3" data-brand-line>
            <span className="text-3xl font-bold tracking-tighter text-black md:text-4xl lg:text-[2.5rem]">
              integrations
              <span className="font-normal text-neutral-500">.lab</span>
            </span>
          </div>
          <p className="mt-3 max-w-md text-lg leading-snug text-neutral-800 md:text-xl" data-brand-line>
            Calm curricula for OAuth, vendor APIs, and webhooks—with receipts.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              data-nav-item
              href={l.href}
              className="relative text-base font-semibold text-neutral-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-[width] hover:text-black hover:after:w-full lg:text-[17px]"
            >
              {l.label}
            </a>
          ))}
          <span className="hidden text-sm font-medium text-neutral-500 lg:inline" data-nav-item>
            Pilot · self-paced drills
          </span>
        </nav>

        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          <a
            data-nav-item
            href="#resources"
            className="rounded-lg border-2 border-black/15 px-5 py-2.5 text-base font-semibold text-neutral-800 transition-colors hover:border-black hover:text-black"
          >
            Reading list
          </a>
          <a
            data-nav-item
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-black px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition-[transform] hover:-translate-y-0.5"
          >
            View repo template
          </a>
        </div>
      </div>
    </header>
  );
}
