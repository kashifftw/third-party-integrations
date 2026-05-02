const rows = [
  {
    you: "Token storage strategy & rotation playbook",
    vendor: "Token issuance TTLs / revocation semantics",
  },
  {
    you: "Webhook receiver + verifier + reconciliation jobs",
    vendor: "Event payload schema churn & deprecation windows",
  },
  {
    you: "Retries, backoff, idempotency on writes",
    vendor: "Rate limits, bursts, flaky regional endpoints",
  },
  {
    you: "User-visible error translation & remediation copy",
    vendor: "Opaque error envelopes that need mapping",
  },
] as const;

export function ComparisonBand() {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-black/10 bg-white">
      <div className="grid border-b border-black/10 md:grid-cols-2">
        <div className="border-b border-black/10 bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white md:border-b-0 md:border-r">
          You own clarity
        </div>
        <div className="bg-neutral-900 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-neutral-300">
          Vendor owns constraints
        </div>
      </div>
      <ul className="divide-y divide-black/10">
        {rows.map((r) => (
          <li
            key={r.you}
            className="grid gap-6 px-6 py-5 md:grid-cols-2 md:gap-0 md:divide-x md:divide-black/10"
          >
            <p className="text-base leading-relaxed text-black md:pr-6 md:text-lg">
              {r.you}
            </p>
            <p className="text-base leading-relaxed text-neutral-800 md:pl-6 md:text-lg">
              {r.vendor}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
