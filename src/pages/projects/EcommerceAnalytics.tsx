import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EcommerceAnalytics = () => {
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
                E-Commerce Analytics Platform
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A comprehensive analytics dashboard for tracking sales performance, customer behavior, and inventory management
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "Node.js", "MongoDB", "D3.js", "AWS"].map((tag, index) => (
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
                    This comprehensive e-commerce analytics platform was designed to provide deep insights into sales performance, 
                    customer behavior patterns, and inventory management for online retailers. The solution integrates multiple 
                    data sources and provides real-time dashboards for business decision-making.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-muted-foreground">Performance Increase</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">10k+</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">6</div>
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
                      <h4 className="font-semibold text-primary">Real-time Analytics</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Live sales tracking and reporting</li>
                        <li>• Customer behavior analysis</li>
                        <li>• Revenue forecasting models</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Inventory Management</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Automated stock level monitoring</li>
                        <li>• Predictive restocking alerts</li>
                        <li>• Supply chain optimization</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Data Visualization</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Interactive D3.js charts</li>
                        <li>• Customizable dashboard widgets</li>
                        <li>• Export capabilities for reports</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Cloud Infrastructure</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• AWS cloud deployment</li>
                        <li>• Scalable architecture</li>
                        <li>• Secure data handling</li>
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
                      <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>React.js</p>
                        <p>TypeScript</p>
                        <p>D3.js</p>
                        <p>Tailwind CSS</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Backend</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>MongoDB</p>
                        <p>Redis</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Cloud & DevOps</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>AWS EC2</p>
                        <p>AWS S3</p>
                        <p>Docker</p>
                        <p>CI/CD</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Analytics</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Google Analytics</p>
                        <p>Custom Tracking</p>
                        <p>Data Pipelines</p>
                        <p>ML Models</p>
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

export default EcommerceAnalytics;