import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "mailto:vikashinibala14@gmail.com" },
];

const Footer = () => {
  return (
    <motion.footer 
      className="py-12 px-6 border-t border-white/[0.08]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="font-semibold text-foreground">Vikashini</span>
          </div>
          
          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Vikashini. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;