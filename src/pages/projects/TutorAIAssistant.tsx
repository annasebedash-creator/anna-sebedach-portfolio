import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Target, Users, MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TutorAIAssistant = () => {
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
                Tutor AI Assistant
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A trilingual RAG-powered customer-service agent built and deployed for a real business — my own language-tutoring service
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Next.js", "OpenAI", "RAG", "Supabase", "pgvector", "TypeScript", "Vercel", "Playwright", "CI", "Trilingual"].map((tag, index) => (
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
                    Designed, built and deployed to production an AI customer-service agent for my own tutoring
                    business — Finnish lessons for Russian speakers in Finland. The agent answers questions about
                    services, pricing and teaching methodology in Russian, Finnish and English, qualifies leads,
                    and books trial lessons directly into a database. Answers are grounded in the business's own
                    knowledge base through retrieval-augmented generation (vector similarity search), so the agent
                    never invents prices or policies — when it doesn't know, it says so and redirects to email.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <MessageSquare className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Languages Served</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">18/18</div>
                      <div className="text-sm text-muted-foreground">Factual Accuracy, Latest Eval (15–18 across runs)</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Live</div>
                      <div className="text-sm text-muted-foreground">In Production</div>
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
                      <h4 className="font-semibold text-primary">Retrieval-Augmented Generation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Business knowledge base embedded with OpenAI embeddings</li>
                        <li>• Vector similarity search via Supabase pgvector</li>
                        <li>• Hallucination guard: unknown questions get an honest redirect</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Trilingual Customer Service</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Detects and answers in Russian, Finnish or English</li>
                        <li>• Mirrors the languages the business's customers actually use</li>
                        <li>• Single knowledge base serves all languages</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Lead Qualification & Booking</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Collects name, contact, level and learning goals in conversation</li>
                        <li>• Structured booking records stored in Postgres</li>
                        <li>• Explicit confirmation step before any booking is stored — no wrong-data bookings</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Production Engineering & QA</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Deployed on Vercel with encrypted environment secrets</li>
                        <li>• 20 Playwright tests (desktop + mobile WebKit, API contract, rate limiting) in CI on every push</li>
                        <li>• Risk-based test plan and real bug reports in the repo</li>
                        <li>• Per-IP rate limiting and input validation protect the public demo</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Evaluation */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Evaluated, Not Just Built</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The agent ships with an automated evaluation harness: a 24-question multilingual test set
                    (Russian, Finnish, English) scored for factual accuracy, refusal correctness on out-of-scope
                    questions, and reply-language consistency, plus an end-to-end booking scenario verified
                    against the database.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-primary">18/18</div>
                      <div className="text-sm text-muted-foreground">Factual accuracy, latest run</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">5/6</div>
                      <div className="text-sm text-muted-foreground">Correct refusals</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">23/24</div>
                      <div className="text-sm text-muted-foreground">Language consistency</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">PASS</div>
                      <div className="text-sm text-muted-foreground">Booking end-to-end</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    The evals earned their keep immediately: they caught a language-switching regression (the
                    Russian-heavy knowledge base pulling English questions into Russian answers) and showed that a
                    "clarified" prompt actually made it worse — the fix was an explicit conditional language rule,
                    verified by re-running the suite. Run-to-run variance (±1–2 questions) is documented in the
                    results rather than hidden.
                  </p>
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
                        <p>Next.js (App Router)</p>
                        <p>React</p>
                        <p>TypeScript</p>
                        <p>Custom chat UI</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">AI</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>OpenAI gpt-4o-mini</p>
                        <p>text-embedding-3-small</p>
                        <p>Prompt engineering</p>
                        <p>RAG architecture</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Data</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Supabase (Postgres)</p>
                        <p>pgvector similarity search</p>
                        <p>Booking & analytics tables</p>
                        <p>Seed pipeline (tsx)</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Infrastructure</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Vercel (production)</p>
                        <p>Encrypted env secrets</p>
                        <p>Rate limiting</p>
                        <p>Git / GitHub</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/tutor-ai-assistant" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://tutor-ai-assistant.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Try the Live Demo
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/tutor-ai-assistant/blob/main/evals/RESULTS.md" target="_blank" rel="noopener noreferrer">
                    <Target className="w-4 h-4 mr-2" />
                    Eval Results
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

export default TutorAIAssistant;
