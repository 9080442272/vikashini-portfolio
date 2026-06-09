import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const cases = projects.map(p => ({
  id: p.id,
  title: p.title.split(" ").slice(0, 3).join(" "),
  category: p.caseSections[0]?.category || "Design",
  image: p.featuredImage.replace("1280x720", "600x400"),
}));

interface MoreCasesProps {
  currentProjectId?: number;
}

const MoreCases = ({ currentProjectId }: MoreCasesProps) => {
  const navigate = useNavigate();
  const filteredCases = cases
    .filter(c => c.id !== currentProjectId)
    .slice(0, 3);

  const handleViewAllCases = () => {
    navigate("/");
    setTimeout(() => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            More Other Cases
          </h2>
          <Button
            onClick={handleViewAllCases}
            className="bg-neon-purple hover:bg-neon-purple/90 text-white w-fit"
          >
            View All Cases
          </Button>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <Link
              key={item.id}
              to={`/project/${item.id}`}
              className="group relative block overflow-hidden rounded-xl border border-white/[0.06] bg-card/30 transition-all duration-300 hover:border-neon-purple/40 hover:shadow-[0_0_40px_rgba(155,92,255,0.2)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-neon-purple text-sm font-medium mb-1">
                  {item.category}
                </p>
                <h3 className="text-foreground text-lg font-semibold group-hover:text-neon-purple transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreCases;
