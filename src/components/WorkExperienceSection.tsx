import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "Jan 2022 - Present",
    company: "Boostmyshop",
    role: "Product Designer",
    description:
      "Owned UX for myWebPOS, myPricing and myMarket, redesigning core e-commerce and operational workflows. Built myWebPOS from scratch, simplified onboarding, removed merchant friction and improved activation, task completion, and daily usage across multiple modules. Focused on real merchant behavior, funnels, and product logic—not just UI screens.",
  },
  {
    period: "Apr 2021 - Oct 2021",
    company: "Cloudzoo India Software",
    role: "UX/UI Designer",
    description:
      "Designed and validated transaction and onboarding flows, reducing checkout friction and improving task completion by aligning journeys with engineering constraints and user insights.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const WorkExperienceSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Professional Experience in B2B SaaS & E-Commerce</h2>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.company}</h3>
                  <p className="text-primary font-medium mb-3">{exp.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
