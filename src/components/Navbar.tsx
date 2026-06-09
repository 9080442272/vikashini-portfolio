import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  const handleContact = () => {
    if (isMobile) {
      window.location.href = "tel:+919080442272";
    } else {
      window.location.href = "mailto:vikashinibala14@gmail.com";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">V</span>
          </div>
          <span className="font-semibold text-foreground">Vikashini</span>
        </div>
        
        <Button className="glow-button" onClick={handleContact}>
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
