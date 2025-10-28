"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { FlowDemoSection } from "@/components/flow-demo-section";
import PricingSection from "@/components/pricing-section";
import { FoundersSection } from "@/components/founders-section";
import { CEOQuoteSection } from "@/components/ceo-quote-section";
import { KitFormSection } from "@/components/kit-form-section";
import { Footer } from "@/components/footer";

import { FeaturesSection } from "@/components/features";
import { ScrollProvider } from "@/components/scroll-provider";
import { AnimatedSection } from "@/components/animated-section";
import { ParallaxSection } from "@/components/parallax-section";
export default function Home() {
  return (
    <ScrollProvider>
      <main className="min-h-screen bg-white scroll-smooth snap-y snap-mandatory">
        <Navbar />
        
        <AnimatedSection>
          <ParallaxSection direction="up" offset={30}>
            <HeroSection />
          </ParallaxSection>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ParallaxSection direction="down" offset={40}>
            <FeaturesSection/>
          </ParallaxSection>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <ParallaxSection direction="up" offset={35}>
            <FlowDemoSection />
          </ParallaxSection>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ParallaxSection direction="down" offset={30}>
            <IntegrationsSection />
          </ParallaxSection>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <ParallaxSection direction="up" offset={40}>
            <PricingSection />
          </ParallaxSection>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ParallaxSection direction="down" offset={35}>
            <CEOQuoteSection />
          </ParallaxSection>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <ParallaxSection direction="up" offset={30}>
            <KitFormSection />
          </ParallaxSection>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Footer />
        </AnimatedSection>
      </main>
    </ScrollProvider>
  );
}