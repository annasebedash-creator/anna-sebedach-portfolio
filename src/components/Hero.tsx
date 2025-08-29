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
      <section className="relative h-screen overflow-hidden">
        <img 
          src={heroMainPortrait} 
          alt="Strategic Business Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss-green/30 via-midnight-blue/40 to-midnight-blue/70"></div>
        
        {/* Main Typography Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-ivory leading-tight">
              Strategic
              <br />
              <span className="text-moss-green">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-ivory/90 max-w-2xl mx-auto">
              Transforming businesses through data-driven insights and creative solutions
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center pt-8">
              <Button className="bg-burgundy hover:bg-burgundy/90 text-ivory px-8 py-6 text-lg">
                View Projects
              </Button>
              <Button variant="outline" className="border-moss-green text-moss-green hover:bg-moss-green hover:text-ivory px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 2: Middle Layer - Black background with core info */}
      <section className="bg-umber py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Professional Summary */}
            <h2 className="text-2xl md:text-3xl text-ivory font-light leading-relaxed">
              I bridge the gap between <span className="text-moss-green font-medium">technology and business strategy</span>, 
              creating solutions that drive meaningful impact and sustainable growth.
            </h2>

            {/* Proof Points */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-moss-green/20 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-moss-green text-2xl font-bold">IT</span>
                </div>
                <h3 className="text-ivory font-medium">IT & Business Integration</h3>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-burgundy/20 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-burgundy text-2xl font-bold">VIZ</span>
                </div>
                <h3 className="text-ivory font-medium">Data Visualization</h3>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-moss-green/20 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-moss-green text-2xl font-bold">UX</span>
                </div>
                <h3 className="text-ivory font-medium">Product Thinking</h3>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-burgundy/20 rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-burgundy text-2xl font-bold">REQ</span>
                </div>
                <h3 className="text-ivory font-medium">UX & Requirements</h3>
              </div>
            </div>

            {/* Tools/Frameworks Row */}
            <div className="flex justify-center items-center gap-8 pt-8 opacity-60">
              <div className="text-ivory/60 text-sm">React</div>
              <div className="w-1 h-1 bg-ivory/30 rounded-full"></div>
              <div className="text-ivory/60 text-sm">TypeScript</div>
              <div className="w-1 h-1 bg-ivory/30 rounded-full"></div>
              <div className="text-ivory/60 text-sm">Python</div>
              <div className="w-1 h-1 bg-ivory/30 rounded-full"></div>
              <div className="text-ivory/60 text-sm">Blender</div>
              <div className="w-1 h-1 bg-ivory/30 rounded-full"></div>
              <div className="text-ivory/60 text-sm">Figma</div>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 3: Bottom Layer - Aesthetic project images */}
      <section className="bg-ivory py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-midnight-blue text-center mb-16">
            Featured Projects
          </h2>
          
          {/* Project Grid - Alternating Pattern */}
          <div className="space-y-20">
            {/* Row 1: Large Left, Small Right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={aesthetic1} 
                    alt="IoT Dashboard Project" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-2">IoT Dashboard</h3>
                    <p className="text-sm">Real-time data visualization and monitoring</p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-burgundy rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={brandingWork1} 
                      alt="Bias Lab Project" 
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute inset-0 bg-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-midnight-blue font-semibold mt-3">Bias Lab</h4>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={brandingWork2} 
                      alt="3D Visualization" 
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute inset-0 bg-moss-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-midnight-blue font-semibold mt-3">3D Visualization</h4>
                </div>
              </div>
            </div>

            {/* Row 2: Small Left, Large Right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={aesthetic2} 
                      alt="Strategy Platform" 
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute inset-0 bg-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-midnight-blue font-semibold mt-3">Strategy Platform</h4>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={aesthetic3} 
                      alt="Data Analysis" 
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute inset-0 bg-moss-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-midnight-blue font-semibold mt-3">Data Analysis</h4>
                </div>
              </div>
              
              <div className="lg:col-span-2 group cursor-pointer order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={aesthetic1} 
                    alt="Enterprise Solution" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 right-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-right">
                    <h3 className="text-2xl font-bold mb-2">Enterprise Solution</h3>
                    <p className="text-sm">Scalable business intelligence platform</p>
                  </div>
                  <div className="absolute top-4 left-4 w-3 h-3 bg-moss-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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