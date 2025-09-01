import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomerRelationship = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-burgundy">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/#projects" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Customer Relationship Platform
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Created a comprehensive CRM system with automated workflows, improving customer satisfaction scores by 40%
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "Express.js", "MySQL", "API Integration"].map((tag, index) => (
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
                    This comprehensive CRM platform was designed to streamline customer interactions, automate sales processes, 
                    and provide detailed analytics on customer behavior. The system integrates multiple communication channels 
                    and provides a unified view of customer relationships for improved service delivery.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Heart className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction Increase</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">5k+</div>
                      <div className="text-sm text-muted-foreground">Customers Managed</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">10</div>
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
                      <h4 className="font-semibold text-primary">Customer Management</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 360-degree customer profiles</li>
                        <li>• Interaction history tracking</li>
                        <li>• Automated data enrichment</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Sales Automation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Lead scoring and qualification</li>
                        <li>• Automated follow-up sequences</li>
                        <li>• Pipeline management tools</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Communication Hub</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Multi-channel integration</li>
                        <li>• Email automation campaigns</li>
                        <li>• Real-time chat support</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Analytics & Reporting</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Customer behavior analytics</li>
                        <li>• Sales performance metrics</li>
                        <li>• Custom dashboard creation</li>
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
                        <p>Redux Toolkit</p>
                        <p>Material-UI</p>
                        <p>TypeScript</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Backend</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Express.js</p>
                        <p>Node.js</p>
                        <p>MySQL</p>
                        <p>JWT Auth</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Integrations</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Stripe API</p>
                        <p>Twilio</p>
                        <p>SendGrid</p>
                        <p>Zapier</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Infrastructure</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>AWS EC2</p>
                        <p>RDS</p>
                        <p>ElastiCache</p>
                        <p>CloudFront</p>
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

export default CustomerRelationship;