import { Reveal } from "@/components/Reveal";

type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; intro?: string; items: string[] };

type FaqItem = {
  q: string;
  blocks: FaqBlock[];
};

const faqs: FaqItem[] = [
  {
    q: "Do I need an idea before I contact you?",
    blocks: [
      { type: "p", text: "No." },
      {
        type: "p",
        text: "Most professionals come with skills, experience, and interest in AI — but no clear product idea.",
      },
      {
        type: "p",
        text: "We help you identify real opportunities based on industry exposure, filter weak directions, and define a product that actually makes sense.",
      },
    ],
  },
  {
    q: "Do you actually help build the product?",
    blocks: [
      { type: "p", text: "Yes." },
      {
        type: "p",
        text: "AI Product Strategy covers idea, moat, and architecture.",
      },
      {
        type: "p",
        text: "Product Build & Delivery goes further — we guide you through actual implementation, including system design, integrations, workflows, and technical decisions.",
      },
      {
        type: "p",
        text: "You are not left with just a document — you are supported until the product takes shape.",
      },
    ],
  },
  {
    q: "Is this a chatbot or API wrapper service?",
    blocks: [
      { type: "p", text: "No." },
      {
        type: "p",
        text: "We do not build thin wrappers or default chatbot products.",
      },
      {
        type: "p",
        text: "If a conversational layer makes sense, it will be part of a larger system — not the product itself.",
      },
      {
        type: "p",
        text: "The focus is on real product architecture, ownership, and long-term value.",
      },
    ],
  },
  {
    q: "Can I do this alongside a full-time job?",
    blocks: [
      { type: "p", text: "Yes." },
      {
        type: "p",
        text: "This is designed specifically for working professionals.",
      },
      {
        type: "p",
        text: "The process focuses on:",
      },
      {
        type: "ul",
        items: ["clear decisions", "structured roadmap", "practical timelines"],
      },
      {
        type: "p",
        text: "So you can build step-by-step without disrupting your job.",
      },
    ],
  },
  {
    q: "Do I need a large budget to start?",
    blocks: [
      { type: "p", text: "No." },
      {
        type: "p",
        text: "This approach is built for practical investment — not heavy upfront spending.",
      },
      {
        type: "p",
        text: "We focus on:",
      },
      {
        type: "ul",
        items: [
          "open-source and owned solutions",
          "minimizing dependency on expensive APIs",
          "controlled infrastructure decisions",
        ],
      },
      {
        type: "p",
        text: "The goal is to help you build smart, not expensive.",
      },
    ],
  },
  {
    q: "What makes this different from freelancers or consultants?",
    blocks: [
      { type: "p", text: "Freelancers execute tasks." },
      { type: "p", text: "Many consultants stop at strategy documents." },
      { type: "p", text: "We combine both:" },
      {
        type: "ul",
        items: [
          "AI Product Strategy → direction, idea, architecture",
          "Product Build & Delivery → real implementation guidance",
        ],
      },
      {
        type: "p",
        text: "So you are not stuck between a pitch deck and unfinished code.",
      },
    ],
  },
  {
    q: "Will I own the product and technology?",
    blocks: [
      { type: "p", text: "Yes." },
      {
        type: "p",
        text: "The approach is designed around ownership and control.",
      },
      {
        type: "p",
        text: "We prioritize architectures that you can:",
      },
      {
        type: "ul",
        items: ["understand", "manage", "scale"],
      },
      {
        type: "p",
        text: "without being locked into third-party dependencies.",
      },
    ],
  },
];

function FaqAnswer({ blocks }: { blocks: FaqBlock[] }) {
  return (
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return <p key={i}>{block.text}</p>;
        }
        return (
          <ul key={i} className="list-disc space-y-1 pl-5 text-zinc-400">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            FAQ
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Clear answers on strategy, build support, and what you’re actually getting.
          </p>
        </Reveal>

        <dl className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <div className="rounded-xl border border-white/8 bg-white/[0.02] px-5 py-5">
                <dt className="font-medium text-white">{f.q}</dt>
                <dd className="m-0">
                  <FaqAnswer blocks={f.blocks} />
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
