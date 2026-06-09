import { motion } from "framer-motion";
import { Testimonials } from "@/components/ui/testimonials";
import thareekImage from "@/assets/testimonials/thareek.jpg";
import nigilaImage from "@/assets/testimonials/nigila.png";

const testimonials = [
  {
    image: thareekImage,
    name: "Thareek",
    username: "Lead Front-End Developer",
    text: "Vikashini designs with real implementation in mind. She focuses on user problems, avoids unnecessary UI complexity, and her clarity saves serious dev time.",
  },
  {
    image: nigilaImage,
    name: "Nigila",
    username: "Senior Back-End Developer",
    text: "She is the rare designer who understands backend constraints and turns complex operational logic into clean, usable workflows without wasting engineering time.",
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
    name: "praneeta",
    username: "Product Manager",
    text: "Vikashini elevates the entire product team by turning complex problems into intuitive solutions that users love and drive our key metrics",
  },
];

const TestimonialsSection = () => {
  return (
    <motion.section
      className="py-24 px-6 relative overflow-hidden bg-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        <Testimonials
          testimonials={testimonials}
          title="Kind words from colleagues"
          description=""
          maxDisplayed={6}
          className="w-full"
        />
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
