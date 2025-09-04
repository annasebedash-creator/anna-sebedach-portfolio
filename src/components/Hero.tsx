import { Button } from "@/components/ui/button";
import brandingWork1 from "@/assets/branding-work-1.jpg";
import brandingWork2 from "@/assets/branding-work-2.jpg";
import aesthetic1 from "@/assets/aesthetic-1.jpg";
const Hero = () => {
  return <div>
      {/* Section 1: Hero Slice */}
      <section className="hero-slice relative h-[calc(35vh+3cm)] overflow-hidden">
        <img src="/lovable-uploads/4f99b67f-5796-4f42-9124-a97a96986460.png" alt="Where Code Meets Design" className="w-full h-[calc(100%+3cm)] object-cover object-center absolute top-[-2cm] left-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/30 via-midnight-blue/50 to-midnight-blue/70"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-4xl mx-auto px-6">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight">My professional showcase</h1>
            <p className="hero-sub text-lg md:text-xl text-ivory/90 max-w-2xl mx-auto">
              Bridging technology and creativity to build meaningful digital experiences
            </p>
            
            <div className="hero-ctas flex gap-4 justify-center pt-6">
              <Button 
                className="bg-burgundy hover:bg-burgundy/90 text-ivory px-6 py-3"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button variant="outline" className="border-moss-green text-moss-green hover:bg-moss-green hover:text-ivory px-6 py-3">Download CV</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Info Slice */}
      

      {/* Section 3: Projects Slice */}
      
    </div>;
};
export default Hero;