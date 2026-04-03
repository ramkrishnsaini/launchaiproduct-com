import { Reveal } from "@/components/Reveal";

const ownedItems = [
  "Focus on open-source models and self-controlled systems",
  "Reduce or eliminate dependency on third-party AI APIs",
  "Build solutions you can own, control, and scale",
  "Avoid long-term cost traps created by API-heavy designs",
];

const engineeringItems = [
  "Architecture designed based on your practical investment level",
  "Avoid unnecessary infrastructure and over-engineering",
  "Use efficient model strategies instead of expensive shortcuts",
  "Plan systems that scale without increasing cost unpredictably",
];

const professionalItems = [
  "Are working full-time",
  "Want to build something of their own",
  "Do not want to risk large upfront investment",
  "Prefer step-by-step, controlled growth",
];

export function BudgetsSection() {
  return (
    <section
      id="budgets"
      className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for Real Budgets — Without API Dependency
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-400">
            <p>
              Most AI products become expensive because they rely on external APIs and early
              high-cost decisions.
            </p>
            <p className="text-zinc-300">
              We take a different approach — designing systems with ownership, control, and
              long-term cost efficiency from day one.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={60}>
            <article className="h-full rounded-2xl border border-brand-accent/25 bg-gradient-to-b from-brand-surface/25 to-brand-bg p-8 shadow-[0_0_50px_rgba(0,223,130,0.05)]">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Owned AI architecture (not API dependency)
              </h3>
              <ul className="mt-6 space-y-3">
                {ownedItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <span className="mt-0.5 shrink-0 text-brand-accent" aria-hidden>
                      ✔
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Smart cost-aware engineering
              </h3>
              <ul className="mt-6 space-y-3">
                {engineeringItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <span className="mt-0.5 shrink-0 text-brand-accent" aria-hidden>
                      ✔
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.02] p-8 sm:p-10">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Built for working professionals
            </h3>
            <p className="mt-3 text-sm text-zinc-500">We understand most professionals:</p>
            <ul className="mt-6 space-y-3">
              {professionalItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-0.5 shrink-0 text-brand-accent" aria-hidden>
                    ✔
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              This approach is designed so you can start building without needing heavy funding.
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 rounded-2xl border border-brand-accent/20 bg-brand-surface/15 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Outcome
            </p>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              <p>
                You don’t need large capital or expensive APIs to start.
              </p>
              <p>
                You need the right idea, the right architecture, and the right technical decisions —
                built for your situation.
              </p>
              <p className="font-medium text-white">
                That’s exactly what we help you with.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
