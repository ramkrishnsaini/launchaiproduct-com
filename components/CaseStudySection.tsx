import { Reveal } from "@/components/Reveal";

const wrongBullets = [
  "collect random ideas from interns",
  "build quick POCs",
  "use paid AI APIs for everything",
  "deploy directly on cloud",
];

const correctedBullets = [
  "focused on one real problem area instead of multiple ideas",
  "defined who the product is for and what outcome it should deliver",
  "removed dependency on expensive API-first approach",
  "identified a practical architecture using controlled and scalable components",
];

const structuredBullets = [
  "one focused use case with real value",
  "defined system flow and architecture",
  "step-by-step roadmap to build alongside a full-time job",
  "cost-aware approach using owned / controlled components",
];

export function CaseStudySection() {
  return (
    <section id="case-studies" className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Example: from random AI idea → structured product
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Based on a real working professional scenario.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          <Reveal delay={60}>
            <article className="rounded-2xl border border-red-500/25 bg-red-500/[0.04] p-8 sm:p-10">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-red-300/90">
                Wrong path
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                An experienced DevOps engineer wanted to “build something in AI.”
              </p>
              <p className="mt-4 text-sm font-medium text-zinc-400">Initial plan:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                {wrongBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-zinc-500">
                No clear product, no target user, no cost control — just trying multiple things hoping
                something works.
              </p>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Corrected
              </h3>
              <p className="mt-4 text-sm font-medium text-zinc-300 sm:text-base">
                We restructured the approach completely:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                {correctedBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-zinc-300">
                Instead of building first, we defined what is worth building.
              </p>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="rounded-2xl border border-brand-accent/25 bg-brand-surface/15 p-8 sm:p-10 shadow-[0_0_50px_rgba(0,223,130,0.06)]">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Structured product
              </h3>
              <p className="mt-4 text-sm font-medium text-zinc-300 sm:text-base">
                A clear product direction was created:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
                {structuredBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                From random experimentation → to a structured product path.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                With Product Build &amp; Delivery support, the next step is turning this into a working
                system — without wasting time or money on wrong decisions.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
