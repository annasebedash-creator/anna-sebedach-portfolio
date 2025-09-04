import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FinlandMentalHealthDashboard = () => {
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
            Finland Mental Health Research Dashboard
          </h1>
          
          <p className="text-xl text-charcoal-gray/80 mb-8 leading-relaxed">
            Interactive data visualization platform analyzing mental health trends across Finnish demographics using comprehensive statistical analysis and machine learning models. Features real-time data processing, predictive analytics, and customizable filtering for healthcare professionals and researchers.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["Python", "Pandas", "Matplotlib", "Plotly", "Statistical Analysis", "Machine Learning", "Data Visualization"].map((tag, index) => (
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
                A comprehensive research dashboard that processes and visualizes mental health data from Finnish healthcare institutions. The platform combines epidemiological data analysis with interactive visualization tools to support evidence-based decision making in mental healthcare policy and treatment approaches.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">15K+</h3>
                  <p className="text-sm opacity-90">Patient Records Analyzed</p>
                </div>
                <div className="text-center p-4 bg-gradient-accent rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">92%</h3>
                  <p className="text-sm opacity-90">Prediction Accuracy</p>
                </div>
                <div className="text-center p-4 bg-moss-green rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-2">8 Months</h3>
                  <p className="text-sm opacity-90">Development Duration</p>
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
                  <h4 className="font-semibold text-charcoal-gray mb-3">Statistical Analysis</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Demographic trend analysis</li>
                    <li>• Correlation studies</li>
                    <li>• Time series forecasting</li>
                    <li>• Regional comparison tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Interactive Visualization</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Dynamic charts and graphs</li>
                    <li>• Geographic heat maps</li>
                    <li>• Customizable dashboards</li>
                    <li>• Real-time data updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Machine Learning</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Predictive modeling</li>
                    <li>• Risk assessment algorithms</li>
                    <li>• Pattern recognition</li>
                    <li>• Outcome prediction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Research Tools</h4>
                  <ul className="space-y-2 text-charcoal-gray/80">
                    <li>• Data export capabilities</li>
                    <li>• Custom filter options</li>
                    <li>• Report generation</li>
                    <li>• Collaboration features</li>
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
                  <h4 className="font-semibold text-charcoal-gray mb-3">Data Analysis</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Pandas", "NumPy", "SciPy", "Scikit-learn"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Visualization</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Matplotlib", "Plotly", "Seaborn", "Dash", "Bokeh"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "SQLAlchemy", "Redis", "Apache Spark"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage-mist/50 text-charcoal-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-3">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Jupyter Notebooks", "Git", "Linux"].map((tech, index) => (
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
            <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-white">
              <Github className="mr-2 h-5 w-5" />
              View Research Code
            </Button>
            <Button size="lg" variant="outline" className="border-sage-green text-charcoal-gray hover:bg-sage-mist/50">
              <ExternalLink className="mr-2 h-5 w-5" />
              Interactive Dashboard
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FinlandMentalHealthDashboard;