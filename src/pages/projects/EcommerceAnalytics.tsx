import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EcommerceAnalytics = () => {
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
                Finland Mental Health Research Dashboard
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A research-grade analytical pipeline and interactive dashboard to examine the evolution of mental health indicators in Finland
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "Streamlit", "Pandas", "THL API", "Eurostat"].map((tag, index) => (
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
                    Developed a research-grade analytical pipeline and interactive dashboard to examine the evolution of mental health indicators in Finland, including suicide burden, alcohol consumption, depressive symptoms, and antidepressant use. Integrated data from multiple public health sources (THL, Eurostat, Our World in Data) into a unified framework, performing advanced statistical analyses and generating both static reports and an interactive web-based exploration tool. The project demonstrates the combination of IT engineering, data science, and psychological theory in applied research.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">4</div>
                      <div className="text-sm text-muted-foreground">Data Sources</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Advanced</div>
                      <div className="text-sm text-muted-foreground">Statistical Analysis</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Interactive</div>
                      <div className="text-sm text-muted-foreground">Dashboard</div>
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
                      <h4 className="font-semibold text-primary">Automated Data Ingestion</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Heterogeneous APIs integration (THL, Eurostat, OWID)</li>
                        <li>• Caching and error handling</li>
                        <li>• Modular pipeline architecture</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Statistical Analysis</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Correlation and lag analysis</li>
                        <li>• Interrupted time series modeling</li>
                        <li>• Advanced statistical methods</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Reporting & Visualization</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Publication-ready static reports (PDF)</li>
                        <li>• Interactive Streamlit dashboard</li>
                        <li>• Data filtering and download capabilities</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Framework Integration</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Psychological theory integration</li>
                        <li>• Contextual annotations</li>
                        <li>• Professional dashboard design</li>
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
                      <h4 className="font-semibold text-primary mb-2">Languages/Libraries</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Python</p>
                        <p>Pandas</p>
                        <p>NumPy</p>
                        <p>Statsmodels</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Visualization</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Streamlit</p>
                        <p>Matplotlib</p>
                        <p>Seaborn</p>
                        <p>Plotly</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Data Sources</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>THL Sotkanet API</p>
                        <p>Eurostat API</p>
                        <p>Our World in Data</p>
                        <p>OECD Health Statistics</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Development</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Virtual environments (venv)</p>
                        <p>Modular Python architecture</p>
                        <p>Logging</p>
                        <p>Markdown documentation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card" asChild>
                  <a href="https://github.com/annasebedash-creator/Finland-Psychology-Report-Dashboard" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" asChild>
                  <a href="https://finland-psychology-report-dashboard-kjtvduh5rphhid7jnwysqf.streamlit.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
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

export default EcommerceAnalytics;