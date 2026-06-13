import { useState } from "react";
import { HeroLanding } from "@/components/ui/hero-1";
import IntroSection from "@/components/IntroSection";
import ToolboxSection from "@/components/ToolboxSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ScreenLoader from "@/components/ScreenLoader";

import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { FlowButton } from "@/components/ui/flow-button";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  const handleContact = () => {
    if (isMobile) {
      window.location.href = "tel:+919080442272";
    } else {
      window.location.href = "mailto:vikashinibala14@gmail.com";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {isLoading && <ScreenLoader onComplete={() => setIsLoading(false)} />}
      <HeroLanding
        isParentLoading={isLoading}
        logo={{
          companyName: "Vikashini",
        }}
        navigation={[
          { name: "Work", href: "#portfolio" },
          { name: "Experience", href: "#experience" },
        ]}
        loginText="Contact"
        onLoginClick={handleContact}
        title={
          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/50 text-center lg:text-left mb-2">
              Vikashini — Product Designer
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-center lg:text-left">
              I turn user friction
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-[1.15] text-center lg:text-left">
              into business growth
            </div>
          </div>
        }
        description="5+ years designing B2B SaaS, e-commerce, and AI products used by 50,000+ users. I find where adoption breaks — and fix the workflow behind it."
        callToActions={[
          {
            text: "See case studies",
            href: "#portfolio",
            variant: "primary",
          },
        ]}
        titleSize="large"
        gradientColors={{
          from: "hsl(267, 100%, 55%)",
          to: "hsl(350, 100%, 35%)",
        }}
      />
      <IntroSection />
      <div id="toolbox">
        <ToolboxSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="experience">
        <WorkExperienceSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
