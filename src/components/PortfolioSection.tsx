import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import salesChannelImage from "@/assets/projects/sales-channel.png";
import productAttributes from "@/assets/projects/product-attributes.png";
import productList from "@/assets/projects/product-list.png";
import myOrderImage from "@/assets/projects/myorder.png";
import myWebPOSThumbnail from "@/assets/projects/mywebpos-thumbnail.png";

const projects = [
  {
    id: 1,
    title: "Combining Sales Channel and Market Monitoring",
    description: "Unified marketplace onboarding that reduced setup time by 55% and increased activation by 39%.",
    image: salesChannelImage,
  },
  {
    id: 2,
    title: "Designing a Bulk Pricing Action Interface ",
    description:
      "Replaced spreadsheet uploads with an in-product bulk editor, cutting pricing time from 20 mins to under 2 mins.",
    image: productAttributes,
  },
  {
    id: 3,
    title: "Transforming myMarket: From Data Overload to User-Friendly Insights",
    description:
      "Enabled layered competitive insights that shifted users from reactive price matching to strategic decision-making.",
    image: productList,
  },
  {
    id: 4,
    title: "myOrders – Order Management Designed for Small Sellers",
    description:
      "A simple Kanban-based order tool for small sellers that replaces warehouse complexity. Helps them move orders to 'shipped' faster with less effort.",
    image: myOrderImage,
  },
  {
    id: 5,
    title: "myWebPOS – Browser-Based POS for Unified Retail",
    description:
      "A browser-based POS that syncs in-store sales with e-commerce fulfillment, eliminating stock mismatches and operational gaps.",
    image: myWebPOSThumbnail,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">B2B SaaS Projects in E-Commerce Operations</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                to={`/project/${project.id}`}
                className="glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-glow hover:-translate-y-2 block h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
