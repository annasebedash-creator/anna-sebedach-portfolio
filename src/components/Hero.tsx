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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-12 gap-6 items-center min-h-[70vh]">
              {/* Left Content - Main Text */}
              <div className="col-span-12 lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <h1 className="text-7xl md:text-9xl font-bold leading-[0.9] text-white">
                    Strategies
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-light text-white/90 ml-12">
                    For branding
                  </h2>
                </div>
              </div>

              {/* Right Content - Portfolio Images & Pricing */}
              <div className="col-span-12 lg:col-span-5 space-y-6">
                {/* Service Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 ml-auto max-w-xs">
                  <div className="space-y-2">
                    <div className="text-white/80 text-sm">Service</div>
                    <div className="text-white/60 text-xs">Blog</div>
                    <div className="text-white/60 text-xs">Pricing</div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <ArrowDown className="w-4 h-4 text-orange-400" />
                    <span className="text-white/80 text-xs">More info about our services</span>
                  </div>
                </div>

                {/* Portfolio Images */}
                <div className="space-y-4">
                  <div className="w-48 h-32 rounded-xl overflow-hidden shadow-xl ml-auto">
                    <img 
                      src={brandingWork2} 
                      alt="Branding Work" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-40 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={brandingWork1} 
                      alt="Branding Strategy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Branding Label */}
                <div className="text-white/90 text-2xl font-light tracking-wider transform -rotate-90 origin-left absolute right-8 top-1/2">
                  Branding
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Dark with Description & Clients */}
        <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-12 gap-6 items-center">
              {/* Description */}
              <div className="col-span-12 lg:col-span-6">
                <h3 className="text-2xl text-white/90 font-light leading-relaxed">
                  We are dedicated to empowering <span className="text-white font-medium">businesses</span>
                  <br />
                  with strategic insights, innovative solutions and
                  <br />
                  expert guidance
                </h3>
              </div>

              {/* Client Logos */}
              <div className="col-span-12 lg:col-span-6">
                <div className="text-white/60 text-sm mb-4">Our successful clients</div>
                <div className="flex flex-wrap gap-6 items-center">
                  {/* Logo placeholders */}
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/60 text-xs font-mono">LOGO</span>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/60 text-xs font-mono">BRAND</span>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/60 text-xs font-mono">CORP</span>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/60 text-xs font-mono">TECH</span>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/60 text-xs font-mono">START</span>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/60 text-xs font-mono">SCALE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Card - Floating */}
        <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">Regensia</div>
              <div className="text-2xl font-bold text-foreground">$129 USD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;