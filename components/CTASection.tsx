import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function CTASection() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Launch your AI product the right way
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Strategy plus build support—not generic AI noise. Start with a conversation.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-brand-accent px-8 py-4 text-base font-semibold text-brand-bg transition hover:brightness-110 sm:w-auto"
            >
              Talk on WhatsApp
            </a>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:border-brand-accent/40 hover:bg-white/10 sm:w-auto"
            >
              Book a Strategy Call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
