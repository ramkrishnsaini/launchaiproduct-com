import { Reveal } from "@/components/Reveal";

const audience = [
  "Developers who want a real product, not a side-project graveyard",
  "DevOps and platform engineers with systems judgment",
  "Senior engineers stepping toward founder mode",
  "Working professionals with limited time but serious standards",
  "Typically 5+ years experience—enough to ship, enough to know what “real” means",
  "People who want to build a product alongside a job—not quit on day one without a plan",
];

export function AudienceSection() {
  return (
    <section id="audience" className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Who this is for
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Serious builders who want{" "}
              <span className="text-zinc-200">both direction and build support</span>—not a PDF and
              a prayer.
            </p>
          </Reveal>

          <ul className="space-y-3">
            {audience.map((line, i) => (
              <Reveal key={line} delay={i * 40}>
                <li className="flex items-start gap-3 rounded-lg border border-white/6 bg-white/[0.02] px-4 py-3 text-sm text-zinc-300 transition hover:border-brand-accent/20">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {line}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
