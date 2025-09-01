import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, TrendingDown, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SupplyChainOptimization = () => {
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
                Supply Chain Optimization System
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                An AI-powered system that reduced operational costs by 23% through predictive analytics and automated inventory management
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "Machine Learning", "PostgreSQL", "Docker"].map((tag, index) => (
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
                    This advanced supply chain optimization system leverages machine learning algorithms to predict demand patterns, 
                    optimize inventory levels, and streamline logistics operations. The solution significantly reduced operational 
                    costs while improving delivery times and customer satisfaction.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <TrendingDown className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">23%</div>
                      <div className="text-sm text-muted-foreground">Cost Reduction</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">8</div>
                      <div className="text-sm text-muted-foreground">Months Duration</div>
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
                      <h4 className="font-semibold text-primary">Predictive Analytics</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Demand forecasting algorithms</li>
                        <li>• Seasonal trend analysis</li>
                        <li>• Risk assessment models</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Automated Inventory</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Smart reorder points</li>
                        <li>• Dynamic safety stock levels</li>
                        <li>• Supplier performance tracking</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Logistics Optimization</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Route optimization algorithms</li>
                        <li>• Warehouse location planning</li>
                        <li>• Transportation cost reduction</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Real-time Monitoring</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Live dashboard reporting</li>
                        <li>• Alert system for anomalies</li>
                        <li>• Performance KPI tracking</li>
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
                      <h4 className="font-semibold text-primary mb-2">Machine Learning</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Python</p>
                        <p>TensorFlow</p>
                        <p>Scikit-learn</p>
                        <p>Pandas</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Database</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>PostgreSQL</p>
                        <p>Redis</p>
                        <p>Time Series DB</p>
                        <p>Data Warehouse</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Infrastructure</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Docker</p>
                        <p>Kubernetes</p>
                        <p>Apache Kafka</p>
                        <p>Microservices</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Analytics</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Apache Spark</p>
                        <p>Jupyter</p>
                        <p>Power BI</p>
                        <p>Custom APIs</p>
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
                  Case Study
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