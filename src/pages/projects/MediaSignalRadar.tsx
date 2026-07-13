import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Radar, Newspaper, Target } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MediaSignalRadar = () => {
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
                Media Signal Radar
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                An autonomous agent that monitors Finnish media for AI discourse, classifies what it finds
                the way a communications consultant would, and publishes a daily PR-style digest — unattended, in public
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "OpenAI API", "Structured Outputs", "GitHub Actions", "GitHub Pages", "RSS", "LLM Evals", "Prompt Engineering", "Media Monitoring"].map((tag, index) => (
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
                    Media monitoring is daily work at every communications agency — a person reads the morning's
                    news and briefs clients on what matters. This project automates the mechanical half of that
                    job while keeping the judgment half explicitly human-defined. Every morning a GitHub Actions
                    cron fetches the public RSS headlines of seven Finnish news outlets, an LLM classifies each
                    topic signal in a consultant's categories — relevance, signal type (launch/crisis/regulation/
                    opinion/research/trend), tone, named stakeholders, domestic angle, and a one-sentence "why a
                    communications team should care" — and a ranked Finnish-language digest is published to a
                    live public site. Zero servers, zero hosting costs; the entire pipeline, data and editorial
                    policy are open in the repository.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Newspaper className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Headlines Scanned Daily, 11 Feeds / 7 Outlets</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Radar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Daily</div>
                      <div className="text-sm text-muted-foreground">Autonomous Digest, Live Since July 2026</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Blind</div>
                      <div className="text-sm text-muted-foreground">Native-Speaker Eval Set — Labeling In Progress</div>
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
                      <h4 className="font-semibold text-primary">Fully Autonomous Pipeline</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• GitHub Actions cron: fetch → classify → digest → publish, every morning</li>
                        <li>• The site's daily commits are made by the bot, not by hand — verifiable in the history</li>
                        <li>• Survives single-feed failures; a bad outlet day never kills the run</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Consultant-Grade Classification</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Structured JSON schema: relevance 0–3, signal type, tone, stakeholders, domestic angle</li>
                        <li>• One-sentence "why care" per signal, in a neutral analyst voice</li>
                        <li>• Same story in multiple outlets is collapsed — outlet count kept as a signal</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Daily Finnish Digest</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Three-bullet radar summary written by the LLM; ranking is deterministic code</li>
                        <li>• Every item links to and credits its source outlet</li>
                        <li>• Headlines and leads from public RSS only — no scraping, no paywalled text</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Editorial Policy as Code</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• What counts as a signal is written policy in the prompt, tuned on real misclassifications</li>
                        <li>• Topic scope, category definitions and voice are explicit and versioned</li>
                        <li>• Visible disclaimer: automated analysis, may contain errors</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Evaluation */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Measured, Not Assumed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Classification quality is being evaluated against a blind, hand-labeled test set: real
                    signals from the live pipeline, labeled by a native Finnish speaker without seeing the
                    model's answers. Agreement numbers (relevance, tone, domestic angle) will be published in
                    the repository with run-to-run variance — the same eval-first approach as my Tutor AI
                    Assistant project.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Measurement already shaped the build: on AI-infrastructure edge cases (e.g. data-center
                    stories), gpt-4o-mini scored the story out-of-topic in 5 of 5 runs despite explicit
                    instructions, while gpt-4o followed the editorial policy in 5 of 5 — documented in the
                    config, with the final model choice deferred to the labeled eval results.
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
                      <h4 className="font-semibold text-primary mb-2">Pipeline</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Python</p>
                        <p>feedparser (RSS)</p>
                        <p>Near-duplicate collapse</p>
                        <p>Keyword prefilter</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">AI</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>OpenAI gpt-4o-mini</p>
                        <p>gpt-4o (digest summary)</p>
                        <p>Structured outputs (JSON schema)</p>
                        <p>Finnish-language prompts</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Automation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>GitHub Actions (daily cron)</p>
                        <p>Bot commits data + site</p>
                        <p>GitHub Pages (static)</p>
                        <p>Zero hosting costs</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Method</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Blind eval labeling</p>
                        <p>Model A/B on edge cases</p>
                        <p>Legal guardrails (RSS-only)</p>
                        <p>Honest metrics with variance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://annasebedash-creator.github.io/media-signal-radar/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    See the Live Radar
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/media-signal-radar" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/media-signal-radar/actions" target="_blank" rel="noopener noreferrer">
                    <Radar className="w-4 h-4 mr-2" />
                    Watch It Run (Actions)
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

export default MediaSignalRadar;
