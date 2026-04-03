import { Reveal } from "@/components/Reveal";

const items = [
  "AI product strategy",
  "Product build & delivery",
  "2 decades real-world engineering",
  "Not wrappers · not automation theater",
];

export function TrustStrip() {
  return (
    <div className="border-b border-white/5 bg-white/[0.02] px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-widest text-zinc-500 sm:gap-x-10 sm:text-xs">
        {items.map((t, i) => (
          <Reveal key={t} delay={i * 40}>
            <span className="flex max-w-[18rem] items-center gap-2 text-center sm:max-w-none">
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-accent/70" />
              {t}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
