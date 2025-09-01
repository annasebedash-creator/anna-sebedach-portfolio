import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProcessAutomation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-secondary to-secondary/80">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/#projects" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Process Automation Framework
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Built automation framework that reduced manual processing time by 60% across multiple business units
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "RPA", "Process Design", "Integration"].map((tag, index) => (
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
                    This comprehensive process automation framework revolutionizes how businesses handle repetitive tasks 
                    and workflows. By implementing intelligent automation solutions across multiple departments, 
                    the system significantly reduces manual effort while improving accuracy and consistency.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Clock className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">60%</div>
                      <div className="text-sm text-muted-foreground">Time Reduction</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Zap className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Processes Automated</div>
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
                      <h4 className="font-semibold text-primary">Workflow Automation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Document processing automation</li>
                        <li>• Approval workflow management</li>
                        <li>• Data entry elimination</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Integration Layer</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Multi-system connectivity</li>
                        <li>• API orchestration</li>
                        <li>• Legacy system integration</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Intelligent Processing</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• OCR and document recognition</li>
                        <li>• Rule-based decision making</li>
                        <li>• Exception handling</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Monitoring & Analytics</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Process performance tracking</li>
                        <li>• Error monitoring and alerts</li>
                        <li>• ROI measurement tools</li>
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
                      <h4 className="font-semibold text-primary mb-2">Automation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Python</p>
                        <p>UiPath</p>
                        <p>Blue Prism</p>
                        <p>Selenium</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Integration</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>REST APIs</p>
                        <p>SOAP Services</p>
                        <p>Message Queues</p>
                        <p>WebHooks</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Infrastructure</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Docker</p>
                        <p>Kubernetes</p>
                        <p>Jenkins</p>
                        <p>Azure DevOps</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Monitoring</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Prometheus</p>
                        <p>Grafana</p>
                        <p>ELK Stack</p>
                        <p>Custom Dashboards</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card">
                  <Github className="w-4 h-4 mr-2" />
                  View Framework
                </Button>
                <Button size="lg" variant="outline" className="shadow-card">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Documentation
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

export default ProcessAutomation;