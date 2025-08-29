import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Play, Sparkles } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import techVisual from "@/assets/tech-visual.jpg";
import strategyVisual from "@/assets/strategy-visual.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Innovation & Excellence
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Strategic
                </span>
                <br />
                <span className="text-foreground">Solutions</span>
                <br />
                <span className="text-2xl md:text-3xl font-light text-muted-foreground">
                  For Modern Business
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Empowering businesses with strategic insights, innovative solutions, 
                and expert guidance to navigate the digital landscape.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Mail className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Start Conversation</span>
              </Button>
              <Button variant="outline" size="lg" className="group border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">Success</div>
              </div>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroMain} 
                alt="Professional IT & Business Solutions" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-border animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Live Projects</span>
                </div>
                <div className="text-2xl font-bold text-primary mt-1">12</div>
              </div>
            </div>

            {/* Secondary Images */}
            <div className="absolute -bottom-6 -left-6 w-48 h-36 rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src={techVisual} 
                alt="Technology Innovation" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img 
                src={strategyVisual} 
                alt="Business Strategy" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-primary rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 right-0 w-6 h-6 bg-secondary/30 rounded-full"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm font-medium">Discover More</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;