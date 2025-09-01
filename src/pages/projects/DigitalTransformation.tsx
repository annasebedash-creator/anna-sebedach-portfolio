import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FileText, Calendar, Building, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-moss-green">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/#projects" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Digital Transformation Strategy
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Led digital transformation initiative for mid-size company, implementing cloud infrastructure and modernizing legacy systems
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Strategy", "Cloud Migration", "Change Management", "ROI Analysis"].map((tag, index) => (
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
                    This comprehensive digital transformation project involved modernizing a traditional mid-size company's 
                    entire technology infrastructure. The initiative included cloud migration, process automation, 
                    digital workflow implementation, and organizational change management to drive efficiency and growth.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <TrendingUp className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">35%</div>
                      <div className="text-sm text-muted-foreground">Efficiency Increase</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Building className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Employees Impacted</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-sm text-muted-foreground">Months Duration</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Infrastructure Modernization</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 100% cloud migration completion</li>
                        <li>• Legacy system replacement</li>
                        <li>• Enhanced security protocols</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Process Automation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 60% reduction in manual tasks</li>
                        <li>• Automated workflow implementation</li>
                        <li>• Digital document management</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Employee Training</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Comprehensive training programs</li>
                        <li>• 95% employee adoption rate</li>
                        <li>• Ongoing support system</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">ROI & Performance</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 300% ROI within first year</li>
                        <li>• 40% faster processing times</li>
                        <li>• Improved customer satisfaction</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Strategy */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Implementation Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Phase 1: Assessment</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Current state analysis</p>
                        <p>Gap identification</p>
                        <p>Stakeholder mapping</p>
                        <p>Risk assessment</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Phase 2: Planning</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Technology roadmap</p>
                        <p>Resource allocation</p>
                        <p>Timeline development</p>
                        <p>Budget planning</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Phase 3: Implementation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Cloud migration</p>
                        <p>System integration</p>
                        <p>Process automation</p>
                        <p>User training</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Phase 4: Optimization</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Performance monitoring</p>
                        <p>Continuous improvement</p>
                        <p>User feedback integration</p>
                        <p>ROI measurement</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card">
                  <FileText className="w-4 h-4 mr-2" />
                  Strategy Document
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

export default DigitalTransformation;