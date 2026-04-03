import { Reveal } from "@/components/Reveal";

const notThis = [
  "Generating “AI ideas” from tools and passing them off as strategy",
  "Simple chatbot setups sold as product work",
  "Random POCs with no line to revenue or retention",
  "Shallow “automation” with no architecture or moat",
];

const thisIs = [
  "Identify real problems worth solving—not buzzword bingo",
  "Define product direction, positioning, and what not to build first",
  "Design architecture and sequencing you can implement",
  "Support actual implementation so the product becomes real—not a deck",
];

export function DifferentiatorSection() {
  return (
    <section id="different" className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why this is different
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-400">
            We are <span className="text-zinc-200">not</span> an idea-only shop. We are{" "}
            <span className="text-zinc-200">not</span> a generic AI automation agency. We combine{" "}
            <span className="text-zinc-200">consulting on what to build</span> with{" "}
            <span className="text-zinc-200">support to build it</span>—for people who take product
            seriously. Backed by two decades of real-world engineering in enterprise and complex
            systems; direction comes from real delivery experience, not prompt output.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-red-300/90">
                We do not
              </h3>
              <ul className="mt-6 space-y-4">
                {notThis.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-zinc-400">
                    <span className="shrink-0 text-red-400/80">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="h-full rounded-2xl border border-brand-accent/25 bg-brand-surface/25 p-8 shadow-[0_0_50px_rgba(0,223,130,0.06)]">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
                We do
              </h3>
              <ul className="mt-6 space-y-4">
                {thisIs.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-zinc-200">
                    <span className="shrink-0 text-brand-accent">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
