import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const strategyItems = [
  "Real AI product ideas based on industry problems",
  "Strong concept selection (not random ideas)",
  "Technical feasibility + moat thinking",
  "Architecture direction + roadmap",
];

const buildItems = [
  "Guidance to build the actual product",
  "System design, APIs, workflows, integrations",
  "Avoid wrong implementation decisions",
  "Move from idea → working product",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 px-4 pb-20 pt-16 sm:px-6 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-pattern opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-accent/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-surface/30 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-surface/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-accent">
            Not wrappers · Not random POCs · Real AI products
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal delay={40}>
              <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Launch Your Own <span className="text-brand-accent">AI</span> Product
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 max-w-xl space-y-4 text-lg text-zinc-400 text-balance sm:text-xl">
                <p>
                  From idea to real product — with the right strategy, architecture, and actual build
                  support.
                </p>
                <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                  For developers and professionals who want to become founders and build alongside
                  their job.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 max-w-xl space-y-4 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-5 sm:px-5">
                <p className="text-sm font-medium leading-relaxed text-zinc-200 sm:text-base">
                  Built on 2 Decades of Real-World Engineering Experience — Not AI-Generated Ideas
                </p>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  We work on large-scale enterprise systems and complex real-world problems. That
                  exposure helps us identify what can actually become a product — and how to build it
                  properly.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3.5 text-base font-semibold text-brand-bg shadow-[0_0_40px_rgba(0,223,130,0.25)] transition hover:brightness-110"
                >
                  Talk on WhatsApp
                </a>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-base font-medium text-white transition hover:border-brand-accent/40 hover:bg-white/10"
                >
                  Book a Strategy Call
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-brand-surface/50 to-brand-bg p-8 shadow-[0_0_60px_rgba(3,98,76,0.35)] lg:sticky lg:top-28">
              <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-brand-accent/20 blur-2xl" aria-hidden />
              <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                What You Actually Get
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    AI product strategy
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {strategyItems.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-snug text-zinc-300 sm:text-[15px]"
                      >
                        <span className="mt-0.5 shrink-0 text-brand-accent" aria-hidden>
                          ✔
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Product build &amp; delivery
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {buildItems.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-snug text-zinc-300 sm:text-[15px]"
                      >
                        <span className="mt-0.5 shrink-0 text-brand-accent" aria-hidden>
                          ✔
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-relaxed text-zinc-500 sm:text-sm">
                Not just ideas. Not just documents. Real product strategy + real delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
