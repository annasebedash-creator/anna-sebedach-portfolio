import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Bot, BarChart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WatsonxAssistant = () => {
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
        <section className="py-16 bg-gradient-accent">
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
                IBM Watsonx Assistant with Embedded Analytics
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Advanced chatbot extension that embeds dynamic charts and tables directly into conversation interfaces, bridging conversational AI with real-time data visualization
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["JavaScript", "Node.js", "IBM Watsonx", "Chart.js", "API Integration", "Conversational AI"].map((tag, index) => (
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
                    Implemented an advanced chatbot extension that embeds dynamic charts and tables directly into conversation 
                    interfaces, effectively bridging conversational AI with real-time data visualization. The project serves 
                    as both a technical proof-of-concept and an educational evaluation platform, demonstrating the seamless 
                    integration of natural language processing with interactive data analytics.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Bot className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">AI-Powered</div>
                      <div className="text-sm text-muted-foreground">Conversational Interface</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <BarChart className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Real-time</div>
                      <div className="text-sm text-muted-foreground">Data Visualization</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Dynamic</div>
                      <div className="text-sm text-muted-foreground">Chart Integration</div>
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
                      <h4 className="font-semibold text-primary">Conversational AI</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• IBM Watsonx natural language processing</li>
                        <li>• Intent recognition and entity extraction</li>
                        <li>• Context-aware conversation flow</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Data Visualization</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Dynamic chart generation with Chart.js</li>
                        <li>• Interactive tables and data grids</li>
                        <li>• Real-time data updates</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">API Integration</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• RESTful API data sources</li>
                        <li>• Webhook-based data updates</li>
                        <li>• Multi-source data aggregation</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">User Experience</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Embedded visualization in chat</li>
                        <li>• Responsive design patterns</li>
                        <li>• Intuitive interaction methods</li>
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
                      <h4 className="font-semibold text-primary mb-2">AI Platform</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>IBM Watsonx Assistant</p>
                        <p>Natural Language Processing</p>
                        <p>Intent Classification</p>
                        <p>Entity Recognition</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>JavaScript ES6+</p>
                        <p>Chart.js</p>
                        <p>HTML5 & CSS3</p>
                        <p>Responsive Design</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Backend</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>REST APIs</p>
                        <p>Webhook Integration</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Integration</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>IBM Cloud Services</p>
                        <p>Real-time Data Sources</p>
                        <p>Custom Extensions</p>
                        <p>Analytics APIs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button size="lg" variant="outline" className="shadow-card">
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

export default WatsonxAssistant;