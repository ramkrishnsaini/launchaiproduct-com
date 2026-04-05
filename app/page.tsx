import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { BudgetsSection } from "@/components/BudgetsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { DifferentiatorSection } from "@/components/DifferentiatorSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AIArchitectureDepthSection } from "@/components/AIArchitectureDepthSection";
import { ProcessSection } from "@/components/ProcessSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <HowWeWorkSection />
        <BudgetsSection />
        <AudienceSection />
        <DifferentiatorSection />
        <ServicesSection />
        <AIArchitectureDepthSection />
        <ProcessSection />
        <OutcomesSection />
        <CaseStudySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
