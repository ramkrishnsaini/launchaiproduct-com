import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Understand your background",
    body: "Goals, constraints, skills, and what “success” means for your product—not a generic template.",
  },
  {
    n: "02",
    title: "Create the AI idea bank",
    body: "Directions grounded in real problems and your context—not a dump of generic AI use cases.",
  },
  {
    n: "03",
    title: "Select the best concept",
    body: "Shortlist using feasibility, differentiation, and fit with what you can actually ship.",
  },
  {
    n: "04",
    title: "Define architecture",
    body: "System shape, sequencing, and technical decisions so build has a spine—not endless rework.",
  },
  {
    n: "05",
    title: "Support the build",
    body: "Guidance through implementation: design checks, integration choices, and steering toward a working product.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Process
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            From clarity to execution—strategy first, then product build & delivery when you’re ready to implement.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-[1.15rem] top-0 hidden h-full w-px bg-gradient-to-b from-brand-accent/50 via-brand-accent/20 to-transparent md:block"
            aria-hidden
          />
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <li className="relative flex flex-col gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-6 pl-6 md:flex-row md:items-start md:gap-8 md:pl-10">
                  <span className="font-display text-2xl font-semibold text-brand-accent md:w-12 md:shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
