import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "Our design process begins with thorough research and discovery, followed by wireframing, prototyping, and iterative design refinement. We ensure every decision is backed by user insights and business goals.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A typical product design engagement ranges from 6-12 weeks, including research, design, and handoff phases. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely! We love partnering with startups at any stage. Whether you need to validate an MVP or scale an existing product, we tailor our approach to fit your budget and timeline constraints.",
  },
  {
    question: "What deliverables can I expect?",
    answer:
      "Deliverables typically include user research findings, wireframes, high-fidelity UI designs, interactive prototypes, design system documentation, and developer-ready assets in Figma.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer:
      "We build in structured feedback rounds throughout the project. Our collaborative approach ensures you're involved at every stage, and we iterate until the design meets your vision and user needs.",
  },
  {
    question: "Can you help with development handoff?",
    answer:
      "Yes, we provide comprehensive handoff documentation including design specs, component libraries, and direct collaboration with your engineering team to ensure pixel-perfect implementation.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gradient-purple/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight sticky top-32">
              Frequently Asked{" "}
              <span className="text-neon-purple">Questions</span>
            </h2>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/[0.06] rounded-xl px-6 bg-card/30 data-[state=open]:border-neon-purple/30 data-[state=open]:shadow-[0_0_20px_rgba(155,92,255,0.1)] transition-all duration-300"
                >
                  <AccordionTrigger className="text-foreground hover:text-neon-purple text-left py-5 hover:no-underline [&[data-state=open]]:text-neon-purple">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
