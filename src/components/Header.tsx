import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'glass-effect shadow-elegant border-b border-border/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-fluid py-4">
        <div className="flex items-center justify-between">
          {/* Elite Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-moss-green animate-glow" />
              <div className="absolute inset-0 w-8 h-8 bg-moss-green/20 rounded-full animate-pulse-glow"></div>
            </div>
            <div className="text-2xl font-display gradient-text hover-glow transition-all duration-500">
              Portfolio
            </div>
          </div>

          {/* Elite Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 nav-indicator ${
                    isActive 
                      ? 'text-moss-green bg-moss-green/10 active' 
                      : 'text-muted-foreground hover:text-primary hover:bg-ivory-pure/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Premium CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="glass-effect hover-lift border-moss-green/30 text-moss-green hover:bg-moss-green hover:text-white"
            >
              Download CV
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>

          {/* Elite Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover-glow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                }`} 
              />
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
            </div>
          </Button>
        </div>

        {/* Elite Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-effect rounded-2xl mt-4 p-6 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 nav-indicator animate-slide-up ${
                    isActive 
                      ? 'text-moss-green bg-moss-green/10 active' 
                      : 'text-muted-foreground hover:text-primary hover:bg-ivory-pure/50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              );
            })}
            
            {/* Mobile CTAs */}
            <div className="flex space-x-3 pt-4 border-t border-border/30">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 glass-effect border-moss-green/30 text-moss-green"
                onClick={() => setIsMenuOpen(false)}
              >
                Download CV
              </Button>
              <Button 
                size="sm" 
                className="flex-1 bg-gradient-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;