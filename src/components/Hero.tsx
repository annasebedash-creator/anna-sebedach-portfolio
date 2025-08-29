import { ArrowDown } from "lucide-react";
import heroMainPortrait from "@/assets/hero-main-portrait.jpg";
import brandingWork1 from "@/assets/branding-work-1.jpg";
import brandingWork2 from "@/assets/branding-work-2.jpg";
import heroWide from "@/assets/hero-wide.jpg";
import aesthetic1 from "@/assets/aesthetic-1.jpg";
import aesthetic2 from "@/assets/aesthetic-2.jpg";
import aesthetic3 from "@/assets/aesthetic-3.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Layer 1: Main Wide Aesthetic Image */}
      <div className="h-[85vh] relative overflow-hidden">
        <img 
          src={heroMainPortrait} 
          alt="Strategic Business Solutions" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-blue/20 to-midnight-blue/60"></div>
        
        {/* Overlapping Creative Elements on Main Image */}
        <div className="absolute top-20 right-8 bg-ivory/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-xs transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
          <div className="space-y-3">
            <div className="text-midnight-blue font-medium">Home</div>
            <div className="text-midnight-blue/70 text-sm">About us</div>
            <div className="text-moss-green font-bold">Service</div>
            <div className="text-midnight-blue/70 text-sm">Blog</div>
            <div className="text-midnight-blue/70 text-sm">Pricing</div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <ArrowDown className="w-4 h-4 text-burgundy transform rotate-45" />
            <span className="text-midnight-blue/70 text-xs">More info about our services</span>
          </div>
        </div>

        {/* Overlapping Wide Image */}
        <div className="absolute top-32 left-12 w-80 h-48 transform -rotate-6 hover:rotate-0 transition-transform duration-700 z-15">
          <img 
            src={heroWide} 
            alt="Creative Process" 
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-moss-green/30 to-transparent rounded-3xl"></div>
        </div>

        {/* Main Typography Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center relative">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-[0.8] text-ivory tracking-tight">
              Strategies
            </h1>
            <div className="ml-8 md:ml-16 lg:ml-24 relative">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-light text-ivory/90 tracking-wider">
                For branding
              </h2>
              
              {/* Floating Quote Overlay */}
              <div className="absolute -top-12 -right-20 bg-burgundy/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant transform rotate-12 hover:rotate-6 transition-transform duration-500 z-30">
                <div className="text-ivory text-xs max-w-32 leading-relaxed">
                  "Creating timeless brands that inspire"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Portfolio Preview */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-25">
          <div className="space-y-6 relative">
            <div className="w-72 h-44 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <img 
                src={brandingWork2} 
                alt="Creative Branding" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/50 to-transparent"></div>
            </div>
            
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500 ml-8">
              <img 
                src={brandingWork1} 
                alt="Brand Strategy" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vertical Creative Label */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-5">
              <div className="text-ivory/60 text-3xl font-light tracking-[0.3em] transform -rotate-90 whitespace-nowrap origin-center">
                Branding
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: Black Background with Mission & Client Logos */}
      <div className="bg-midnight-blue relative z-30 py-20 -mt-20">
        <div className="container mx-auto px-6">
          {/* Mission Statement with Overlapping Elements */}
          <div className="grid grid-cols-12 gap-8 items-center relative">
            <div className="col-span-12 lg:col-span-8">
              <h3 className="text-4xl lg:text-5xl text-ivory font-light leading-relaxed relative z-10">
                We are dedicated to empowering <span className="text-moss-green font-medium">businesses</span>
                <br />
                with strategic insights, innovative solutions and
                <br />
                <span className="text-moss-green font-medium">expert guidance</span>
              </h3>
              
              {/* Overlapping Stats Card */}
              <div className="absolute top-0 right-0 bg-ivory/95 backdrop-blur-sm rounded-xl p-6 shadow-elegant transform rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-midnight-blue">98%</div>
                  <div className="text-midnight-blue/70 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Client Portfolio Grid */}
            <div className="col-span-12 lg:col-span-4">
              <div className="text-ivory/60 text-sm mb-6 font-medium">Our successful clients</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors transform hover:scale-105 duration-300">
                  <span className="text-ivory/70 text-xs font-medium">SERVICE</span>
                </div>
                <div className="aspect-square bg-moss-green/20 rounded-xl flex items-center justify-center border border-moss-green/30 hover:bg-moss-green/30 transition-colors transform hover:scale-105 duration-300">
                  <span className="text-ivory text-xs font-medium">BRAND</span>
                </div>
                <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors transform hover:scale-105 duration-300">
                  <span className="text-ivory/70 text-xs font-medium">POWER</span>
                </div>
                <div className="aspect-square bg-burgundy/20 rounded-xl flex items-center justify-center border border-burgundy/30 hover:bg-burgundy/30 transition-colors transform hover:scale-105 duration-300">
                  <span className="text-ivory text-xs font-medium">TECH</span>
                </div>
                <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors transform hover:scale-105 duration-300">
                  <span className="text-ivory/70 text-xs font-medium">START</span>
                </div>
                <div className="aspect-square bg-ivory/10 rounded-xl flex items-center justify-center border border-ivory/20 hover:bg-ivory/20 transition-colors transform hover:scale-105 duration-300">
                  <span className="text-ivory/70 text-xs font-medium">SCALE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Three Aesthetic Images with Creative Overlapping */}
      <div className="bg-ivory relative z-40 py-20 -mt-12">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Large Featured Image with Text Overlay */}
            <div className="w-96 h-64 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700 relative z-10">
              <img 
                src={aesthetic1} 
                alt="Strategic Innovation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-ivory">
                <h4 className="text-2xl font-bold mb-2">Innovation</h4>
                <p className="text-sm opacity-90">Strategic planning & execution</p>
              </div>
            </div>

            {/* Overlapping Second Image */}
            <div className="absolute top-16 right-20 w-80 h-52 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-700 z-20">
              <img 
                src={aesthetic2} 
                alt="Creative Excellence" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-moss-green/40"></div>
            </div>

            {/* Third Image with Creative Positioning */}
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-700 z-30">
              <img 
                src={aesthetic3} 
                alt="Partnership Success" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-burgundy/30 to-transparent"></div>
              
              {/* Floating "Branding" Label */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-midnight-blue/90 backdrop-blur-sm rounded-lg px-3 py-8 shadow-elegant">
                <div className="text-ivory text-lg font-light tracking-[0.2em] transform -rotate-90 whitespace-nowrap origin-center">
                  Branding
                </div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute bottom-8 left-80 bg-moss-green/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-40">
              <div className="text-center text-ivory">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-xs opacity-90">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pricing Card */}
      <div className="fixed bottom-8 right-8 bg-ivory rounded-2xl p-6 shadow-2xl border border-ivory/20 transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-midnight-blue to-moss-green rounded-xl flex items-center justify-center">
            <span className="text-ivory font-bold text-lg">R</span>
          </div>
          <div>
            <div className="font-bold text-xl text-midnight-blue">Regensia</div>
            <div className="text-2xl font-bold text-umber">$129 USD</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;