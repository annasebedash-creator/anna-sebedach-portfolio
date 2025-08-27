import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Sparkles, Zap, Target } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full bg-moss-green/10 animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 rounded-full bg-burgundy/10 animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            top: `${30 + mousePosition.y * 0.015}%`,
            animationDelay: '2s',
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full bg-umber/10 animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.01}%`,
            bottom: `${20 + mousePosition.y * 0.01}%`,
            animationDelay: '4s',
          }}
        ></div>
      </div>

      {/* Elite Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--midnight-blue)) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="container-fluid relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Elite Status Indicators */}
          <div className={`flex justify-center space-x-8 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {[
              { icon: Sparkles, label: "Elite Developer", color: "moss-green" },
              { icon: Zap, label: "Business Strategist", color: "burgundy" },
              { icon: Target, label: "Innovation Leader", color: "umber" },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full hover-glow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <item.icon className={`w-4 h-4 text-${item.color}`} />
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Elite Typography Hierarchy */}
          <div className={`space-y-8 transition-all duration-1200 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            
            {/* Premium Greeting */}
            <div className="text-lg font-medium text-moss-green mb-4 animate-fade-in-up">
              Hello, I'm a Professional
            </div>

            {/* Elite Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display leading-[0.9] tracking-tight">
                <span className="gradient-text animate-glow">IT</span>
                <span className="text-muted-foreground/80"> & </span>
                <span className="gradient-text-accent">Business</span>
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display text-muted-foreground/70 animate-slide-in-right">
                Professional
              </h2>
            </div>

            {/* Elite Subtitle */}
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-body animate-fade-in-up">
              Crafting <span className="text-moss-green font-semibold">innovative digital solutions</span> with 
              <span className="text-burgundy font-semibold"> strategic business insights</span> and 
              <span className="text-umber font-semibold"> cutting-edge technology expertise</span>.
            </p>

            {/* Elite Value Propositions */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 animate-slide-up">
              {[
                { title: "5+ Years", subtitle: "Professional Experience", icon: "🎯" },
                { title: "20+ Projects", subtitle: "Successfully Delivered", icon: "🚀" },
                { title: "98% Success", subtitle: "Client Satisfaction", icon: "⭐" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="card-premium text-center hover-lift group"
                  style={{ animationDelay: `${600 + index * 150}ms` }}
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce-subtle">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Elite CTA Section */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-105 px-8 py-4 text-lg group"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" />
              Let's Create Together
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect hover-lift border-moss-green/30 text-moss-green hover:bg-moss-green hover:text-white px-8 py-4 text-lg group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" />
              Download Portfolio
            </Button>
          </div>

          {/* Elite Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={() => scrollToSection('skills')}
              className="flex flex-col items-center space-y-3 text-muted-foreground hover:text-moss-green transition-all duration-300 group"
            >
              <span className="text-sm font-medium">Discover More</span>
              <div className="w-8 h-12 border-2 border-moss-green/30 rounded-full flex justify-center group-hover:border-moss-green transition-colors duration-300">
                <div className="w-1 h-3 bg-moss-green rounded-full mt-2 animate-bounce"></div>
              </div>
              <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-moss-green" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;