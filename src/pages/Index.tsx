import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Value } from "@/components/Value";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { NodeNetwork } from "@/components/NodeNetwork";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NodeNetwork />
      <div className="relative z-10">
        <Hero />
        <Problem />
        <Value />
        <HowItWorks />
        <Testimonial />
        <FAQ />
        <Pricing />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
