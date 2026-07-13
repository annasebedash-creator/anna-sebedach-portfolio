import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Database, Github, ExternalLink, ShieldCheck, Scale } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FinlexMcp = () => {
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
                Finlex MCP Server
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                An MCP server that gives AI assistants direct, citable access to Finnish legislation —
                Finlex open data acquired, structured into SQLite, and served over the Model Context
                Protocol with a published accuracy verification
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["MCP", "TypeScript", "SQLite", "Open Data", "Akoma Ntoso XML", "Docker", "GitHub Actions CI", "Claude Desktop", "Legal Tech"].map((tag, index) => (
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
                    Ask an AI assistant what Finnish consumer protection law says about cancelling an
                    online purchase, and it answers from memory — often inventing section numbers or
                    citing amended law. This project fixes that for one slice of Finnish legislation:
                    a Model Context Protocol server that downloads the newest consolidated statute text
                    from Finlex open data, structures the Akoma Ntoso XML into a SQLite database
                    (statute → chapter → section, with full-text search), and exposes three retrieval
                    tools to any MCP host. Every response carries the formal citation, the amendment
                    label, the Finlex consolidation date and the data-fetch date — and confirmed
                    amendments that are not yet in force are explicitly flagged instead of silently
                    served as current law.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <ShieldCheck className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">15/15</div>
                      <div className="text-sm text-muted-foreground">Verification Checks vs. Live finlex.fi</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Database className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">406</div>
                      <div className="text-sm text-muted-foreground">Statute Sections Parsed & Indexed</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Scale className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">0 €</div>
                      <div className="text-sm text-muted-foreground">Runtime API Costs — Pure Local Retrieval</div>
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
                      <span><strong className="text-primary">Acquisition.</strong> The fetch pipeline pages through the Finlex open data REST API, resolves the newest consolidated (ajantasainen) version of each configured statute, and stores the raw XML with version and consolidation-date metadata. Polite pacing and a mandatory User-Agent, as the API requires.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="font-bold text-primary flex-shrink-0">2.</span>
                      <span><strong className="text-primary">Structuring.</strong> The Akoma Ntoso (OASIS LegalDocML) XML is parsed into SQLite: statute → chapter → section with normalized identifiers, amendment labels, and an FTS5 full-text index with Finnish-aware stem matching.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="font-bold text-primary flex-shrink-0">3.</span>
                      <span><strong className="text-primary">Serving over MCP.</strong> Three tools via the official TypeScript SDK — search_statutes, get_section, list_statute_structure — connectable to Claude Desktop (or any MCP host) with a copy-paste config.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="font-bold text-primary flex-shrink-0">4.</span>
                      <span><strong className="text-primary">Verification.</strong> 15 scripted lookups run through the real MCP interface and are cross-checked against the live finlex.fi rendering — an independent pipeline — with the results published as a generated table and enforced as a CI gate.</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Accuracy discipline */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Built to a Law-Firm Standard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Citations Everywhere</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Formal reference in every response (statute, chapter, section, heading)</li>
                        <li>• Amendment label included — "sellaisena kuin se on laissa 1211/2013"</li>
                        <li>• Consolidation date + fetch date surfaced, never hidden</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Pending Amendments Handled</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Finlex consolidations include confirmed future changes</li>
                        <li>• The wording in force today is served as primary</li>
                        <li>• Upcoming wording flagged "EI VIELÄ VOIMASSA" with its entry date</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Scope Honesty</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• v1 covers exactly one statute: Kuluttajansuojalaki (38/1978)</li>
                        <li>• Tool descriptions state the coverage as exhaustive</li>
                        <li>• Out-of-scope requests are refused with a pointer to finlex.fi — never guessed</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">No Hand-Written Claims</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• The verification table is generated by the script, never edited by hand</li>
                        <li>• CI fails if accuracy drops below 15/15</li>
                        <li>• Retrieval only, clearly labeled "not legal advice"</li>
                      </ul>
                    </div>
                  </div>
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
                      <h4 className="font-semibold text-primary mb-2">Data Pipeline</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Finlex open data REST API</p>
                        <p>Akoma Ntoso XML parsing</p>
                        <p>SQLite + FTS5 search</p>
                        <p>CC BY 4.0 source attribution</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">MCP Server</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Official TypeScript SDK</p>
                        <p>Three retrieval tools</p>
                        <p>stdio transport</p>
                        <p>Claude Desktop integration</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Quality</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Scripted verification vs. finlex.fi</p>
                        <p>CI accuracy gate</p>
                        <p>Container smoke test</p>
                        <p>Honest failure behavior</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Packaging</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Docker multi-stage build</p>
                        <p>GitHub Actions CI</p>
                        <p>Pinned dependencies</p>
                        <p>Zero runtime API costs</p>
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
                    Legal text is the perfect domain for practicing AI accuracy discipline, because law has
                    ground truth: a retrieval claim is either the statute's wording or it isn't. The most
                    interesting engineering wasn't the MCP plumbing — it was discovering that Finlex
                    consolidations embed confirmed-but-not-yet-in-force amendments as parallel section
                    versions, and deciding that a trustworthy server must serve today's law as primary while
                    disclosing tomorrow's, exactly the way finlex.fi itself does.
                  </p>
                </CardContent>
              </Card>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/finlex-mcp" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/finlex-mcp/blob/main/VERIFICATION.md" target="_blank" rel="noopener noreferrer">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Verification Table (15/15)
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/finlex-mcp#connect-to-claude-desktop" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    How to Connect
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

export default FinlexMcp;
