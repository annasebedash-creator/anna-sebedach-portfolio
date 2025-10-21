import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FileSpreadsheet, FileText, Calendar } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MessukeskusProduction = () => {
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
                Messukeskus Production Pack System
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A bilingual event production documentation system that transforms complex programme data into polished PDF reports and dashboards for large-scale live events
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Google Sheets", "Apps Script", "PDF Generation", "Event Production", "Automation", "Data Validation"].map((tag, index) => (
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
                    A comprehensive production documentation system prototype built for Messukeskus (Helsinki Expo and Convention Centre). 
                    The system automates the creation of bilingual production documents from a central Google Sheet, generating polished 
                    PDFs, producer dashboards, and coordination files. Designed for large-scale events with 100+ programme items, 
                    the system streamlines workflow between producers, coordinators, and on-site teams while ensuring data accuracy 
                    through built-in validation and formatting rules.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Programme Items</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">2</div>
                      <div className="text-sm text-muted-foreground">Languages (FI/EN)</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <FileSpreadsheet className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Automated</div>
                      <div className="text-sm text-muted-foreground">PDF Generation</div>
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
                      <h4 className="font-semibold text-primary">Programme Data Management</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Central sheet for event details and schedules</li>
                        <li>• Bilingual support (Finnish/English)</li>
                        <li>• Data validation and conditional formatting</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Apps Script Automation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• One-click PDF generation</li>
                        <li>• Custom formatting and styling</li>
                        <li>• Automated file naming and storage</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Producer Dashboard</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Real-time task overview</li>
                        <li>• Progress tracking and status updates</li>
                        <li>• Production timeline visualization</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Document Outputs</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Production info PDF reports</li>
                        <li>• Daily operations schedules</li>
                        <li>• Evaluation summary reports</li>
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
                      <h4 className="font-semibold text-primary mb-2">Platform</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Google Workspace</p>
                        <p>Google Sheets</p>
                        <p>Google Drive</p>
                        <p>Cloud Storage</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Automation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Google Apps Script</p>
                        <p>JavaScript</p>
                        <p>Custom Functions</p>
                        <p>Triggers & Events</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Document Generation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>PDF Export API</p>
                        <p>Custom Formatting</p>
                        <p>Template Engine</p>
                        <p>Multi-language Output</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Concepts</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Event Production</p>
                        <p>Workflow Automation</p>
                        <p>Data Validation</p>
                        <p>Document Management</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://docs.google.com/spreadsheets/d/1lwZiRB4U5z9_YG2Qp3NiRdW8uLDuV_q_9oQq92HgIsc/edit?gid=1088821087#gid=1088821087" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="shadow-card">
                    <FileSpreadsheet className="w-4 h-4 mr-2" />
                    Master Sheet
                  </Button>
                </a>
                <a 
                  href="https://drive.google.com/file/d/1kw6IwFOqGlTYJ_NVIBWGIIRbAeU9sNJE/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="shadow-card">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Production PDF
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MessukeskusProduction;
