import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./proposal.css";

export const metadata: Metadata = {
  title: "AI Product Discovery Sprint - Client Proposal",
  description:
    "A focused 7-day AI Product Discovery Sprint proposal covering market validation, MVP scope, architecture direction, and clear next steps.",
  alternates: {
    canonical: `${site.url}/proposal`,
  },
  openGraph: {
    title: "AI Product Discovery Sprint - Client Proposal",
    description:
      "7-day fixed-scope proposal: product direction, validation, MVP scope, and architecture strategy before build.",
    url: `${site.url}/proposal`,
    siteName: site.name,
    type: "article",
    images: [
      {
        url: `${site.url}/proposal/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "AI Product Discovery Sprint proposal cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product Discovery Sprint - Client Proposal",
    description:
      "7-day fixed-scope proposal to define what to build, who pays, and how to execute Phase 2.",
    images: [`${site.url}/proposal/twitter-image`],
  },
};

export default function ProposalPage() {
  return (
    <main className="proposal-page">
      <section className="cover">
        <div className="cover-inner">
          <span className="brand-line fade-up fade-up-1">LaunchAIProduct.com</span>
          <p className="brand-sub fade-up fade-up-2">
            AI Product Strategy &nbsp;•&nbsp; Build &nbsp;•&nbsp; Launch
          </p>

          <span className="cover-title fade-up fade-up-2">AI Product</span>
          <span className="cover-title-accent fade-up fade-up-3">Discovery Sprint</span>
          <p className="cover-sub fade-up fade-up-4">Phase 1 &mdash; Project Proposal</p>

        </div>
        <div className="cover-stripe">
          <div className="stripe-item stripe-1">Strategy &amp; Direction</div>
          <div className="stripe-item stripe-2">7 Days &nbsp;•&nbsp; Fixed Price</div>
          <div className="stripe-item stripe-3">No Code. No Build.</div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="label">Who this is for</span>
          <h1 className="page-title">
            Built for developers and tech professionals ready to become founders.
          </h1>
          <p className="text-[15px]">
            You have built real systems and have the technical depth to execute. What you are
            missing is a clear, validated product direction — what to build, whether people will
            pay for it, and how to start.
          </p>

          <div className="mt-7">
            <div className="who-row">
              You are a developer or tech professional with 5+ years of real-world experience
            </div>
            <div className="who-row">
              You want to build and launch your own AI product — not just explore the idea
            </div>
            <div className="who-row">
              You have motivation and skills but no clear product idea to commit to yet
            </div>
            <div className="who-row">
              You want confirmation there is a real paying market before investing months of time
            </div>
            <div className="who-row">
              You are ready to take a structured first step with expert guidance
            </div>
          </div>

          <div className="callout">
            This is for people who have decided they want to build — and now need the right
            direction.
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="label">What you get — 6 deliverables</span>
          <h1 className="page-title">A complete product direction document in 7 days.</h1>
          <p className="text-[15px]">
            Strategy and planning only. No code is written, no product is built. Building the
            actual product is Phase 2.
          </p>

          <div className="mt-7">
            <div className="del-row">
              <div className="del-num">1</div>
              <div className="del-body">
                <p className="del-title">AI Idea Bank — 3 Product Concepts</p>
                <p className="del-summary">
                  Three distinct AI product opportunities, each researched and evaluated in depth.
                </p>
                <p className="del-detail">
                  Covers: the problem each solves, who pays for it, how AI fits in, what makes it
                  defensible, and why now is the right time to build it. Ideas are based on market
                  opportunity — not limited to your existing domain.
                </p>
              </div>
            </div>

            <div className="del-row">
              <div className="del-num">2</div>
              <div className="del-body">
                <p className="del-title">Market Validation</p>
                <p className="del-summary">
                  Is there a real paying market — before you commit any build time?
                </p>
                <p className="del-detail">
                  For each concept: who the buyers are, rough market size, what comparable products
                  charge today, and whether the timing is right. Prevents you from building
                  something nobody pays for.
                </p>
              </div>
            </div>

            <div className="del-row">
              <div className="del-num">3</div>
              <div className="del-body">
                <p className="del-title">Earning Potential Estimate</p>
                <p className="del-summary">
                  What could this product realistically earn in Year 1 and at scale?
                </p>
                <p className="del-detail">
                  A grounded revenue range based on comparable products and standard pricing models.
                  Directional — not a financial forecast. Gives you a concrete reference point to
                  decide how much to invest.
                </p>
              </div>
            </div>

            <div className="del-row">
              <div className="del-num">4</div>
              <div className="del-body">
                <p className="del-title">Basic Go-To-Market Angle</p>
                <p className="del-summary">
                  Who to sell to first and which channel gives the best chance of early traction.
                </p>
                <p className="del-detail">
                  Covers: the right early customer, the best starting acquisition channel, and how
                  to position the product so it stands out immediately. Full marketing execution is
                  Phase 3 — this is the strategic foundation it builds on.
                </p>
              </div>
            </div>

            <div className="del-row">
              <div className="del-num">5</div>
              <div className="del-body">
                <p className="del-title">MVP Scope Definition</p>
                <p className="del-summary">
                  Exactly what to build in Version 1 — and what to deliberately leave out.
                </p>
                <p className="del-detail">
                  The features that must exist for a paying customer, what to defer to Version 2,
                  the core user flow, and the scope boundary that prevents Phase 2 from expanding
                  indefinitely. This becomes the direct input for the Phase 2 proposal.
                </p>
              </div>
            </div>

            <div className="del-row">
              <div className="del-num">6</div>
              <div className="del-body">
                <p className="del-title">High-Level Architecture Direction</p>
                <p className="del-summary">
                  The technical shape of the product — enough to begin Phase 2 without a blank
                  page.
                </p>
                <p className="del-detail">
                  Core system components, where AI fits and what role it plays, whether open-source
                  or managed APIs make sense, key integrations, and the infrastructure approach. The
                  architectural direction document Phase 2 development starts from.
                </p>
              </div>
            </div>
          </div>

          <div className="callout-warn mt-7">
            <strong>Important:</strong> Phase 1 is entirely strategy. No code is written, no POC is
            built, no infrastructure is set up. Building the actual product is Phase 2 — scoped and
            priced separately after this phase is complete.
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="label">How it works</span>
          <h1 className="page-title">Seven days. Structured. Async.</h1>
          <p className="text-[15px]">
            Everything runs through voice and messaging — no lengthy calls, no scheduling overhead.
            You respond on your schedule.
          </p>

          <div className="mt-7">
            <div className="day-row">
              <p className="day-label">Day 1 &mdash; Discovery</p>
              <p className="day-desc">
                You share your goals, available time, constraints, and areas of interest. The more
                specific your input, the more targeted the output. This is the most important step.
              </p>
            </div>
            <div className="day-row">
              <p className="day-label">Day 2–3 &mdash; Research</p>
              <p className="day-desc">
                Three product concepts are researched from current AI market opportunities and
                evaluated across demand, revenue potential, AI fit, and build path.
              </p>
            </div>
            <div className="day-row">
              <p className="day-label">Day 4 &mdash; Concept Review</p>
              <p className="day-desc">
                A short voice call to walk through all three concepts. You share your reaction and
                together we shortlist the strongest one to develop fully.
              </p>
            </div>
            <div className="day-row">
              <p className="day-label">Day 5–6 &mdash; Deep Dive</p>
              <p className="day-desc">
                The winning concept is fully developed — market validation, earning potential,
                go-to-market angle, MVP scope, and architecture direction.
              </p>
            </div>
            <div className="day-row">
              <p className="day-label">Day 7 &mdash; Final Delivery</p>
              <p className="day-desc">
                Everything is packaged into a clean structured document and delivered to you. A
                Phase 2 proposal scoped to your MVP is delivered alongside it.
              </p>
            </div>
          </div>

          <div className="callout">
            Your input on Day 1 and feedback on Day 4 are all that is required from you. Everything
            else is on our side.
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="label">Scope clarity — what Phase 1 does not include</span>
          <h1 className="page-title">This phase is strategy only. The build starts in Phase 2.</h1>
          <p className="mb-6 text-[15px]">
            Stated clearly so there are no mismatched expectations on either side.
          </p>

          <div>
            <div className="not-row">
              <div className="not-badge">NO</div>
              <div className="not-text">Writing any code or software development of any kind</div>
            </div>
            <div className="not-row">
              <div className="not-badge">NO</div>
              <div className="not-text">
                Building a POC, prototype, or working product — that is Phase 2
              </div>
            </div>
            <div className="not-row">
              <div className="not-badge">NO</div>
              <div className="not-text">
                Setting up any infrastructure, cloud environments, or deployment
              </div>
            </div>
            <div className="not-row">
              <div className="not-badge">NO</div>
              <div className="not-text">
                Executing any marketing or outreach campaigns — that is Phase 3
              </div>
            </div>
            <div className="not-row">
              <div className="not-badge">NO</div>
              <div className="not-text">
                Technical implementation of any AI model, API, or integration
              </div>
            </div>
          </div>

          <div className="callout mt-5">
            Phase 1 delivers one outcome: what to build, who will pay for it, and how to start.
            Building begins in Phase 2.
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="label">The full journey — 3 phases</span>
          <h1 className="page-title">From idea to product to market.</h1>
          <p className="mb-7 text-[15px]">
            This proposal covers Phase 1 only. Phase 2 and Phase 3 are scoped separately — their
            cost depends on the product and the target market, both defined in Phase 1.
          </p>

          <div className="phase-row current">
            <div className="phase-header">
              <span className="phase-num">PHASE 1</span>
              <span className="phase-title">AI Product Discovery Sprint</span>
              <span className="phase-now">← This proposal</span>
            </div>
            <p className="phase-desc">
              Strategy, validation, market analysis, earning potential, MVP scope, architecture
              direction. No code, no build of any kind.
            </p>
          </div>

          <div className="phase-row">
            <div className="phase-header">
              <span className="phase-num">PHASE 2</span>
              <span className="phase-title">Product Build — POC &amp; Working Product</span>
            </div>
            <p className="phase-desc">
              Our team builds the actual product — from POC to a shippable version ready for real
              users. Scoped and priced after Phase 1 delivery.
            </p>
          </div>

          <div className="phase-row">
            <div className="phase-header">
              <span className="phase-num">PHASE 3</span>
              <span className="phase-title">Marketing &amp; Growth — Acquiring Customers</span>
            </div>
            <p className="phase-desc">
              Hands-on execution: campaigns, content, outreach, and customer acquisition. Scoped
              and priced after Phase 2 delivery.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="label">Terms of engagement</span>
          <h1 className="page-title">Simple, transparent, and fair.</h1>

          <div className="mt-7">
            <div className="term-row">
              <p className="term-label">Engagement type</p>
              <p className="term-value">
                Fixed-cost, fixed-scope. Deliverables agreed upfront. No additions, no surprises.
              </p>
            </div>
            <div className="term-row">
              <p className="term-label">Timeline</p>
              <p className="term-value">
                7 days from confirmation of payment and receipt of Day 1 discovery intake.
              </p>
            </div>
            <div className="term-row">
              <p className="term-label">What is delivered</p>
              <p className="term-value">
                One strategy document. No code, no prototype, no build of any kind.
              </p>
            </div>
            <div className="term-row">
              <p className="term-label">Client responsibility</p>
              <p className="term-value">
                Timely input on Day 1 and concept feedback on Day 4. Client delays extend the
                timeline accordingly.
              </p>
            </div>
            <div className="term-row">
              <p className="term-label">Confidentiality</p>
              <p className="term-value">
                All information shared is strictly confidential and not used outside this
                engagement.
              </p>
            </div>
            <div className="term-row">
              <p className="term-label">Ownership</p>
              <p className="term-value">
                All deliverables belong entirely to the client upon completion.
              </p>
            </div>
            <div className="term-row">
              <p className="term-label">Phase 2</p>
              <p className="term-value">
                A Phase 2 proposal is prepared alongside delivery. No obligation to continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="label">Investment</span>
          <p className="price-hero">
            $800
            <span className="text-[0.4em] font-normal text-[#767676]">.00 USD</span>
          </p>
          <p className="price-sub">Fixed price. Full payment upfront. 7-day delivery.</p>

          <div className="invest-block">
            <p className="invest-title">Full payment upfront</p>
            <p className="invest-desc">
              Work begins the moment payment is confirmed. No partial payments, no staged billing,
              no hidden charges.
            </p>
          </div>
          <div className="invest-block">
            <p className="invest-title">Fixed price. Fixed scope.</p>
            <p className="invest-desc">
              Agreed deliverables, 7-day delivery. No additions and no unexpected charges after
              payment.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <p className="cta-title">Ready to get started?</p>
          <p className="cta-sub">
            Reply to confirm. Payment details follow and work begins within 24 hours.
          </p>
          <div>
            <a href="mailto:hello@launchaiproduct.com" className="cta-link">
              hello@launchaiproduct.com
            </a>
            <a
              href="https://launchaiproduct.com"
              className="cta-link"
              target="_blank"
              rel="noreferrer"
            >
              launchaiproduct.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
