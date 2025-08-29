import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-none">
      <div className="container mx-auto px-[24px] py-4">
        <div className="flex items-center justify-between px-0 rounded-none mx-0 my-0 py-0">
          <div className="text-2xl font-bold text-ivory">Portfolio

        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <a key={item.label} href={item.href} className="text-ivory/90 hover:text-ivory transition-colors duration-200 font-medium">
                {item.label}
              </a>)}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-ivory hover:bg-ivory/20" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-ivory/20">
            <nav className="flex flex-col space-y-4 pt-4">
              {menuItems.map(item => <a key={item.label} href={item.href} className="text-ivory/80 hover:text-ivory transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;