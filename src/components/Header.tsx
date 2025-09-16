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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-[24px] py-4">
        <div className="flex items-center mx-0 px-0 py-0 my-0 rounded-none">
          <div className="text-2xl font-bold text-ivory mr-8">
            Portfolio
          </div>

          {/* Main Navigation - Always visible, responsive sizing */}
          <nav className="hidden sm:flex items-center space-x-3 md:space-x-6 flex-1">
            {menuItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-ivory/90 hover:text-ivory transition-colors duration-200 font-medium text-sm md:text-lg lg:text-xl whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Only on very small screens */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="sm:hidden text-ivory hover:bg-ivory/20 ml-auto" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation - Positioned to avoid hero content overlap */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 border-t border-ivory/20 bg-black/40 backdrop-blur-md rounded-lg">
            <nav className="flex flex-col space-y-2 pt-4 px-4">
              {menuItems.map(item => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-ivory/80 hover:text-ivory transition-colors duration-200 font-medium py-2 text-lg" 
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