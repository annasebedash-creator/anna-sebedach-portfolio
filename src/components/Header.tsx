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
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-none transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-[24px] py-4">
        <div className="flex items-center justify-between mx-0 px-0 py-0 my-0 rounded-none">
          <div className="text-2xl font-bold text-ivory">
            Portfolio
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Navigation - Always visible */}
          <nav className="md:hidden flex items-center space-x-3 text-sm">
            {menuItems.filter((_, index) => index < 4).map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-ivory/90 hover:text-ivory transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="ghost" size="icon" className="text-ivory hover:bg-ivory/20 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="More menu">
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </nav>
        </div>

        {/* Mobile Additional Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-ivory/20">
            <nav className="flex flex-col space-y-4 pt-4">
              {menuItems.filter((_, index) => index >= 4).map(item => <a key={item.label} href={item.href} className="text-ivory/80 hover:text-ivory transition-colors duration-200 font-medium py-2 text-xl" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;