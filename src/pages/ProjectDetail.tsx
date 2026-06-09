import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import CaseSection from "@/components/CaseSection";
import MoreCases from "@/components/MoreCases";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1", 10);
  const projectData = getProjectById(projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!projectData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ProjectHero
        title={projectData.title}
        subtitle={projectData.subtitle}
        featuredImage={projectData.featuredImage}
      />

      {/* Case Study Sections */}
      <div className="border-t border-white/[0.06]">
        {projectData.caseSections.map((section, index) => (
          <CaseSection
            key={index}
            category={section.category}
            subtitle={section.subtitle}
            content={section.content}
            images={section.images}
            layout={section.layout}
            figmaEmbed={section.figmaEmbed}
          />
        ))}
      </div>

      {/* More Cases */}
      <div className="border-t border-white/[0.06]">
        <MoreCases currentProjectId={projectId} />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
