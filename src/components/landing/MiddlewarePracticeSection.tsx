export function MiddlewarePracticeSection() {
  return (
    <section className="py-16 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700">
        Middleware & proxies
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black md:text-3xl">
        Make the choke point observable before you mythologize latency.
      </h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-lg leading-relaxed text-neutral-800 md:text-xl">
          <p className="text-black">
            Whether you terminate TLS at the edge proxy or bounce through a VPC
            connector, annotate every hop with a span so vendor latency debates cite
            data—not vibes.
          </p>
          <p>
            Run synthetic probes that hit sandbox credentials from the exact runtime
            you deploy—not your laptop—with alerts when DNS or egress tables drift.
          </p>
        </div>
        <aside className="rounded-2xl border-2 border-black/15 bg-neutral-950 p-6 text-[15px] leading-relaxed text-neutral-300 md:p-8 md:text-base">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Sample checklist
          </p>
          <ul className="mt-5 space-y-3 text-neutral-200">
            <li>
              ● Forward{" "}
              <code className="rounded bg-white/10 px-1 py-px text-neutral-100">
                X-Integration-Probe
              </code>{" "}
              header for shadow traffic.
            </li>
            <li>● Mirror 1% payloads to verifier without duplicating commits.</li>
            <li>● Alarm on divergence between vendor SLA clock and ours &gt; 30s.</li>
            <li>● Canary route per dependency with rollback under 120s.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
