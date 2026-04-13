import HeroSection from "@/components/sections/HeroSection";
import MarqueeBand from "@/components/sections/MarqueeBand";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeBand />
      <IntroSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
