import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, BarChart, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FinancialReporting = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-umber">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/#projects" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Reporting Dashboard
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Designed and implemented real-time financial reporting system with interactive visualizations for executive decision-making
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Power BI", "SQL Server", "Excel VBA", "Data Modeling"].map((tag, index) => (
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
                    This advanced financial reporting system transforms complex financial data into actionable insights through 
                    interactive dashboards and real-time analytics. The platform consolidates multiple data sources and provides 
                    executives with comprehensive financial visibility for strategic decision-making.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <BarChart className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">50%</div>
                      <div className="text-sm text-muted-foreground">Faster Reporting</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <DollarSign className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">$2M+</div>
                      <div className="text-sm text-muted-foreground">Revenue Tracked</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">4</div>
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
                        <li>• Live financial data streaming</li>
                        <li>• Automated report generation</li>
                        <li>• Performance trend analysis</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Interactive Dashboards</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Customizable visualization widgets</li>
                        <li>• Drill-down capabilities</li>
                        <li>• Mobile-responsive design</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Data Integration</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Multi-source data consolidation</li>
                        <li>• Automated data validation</li>
                        <li>• ETL pipeline management</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Advanced Reporting</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Executive summary reports</li>
                        <li>• Variance analysis tools</li>
                        <li>• Forecasting models</li>
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
                      <h4 className="font-semibold text-primary mb-2">Business Intelligence</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Power BI</p>
                        <p>Tableau</p>
                        <p>DAX Formulas</p>
                        <p>Custom Visuals</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Database</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>SQL Server</p>
                        <p>Azure SQL</p>
                        <p>SSRS</p>
                        <p>Data Warehouse</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Automation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Excel VBA</p>
                        <p>Power Automate</p>
                        <p>SSIS</p>
                        <p>Scheduled Jobs</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Data Modeling</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Star Schema</p>
                        <p>Dimensional Modeling</p>
                        <p>Data Marts</p>
                        <p>KPI Design</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card">
                  <Github className="w-4 h-4 mr-2" />
                  View Templates
                </Button>
                <Button size="lg" variant="outline" className="shadow-card">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo Dashboard
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

export default FinancialReporting;