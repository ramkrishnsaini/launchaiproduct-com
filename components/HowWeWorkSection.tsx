import { Reveal } from "@/components/Reveal";

const strategyPillars = [
  "AI Idea Bank grounded in real-world problems",
  "Concept selection with clear criteria",
  "Technical feasibility and risk",
  "Moat strategy",
  "Architecture direction",
  "Roadmap you can execute against",
];

const buildPillars = [
  "Support to build the actual product—not just slides",
  "System design guidance as you implement",
  "API, workflow, and integration decisions",
  "Architecture validation against reality",
  "Help avoiding wrong implementation paths",
  "Moving you toward a real, working product",
];

export function HowWeWorkSection() {
  return (
    <section
      id="how-we-work"
      className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            How we work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            AI product strategy + product build &amp; delivery. One partner.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-400">
            We separate{" "}
            <span className="text-zinc-200">AI product strategy</span> (ideas, moat, architecture,
            roadmap) from{" "}
            <span className="text-zinc-200">product build &amp; delivery</span> (hands-on
            implementation support)—so you get clarity first, then help shipping. Not idea-only. Not
            a chatbot shop.
            <span className="text-zinc-300"> Idea → architecture → build → real product.</span>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={60}>
            <article className="flex h-full flex-col rounded-2xl border border-brand-accent/30 bg-gradient-to-b from-brand-surface/30 to-brand-bg p-8 shadow-[0_0_60px_rgba(0,223,130,0.06)] transition hover:border-brand-accent/45">
              <div className="mb-6 inline-flex w-fit rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-accent sm:text-xs">
                AI product strategy
              </div>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                Consulting — idea + direction
              </h3>
              <p className="mt-2 text-sm text-zinc-500">Idea + strategy + architecture</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {strategyPillars.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-white/5 pt-3 text-sm text-zinc-300 first:border-0 first:pt-0"
                  >
                    <span className="mt-0.5 text-brand-accent" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-brand-accent/25 hover:shadow-[0_0_50px_rgba(0,223,130,0.05)]">
              <div className="mb-6 inline-flex w-fit rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400 sm:text-xs">
                Product build &amp; delivery
              </div>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                Build &amp; delivery support
              </h3>
              <p className="mt-2 text-sm text-zinc-500">Development guidance + execution help</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {buildPillars.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-white/5 pt-3 text-sm text-zinc-300 first:border-0 first:pt-0"
                  >
                    <span className="mt-0.5 text-brand-accent" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
