import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomerRelationship = () => {
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
                QualiLab – Qualitative Data Analysis Platform
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A research-grade web application for qualitative data analysis in psychology with NLP pipelines and collaborative coding
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Next.js", "React", "Supabase", "NLP", "OpenAI API"].map((tag, index) => (
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
                    Designed and implemented a research-grade web application for qualitative data analysis in psychology. The platform enables researchers to upload transcripts and open-ended survey responses, automatically segment and categorize the text using NLP pipelines, and collaborate on human-in-the-loop coding with inter-rater reliability statistics. QualiLab bridges IT engineering and psychological research methodology, providing both automation and rigorous control.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">NLP</div>
                      <div className="text-sm text-muted-foreground">Automated Processing</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Collaborative</div>
                      <div className="text-sm text-muted-foreground">Review Environment</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Research</div>
                      <div className="text-sm text-muted-foreground">Grade Platform</div>
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
                      <h4 className="font-semibold text-primary">Automated Text Processing</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Upload CSV, TXT, or PDF files</li>
                        <li>• PII redaction and metadata handling</li>
                        <li>• Document segmentation</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">NLP-Powered Coding</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Sentiment and emotion analysis</li>
                        <li>• Topic modeling with confidence scores</li>
                        <li>• Model versioning for reproducibility</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Collaborative Review</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Human-in-the-loop coding workflows</li>
                        <li>• Role-based access control</li>
                        <li>• Keyboard-driven review interface</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Analytics & Reporting</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Inter-rater reliability statistics</li>
                        <li>• Interactive dashboards</li>
                        <li>• Publication-ready exports</li>
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
                      <h4 className="font-semibold text-primary mb-2">Frontend & UI</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Next.js</p>
                        <p>React</p>
                        <p>TailwindCSS</p>
                        <p>Responsive design</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Backend & APIs</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Supabase (Postgres)</p>
                        <p>Edge Functions</p>
                        <p>Row-level security</p>
                        <p>Deno/TypeScript</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">NLP & Processing</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>OpenAI API</p>
                        <p>HuggingFace models</p>
                        <p>RoBERTa/DistilBERT</p>
                        <p>Topic modeling</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Visualization</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Chart.js/Plotly</p>
                        <p>PDF generation</p>
                        <p>Structured reporting</p>
                        <p>Audit trails</p>
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