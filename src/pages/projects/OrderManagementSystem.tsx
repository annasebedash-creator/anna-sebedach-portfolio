import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FileSpreadsheet, Mail, BarChart3 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OrderManagementSystem = () => {
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
                Order Management & Invoicing System
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                An internal order-to-invoice workflow system that centralizes order tracking, invoicing, customer communication, and reporting — built entirely with existing office tools and no additional software costs
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Excel", "Outlook", "Power BI", "Teams", "WooCommerce", "Procountor", "Process Design", "SOP Documentation"].map((tag, index) => (
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
                    Designed and built a complete internal order management system for a non-profit organization during an internship. 
                    The system handles the full lifecycle from e-commerce order intake through invoicing, customer communication, 
                    and monthly reporting. It integrates with existing tools — Excel for tracking, Procountor for invoicing, 
                    Outlook for templated customer emails, and Power BI with Teams for reporting — eliminating the need for 
                    separate software purchases while bringing full transparency and traceability to the order process.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <FileSpreadsheet className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">Workflow Stages</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Mail className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">4</div>
                      <div className="text-sm text-muted-foreground">Email Templates</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <BarChart3 className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">0</div>
                      <div className="text-sm text-muted-foreground">Extra Software Costs</div>
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
                      <h4 className="font-semibold text-primary">Order Tracking</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Centralized Excel tracking with unique order IDs</li>
                        <li>• Automated daily status summary of open orders</li>
                        <li>• WooCommerce data import with field mapping</li>
                        <li>• Validation rules and template rows for consistency</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Invoicing & Finance</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Procountor-compatible invoice workflow</li>
                        <li>• Overdue risk tracking and alerts</li>
                        <li>• Macro-ready export structure for future automation</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Customer Communication</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Standardized Outlook Quick Parts email templates</li>
                        <li>• Order confirmation, invoicing, delivery & complaint templates</li>
                        <li>• Communication log with responsible person tracking</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Reporting & Documentation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Weekly Teams status updates with structured templates</li>
                        <li>• Power BI monthly reports with key metrics</li>
                        <li>• Full SOP documentation with roles and responsibilities</li>
                        <li>• Exception handling and archiving procedures</li>
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
                      <h4 className="font-semibold text-primary mb-2">Data Management</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Microsoft Excel</p>
                        <p>Data Validation</p>
                        <p>VBA Macros (draft)</p>
                        <p>Field Mapping</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Integration</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>WooCommerce</p>
                        <p>Procountor</p>
                        <p>Microsoft Outlook</p>
                        <p>Microsoft Teams</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Reporting</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Power BI</p>
                        <p>Teams Channels</p>
                        <p>Automated Summaries</p>
                        <p>KPI Dashboards</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Process Design</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>SOP Documentation</p>
                        <p>Workflow Mapping</p>
                        <p>Role Definition</p>
                        <p>Version Control</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://www.notion.so/Hymy-tilausten-hallintaj-rjestelm-Opinkirjo-ry-harjoittelun-ytt-293577983990800c8257dd73bfd3e8f6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="shadow-card">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Project Demo
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

export default OrderManagementSystem;
