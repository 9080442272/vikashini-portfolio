import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  featuredImage: string;
}

const ProjectHero = ({ title, subtitle, featuredImage }: ProjectHeroProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gradient-purple/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Back link */}
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-purple transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm">Back to cases</span>
        </button>

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Featured Image Card */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple/30 via-pink-highlight/20 to-neon-purple/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          
          <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-card/50 p-2 md:p-3 shadow-[0_20px_60px_rgba(155,92,255,0.15)]">
            <img
              src={featuredImage}
              alt="Project dashboard preview"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
