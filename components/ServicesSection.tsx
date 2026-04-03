import { Reveal } from "@/components/Reveal";

const strategyOfferItems = [
  "Idea discovery and framing",
  "Research and shortlisting",
  "Moat and differentiation",
  "Architecture direction",
  "Roadmap and sequencing",
];

const buildOfferItems = [
  "Development guidance as you build",
  "Architecture support through implementation",
  "Help executing toward a shippable product",
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,98,76,0.12)_0%,transparent_45%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl min-w-0">
        <Reveal>
          <div className="w-full border-b border-white/10 pb-10 sm:pb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Strategy + build. One clear offer.
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              <span className="text-zinc-300">AI product strategy</span> gets you from ambiguity to
              a defensible concept, architecture, and roadmap.{" "}
              <span className="text-zinc-300">Product build &amp; delivery</span> is support while
              you implement—so you’re not alone when the cursor meets the repo. Scope and pricing are
              agreed per engagement.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid w-full min-w-0 gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={60}>
            <div className="h-full min-w-0 rounded-2xl border border-brand-accent/25 bg-gradient-to-br from-brand-surface/40 to-brand-bg p-8 shadow-[0_0_80px_rgba(3,98,76,0.12)] sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-accent sm:text-xs">
                AI product strategy
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                AI Product Launch Sprint
              </h3>
              <p className="mt-2 text-sm text-zinc-500">Consulting — idea + strategy</p>
              <ul className="mt-8 space-y-3">
                {strategyOfferItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-300">
                    <span className="text-brand-accent" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 sm:text-xs">
                Product build &amp; delivery
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">Build support</h3>
              <p className="mt-2 text-sm text-zinc-500">Delivery — implementation partner</p>
              <ul className="mt-8 space-y-3">
                {buildOfferItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-300">
                    <span className="text-brand-accent" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-zinc-500">
                Product build &amp; delivery is for when you are ready to implement—we help you build
                right, not fast and wrong.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
