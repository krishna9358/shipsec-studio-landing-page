"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { FlowDemoSection } from "@/components/flow-demo-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { FoundersSection } from "@/components/founders-section";
import { CEOQuoteSection } from "@/components/ceo-quote-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <IntegrationsSection />
      <FlowDemoSection />
      <FeaturesSection />
      <FoundersSection />
      <PricingSection />
      <CEOQuoteSection />
      <Footer />
    </main>
  );
}
