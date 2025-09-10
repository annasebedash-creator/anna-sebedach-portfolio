import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, TrendingDown, Target } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SupplyChainOptimization = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  const handleBackToProjects = () => {
    const params = new URLSearchParams(window.location.search);
    const expanded = params.get('expanded') === 'true';
    const scrollTo = params.get('scrollTo') || location.pathname;
    const query = new URLSearchParams();
    if (expanded) query.set('expanded', 'true');
    query.set('scrollTo', scrollTo);
    navigate(`/?${query.toString()}#projects`);
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
                Psychology Concepts Learning Platform
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                An interactive learning platform that systematizes core psychology concepts across multiple domains through three complementary learning modes
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Cursor AI", "Markdown", "Mermaid.js", "Python", "Psychology"].map((tag, index) => (
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
                    Developed an interactive learning platform that systematizes core psychology concepts across multiple domains (cognitive, developmental, social, applied, research methods) and presents them through three complementary learning modes — Socratic (dialogue), Diagrammatic (visual), and Narrative (explanatory). The project combines knowledge organization, educational design, and interactive visualization to create a professional, research-based study tool.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <TrendingDown className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Learning Modes</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Hundreds</div>
                      <div className="text-sm text-muted-foreground">Psychology Concepts</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">Psychology Domains</div>
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
                      <h4 className="font-semibold text-primary">Comprehensive Categorization</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Hierarchical concept organization</li>
                        <li>• Multiple psychology domains coverage</li>
                        <li>• Research-based taxonomy design</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Three Learning Modes</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Socratic: Interactive question-driven exploration</li>
                        <li>• Diagrammatic: Clear visual representations</li>
                        <li>• Narrative: Context-rich explanatory stories</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Quality Control</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Corrected category misplacements</li>
                        <li>• Missing concept identification</li>
                        <li>• Content accuracy validation</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Scalable Design</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Easily expandable architecture</li>
                        <li>• Pedagogical depth integration</li>
                        <li>• Professional study tool framework</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies Used */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Technologies & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Development Tools</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Cursor AI IDE</p>
                        <p>Python</p>
                        <p>Automation Scripts</p>
                        <p>Project Building</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Documentation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Markdown</p>
                        <p>Mermaid.js</p>
                        <p>Structured Documentation</p>
                        <p>Visual Diagrams</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Content Management</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Categorization Scripts</p>
                        <p>Taxonomy Design</p>
                        <p>Quality Control Systems</p>
                        <p>Content Validation</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Educational Design</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Psychology Curricula Research</p>
                        <p>Instructional Design</p>
                        <p>Pedagogical Framework</p>
                        <p>Learning Mode Integration</p>
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
                  onClick={() => window.open('https://github.com/annasebedash-creator/Psychology-Learning-Platfrom', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="shadow-card"
                  onClick={() => window.open('https://annasebedash-creator.github.io/Psychology-Learning-Platfrom/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
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

export default SupplyChainOptimization;