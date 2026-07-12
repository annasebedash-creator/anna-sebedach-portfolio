import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Bug, ShieldCheck, Workflow } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const QAEngineeringAIProduct = () => {
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
                QA & Test Automation for a Production AI Product
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A QA process built from scratch to break the product before its users do — risk-based test plan, cross-browser automation, LLM evals, and real bug reports
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Playwright", "Test Automation", "API Testing", "LLM Evals", "GitHub Actions CI", "Mobile Testing", "Bug Reporting", "TypeScript"].map((tag, index) => (
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

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    My Tutor AI Assistant is deployed to production for my own tutoring service — which means bugs cost real
                    trust and real money. No QA process existed, so I built one, starting from the question:
                    which failures would actually hurt the business? The result is a layered, automated QA
                    system: a risk-ranked test plan, 20 automated tests across desktop and mobile browsers,
                    an LLM evaluation harness for the non-deterministic parts, CI on every push, and
                    engineer-actionable bug reports for every defect found — all public in the repository.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <ShieldCheck className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">20</div>
                      <div className="text-sm text-muted-foreground">Automated Tests in CI</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Workflow className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">7</div>
                      <div className="text-sm text-muted-foreground">Ranked Business Risks Covered</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Bug className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Findings Written Up as Reports</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">The QA Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Risk-Based Test Plan</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Seven failure modes ranked by business impact — wrong prices to customers, lost bookings, API-cost blowout</li>
                        <li>• Every risk mapped to the test layer that covers it</li>
                        <li>• Regression habits built for a two-week-sprint cadence</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Cross-Browser E2E Automation</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Playwright suites on desktop Chromium and iPhone/WebKit</li>
                        <li>• Chat flows, input limits, disabled states, suggestion lifecycle</li>
                        <li>• Deterministic mock mode: free and CI-safe</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">API Contract & Abuse Testing</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Status codes, payload validation, response shape</li>
                        <li>• Hostile input: role spoofing, over-long payloads, malformed JSON</li>
                        <li>• Rate-limit verification in an isolated IP bucket</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">LLM Evals — Testing the Non-Deterministic</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 24-question multilingual set: factual accuracy, honest refusals, reply language</li>
                        <li>• Caught a real prompt regression before it reached the live site</li>
                        <li>• Run-to-run variance documented, not hidden</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">What the Bugs Taught</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Three findings — two defects and one judgment call — written up as engineer-actionable reports: a
                    language-switching regression where the Russian-heavy knowledge base pulled English
                    questions into Russian answers (caught by the eval suite — and the first "fix" measurably
                    made it worse, proving prompt edits need regression tests like any code change); a
                    production build failure from a dev/prod environment-parity gap; and a flaky booking test
                    that turned out to be desirable model behavior — the test was wrong, not the product.
                  </p>
                  <p className="text-sm">
                    Full write-ups: <span className="font-medium">BUG-REPORTS.md</span> and{" "}
                    <span className="font-medium">TEST-PLAN.md</span> in the repository.
                  </p>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="shadow-card" asChild>
                  <a href="https://github.com/annasebedash-creator/tutor-ai-assistant/blob/main/TEST-PLAN.md" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read the Test Plan
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" asChild>
                  <a href="https://github.com/annasebedash-creator/tutor-ai-assistant/blob/main/BUG-REPORTS.md" target="_blank" rel="noopener noreferrer">
                    <Bug className="w-4 h-4 mr-2" />
                    Read the Bug Reports
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" asChild>
                  <a href="https://github.com/annasebedash-creator/tutor-ai-assistant/actions" target="_blank" rel="noopener noreferrer">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    CI Runs
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" asChild>
                  <a href="https://github.com/annasebedash-creator/tutor-ai-assistant" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Full Repo
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" asChild>
                  <a href="https://tutor-ai-assistant.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    The Product Under Test
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

export default QAEngineeringAIProduct;
