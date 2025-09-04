import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, FileText, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProcessAutomation = () => {
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
        <section className="py-16 bg-gradient-to-r from-secondary to-secondary/80">
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
                Sauna Slot Booking System
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Full requirements specification for a digital sauna booking system, covering complete requirements engineering process from stakeholder needs to technical documentation
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["UML", "Requirements Engineering", "Risk Analysis", "Software Design"].map((tag, index) => (
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
                    Designed a full requirements specification for a digital sauna booking system used in a housing company context. 
                    The project covered the complete requirements engineering process: eliciting stakeholder needs, analyzing and 
                    prioritizing requirements, modeling the system through UML use cases, class diagrams, and UI sketches, and 
                    defining both functional and non-functional requirements. The outcome was a professional-grade Software 
                    Requirements Specification (SRS) that demonstrates proficiency in translating stakeholder goals into structured technical documentation.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Stakeholder Types</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Use Cases</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">3</div>
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
                      <h4 className="font-semibold text-primary">Use Case Modeling</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Detailed use cases for residents, caretakers, and housing company</li>
                        <li>• Account creation and slot booking workflows</li>
                        <li>• Notification and feedback systems</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">UML Diagrams</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Use case diagrams and class diagrams</li>
                        <li>• Sitemap sketches and UI wireframes</li>
                        <li>• System logic and data flow visualization</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Data Dictionary & Domain Model</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• User, Resident, Apartment, Sauna entities</li>
                        <li>• Time Slot and Reservation modeling</li>
                        <li>• Attributes, IDs, and data examples</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Risk Analysis</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Risk register with probability-impact scoring</li>
                        <li>• Monthly risk evolution tracking</li>
                        <li>• Mitigation and recovery plans</li>
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
                      <h4 className="font-semibold text-primary mb-2">Modeling & Documentation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>UML Diagrams</p>
                        <p>Use Case Modeling</p>
                        <p>Class Diagrams</p>
                        <p>Object Models</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Design Tools</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Figma (UI Sketches)</p>
                        <p>Excel (Analysis)</p>
                        <p>Word/PDF Reports</p>
                        <p>Risk Registers</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Standards & Frameworks</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>IEEE SRS Standards</p>
                        <p>ISO/IEC Guidelines</p>
                        <p>Function Point Analysis</p>
                        <p>GDPR Compliance</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Methodologies</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Requirements Elicitation</p>
                        <p>Human-Centered Design</p>
                        <p>Risk-Based Management</p>
                        <p>Scope Validation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card">
                  <Github className="w-4 h-4 mr-2" />
                  View Requirements
                </Button>
                <Button size="lg" variant="outline" className="shadow-card">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  UML Diagrams
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