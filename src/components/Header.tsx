import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [{
    label: "Home",
    href: "#home"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Skills",
    href: "#skills"
  }, {
    label: "Projects",
    href: "#projects"
  }, {
    label: "Experience",
    href: "#experience"
  }, {
    label: "Contact",
    href: "#contact"
  }];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-[24px] py-3">
        <div className="flex items-center justify-between mx-0 px-0 py-0 my-0 rounded-none">
          <div className="text-2xl font-bold text-ivory">
            Portfolio
          </div>

          {/* Desktop Navigation - Back on the right */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-ivory/90 hover:text-ivory transition-colors duration-200 font-medium text-xl"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-ivory hover:bg-ivory/20" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation - Compact and right-aligned */}
        {isMenuOpen && (
          <div className="md:hidden absolute right-6 top-full mt-2 w-32 bg-black/80 backdrop-blur-md rounded-lg border border-ivory/20 shadow-lg">
            <nav className="flex flex-col py-1">
              {menuItems.map(item => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-ivory/80 hover:text-ivory hover:bg-ivory/10 transition-colors duration-200 font-medium px-3 py-1.5 text-sm whitespace-nowrap" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;