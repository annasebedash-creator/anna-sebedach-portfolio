import { Button } from "@/components/ui/button";
import brandingWork1 from "@/assets/branding-work-1.jpg";
import brandingWork2 from "@/assets/branding-work-2.jpg";
import aesthetic1 from "@/assets/aesthetic-1.jpg";
const Hero = () => {
  return <div>
      {/* Section 1: Hero Slice */}
      <section className="hero-slice relative h-[calc(35vh+3cm)] overflow-hidden">
        <img src="/lovable-uploads/0cfb88b1-b7e7-4855-8bfb-c8d781a2665f.png" alt="Where Code Meets Design" className="w-full h-[calc(100%+5cm)] object-cover object-center absolute top-[-3.5cm] left-0 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/30 via-midnight-blue/50 to-midnight-blue/70"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-4xl mx-auto px-6">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight">My professional showcase</h1>
            <p className="hero-sub text-lg md:text-xl text-ivory/90 max-w-2xl mx-auto">
              Bridging technology and creativity to build meaningful digital experiences
            </p>
            
            <div className="hero-ctas flex gap-4 justify-center pt-6">
              <Button className="bg-burgundy hover:bg-burgundy/90 text-ivory px-6 py-3">
                View Projects
              </Button>
              <Button variant="outline" className="border-moss-green text-moss-green hover:bg-moss-green hover:text-ivory px-6 py-3">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Info Slice */}
      <section className="info-slice h-[30vh] flex items-center bg-zinc-500 rounded-none">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-lg leading-relaxed text-slate-50 md:text-xl font-light">
              I bridge the gap between <span className="text-moss-green font-medium text-slate-100">technology and business strategy</span>, creating solutions that drive meaningful impact.
            </p>

            <div className="info-points flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <span className="text-ivory/80 text-sm font-medium">IT Systems</span>
              <div className="w-1 h-1 bg-ivory/40 rounded-full"></div>
              <span className="text-ivory/80 text-sm font-medium">Data Viz</span>
              <div className="w-1 h-1 bg-ivory/40 rounded-full"></div>
              <span className="text-ivory/80 text-sm font-medium">UX/Product</span>
              <div className="w-1 h-1 bg-ivory/40 rounded-full"></div>
              <span className="text-ivory/80 text-sm font-medium">Psychology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Projects Slice */}
      
    </div>;
};
export default Hero;