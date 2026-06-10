'use client'

import { useState, useRef } from "react";
import { Briefcase } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import WorkExpParticles from "./WorkExpParticles";

const experiences = [
  {
    period: "Feb 2026 - Apr 2026",
    company: "Astra Security",
    role: "Product Designer",
    location: "Bangalore",
    bullets: [
      "Designed UX for AI-driven multi-agent systems that simulate real-world cyberattacks.",
      "Focused on making complex, autonomous security logic interpretable and actionable for non-expert users.",
      "Refined hybrid SaaS workflow flows for cybersecurity operational dashboards."
    ],
    tech: ["Figma", "UX Design", "AI Systems", "Security Dashboards", "Data Visualization"]
  },
  {
    period: "Jan 2022 - Present",
    company: "Boostmyshop",
    role: "Product Designer",
    location: "Pondicherry",
    bullets: [
      "Owned UX for myWebPOS, myPricing and myMarket, redesigning core e-commerce and operational workflows.",
      "Built myWebPOS from scratch, simplified onboarding, removed merchant friction and improved activation, task completion, and daily usage across multiple modules.",
      "Focused on real merchant behavior, funnels, and product logic—not just UI screens."
    ],
    tech: ["Figma", "User Research", "Interaction Design", "B2B SaaS", "User Funnels"]
  },
  {
    period: "Apr 2021 - Oct 2021",
    company: "Cloudzoo India Software",
    role: "UX/UI Designer",
    location: "Tirupur",
    bullets: [
      "Designed and validated transaction and onboarding flows, reducing checkout friction.",
      "Improved task completion by aligning journeys with engineering constraints and user insights.",
      "Collaborated with product teams to build clean design system tokens."
    ],
    tech: ["Figma", "Prototyping", "Design Systems", "Usability Testing", "Wireframing"]
  },
];

const WorkExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [burstTrigger, setBurstTrigger] = useState<number>(0);

  // Track scroll for vertical "snake" crawling line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleCardMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setBurstTrigger((prev) => prev + 1); // Trigger interactive particle burst
  };

  const handleCardMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-28 px-6 relative overflow-hidden bg-transparent border-t border-white/[0.03]"
    >
      {/* WebGL Interactive Particle Bursts Backdrop */}
      <WorkExpParticles activeCardIndex={burstTrigger} />

      <div className="max-w-[900px] mx-auto relative z-10">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2 block">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative mt-12 pl-12 md:pl-16">
          {/* Vertical Snake Timeline Track */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-[2px] bg-white/5 -translate-x-1/2" />
          
          {/* Crawling Line (Snake timeline) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-neon-purple to-neon-pink -translate-x-1/2 origin-top"
          />

          {/* Experience entries */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div key={index} className="relative group">
                  {/* Timeline Dot with Glow Pulse */}
                  <div className="absolute -left-12 md:-left-16 top-1.5 -translate-x-1/2 z-25 flex items-center justify-center">
                    <motion.div 
                      className={`w-5 h-5 rounded-full bg-card border-2 flex items-center justify-center transition-all duration-300 relative ${
                        isHovered 
                          ? "border-primary shadow-[0_0_15px_hsl(var(--primary))]" 
                          : "border-white/20"
                      }`}
                      whileInView={{ scale: [0.5, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      {/* Pulse Ring */}
                      {isHovered && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-primary opacity-60 pointer-events-none" />
                      )}
                      <div className={`w-2 h-2 rounded-full ${isHovered ? "bg-primary" : "bg-white/20"}`} />
                    </motion.div>
                  </div>

                  {/* Card Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                    onMouseEnter={() => handleCardMouseEnter(index)}
                    onMouseLeave={handleCardMouseLeave}
                    className={`glass-card p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      isHovered 
                        ? "border-primary/40 shadow-glow bg-card/75" 
                        : "border-white/[0.06] hover:border-white/10 bg-card/40"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-xs font-semibold tracking-wider text-primary uppercase block mb-1">
                          {exp.period} &bull; {exp.location}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {exp.company}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-3 py-1 rounded-full border border-white/5 bg-white/5 text-muted-foreground font-medium">
                          {exp.role}
                        </span>
                      </div>
                    </div>

                    {/* Collapsible Bullet Points List */}
                    <div 
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{
                        maxHeight: isHovered ? "400px" : "55px",
                        opacity: isHovered ? 1 : 0.65,
                      }}
                    >
                      <ul className="space-y-3 list-none pl-0">
                        {exp.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="text-sm md:text-base text-muted-foreground leading-relaxed flex items-start gap-3">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prompt indicator to expand bullets */}
                    {!isHovered && (
                      <span className="text-[10px] tracking-widest text-primary/60 font-semibold uppercase mt-3 block animate-pulse">
                        Hover card to expand details
                      </span>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.tech.map((t) => (
                        <span 
                          key={t} 
                          className={`text-[11px] px-2.5 py-1 rounded-md border font-medium transition-colors duration-300 ${
                            isHovered 
                              ? "bg-primary/10 border-primary/20 text-primary" 
                              : "bg-white/[0.02] border-white/[0.05] text-muted-foreground"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
