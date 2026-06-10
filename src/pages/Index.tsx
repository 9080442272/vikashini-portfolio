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
          <div className="space-y-4">
            <div className="space-y-3 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground/90 leading-snug">
              <div className="text-center lg:text-left">Users were dropping off during onboarding</div>
              <div className="text-center lg:text-left">Teams were spending too much time on manual work</div>
              <div className="text-center lg:text-left">Complex AI systems were difficult to trust</div>
            </div>
            <div className="pt-2 text-center lg:text-left text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink uppercase tracking-widest">
              Not design problems. Business problems.
            </div>
          </div>
        }
        description="Product Designer with 5+ years building B2B SaaS, E-commerce and AI products used by thousands of users. I help B2B SaaS teams identify why users fail to adopt products and redesign workflows that increase activation, retention and trust."
        callToActions={[
          {
            text: "Download Resume",
            href: "/vikashini_Resume.pdf",
            variant: "primary",
            download: true,
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
