import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const QualiLab = () => {
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
            QualiLab
          </h1>
          
          <p className="text-xl text-charcoal-gray/80 mb-8 leading-relaxed">
            Advanced qualitative research analysis tool streamlining the coding, categorization, and interpretation of qualitative data. Includes automated transcription services, collaborative coding features, and advanced text analysis capabilities for researchers and academics.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["Natural Language Processing", "Text Analysis", "Research Tools", "Collaboration Features", "API Integration", "Data Management"].map((tag, index) => (
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
                QualiLab revolutionizes qualitative research methodology by providing researchers with intelligent tools for data analysis, coding, and interpretation. The platform combines traditional qualitative research approaches with modern NLP technologies to enhance accuracy and efficiency in research workflows.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-secondary rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">75%</h3>
                  <p className="text-sm opacity-90">Time Reduction in Coding</p>
                </div>
                <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">500+</h3>
                  <p className="text-sm opacity-90">Research Projects</p>
                </div>
                <div className="text-center p-4 bg-gradient-accent rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">10 Months</h3>
                  <p className="text-sm opacity-90">Development Period</p>
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
                  <h4 className="font-semibold text-charcoal-gray mb-3">Smart Coding System</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• AI-assisted thematic coding</li>
                    <li>• Pattern recognition algorithms</li>
                    <li>• Automated categorization</li>
                    <li>• Inter-rater reliability tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Text Analysis</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Sentiment analysis engine</li>
                    <li>• Keyword frequency analysis</li>
                    <li>• Semantic similarity detection</li>
                    <li>• Concept mapping tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Collaboration Hub</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Multi-researcher workspaces</li>
                    <li>• Real-time coding sessions</li>
                    <li>• Version control system</li>
                    <li>• Peer review workflows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Data Integration</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Automated transcription</li>
                    <li>• Multiple format support</li>
                    <li>• Cloud synchronization</li>
                    <li>• Export capabilities</li>
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
                  <h4 className="font-semibold text-charcoal-gray mb-3">Natural Language Processing</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "NLTK", "spaCy", "Transformers", "BERT"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Django", "PostgreSQL", "Redis", "Celery", "RESTful APIs"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Material-UI", "D3.js", "WebSockets"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "AWS", "GitHub Actions", "Elasticsearch"].map((tech, index) => (
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
            <Button size="lg" className="bg-gradient-secondary hover:bg-gradient-secondary/90 text-white">
              <Github className="mr-2 h-5 w-5" />
              View Platform Code
            </Button>
            <Button size="lg" variant="outline" className="border-sage-green text-charcoal-gray hover:bg-sage-mist/50">
              <ExternalLink className="mr-2 h-5 w-5" />
              Try QualiLab Demo
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QualiLab;