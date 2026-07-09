import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Users, Layers } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CoventuresAIWorkflow = () => {
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
                AI-Native Proposal Workflow System
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Built and tested during a pilot at Coventures, a Helsinki venture-building and consulting
                company — an AI workflow system that turns client-conversation transcripts into structured,
                client-ready proposal decks
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Claude Code", "Claude Design", "AI Workflow Design", "Prompt Engineering", "Knowledge Management", "Sales Enablement", "Markdown / GitHub", "Bilingual FI/EN"].map((tag, index) => (
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
                    Every proposal the company sent repeated the same shape — client situation, offer, proof,
                    terms — yet each one was rebuilt from scratch, and choosing the right reference cases and
                    experts depended entirely on the founders' memory of scattered materials across Drive,
                    old slide decks and a CRM. During a summer 2026 pilot I built the workflow layer that
                    changed this: reusable Claude Code playbooks that read a client-conversation transcript,
                    ask targeted context questions, select which slide blocks (and which reference cases and
                    expert profiles) belong in this specific offer, and hand the result to Claude Design for a
                    finished deck. The system was used on real client proposals during the pilot and documented
                    so future team members can operate it without any insider knowledge.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">38</div>
                      <div className="text-sm text-muted-foreground">Case References Structured</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">43</div>
                      <div className="text-sm text-muted-foreground">Expert Profiles in the System</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Layers className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">56</div>
                      <div className="text-sm text-muted-foreground">Slide Variants in the Template</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pipeline */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">How the Pipeline Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <span className="font-bold text-primary flex-shrink-0">1.</span>
                      <span><strong className="text-primary">Transcript in.</strong> The user gives Claude Code a meeting transcript or brief — the system never invents a client situation from nothing.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="font-bold text-primary flex-shrink-0">2.</span>
                      <span><strong className="text-primary">Seven context questions.</strong> Offering type, relationship stage, project size, scope certainty, co-branding, language — the answers decide which slide blocks are included and in which variant.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="font-bold text-primary flex-shrink-0">3.</span>
                      <span><strong className="text-primary">Slide-by-slide outline.</strong> Built from a modular catalog derived from reverse-engineering 7 past proposal decks. Facts the AI must not invent (prices, dates) come back as explicit placeholders for the user to fill.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="font-bold text-primary flex-shrink-0">4.</span>
                      <span><strong className="text-primary">Proof selection.</strong> Sub-playbooks pick the reference cases and expert profiles using prioritized criteria — not "any plausible case" but the strongest available one, framed from the right angle.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="font-bold text-primary flex-shrink-0">5.</span>
                      <span><strong className="text-primary">Design handoff.</strong> One command wraps the approved outline into a full Claude Design prompt targeting a 56-slide-variant template, producing a client-ready deck.</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">What I Built</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Proposal Generation Playbooks</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Canonical 11-section proposal skeleton with per-block variants</li>
                        <li>• Selection rules as overridable defaults (warm clients skip the proof layer)</li>
                        <li>• Placeholder discipline: the AI never invents prices or dates</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Criteria-Driven Case Selection</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 38-case structured library with slide-ready copy rules</li>
                        <li>• Prioritized criteria: pain match → industry match → offering match</li>
                        <li>• Internal vs. public separation so confidential cases never slip into client decks</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Expert Profile Selection</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 43 profiles, auto-filtered against a live status registry</li>
                        <li>• Specificity rule: every card needs a named company, measured outcome or named project</li>
                        <li>• Thin profiles get enriched from sources — never padded with generic filler</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">AI-Readable Knowledge Vault</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• ~50 project folders migrated from Drive/Slides into structured markdown</li>
                        <li>• Validation-agent passes checking migrated information</li>
                        <li>• User + maintainer documentation for onboarding without tacit knowledge</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Real use */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Used on Real Proposals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    In one live engagement, company leadership handed the system meeting notes from a
                    conversation with a major consumer-brand corporation. The system recognized a strong
                    category identity, prioritized industry match over pain match, selected four
                    consumer-facing reference cases and a four-expert anchor slide where every bio passed the
                    specificity rule, and produced a design handoff — the deck was send-ready after three
                    iteration rounds.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Because "produces output" is not the same as "produces the right output", the pilot
                    included designing validation methods: manual expert-style review, second-agent critique,
                    replaying completed historical projects to compare the system's picks against real human
                    decisions, and converting stakeholder feedback into reusable selection rules.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    This was an experimental pilot — a tested foundation in real use, not a finished
                    autonomous product. Client names and details are anonymized throughout for
                    confidentiality.
                  </p>
                </CardContent>
              </Card>

              {/* Technologies Used */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Technologies & Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">AI Tooling</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Claude Code</p>
                        <p>Claude Design</p>
                        <p>Prompt & playbook engineering</p>
                        <p>Validation agents</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Knowledge Base</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Markdown vault on GitHub</p>
                        <p>Structured libraries & tagging</p>
                        <p>Internal/public separation</p>
                        <p>Source-of-truth design</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Integrations</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Google Drive & Slides migration</p>
                        <p>HubSpot CRM context</p>
                        <p>Supabase + n8n registry sync</p>
                        <p>PPTX / PDF delivery</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Methods</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Process reverse-engineering</p>
                        <p>Decision-criteria design</p>
                        <p>Human-in-the-loop QA</p>
                        <p>Workflow documentation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Key Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    The hard part of AI-native workflows isn't making the AI produce output — it's making the
                    output <em>right</em>: relevant, specific, grounded in real sources, and safe to put in
                    front of a client. That's why the system's most valuable pieces are its constraints — the
                    specificity rule, placeholder discipline, internal/public separation, and validation
                    loops — not its generation capability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoventuresAIWorkflow;
