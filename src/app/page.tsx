import type { PillarItem } from "@/components/landing/PillarsReveal";
import { ComparisonBand } from "@/components/landing/ComparisonBand";
import { DeliverablesReveal } from "@/components/landing/DeliverablesReveal";
import { FaqReveal } from "@/components/landing/FaqReveal";
import { GlossaryReveal } from "@/components/landing/GlossaryReveal";
import { LabStepsReveal } from "@/components/landing/LabStepsReveal";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { LogoStripReveal } from "@/components/landing/LogoStripReveal";
import { MiddlewarePracticeSection } from "@/components/landing/MiddlewarePracticeSection";
import { PillarsReveal } from "@/components/landing/PillarsReveal";
import { PitfallsReveal } from "@/components/landing/PitfallsReveal";
import { PrinciplesReveal } from "@/components/landing/PrinciplesReveal";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StatsReveal } from "@/components/landing/StatsReveal";

const pillars: PillarItem[] = [
  {
    title: "OAuth & identity",
    blurb:
      "Authorization code, PKCE refresh cadence, and consent UX you can articulate.",
  },
  {
    title: "REST & GraphQL surfaces",
    blurb:
      "Pagination quirks, envelopes, versioning, and idempotency on unsafe verbs.",
  },
  {
    title: "Webhooks & events",
    blurb:
      "Signatures, retries, reconciliation jobs, replay windows, DLQ instincts.",
  },
  {
    title: "Data contracts",
    blurb:
      "Schemas, additive changes, tolerant readers, migrations without drama.",
  },
  {
    title: "Resilience budgets",
    blurb:
      "Backoff, jitter, bulkheads—when to circuit-break a failing dependency.",
  },
  {
    title: "Operational truth",
    blurb:
      "Correlation IDs, audit traces, alerting that names the integration owner.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#ececee]">
      <LandingHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 pb-28 lg:px-10">
        <LandingHero />

        <StatsReveal />

        <ScrollReveal y={48}>
          <section className="border-b border-black/10 py-16 md:py-20">
            <div className="grid gap-12 md:grid-cols-[1fr_1.25fr] md:gap-16 lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
                  Why integrations
                </p>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-black md:text-3xl lg:text-[2.125rem]">
                  Glue work is architecture, not filler.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-neutral-800 md:text-xl">
                <p className="text-black">
                  Nearly every mature product stitches together payments, comms,
                  identity, warehouses, calendars, CRMs—you name it. Teams that wing
                  it accrue brittle one-offs; teams that rehearse integrations ship
                  calmer outages and sharper contracts across boundaries.
                </p>
                <p>
                  This space is deliberately greyscale: constraints over branding, so the
                  ideas stay portable between vendors you will actually meet on the job.
                </p>
                <p>
                  Treat every integration like a product inside your product: define SLOs,
                  document blast radius, rehearse failure games, and schedule vendor
                  upgrades with the same rigor you give your own deploy train.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div id="pillars" className="scroll-mt-28">
          <PillarsReveal items={pillars} />
        </div>

        <LogoStripReveal />

        <ScrollReveal y={44} className="border-y border-black/10 py-16 md:py-20">
          <section id="lifecycle-map" className="scroll-mt-28">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
              Request lifecycle
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-black md:text-3xl lg:text-[2.125rem]">
              One slow path drawn end-to-end
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800 md:text-xl">
              Sketch this on a whiteboard until it feels boring—then automate the probes
              and dashboards that prove each hop still behaves when vendors update
              quirks without telling you.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800 md:text-xl">
              Drop synthetic transactions per stage, keep shadow traffic reading the same
              schemas as production, and publish a single JSON trace sample in your
              internal wiki so new engineers inherit context—not archaeology.
            </p>
            <ol className="mt-12 grid gap-4 md:grid-cols-5">
              {[
                "Client intent",
                "Token gate",
                "Vendor API",
                "Side effects",
                "Webhook echo",
              ].map((label, i, arr) => (
                <li
                  key={label}
                  className="flex flex-col rounded-xl border-2 border-black/10 bg-white px-5 py-5"
                >
                  <span className="font-mono text-sm font-medium text-neutral-600">
                    {i + 1}/{arr.length}
                  </span>
                  <span className="mt-3 text-lg font-semibold text-black">
                    {label}
                  </span>
                  <span className="mt-auto pt-10 font-mono text-xs font-medium uppercase tracking-wide text-neutral-500">
                    trace id →
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </ScrollReveal>

        <div className="py-16 md:py-20">
          <LabStepsReveal />
        </div>

        <ScrollReveal y={40}>
          <section className="py-16 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
              Toolbox
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-black md:text-3xl lg:text-[2.125rem]">
              Everyday gear—nothing exotic required
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-800 md:text-xl">
              Mix and match. The integrations discipline transfers; the tooling is here
              to keep feedback loops tight while you experiment locally.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-800 md:text-xl">
              Pair an HTTP proxy with structured logging, capture HARs for regression
              fixtures, and script schema snapshots so OpenAPI diffs block CI when
              vendors ship breaking query params under a minor version bump.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Next.js App Router",
                "Type-safe env schemas",
                "HTTP proxy / tunnel",
                "REST playground",
                "Structured logs",
                "Feature flags",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-lg border-2 border-black/12 bg-white px-4 py-2.5 text-base font-medium text-black"
                >
                  {label}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <div className="py-10 md:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
              Responsibility lattice
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black md:text-3xl">
              Negotiate accountability before paging anyone.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-neutral-800 md:text-xl">
              When incident bridges start, ambiguity loses. Memorize which alarms you own
              versus pass-through vendor tickets—writes it into your status template now.
            </p>
            <div className="mt-10">
              <ComparisonBand />
            </div>
          </div>
        </ScrollReveal>

        <DeliverablesReveal />

        <div id="pitfalls" className="scroll-mt-28">
          <PitfallsReveal />
        </div>

        <PrinciplesReveal />

        <FaqReveal />

        <GlossaryReveal />

        <MiddlewarePracticeSection />

        <ScrollReveal>
          <section id="outline" className="scroll-mt-28 border-y border-black/10 py-16 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
              Loose outline
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-black md:text-3xl lg:text-[2.125rem]">
              Weeks you can remap to your cadence
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-neutral-800 md:text-xl">
              Shuffle blocks if deadlines bite—just keep sequencing token work before noisy
              write paths so you aren&apos;t debugging auth while traffic doubles.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                {
                  w: "Week 1 · Contracts",
                  d: "Read vendor docs aggressively; summarize failure modes aloud.",
                },
                {
                  w: "Week 2 · Tokens",
                  d: "Build obtain/refresh flows with explicit clock skew handling.",
                },
                {
                  w: "Week 3 · Writes",
                  d: "Idempotent creates/updates plus meaningful error taxonomy.",
                },
                {
                  w: "Week 4 · Events",
                  d: "Consume webhooks with verification jobs and reconciliation.",
                },
                {
                  w: "Week 5 · Load & limits",
                  d: "Backpressure, quotas, graceful degradation—not heroics.",
                },
                {
                  w: "Week 6 · Operate",
                  d: "Runbooks, rotations, alerting with owners named in code.",
                },
              ].map((row) => (
                <article
                  key={row.w}
                  className="rounded-xl border-2 border-black/10 bg-white px-6 py-5"
                >
                  <h3 className="text-lg font-semibold text-black">{row.w}</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-800 md:text-lg">
                    {row.d}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-16 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
              Canonical examples
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-black md:text-3xl lg:text-[2.125rem]">
              Neutral stand-ins—you will swap logos per employer
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-neutral-800 md:text-xl">
              Use these categories to pressure-test procurement questionnaires: data
              residency, subprocessors, incident comms windows, and custom DPA riders.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Payments rails",
                "Chat & notifications",
                "Source control hooks",
                "CRM automations",
                "Calendar scheduling",
                "Issue trackers",
              ].map((name) => (
                <div
                  key={name}
                  className="rounded-xl border-2 border-dashed border-black/20 bg-white px-5 py-6 text-lg font-semibold text-black"
                >
                  {name}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section
            id="resources"
            className="scroll-mt-28 rounded-xl border-2 border-black/10 bg-white px-8 py-12 md:px-10 md:py-14"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl">
              Reading that earns its bookmark bar space
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800 md:text-xl">
              Start with fundamentals; skim vendor fluff after you know what you’re
              looking for on the page footer (status pages, quotas, SLA footnotes).
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800 md:text-xl">
              Bookmark raw RFC sections, not blog summaries—when legal asks for citations,
              PDF page numbers beat Medium links.
            </p>
            <ul className="mt-10 space-y-4 text-lg md:text-xl">
              <li>
                <a
                  href="https://oauth.net/2/"
                  className="font-medium text-black underline decoration-black/25 decoration-2 underline-offset-[6px] transition hover:decoration-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OAuth 2.0 — framework overview
                </a>
              </li>
              <li>
                <a
                  href="https://webhooks.fyi/"
                  className="font-medium text-black underline decoration-black/25 decoration-2 underline-offset-[6px] transition hover:decoration-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  webhooks.fyi patterns & pitfalls
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org/docs"
                  className="font-medium text-black underline decoration-black/25 decoration-2 underline-offset-[6px] transition hover:decoration-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js documentation (routing & data)
                </a>
              </li>
            </ul>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mt-16 rounded-xl border-2 border-black bg-black px-8 py-14 text-white md:px-12 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-400">
              When you sit down tonight
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl md:leading-tight lg:text-[2.75rem]">
              Pick one API surface, photocopy its error appendix, annotate it cynically,
              implement the smallest authenticated call.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              That loop—read, diagram, codify—is the spine of every credible integration story.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#pillars"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-base font-semibold text-black transition hover:bg-neutral-100"
              >
                Jump to pillars
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white/30 px-6 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open GitHub sandbox
              </a>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </div>
  );
}
