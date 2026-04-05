import { Reveal } from "@/components/Reveal";

const cards: { title: string; items: string[] }[] = [
  {
    title: "Agentic AI Systems",
    items: [
      "Design multi-step AI systems where reasoning, planning, tool use, and execution are separated into controlled layers",
      "Build orchestration logic around agents instead of allowing uncontrolled model behavior",
      "Define agent responsibilities, task routing, memory boundaries, and validation checkpoints",
      "Support human-in-the-loop review where critical actions need approval",
      "Add retries, guardrails, fallback flows, and execution tracing for reliability",
    ],
  },
  {
    title: "RAG & Knowledge Architecture",
    items: [
      "Build retrieval-augmented systems using vector search, structured filters, ranking layers, and context assembly pipelines",
      "Separate knowledge retrieval from generation so the model works with grounded context instead of unsupported assumptions",
      "Design chunking, indexing, embedding, retrieval, reranking, and response assembly as distinct architecture concerns",
      "Integrate domain-specific documents, structured data, and internal knowledge sources into one usable knowledge layer",
      "Optimize retrieval quality, response relevance, and latency for real usage instead of demo-only accuracy",
    ],
  },
  {
    title: "Inference & Model Serving",
    items: [
      "Design inference architecture based on latency, throughput, cost, privacy, and ownership requirements",
      "Decide when to use local inference, self-hosted open-source models, fine-tuned models, or managed serving",
      "Separate online inference, async inference, streaming inference, and batch processing based on workload type",
      "Build replaceable model layers so the system is not tightly coupled to one provider or one model generation",
      "Plan for versioning, evaluation, rollback, and model evolution without breaking the product architecture",
    ],
  },
  {
    title: "Model Strategy & SLM/LLM Decisions",
    items: [
      "Choose model strategy based on the task, not hype or model size",
      "Decide when a small language model is enough and when a larger reasoning model is justified",
      "Use task decomposition and architecture design to reduce unnecessary model complexity",
      "Balance accuracy, response quality, speed, and infrastructure cost as engineering trade-offs",
      "Avoid defaulting to expensive hosted models when open architectures can solve the problem",
    ],
  },
  {
    title: "Data Pipelines & Feedback Loops",
    items: [
      "Design systems that capture interaction signals, failures, corrections, and outcomes as structured feedback",
      "Build data loops that improve retrieval, ranking, workflows, and output quality over time",
      "Separate operational data, training signals, user behavior, and product analytics into usable architecture layers",
      "Ensure traceability, ownership, and control of data across the system",
      "Turn usage into system intelligence instead of treating outputs as one-time responses",
    ],
  },
  {
    title: "Memory, State & Context Control",
    items: [
      "Design short-term and long-term memory layers based on actual product needs",
      "Control what context is persisted, refreshed, summarized, or discarded across sessions",
      "Separate working context, historical context, user state, and task memory",
      "Prevent uncontrolled memory growth and irrelevant context accumulation",
      "Ensure memory improves system usefulness without degrading reliability or cost efficiency",
    ],
  },
  {
    title: "Workflow Orchestration & Business Logic",
    items: [
      "Integrate AI into full product workflows instead of isolating it inside a chat box",
      "Coordinate models, retrieval systems, APIs, event streams, rules engines, and business services",
      "Design systems where AI complements deterministic logic rather than replacing it blindly",
      "Handle retries, partial failures, sequencing, timeouts, and dependencies as architecture concerns",
      "Build execution flows that connect reasoning to real actions inside the product",
    ],
  },
  {
    title: "Evaluation, Reliability & Guardrails",
    items: [
      "Define evaluation beyond “it looks good” by measuring relevance, correctness, consistency, and task completion",
      "Add structured validation layers before outputs are trusted or executed",
      "Use architecture-level guardrails for retrieval quality, unsafe actions, low-confidence outputs, and tool misuse",
      "Design fallback behavior when the system cannot answer reliably",
      "Treat quality control as part of the system, not a post-launch fix",
    ],
  },
  {
    title: "Scalable Product Architecture",
    items: [
      "Design modular AI systems that can evolve from focused v1 use cases into broader platforms",
      "Separate product layers so inference, retrieval, workflows, and integrations can scale independently",
      "Avoid monolithic AI implementations that become hard to optimize, replace, or extend",
      "Create architecture boundaries early to reduce future rewrite cost",
      "Build for long-term product evolution, not just short-term demos",
    ],
  },
  {
    title: "Owned AI Infrastructure",
    items: [
      "Favor controlled architecture over dependency-heavy API-first systems",
      "Use open-source and self-managed components where they make technical and financial sense",
      "Reduce lock-in by keeping model, retrieval, and orchestration layers replaceable",
      "Design systems with long-term cost sustainability in mind",
      "Build products that remain viable without being trapped by external pricing changes",
    ],
  },
];

export function AIArchitectureDepthSection() {
  return (
    <section
      id="architecture-depth"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/5 bg-brand-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-pattern opacity-[0.35]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-accent/[0.06] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-surface/20 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl">
      <Reveal>
        <header className="relative w-full">
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-accent/25 via-brand-accent/5 to-transparent opacity-80 blur-sm"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-brand-accent/25 bg-gradient-to-br from-brand-surface/45 to-brand-bg p-8 shadow-[0_0_80px_rgba(3,98,76,0.18),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[length:40px_40px] bg-grid-pattern opacity-[0.12]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-20 top-1/3 h-56 w-56 rounded-full bg-brand-accent/[0.07] blur-3xl"
                aria-hidden
              />
              <div className="relative border-l-2 border-brand-accent pl-6 sm:pl-8">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-brand-accent/90">
                  Architecture
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                  AI Architecture Depth
                </h2>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
                  <p>
                    We design AI systems as{" "}
                    <span className="text-brand-accent">full architectures</span> — not as isolated model
                    calls or thin UI layers.
                  </p>
                  <p>
                    The focus is on building controllable, scalable, production-ready systems with clear
                    boundaries between{" "}
                    <span className="text-brand-accent">
                      model reasoning, retrieval, orchestration, inference, memory, workflows, and product
                      integration.
                    </span>
                  </p>
                </div>
                <p className="mt-8 border-t border-white/10 pt-8 font-display text-lg font-semibold leading-snug text-brand-accent sm:text-xl">
                  This is architecture-level thinking for real AI products.
                </p>
              </div>
            </div>
          </header>
      </Reveal>

        <div className="mt-16 grid min-w-0 gap-6 sm:mt-20 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={40 + (i % 6) * 35}>
              <div className="relative h-full min-w-0">
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-accent/25 via-brand-accent/5 to-transparent opacity-70 blur-sm"
                  aria-hidden
                />
                <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-brand-accent/25 bg-gradient-to-br from-brand-surface/45 to-brand-bg shadow-[0_0_80px_rgba(3,98,76,0.14),inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:border-brand-accent/40 hover:shadow-[0_0_80px_rgba(0,223,130,0.12)]">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[length:40px_40px] bg-grid-pattern opacity-[0.08]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-brand-accent/[0.07] blur-3xl transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                    <div className="min-w-0 border-l-2 border-brand-accent pl-4 sm:pl-5">
                      <h3 className="font-display text-base font-semibold leading-snug text-brand-accent sm:text-[17px]">
                        {card.title}
                      </h3>
                      <ul className="mt-5 flex flex-1 flex-col">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="border-t border-white/10 pt-3.5 text-[13px] leading-relaxed text-zinc-300 first:border-t-0 first:pt-0 sm:text-[14px] sm:leading-[1.65]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <aside className="relative mt-16 w-full sm:mt-20">
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-accent/25 via-brand-accent/5 to-transparent opacity-80 blur-sm" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-brand-accent/25 bg-gradient-to-br from-brand-surface/45 to-brand-bg p-8 shadow-[0_0_80px_rgba(3,98,76,0.18),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[length:40px_40px] bg-grid-pattern opacity-[0.12]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-accent/[0.07] blur-3xl"
                aria-hidden
              />
              <div className="relative border-l-2 border-brand-accent pl-6 sm:pl-8">
                <p className="font-display text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
                  The goal is not to add{" "}
                  <span className="text-brand-accent">AI as a feature</span>.
                </p>
                <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
                  The goal is to design an AI product as a{" "}
                  <span className="font-medium text-zinc-100">real system</span> — with architecture that
                  can be{" "}
                  <span className="text-zinc-300">
                    controlled, improved, scaled, and owned
                  </span>
                  .
                </p>
                <p className="mt-8 border-t border-white/10 pt-8 font-display text-lg font-semibold leading-snug text-white sm:text-xl">
                  That is the difference between a <span className="text-zinc-500">demo</span> and a{" "}
                  <span className="text-brand-accent">product</span>.
                </p>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
