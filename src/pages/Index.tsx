import { HeroLanding } from "@/components/ui/hero-1";
import IntroSection from "@/components/IntroSection";
import ToolboxSection from "@/components/ToolboxSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";

import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { FlowButton } from "@/components/ui/flow-button";

const Index = () => {
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
      <HeroLanding
        logo={{
          companyName: "Vikashini",
        }}
        navigation={[
          { name: "Work", href: "#portfolio" },
          { name: "Experience", href: "#experience" },
        ]}
        loginText="Contact"
        onLoginClick={handleContact}
        title="Hi, I’m Vikashini — a Product Designer focused on simplifying complex workflows."
        description="I design B2B SaaS products in the e-commerce and fulfillment space—optimizing order flows, POS operations, and inventory processes for businesses that run hundreds of transactions a day."
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
