import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Database, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FinancialReporting = () => {
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
        <section className="py-16 bg-umber">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <button 
                onClick={handleBackToProjects}
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                SQL & Data Management Fusion Project
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Comprehensive suite of SQL and data management solutions integrating theoretical concepts with practical database design and implementation
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["SQL Server", "ER Modeling", "Normalization", "Transaction Control"].map((tag, index) => (
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
                    Designed and implemented a comprehensive suite of SQL and data management solutions that integrated theoretical concepts 
                    (relational modeling, normalization, ER diagramming, data integrity, and transaction control) with practical exercises 
                    in schema creation, query design, and database validation. This work showcases the ability to move fluidly between 
                    theory and practice while maintaining professional-level precision in data modeling and relational design.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Database className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">3NF</div>
                      <div className="text-sm text-muted-foreground">Normalization Level</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Code className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">SQL Queries</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">4</div>
                      <div className="text-sm text-muted-foreground">Case Studies</div>
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
                      <h4 className="font-semibold text-primary">ER Diagramming & Conceptual Design</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• ER diagrams with entities, relationships, and cardinalities</li>
                        <li>• Real-world cases (libraries, clubs, cultural associations)</li>
                        <li>• Music reservation systems modeling</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Relational Schema & Normalization</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Translated conceptual models into relational schemas</li>
                        <li>• Applied 1NF, 2NF, and 3NF normalization</li>
                        <li>• Functional dependency analysis</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">SQL Schema Implementation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Normalized SQL tables with constraints</li>
                        <li>• Primary keys, foreign keys, and integrity</li>
                        <li>• NOT NULL, UNIQUE, CHECK constraints</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Transaction & Concurrency Control</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Transaction isolation levels analysis</li>
                        <li>• ACID properties demonstration</li>
                        <li>• Concurrency anomalies handling</li>
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
                      <h4 className="font-semibold text-primary mb-2">SQL Development</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Microsoft SQL Server</p>
                        <p>DDL & DML</p>
                        <p>Complex Joins</p>
                        <p>Subqueries</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Data Modeling</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>ER Diagrams (UML)</p>
                        <p>Relational Schemas</p>
                        <p>Normalization</p>
                        <p>Business Rules</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Analysis</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Functional Dependencies</p>
                        <p>Transaction Isolation</p>
                        <p>ACID Properties</p>
                        <p>Concurrency Control</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Documentation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Technical Specifications</p>
                        <p>Repository Templates</p>
                        <p>Data Dictionary</p>
                        <p>Case Study Reports</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card">
                  <Github className="w-4 h-4 mr-2" />
                  View Repository
                </Button>
                <Button size="lg" variant="outline" className="shadow-card">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Case Studies
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