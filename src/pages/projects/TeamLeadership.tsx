import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TeamLeadership = () => {
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
                Cross-Functional Team Leadership Initiative
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Led a 12-person cross-disciplinary team through a complex digital transformation project, implementing agile methodologies and stakeholder management frameworks to deliver results 3 weeks ahead of schedule
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Agile", "Scrum", "Stakeholder Management", "Team Leadership", "Risk Management"].map((tag, index) => (
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
                    Led a 12-person cross-disciplinary team through a complex digital transformation project, implementing 
                    agile methodologies and stakeholder management frameworks. Successfully delivered project outcomes 
                    3 weeks ahead of schedule while maintaining high team satisfaction scores. The initiative involved 
                    coordinating between technical, business, and design teams to modernize legacy systems and improve 
                    operational efficiency.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Weeks Early</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">6</div>
                      <div className="text-sm text-muted-foreground">Month Project</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Agile Implementation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Introduced Scrum ceremonies and rituals</li>
                        <li>• Implemented sprint planning and retrospectives</li>
                        <li>• Created cross-functional collaboration framework</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Stakeholder Management</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Regular communication with C-level executives</li>
                        <li>• Managed expectations across 5 departments</li>
                        <li>• Facilitated change management processes</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Team Development</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Mentored junior team members</li>
                        <li>• Conducted knowledge transfer sessions</li>
                        <li>• Improved team satisfaction by 40%</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Risk Management</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Proactive risk identification and mitigation</li>
                        <li>• Created contingency plans for critical paths</li>
                        <li>• Maintained project budget within 5% variance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies Used */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Methodologies & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Project Management</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Scrum Framework</p>
                        <p>Kanban Boards</p>
                        <p>JIRA & Confluence</p>
                        <p>MS Project</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Communication</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Daily Standups</p>
                        <p>Sprint Reviews</p>
                        <p>Stakeholder Briefings</p>
                        <p>Slack & Teams</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Leadership</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Servant Leadership</p>
                        <p>Conflict Resolution</p>
                        <p>Team Building</p>
                        <p>Performance Coaching</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Analysis</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Burndown Charts</p>
                        <p>Velocity Tracking</p>
                        <p>KPI Monitoring</p>
                        <p>ROI Analysis</p>
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

export default TeamLeadership;