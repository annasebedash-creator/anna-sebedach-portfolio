import { Button } from "@/components/ui/button";
import heroMainPortrait from "@/assets/hero-main-portrait.jpg";
import brandingWork1 from "@/assets/branding-work-1.jpg";
import brandingWork2 from "@/assets/branding-work-2.jpg";
import aesthetic1 from "@/assets/aesthetic-1.jpg";

const Hero = () => {
  return (
    <div>
      {/* Section 1: Hero Slice */}
      <section className="hero-slice relative h-[35vh] overflow-hidden">
        <img 
          src={heroMainPortrait} 
          alt="Where Code Meets Design" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/30 via-midnight-blue/50 to-midnight-blue/70"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-4xl mx-auto px-6">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight">
              Where Code Meets Design
            </h1>
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
      <section className="info-slice bg-umber h-[30vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-lg md:text-xl text-ivory font-light leading-relaxed">
              I bridge the gap between <span className="text-moss-green font-medium">technology and business strategy</span>, creating solutions that drive meaningful impact.
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
      <section className="projects-slice bg-ivory h-[35vh]">
        <div className="container mx-auto px-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            
            {/* Left: Large Project */}
            <div className="proj-large group cursor-pointer">
              <div className="relative h-full overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={aesthetic1} 
                  alt="IoT Dashboard Project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-1">IoT Dashboard</h3>
                  <p className="text-sm opacity-90">Real-time monitoring</p>
                </div>
              </div>
            </div>

            {/* Right: Two Stacked Projects */}
            <div className="space-y-6">
              
              {/* Right Top */}
              <div className="proj-small group cursor-pointer">
                <div className="relative h-[calc(50%-12px)] overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={brandingWork1} 
                    alt="Bias Lab Project" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 text-midnight-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-lg font-semibold">Bias Lab</h4>
                  </div>
                </div>
              </div>

              {/* Right Bottom */}
              <div className="proj-small group cursor-pointer">
                <div className="relative h-[calc(50%-12px)] overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={brandingWork2} 
                    alt="3D Visualization" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-moss-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 text-midnight-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-lg font-semibold">3D Visualization</h4>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;