import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PsychologyLearningPlatform = () => {
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
            Psychology Concepts Learning Platform
          </h1>
          
          <p className="text-xl text-charcoal-gray/80 mb-8 leading-relaxed">
            Educational web application designed to help students master core psychology concepts through interactive learning modules, quizzes, and progress tracking. Incorporates gamification elements and adaptive learning algorithms to enhance retention and engagement.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "MongoDB", "Educational Technology", "UX Design", "Gamification"].map((tag, index) => (
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
                An innovative educational platform that transforms traditional psychology learning through interactive modules, adaptive assessments, and gamified experiences. The platform serves psychology students, educators, and professionals seeking to deepen their understanding of psychological principles and theories.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-accent rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">85%</h3>
                  <p className="text-sm opacity-90">Knowledge Retention Rate</p>
                </div>
                <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">2,500+</h3>
                  <p className="text-sm opacity-90">Active Learners</p>
                </div>
                <div className="text-center p-4 bg-moss-green rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">12 Months</h3>
                  <p className="text-sm opacity-90">Development Timeline</p>
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
                  <h4 className="font-semibold text-charcoal-gray mb-3">Interactive Learning</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Multimedia content modules</li>
                    <li>• Case study simulations</li>
                    <li>• Interactive experiments</li>
                    <li>• Virtual psychology labs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Assessment System</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Adaptive quizzing engine</li>
                    <li>• Spaced repetition algorithms</li>
                    <li>• Performance analytics</li>
                    <li>• Instant feedback mechanisms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Gamification</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Achievement badges system</li>
                    <li>• Learning streaks tracking</li>
                    <li>• Leaderboards and competitions</li>
                    <li>• Progress visualization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Personalization</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Adaptive learning paths</li>
                    <li>• Personalized recommendations</li>
                    <li>• Learning style adaptation</li>
                    <li>• Custom study schedules</li>
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
                    {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Chart.js"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "JWT Authentication", "RESTful APIs"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "Mongoose", "Redis Cache", "Data Analytics"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Jest Testing", "Docker", "AWS Deployment"].map((tech, index) => (
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
            <Button size="lg" className="bg-gradient-accent hover:bg-gradient-accent/90 text-white">
              <Github className="mr-2 h-5 w-5" />
              View Source Code
            </Button>
            <Button size="lg" variant="outline" className="border-sage-green text-charcoal-gray hover:bg-sage-mist/50">
              <ExternalLink className="mr-2 h-5 w-5" />
              Try Platform Demo
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PsychologyLearningPlatform;