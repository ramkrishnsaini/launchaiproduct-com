import { Reveal } from "@/components/Reveal";

const outcomes = [
  "Clarity on what to build and what to ignore",
  "A real product idea you can defend—not a feature grab bag",
  "Technical confidence: architecture and sequencing that match your constraints",
  "A roadmap you can execute—or use to align a team or investors",
  "Ability to move into product build & delivery when you’re ready to ship",
  "Less wasted months on the wrong concept, stack, or scope",
];

export function OutcomesSection() {
  return (
    <section id="outcomes" className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What you walk away with
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Outcomes span strategy <span className="text-zinc-300">and</span> the path to a shipped
            product—not a stack of slides.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {outcomes.map((o, i) => (
            <Reveal key={o} delay={i * 45}>
              <div className="flex gap-4 rounded-xl border border-white/8 bg-gradient-to-r from-brand-surface/20 to-transparent p-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-xs font-bold text-brand-accent">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-zinc-300">{o}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
