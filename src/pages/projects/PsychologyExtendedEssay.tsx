import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, BookOpen, Calendar, FileText, Target } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PsychologyExtendedEssay = () => {
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
        <section className="py-16 bg-burgundy">
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
                Mental Imagery in Social Anxiety Disorder
              </h1>
              <p className="text-xl text-white/90 mb-8">
                "To what extent does mental imagery serve a negative role in social anxiety disorder?" - A 3,991-word IB Extended Essay investigating how mental imagery both maintains SAD symptoms and serves as a therapeutic intervention through imagery rescripting techniques.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Psychology Research", "Academic Writing", "Literature Review", "IB Extended Essay", "Mental Health", "Cognitive Behavioral Therapy"].map((tag, index) => (
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
                  <CardTitle className="text-2xl font-bold text-primary">Research Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Authored a 3,991-word IB Extended Essay exploring the research question "To what extent does mental imagery serve a negative role in social anxiety disorder?" The paper examines how individuals with SAD experience distorted negative imagery of themselves from an observer's perspective, which maintains anxiety symptoms. However, it also investigates imagery rescripting as an emerging therapeutic technique that transforms negative mental images into positive, realistic ones. The research demonstrates that while mental imagery strongly contributes to developing and maintaining SAD, it can simultaneously serve as a powerful therapeutic tool when properly harnessed through evidence-based interventions.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">3,991</div>
                      <div className="text-sm text-muted-foreground">Words Written</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Multiple</div>
                      <div className="text-sm text-muted-foreground">Peer-Reviewed Sources</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">6</div>
                      <div className="text-sm text-muted-foreground">Months Research</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Research Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Literature Review</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Systematic analysis of peer-reviewed studies</li>
                        <li>• Critical evaluation of research methodologies</li>
                        <li>• Synthesis of conflicting findings</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Theoretical Framework</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Cognitive Behavioral Therapy principles</li>
                        <li>• Mental imagery theory integration</li>
                        <li>• Social anxiety disorder mechanisms</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Key Findings</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Mental imagery maintains SAD through negative self-perception</li>
                        <li>• Observer perspective imagery increases anxiety symptoms</li>
                        <li>• Imagery rescripting shows therapeutic promise</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Academic Standards</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• IB Extended Essay requirements</li>
                        <li>• APA citation and formatting</li>
                        <li>• Ethical research considerations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies Used */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Research Methods & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Research Databases</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>PsycINFO</p>
                        <p>PubMed</p>
                        <p>Google Scholar</p>
                        <p>Web of Science</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Analysis Methods</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Systematic Review</p>
                        <p>Critical Analysis</p>
                        <p>Comparative Studies</p>
                        <p>Meta-synthesis</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Writing Tools</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Microsoft Word</p>
                        <p>Mendeley Reference Manager</p>
                        <p>Grammarly</p>
                        <p>Turnitin Originality</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Standards</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>IB Extended Essay Criteria</p>
                        <p>APA 7th Edition</p>
                        <p>Ethical Guidelines</p>
                        <p>Academic Integrity</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center">
                <Button size="lg" className="shadow-card" asChild>
                  <a href="/documents/AnnaSebedach_Psych_EE.pdf" download="Mental_Imagery_Social_Anxiety_Extended_Essay.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
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

export default PsychologyExtendedEssay;