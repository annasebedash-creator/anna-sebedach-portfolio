import { ArrowDown } from "lucide-react";
import heroMainPortrait from "@/assets/hero-main-portrait.jpg";
import brandingWork1 from "@/assets/branding-work-1.jpg";
import brandingWork2 from "@/assets/branding-work-2.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Main Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src={heroMainPortrait} 
          alt="Professional Portrait" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-blue/40 via-transparent to-midnight-blue/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Navigation Area */}
        <div className="pt-20">
          <div className="container mx-auto px-6">
            <div className="flex justify-end">
              {/* Service Menu Card */}
              <div className="bg-ivory/95 backdrop-blur-sm rounded-2xl p-6 shadow-elegant max-w-xs">
                <div className="space-y-3">
                  <div className="text-midnight-blue font-medium">Home</div>
                  <div className="text-midnight-blue/70 text-sm">About us</div>
                  <div className="text-midnight-blue font-medium">Service</div>
                  <div className="text-midnight-blue/70 text-sm">Blog</div>
                  <div className="text-midnight-blue/70 text-sm">Pricing</div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4 text-burgundy transform rotate-45" />
                  <span className="text-midnight-blue/70 text-xs">More info about our services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Content - Massive Typography */}
              <div className="col-span-12 lg:col-span-8 xl:col-span-9">
                <div className="space-y-2">
                  <h1 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-[0.85] text-ivory tracking-tight">
                    Strategies
                  </h1>
                  <div className="ml-8 md:ml-16 lg:ml-24">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-ivory/90 tracking-wide">
                      For branding
                    </h2>
                  </div>
                </div>
              </div>

              {/* Right Content - Portfolio Showcase */}
              <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                <div className="space-y-6 relative">
                  {/* Portfolio Image 1 */}
                  <div className="w-64 h-40 rounded-2xl overflow-hidden shadow-elegant ml-auto">
                    <img 
                      src={brandingWork2} 
                      alt="Creative Branding Work" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Portfolio Image 2 */}
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-elegant">
                    <img 
                      src={brandingWork1} 
                      alt="Branding Strategy" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Vertical Text Label */}
                  <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <div className="text-ivory/80 text-3xl font-light tracking-widest transform -rotate-90 whitespace-nowrap origin-center">
                      Branding
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Mission Statement & Clients */}
        <div className="bg-gradient-to-r from-midnight-blue/90 to-midnight-blue/70 backdrop-blur-md border-t border-ivory/10">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Mission Statement */}
              <div className="col-span-12 lg:col-span-7">
                <h3 className="text-3xl lg:text-4xl text-ivory font-light leading-relaxed">
                  We are dedicated to empowering <span className="text-moss-green font-medium">businesses</span>
                  <br />
                  with strategic insights, innovative solutions and
                  <br />
                  <span className="text-moss-green font-medium">expert guidance</span>
                </h3>
              </div>

              {/* Client Portfolio */}
              <div className="col-span-12 lg:col-span-5">
                <div className="text-ivory/60 text-sm mb-6 font-medium">Our successful clients</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors">
                    <span className="text-ivory/70 text-xs font-medium">SERVICE</span>
                  </div>
                  <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors">
                    <span className="text-ivory/70 text-xs font-medium">BRAND</span>
                  </div>
                  <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors">
                    <span className="text-ivory/70 text-xs font-medium">POWER</span>
                  </div>
                  <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors">
                    <span className="text-ivory/70 text-xs font-medium">TECH</span>
                  </div>
                  <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors">
                    <span className="text-ivory/70 text-xs font-medium">START</span>
                  </div>
                  <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors">
                    <span className="text-ivory/70 text-xs font-medium">SCALE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Pricing Card */}
        <div className="absolute bottom-8 right-8 bg-ivory rounded-2xl p-6 shadow-elegant border border-ivory/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-midnight-blue rounded-xl flex items-center justify-center">
              <span className="text-ivory font-bold text-lg">R</span>
            </div>
            <div>
              <div className="font-bold text-xl text-midnight-blue">Regensia</div>
              <div className="text-2xl font-bold text-umber">$129 USD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;