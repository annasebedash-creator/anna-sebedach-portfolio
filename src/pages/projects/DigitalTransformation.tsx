import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, TrendingUp, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DigitalTransformation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = () => {
    navigate("/#projects");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <button 
                onClick={handleBackToProjects}
                className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Bias & Fallacy Lab
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A gamified web platform that teaches logical fallacies and cognitive biases through interactive scenarios and adaptive feedback
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["HTML", "CSS", "JavaScript", "JSON", "Web Audio API"].map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Project Details */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Designed and developed a gamified web platform that teaches logical fallacies and cognitive biases through interactive scenarios, adaptive feedback, and a dynamic practice system. The project combines elements of psychology, education, and front-end engineering to create an engaging learning environment where users identify reasoning errors in real-world contexts, track their progress, and deepen understanding via an integrated bias library.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <TrendingUp className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">160+</div>
                      <div className="text-sm text-muted-foreground">Crafted Scenarios</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Building className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">60+</div>
                      <div className="text-sm text-muted-foreground">Biases & Fallacies</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Interactive</div>
                      <div className="text-sm text-muted-foreground">Audio-Visual Feedback</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Scenario-Based Learning</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 160+ crafted real-world scenarios</li>
                        <li>• Business, media, politics contexts</li>
                        <li>• Everyday decision-making situations</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Adaptive Practice Mode</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Randomized drills and streak tracking</li>
                        <li>• Difficulty scaling system</li>
                        <li>• Instant feedback with explanations</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Bias Library</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Comprehensive reference section</li>
                        <li>• Research-informed definitions</li>
                        <li>• Classic examples and contexts</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Gamification & Design</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Progress tracking and accuracy rings</li>
                        <li>• Dark/light mode themes</li>
                        <li>• Interactive audio-visual feedback</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies & Architecture */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Technologies & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Languages & Frameworks</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>HTML</p>
                        <p>CSS (custom theming)</p>
                        <p>JavaScript (vanilla)</p>
                        <p>Responsive design</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Data Architecture</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>JSON schema</p>
                        <p>Structured scenarios</p>
                        <p>Library entries</p>
                        <p>Modular design</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">UI/UX Design</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Custom dark/light themes</p>
                        <p>Accessibility adjustments</p>
                        <p>Gamified dashboard</p>
                        <p>Data visualizations</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Audio & Feedback</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Web Audio API</p>
                        <p>Dynamic sound effects</p>
                        <p>Positive/negative feedback</p>
                        <p>Performance optimization</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button 
                  size="lg" 
                  className="shadow-card"
                  onClick={() => window.open('https://annasebedash-creator.github.io/Bias-Lab/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="shadow-card"
                  onClick={() => window.open('https://github.com/annasebedash-creator/bias-lab', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalTransformation;