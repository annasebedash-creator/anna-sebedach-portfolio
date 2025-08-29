import { Button } from "@/components/ui/button";
import heroMainPortrait from "@/assets/hero-main-portrait.jpg";
import brandingWork1 from "@/assets/branding-work-1.jpg";
import brandingWork2 from "@/assets/branding-work-2.jpg";
import aesthetic1 from "@/assets/aesthetic-1.jpg";
import aesthetic2 from "@/assets/aesthetic-2.jpg";
import aesthetic3 from "@/assets/aesthetic-3.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Layer 1: Hero Layer - Full-bleed image with strong titles */}
      <section className="relative h-[35vh] min-h-[300px] overflow-hidden">
        <img 
          src={heroMainPortrait} 
          alt="Strategic Business Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss-green/30 via-midnight-blue/40 to-midnight-blue/70"></div>
        
        {/* Main Typography Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight">
              Strategic
              <br />
              <span className="text-moss-green">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-ivory/90 max-w-2xl mx-auto">
              Transforming businesses through data-driven insights and creative solutions
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center pt-4">
              <Button className="bg-burgundy hover:bg-burgundy/90 text-ivory px-6 py-3 text-base">
                View Projects
              </Button>
              <Button variant="outline" className="border-moss-green text-moss-green hover:bg-moss-green hover:text-ivory px-6 py-3 text-base">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 2: Middle Layer - Black background with core info */}
      <section className="bg-umber h-[30vh] min-h-[250px] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Professional Summary */}
            <h2 className="text-xl md:text-2xl text-ivory font-light leading-relaxed">
              I bridge the gap between <span className="text-moss-green font-medium">technology and business strategy</span>, 
              creating solutions that drive meaningful impact and sustainable growth.
            </h2>

            {/* Proof Points */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-moss-green/20 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-moss-green text-lg font-bold">IT</span>
                </div>
                <h3 className="text-ivory font-medium text-sm">IT & Business Integration</h3>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-burgundy/20 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-burgundy text-lg font-bold">VIZ</span>
                </div>
                <h3 className="text-ivory font-medium text-sm">Data Visualization</h3>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-moss-green/20 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-moss-green text-lg font-bold">UX</span>
                </div>
                <h3 className="text-ivory font-medium text-sm">Product Thinking</h3>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-burgundy/20 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-burgundy text-lg font-bold">REQ</span>
                </div>
                <h3 className="text-ivory font-medium text-sm">UX & Requirements</h3>
              </div>
            </div>

            {/* Tools/Frameworks Row */}
            <div className="flex justify-center items-center gap-4 opacity-60">
              <div className="text-ivory/60 text-xs">React</div>
              <div className="w-1 h-1 bg-ivory/30 rounded-full"></div>
              <div className="text-ivory/60 text-xs">TypeScript</div>
              <div className="w-1 h-1 bg-ivory/30 rounded-full"></div>
              <div className="text-ivory/60 text-xs">Python</div>
              <div className="w-1 h-1 bg-ivory/30 rounded-full"></div>
              <div className="text-ivory/60 text-xs">Blender</div>
              <div className="w-1 h-1 bg-ivory/30 rounded-full"></div>
              <div className="text-ivory/60 text-xs">Figma</div>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 3: Bottom Layer - Aesthetic project images */}
      <section className="bg-ivory h-[35vh] min-h-[280px] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Large Left Project */}
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-xl h-full transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={aesthetic1} 
                  alt="IoT Dashboard Project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-1">IoT Dashboard</h3>
                  <p className="text-sm">Real-time data visualization</p>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-burgundy rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Two Stacked Right Projects */}
            <div className="space-y-4">
              <div className="group cursor-pointer h-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-full transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={brandingWork1} 
                    alt="Bias Lab Project" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-sm font-semibold">Bias Lab</h4>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer h-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-full transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={brandingWork2} 
                    alt="3D Visualization" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-moss-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-sm font-semibold">3D Visualization</h4>
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