import { ArrowDown } from "lucide-react";
import heroMainPortrait from "@/assets/hero-main-portrait.jpg";
import brandingWork1 from "@/assets/branding-work-1.jpg";
import brandingWork2 from "@/assets/branding-work-2.jpg";
import heroWide from "@/assets/hero-wide.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Main Background Portrait */}
      <div className="absolute inset-0">
        <img 
          src={heroMainPortrait} 
          alt="Professional Portrait" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-blue/60 via-midnight-blue/20 to-transparent"></div>
      </div>

      {/* Overlapping Wide Image */}
      <div className="absolute top-32 right-0 w-2/3 h-80 transform rotate-3 z-20">
        <img 
          src={heroWide} 
          alt="Wide Business Strategy" 
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-midnight-blue/30 rounded-3xl"></div>
      </div>

      {/* Content Layers */}
      <div className="relative z-30 min-h-screen flex flex-col">
        {/* Top Navigation Area with Creative Positioning */}
        <div className="pt-20">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-start">
              {/* Left Side - Creative Text Block */}
              <div className="bg-ivory/95 backdrop-blur-sm rounded-2xl p-8 shadow-elegant max-w-sm transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-midnight-blue">Creative</h3>
                  <p className="text-midnight-blue/70 text-sm leading-relaxed">
                    We craft innovative solutions that blend strategy with creativity to deliver exceptional results.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-moss-green rounded-full"></div>
                    <span className="text-midnight-blue/80 text-xs font-medium">Active Projects: 12</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Service Menu */}
              <div className="bg-midnight-blue/90 backdrop-blur-sm rounded-2xl p-6 shadow-elegant max-w-xs transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-3">
                  <div className="text-ivory font-medium">Services</div>
                  <div className="text-ivory/70 text-sm">Strategy & Planning</div>
                  <div className="text-moss-green font-medium">Creative Solutions</div>
                  <div className="text-ivory/70 text-sm">Brand Development</div>
                  <div className="text-ivory/70 text-sm">Digital Innovation</div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4 text-burgundy transform rotate-45" />
                  <span className="text-ivory/70 text-xs">Explore our portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area with Massive Typography */}
        <div className="flex-1 flex items-center relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-12 gap-6 items-center">
              {/* Left Content - Overlapping Typography */}
              <div className="col-span-12 lg:col-span-7 relative">
                <div className="space-y-2 relative z-10">
                  <h1 className="text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-bold leading-[0.8] text-ivory tracking-tight">
                    Strategic
                  </h1>
                  <div className="ml-6 md:ml-12 lg:ml-20 relative">
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-light text-moss-green tracking-wider">
                      Solutions
                    </h2>
                    {/* Small floating accent */}
                    <div className="absolute -top-4 -right-8 w-16 h-16 bg-burgundy/20 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Overlapping Text Block */}
                <div className="absolute top-20 right-0 bg-ivory/95 backdrop-blur-sm rounded-2xl p-6 shadow-elegant max-w-xs transform rotate-2 z-20">
                  <div className="text-midnight-blue text-sm leading-relaxed">
                    "Transforming ideas into 
                    <span className="font-bold text-moss-green"> powerful solutions</span> 
                    that drive business growth."
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-midnight-blue rounded-full flex items-center justify-center">
                      <span className="text-ivory text-xs font-bold">✓</span>
                    </div>
                    <span className="text-midnight-blue/70 text-xs">Proven Results</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Creative Portfolio Showcase */}
              <div className="col-span-12 lg:col-span-5 relative">
                <div className="space-y-6 relative">
                  {/* Large Portfolio Image with Creative Positioning */}
                  <div className="w-72 h-48 rounded-3xl overflow-hidden shadow-2xl ml-auto transform -rotate-6 hover:rotate-0 transition-transform duration-500 relative z-10">
                    <img 
                      src={brandingWork2} 
                      alt="Creative Branding Work" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-ivory text-sm font-medium">Brand Design</div>
                  </div>
                  
                  {/* Overlapping Square Image */}
                  <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500 absolute -bottom-8 -left-8 z-20">
                    <img 
                      src={brandingWork1} 
                      alt="Strategic Innovation" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-moss-green/30"></div>
                  </div>

                  {/* Floating Statistics Card */}
                  <div className="absolute top-0 -left-12 bg-burgundy/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant transform -rotate-3 z-30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ivory">150+</div>
                      <div className="text-ivory/80 text-xs">Projects</div>
                    </div>
                  </div>

                  {/* Vertical Creative Label */}
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-5">
                    <div className="text-ivory/60 text-4xl font-light tracking-[0.3em] transform -rotate-90 whitespace-nowrap origin-center">
                      CREATIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Elements */}
        <div className="absolute bottom-12 left-8 bg-moss-green/90 backdrop-blur-sm rounded-2xl p-6 shadow-elegant transform rotate-2 z-40">
          <div className="text-ivory text-center">
            <div className="text-3xl font-bold">5+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
        </div>

        {/* Floating Pricing Card - Enhanced */}
        <div className="absolute bottom-8 right-8 bg-ivory rounded-2xl p-6 shadow-2xl border border-ivory/20 transform -rotate-1 hover:rotate-0 transition-transform duration-300 z-40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-midnight-blue to-moss-green rounded-xl flex items-center justify-center">
              <span className="text-ivory font-bold text-lg">S</span>
            </div>
            <div>
              <div className="font-bold text-xl text-midnight-blue">Strategic</div>
              <div className="text-2xl font-bold text-umber">$199 USD</div>
            </div>
          </div>
          <div className="mt-3 text-midnight-blue/70 text-xs">Premium Package</div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-moss-green/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-burgundy/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;