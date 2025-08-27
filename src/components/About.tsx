import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Lightbulb, 
  Target, 
  Trophy, 
  BookOpen, 
  Coffee,
  Rocket,
  Heart,
  Brain,
  Zap
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "Constantly exploring cutting-edge technologies and methodologies to deliver breakthrough solutions.",
      color: "moss-green"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results Driven",
      description: "Focused on measurable outcomes and tangible business value in every project and initiative.",
      color: "burgundy"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client Centric",
      description: "Building lasting relationships through transparent communication and exceeding expectations.",
      color: "umber"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Committed to staying ahead of industry trends and expanding expertise across domains.",
      color: "moss-green"
    }
  ];

  const journey = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started as Junior Business Analyst, discovering the intersection of technology and business strategy.",
      achievement: "Built first automated reporting system"
    },
    {
      year: "2019-2020",
      title: "Expanding Horizons", 
      description: "Transitioned to IT consulting, working with diverse clients across multiple industries.",
      achievement: "15+ successful digital transformations"
    },
    {
      year: "2020-2022",
      title: "Technical Mastery",
      description: "Deep dive into full-stack development while maintaining strategic business focus.",
      achievement: "Led team of 8 developers"
    },
    {
      year: "2022-Present",
      title: "Strategic Leadership",
      description: "Senior Business Analyst role, bridging technology and business strategy at enterprise scale.",
      achievement: "25% cost reduction across projects"
    }
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Elite Background */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-moss-green/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-burgundy/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container-fluid relative z-10">
        
        {/* Elite Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-6">
            <User className="w-5 h-5 text-moss-green animate-glow" />
            <span className="font-medium text-moss-green">About Me</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-display gradient-text mb-6">
            Passion Meets Purpose
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-body leading-relaxed">
            I'm a <span className="text-moss-green font-semibold">passionate technologist</span> and 
            <span className="text-burgundy font-semibold"> strategic thinker</span> who believes that 
            the best solutions emerge at the intersection of 
            <span className="text-umber font-semibold"> cutting-edge technology</span> and 
            <span className="text-moss-green font-semibold"> deep business understanding</span>.
          </p>
        </div>

        {/* Elite Personal Story */}
        <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-display gradient-text-accent mb-6">My Journey</h3>
              <div className="prose prose-lg">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over <span className="text-moss-green font-semibold">5 years of professional experience</span>, 
                  I've had the privilege of working across diverse industries, from fintech startups to 
                  enterprise corporations, always focusing on creating solutions that drive real business value.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My unique approach combines <span className="text-burgundy font-semibold">technical expertise</span> 
                  with <span className="text-umber font-semibold">strategic thinking</span>, enabling me to not 
                  just build great software, but to ensure it serves the broader business objectives and 
                  creates lasting impact.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding or analyzing data, you'll find me exploring the latest tech trends, 
                  mentoring aspiring developers, or planning my next adventure. I believe that 
                  <span className="text-moss-green font-semibold"> continuous learning</span> and 
                  <span className="text-burgundy font-semibold"> curiosity</span> are the keys to staying 
                  relevant in our rapidly evolving industry.
                </p>
              </div>
            </div>

            {/* Visual Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "25+", label: "Projects Completed", icon: <Rocket className="w-5 h-5" /> },
                  { number: "5+", label: "Years Experience", icon: <Trophy className="w-5 h-5" /> },
                  { number: "15+", label: "Technologies Mastered", icon: <Zap className="w-5 h-5" /> },
                  { number: "500+", label: "Coffee Cups ☕", icon: <Coffee className="w-5 h-5" /> }
                ].map((stat, index) => (
                  <div key={index} className="card-premium text-center hover-lift group">
                    <div className="text-moss-green mb-2 group-hover:animate-glow flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold font-display gradient-text mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Elite Values Section */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display gradient-text mb-4">Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and drive my commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className={`card-premium hover-lift group text-center transition-all duration-700`}
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`text-${value.color} mx-auto mb-4 group-hover:animate-glow`}>
                    {value.icon}
                  </div>
                  <h4 className="font-display text-lg mb-3 text-primary">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Elite Journey Timeline */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display gradient-text-accent mb-4">Professional Journey</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in my evolution from analyst to strategic technology leader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full rounded-full opacity-30"></div>
              
              <div className="space-y-12">
                {journey.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-moss-green rounded-full border-4 border-white shadow-glow z-10"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                    }`}>
                      <Card className="card-premium hover-lift group">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge variant="outline" className="text-moss-green border-moss-green">
                              {step.year}
                            </Badge>
                            <BookOpen className="w-4 h-4 text-moss-green" />
                          </div>
                          <h4 className="font-display text-xl mb-3 text-primary group-hover:text-moss-green transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="flex items-center space-x-2">
                            <Trophy className="w-4 h-4 text-burgundy" />
                            <span className="text-sm font-medium text-burgundy">{step.achievement}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Elite Personal Touch */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-effect rounded-3xl p-8 max-w-3xl mx-auto">
            <h4 className="font-display text-2xl gradient-text mb-4">Let's Connect</h4>
            <p className="text-muted-foreground leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, and ways we can create 
              exceptional value together. Whether you're looking for technical expertise, strategic insights, 
              or someone who can bridge the gap between technology and business, I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;