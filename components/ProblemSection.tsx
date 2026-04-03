import { Reveal } from "@/components/Reveal";

const pains = [
  {
    title: "No idea what to build",
    body: "Everyone says “do something in AI,” but nothing feels specific enough to commit months of life to.",
  },
  {
    title: "Random ideas, no filter",
    body: "You chase shiny concepts without a serious pass on feasibility, moat, or who actually pays.",
  },
  {
    title: "Interns and juniors too soon",
    body: "Cheap help gets hired before direction exists—you pay to learn what you should have decided first.",
  },
  {
    title: "POCs without clarity",
    body: "Demos pile up; nothing ties back to a product thesis you’d defend to yourself, let alone a user.",
  },
  {
    title: "API and cloud spend blind",
    body: "Tokens and infra bills grow with no crisp story on value delivered—spend without a product.",
  },
  {
    title: "Wrappers that aren’t products",
    body: "A thin layer on someone else’s model isn’t a business—it’s a weekend that won’t survive contact with reality.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Most people get stuck the same way
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Sound familiar? It’s not lack of talent—it’s lack of{" "}
            <span className="text-zinc-200">clarity before build</span>.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group h-full rounded-xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-brand-accent/25 hover:shadow-[0_0_40px_rgba(0,223,130,0.08)]">
                <h3 className="font-medium text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
