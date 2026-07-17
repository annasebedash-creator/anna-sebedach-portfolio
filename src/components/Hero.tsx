import { Button } from "@/components/ui/button";
import brandingWork1 from "@/assets/branding-work-1.jpg";
import brandingWork2 from "@/assets/branding-work-2.jpg";
import aesthetic1 from "@/assets/aesthetic-1.jpg";
import heroMixedMedia from "@/assets/hero-mixed-media.jpg";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

const Hero = () => {
  const { isMenuOpen } = useMobileMenu();
  
  return <div>
      {/* Section 1: Hero Slice */}
      <section className={`hero-slice relative h-[calc(35vh+3cm)] md:h-[calc(70vh+3cm)] lg:h-[calc(80vh+3cm)] xl:h-[calc(85vh+3cm)] overflow-hidden transition-all duration-300 ${isMenuOpen ? 'blur-[0.5px]' : ''}`}>
        <img src={heroMixedMedia} alt="Mixed media composition with professional portrait" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/30 via-midnight-blue/50 to-midnight-blue/70"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-4xl mx-auto px-6">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight">Anna Sebedach</h1>
            <p className="hero-sub text-xl md:text-2xl lg:text-3xl text-ivory/90 max-w-2xl mx-auto">
              I build AI assistants, automation workflows and data tools
            </p>
            <p className="text-base md:text-lg text-ivory/80 max-w-2xl mx-auto">
              Business & IT student at Haaga-Helia · Helsinki · Open to IT internships from autumn 2026
            </p>
            
            <div className="hero-ctas flex gap-4 justify-center pt-6">
              <Button 
                className="bg-burgundy hover:bg-burgundy/90 text-ivory px-8 py-4"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-moss-green text-moss-green hover:bg-moss-green hover:text-ivory px-8 py-4"
                onClick={() => window.open('/documents/Anna_Sebedach_CV.pdf', '_blank')}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Info Slice */}
      

      {/* Section 3: Projects Slice */}
      
    </div>;
};
export default Hero;