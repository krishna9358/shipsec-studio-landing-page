"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { FlowDemoSection } from "@/components/flow-demo-section";
import { FeaturesSection } from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import { FoundersSection } from "@/components/founders-section";
import { CEOQuoteSection } from "@/components/ceo-quote-section";
import { Footer } from "@/components/footer";
import Spline from '@splinetool/react-spline/next';
import TestingArrow from "@/components/testing-arrow";
import { BenefitsGridSection } from "@/components/benefits-grid-section";
import { BentoGridSecondDemo } from "@/components/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
     
      <Navbar />
      <HeroSection />
      
      {/* <Spline
        scene="https://prod.spline.design/sTZ2eJMYsVCfanxG/scene.splinecode" 
      />
            <Spline
        scene="https://prod.spline.design/O00CoyQi4X3lOO7b/scene.splinecode" 
        className="w-10"

      /> */}

{/* <Spline
        scene="https://prod.spline.design/4B1lPwV9JNHGfL3m/scene.splinecode" 
      /> */}
      {/* <TestingArrow/> */}
      <IntegrationsSection />
      <FlowDemoSection />
      {/* <FeaturesSection /> */}
      <div className="mt-20"> </div>

      <BentoGridSecondDemo/>
      <div className="mt-20"> </div>
      {/* <BenefitsGridSection /> */}
      {/* <FoundersSection /> */}
      <PricingSection />
      <CEOQuoteSection />
      <Footer />
    </main>
  );
}
