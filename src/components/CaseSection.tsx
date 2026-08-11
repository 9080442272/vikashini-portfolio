import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CaseSectionProps {
  category: string;
  subtitle: string;
  content: string;
  images: { src: string; alt: string }[];
  layout?: "single" | "split";
  figmaEmbed?: string;
}

const CaseSection = ({ category, subtitle, content, images, layout = "single", figmaEmbed }: CaseSectionProps) => {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse-glow" />
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            <span className="text-neon-purple">{category}</span>
            <span className="text-muted-foreground"> — </span>
            <span>{subtitle}</span>
          </h2>
        </div>

        {/* Content */}
        <div className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 space-y-3">
          {(() => {
            const parseBold = (text: string) => {
              return text.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={index} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
                }
                return part;
              });
            };

            return content.split("\n").map((line, lineIndex) => {
              const trimmedLine = line.trim();
              if (trimmedLine.startsWith("### ")) {
                return (
                  <h3 key={lineIndex} className="text-lg md:text-xl font-bold text-foreground mt-6 mb-2 pt-2">
                    {parseBold(trimmedLine.replace("### ", ""))}
                  </h3>
                );
              }
              if (trimmedLine.startsWith("## ")) {
                return (
                  <h2 key={lineIndex} className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-3 pt-3">
                    {parseBold(trimmedLine.replace("## ", ""))}
                  </h2>
                );
              }
              if (trimmedLine.startsWith("> ")) {
                return (
                  <blockquote key={lineIndex} className="border-l-4 border-neon-purple pl-4 italic my-4 text-foreground/90 bg-white/[0.02] py-2 pr-4 rounded-r">
                    {parseBold(trimmedLine.replace("> ", ""))}
                  </blockquote>
                );
              }
              if (trimmedLine === "") {
                return <div key={lineIndex} className="h-2" />;
              }
              return (
                <p key={lineIndex}>
                  {parseBold(line)}
                </p>
              );
            });
          })()}
        </div>

        {/* Figma Embed */}
        {figmaEmbed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 rounded-2xl overflow-hidden border border-white/[0.08] bg-card/30 backdrop-blur-sm"
          >
            <iframe
              src={figmaEmbed}
              className="w-full aspect-video"
              allowFullScreen
              title="Figma Design"
            />
          </motion.div>
        )}

        {/* Images */}
        {images.length > 0 && (
          <div className={cn(
            "grid gap-6",
            layout === "split" ? "md:grid-cols-2" : "grid-cols-1"
          )}>
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/[0.06] transition-all duration-300 hover:border-neon-purple/30 hover:shadow-[0_0_30px_rgba(155,92,255,0.2)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseSection;
