import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BiasFallacyLab = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = () => {
    navigate("/#projects");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-mist to-ivory">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Button 
            onClick={handleBackToProjects}
            variant="ghost" 
            className="mb-8 text-charcoal-gray hover:bg-sage-mist/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
            Bias & Fallacy Lab
          </h1>
          
          <p className="text-xl text-charcoal-gray/80 mb-8 leading-relaxed">
            Research-focused web platform for identifying and analyzing cognitive biases and logical fallacies in decision-making processes. Features interactive experiments, real-time bias detection tools, and comprehensive reporting for behavioral research applications.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "D3.js", "Research Methods", "Cognitive Psychology", "Data Analysis", "Interactive Design"].map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-sage-mist/30 border-sage-green text-charcoal-gray">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Project Overview */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-charcoal-gray">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal-gray/80 mb-6 leading-relaxed">
                A cutting-edge research platform that combines cognitive psychology principles with interactive web technologies to study human decision-making processes. The lab provides researchers with tools to conduct experiments, collect data, and analyze patterns of bias and logical fallacies in real-time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-moss-green rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">25+</h3>
                  <p className="text-sm opacity-90">Cognitive Biases Studied</p>
                </div>
                <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">1,200+</h3>
                  <p className="text-sm opacity-90">Research Participants</p>
                </div>
                <div className="text-center p-4 bg-gradient-accent rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">6 Months</h3>
                  <p className="text-sm opacity-90">Research Duration</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-charcoal-gray">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Interactive Experiments</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Cognitive bias testing protocols</li>
                    <li>• Decision-making simulations</li>
                    <li>• A/B testing frameworks</li>
                    <li>• Randomized control trials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Bias Detection</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Real-time pattern recognition</li>
                    <li>• Confirmation bias analysis</li>
                    <li>• Anchoring effect detection</li>
                    <li>• Availability heuristic tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Data Visualization</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Dynamic bias visualization</li>
                    <li>• Statistical trend analysis</li>
                    <li>• Interactive data exploration</li>
                    <li>• Custom reporting dashboards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Research Tools</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Experiment design wizard</li>
                    <li>• Participant management</li>
                    <li>• Data export capabilities</li>
                    <li>• Statistical significance testing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies & Tools */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-charcoal-gray">Technologies & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "D3.js", "HTML5 Canvas", "CSS3 Animations", "Web APIs"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Data Analysis</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "R Statistical Computing", "Pandas", "Statistical Tests"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Research Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Experimental Design", "Survey Tools", "Eye Tracking", "Response Time Analysis"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "MongoDB", "Real-time Analytics", "Cloud Storage"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-moss-green hover:bg-moss-green/90 text-white">
              <Github className="mr-2 h-5 w-5" />
              View Research Code
            </Button>
            <Button size="lg" variant="outline" className="border-sage-green text-charcoal-gray hover:bg-sage-mist/50">
              <ExternalLink className="mr-2 h-5 w-5" />
              Try Experiments
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiasFallacyLab;