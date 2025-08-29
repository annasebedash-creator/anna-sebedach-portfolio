import heroWide from "@/assets/hero-wide.jpg";
import aesthetic1 from "@/assets/aesthetic-1.jpg";
import aesthetic2 from "@/assets/aesthetic-2.jpg";
import aesthetic3 from "@/assets/aesthetic-3.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen">
      {/* Layer 1: Wide Aesthetic Image */}
      <div className="h-[70vh] relative overflow-hidden">
        <img 
          src={heroWide} 
          alt="Strategic Business Solutions" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/30 to-transparent"></div>
      </div>

      {/* Layer 2: Black Background with Text */}
      <div className="bg-midnight-blue py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-ivory tracking-tight mb-8">
            Strategic
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-ivory/80 mb-12">
            Business Solutions
          </h2>
          <p className="text-xl md:text-2xl text-ivory/70 max-w-4xl mx-auto leading-relaxed">
            We empower businesses with innovative strategies, cutting-edge technology, 
            and expert guidance to drive sustainable growth and competitive advantage.
          </p>
        </div>
      </div>

      {/* Layer 3: Three Aesthetic Images */}
      <div className="bg-ivory py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <img 
                  src={aesthetic1} 
                  alt="Strategic Planning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-midnight-blue mb-2">Strategy</h3>
                <p className="text-umber/80">Comprehensive business planning and strategic development</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <img 
                  src={aesthetic2} 
                  alt="Innovation & Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-midnight-blue mb-2">Innovation</h3>
                <p className="text-umber/80">Creative solutions and cutting-edge technology integration</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <img 
                  src={aesthetic3} 
                  alt="Partnership & Growth" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-midnight-blue mb-2">Partnership</h3>
                <p className="text-umber/80">Long-term relationships and sustainable business growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;