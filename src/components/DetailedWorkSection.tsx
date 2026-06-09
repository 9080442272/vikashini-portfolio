import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "User-centered design methodology",
  "Comprehensive research & analysis",
  "Interactive prototyping & testing",
  "Design system development",
  "Cross-platform consistency",
  "Accessibility compliance",
  "Performance optimization",
];

const DetailedWorkSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Showcasing Your Best
            </h2>
            <p className="text-xl text-gradient font-medium mb-8">
              Work with Pure Precision.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every project begins with a deep understanding of your goals and your users' needs. 
              I believe in crafting experiences that not only look beautiful but function seamlessly 
              across all devices and platforms. My design process is iterative, collaborative, and 
              always focused on delivering measurable results.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <Button className="glow-button group">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-3xl animate-pulse-glow" />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&auto=format"
              alt="Work showcase"
              className="relative z-10 rounded-3xl glass-card shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedWorkSection;
