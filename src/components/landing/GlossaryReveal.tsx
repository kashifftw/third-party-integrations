"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const terms = [
  {
    term: "Audience",
    def: "The lock on a JWT or token—often your client id + issued scopes. Audience drift breaks verify steps quietly.",
  },
  {
    term: "Lease",
    def: "Time-bounded optimistic lock on webhook processing; prevents thundering herds from duplicating payouts.",
  },
  {
    term: "Narrow egress",
    def: "Only your worker subnet talks to vendors; IPs are allow-listed and rotated under change control.",
  },
  {
    term: "Poison pill payload",
    def: "Input that passes schema but wedges downstream—keep kill switches and replay buffers short.",
  },
  {
    term: "Symmetric signing",
    def: "HMAC webhook verification vs asymmetric vendor keys—different rotation stories, budget both.",
  },
] as const;

export function GlossaryReveal() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-gloss]");
      if (prefersReducedMotion()) {
        gsap.set(rows, { opacity: 1, scale: 1 });
        return;
      }
      gsap.set(rows, { opacity: 0, scale: 0.98 });
      gsap.to(rows, {
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="border-y border-black/10 py-16 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
        Jargon distilled
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black md:text-3xl">
        Vocabulary reviewers expect you to wield precisely.
      </h2>
      <dl className="mt-10 grid gap-3 md:grid-cols-2">
        {terms.map(({ term, def }) => (
          <div
            key={term}
            data-gloss
            className="rounded-xl border-2 border-black/10 bg-white px-5 py-4"
          >
            <dt className="font-mono text-xs font-semibold uppercase tracking-wide text-neutral-600">
              {term}
            </dt>
            <dd className="mt-3 text-base leading-relaxed text-neutral-900 md:text-lg">
              {def}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
