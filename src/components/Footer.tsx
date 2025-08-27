import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Portfolio</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bridging technology and business strategy to create meaningful digital experiences 
              and drive sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <div className="flex flex-col space-y-2 text-primary-foreground/80">
              <span>Full-Stack Development</span>
              <span>Business Analysis</span>
              <span>Digital Transformation</span>
              <span>Data Analytics</span>
              <span>IT Consulting</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Portfolio. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and modern technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;