import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Factory, Radar, BarChart3, Target } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IndustryReadinessIndex = () => {
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

  const tags = ["Power BI", "DAX", "SQL", "Star Schema", "Python", "Market Intelligence",
    "Open Data (StatFin)", "OpenAI API", "Data Modeling"];

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
                Finnish Industry 5G &amp; AI Readiness Index
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A consulting-style market-intelligence dashboard that answers the question a telecom
                operator's enterprise arm actually cares about: which Finnish industry sectors should be
                prioritised for industrial 5G and AI-powered automation — and why
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, index) => (
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

              {/* Overview + matrix */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    This is a miniature of a real strategy-analyst deliverable: take messy public data on
                    Finnish industry, turn it into a defensible answer about where to place commercial bets.
                    Every Finnish enterprise sector is scored on two composites — <strong>market
                    attractiveness</strong> (turnover, personnel, number of enterprises) and <strong>AI &amp;
                    5G readiness</strong> (adoption of AI, autonomous robots and vehicles, IoT sensors, RPA,
                    machine learning, cloud and high-speed connectivity) — then placed on a 2×2 priority
                    matrix. An end-to-end pipeline does the work: Python pulls the data from Statistics
                    Finland's open API, builds a SQL star schema, computes the scores, feeds a Power BI report,
                    and an LLM writes the executive brief.
                  </p>

                  <figure className="rounded-lg border border-border bg-white p-3">
                    <img
                      src="/priority-matrix.svg"
                      alt="Priority matrix: Finnish industry sectors plotted by AI & 5G readiness against market attractiveness, with Manufacturing & Energy in the lead quadrant"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                      The output in one picture — every sector scored and placed. Data: Statistics Finland
                      (tables 14yc &amp; 13vy). Amber = asset-heavy sectors most addressable by private 5G.
                    </figcaption>
                  </figure>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit"><Factory className="w-8 h-8" /></div>
                      <div className="text-2xl font-bold text-primary">9 sectors</div>
                      <div className="text-sm text-muted-foreground">Scored on 10 real indicators each</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit"><BarChart3 className="w-8 h-8" /></div>
                      <div className="text-2xl font-bold text-primary">2 composites</div>
                      <div className="text-sm text-muted-foreground">Attractiveness × readiness → 2×2 matrix</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit"><Radar className="w-8 h-8" /></div>
                      <div className="text-2xl font-bold text-primary">Live open data</div>
                      <div className="text-sm text-muted-foreground">Statistics Finland API, no scraping</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* The recommendation */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">The Recommendation It Produces</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The point of market intelligence is a decision, not a chart. The model lands on one:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <strong className="text-primary">Lead with Manufacturing &amp; Energy.</strong> It is
                      both the largest economic prize and the sector with the highest current industrial-AI
                      adoption — the obvious first market for private 5G and automation.
                    </li>
                    <li>
                      <strong className="text-primary">Treat Transport &amp; Storage and Construction as
                      develop-and-enable plays.</strong> These asset-heavy sectors have strong 5G use-case fit
                      (connected sites, autonomous machines) but low current digital maturity — an opportunity
                      to enable, not a reason to walk away. Reading current adoption as latent demand is the
                      analytical nuance a naïve ranking misses.
                    </li>
                    <li>
                      <strong className="text-primary">Information &amp; Communication is a quick win, not the
                      prize.</strong> Very high readiness but a comparatively small footprint on the size
                      metrics — useful early reference customers rather than the strategic centre of gravity.
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    An LLM turns these scores into a ~200-word executive brief for senior leadership — the
                    "dashboard that explains itself." The headline recommendation, the priority bullets and
                    the watch-out are all generated from the numbers, then version-controlled in the repo.
                  </p>
                </CardContent>
              </Card>

              {/* The ranked shortlist */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">The Ranked Shortlist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The model's actual output — every Finnish sector scored and ranked. Composites are 0–100;
                    the priority quadrant comes from splitting each axis at its cross-sector average.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border text-left text-muted-foreground">
                          <th className="py-2 pr-3 font-semibold">#</th>
                          <th className="py-2 pr-3 font-semibold">Sector</th>
                          <th className="py-2 pr-3 font-semibold text-right">Attractiveness</th>
                          <th className="py-2 pr-3 font-semibold text-right">Readiness</th>
                          <th className="py-2 font-semibold">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { r: 1, s: "Manufacturing & Energy", ind: true, a: 85.9, d: 45.5, p: "Lead" },
                          { r: 2, s: "Information & Communication", ind: false, a: 12.8, d: 94.7, p: "Selective" },
                          { r: 3, s: "Professional & Technical", ind: false, a: 29.5, d: 68.7, p: "Selective" },
                          { r: 4, s: "Real Estate & Admin", ind: false, a: 36.4, d: 38.9, p: "Lead" },
                          { r: 5, s: "Wholesale & Vehicle Trade", ind: false, a: 34.6, d: 40.4, p: "Lead" },
                          { r: 6, s: "Construction", ind: true, a: 33.4, d: 14.9, p: "Develop" },
                          { r: 7, s: "Retail", ind: false, a: 18.9, d: 18.9, p: "Monitor" },
                          { r: 8, s: "Transport & Storage", ind: true, a: 14.7, d: 11.1, p: "Monitor" },
                          { r: 9, s: "Accommodation & Food", ind: false, a: 0.0, d: 9.4, p: "Monitor" },
                        ].map((row) => {
                          const badge: Record<string, string> = {
                            Lead: "bg-green-100 text-green-800",
                            Selective: "bg-blue-100 text-blue-800",
                            Develop: "bg-amber-100 text-amber-800",
                            Monitor: "bg-gray-100 text-gray-600",
                          };
                          return (
                            <tr key={row.r} className="border-b border-border/60">
                              <td className="py-2 pr-3 text-muted-foreground">{row.r}</td>
                              <td className="py-2 pr-3 font-medium text-primary whitespace-nowrap">
                                {row.s}
                                {row.ind && (
                                  <span className="ml-2 align-middle text-[10px] uppercase tracking-wide text-amber-600">
                                    ● industrial
                                  </span>
                                )}
                              </td>
                              <td className="py-2 pr-3 text-right tabular-nums">{row.a.toFixed(1)}</td>
                              <td className="py-2 pr-3 text-right tabular-nums">{row.d.toFixed(1)}</td>
                              <td className="py-2">
                                <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${badge[row.p]}`}>
                                  {row.p}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Amber ● marks asset-heavy sectors most addressable by private 5G. Data: Statistics Finland
                    (tables 14yc &amp; 13vy); scoring weights are a documented analyst framework.
                  </p>
                </CardContent>
              </Card>

              {/* How it works */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Real data, via API</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Statistics Finland StatFin open tables (json-stat2), no key, no scraping</li>
                        <li>• 14yc — AI, robotics, IoT and cloud adoption by industry</li>
                        <li>• 13vy — turnover, personnel and enterprise counts by industry</li>
                        <li>• Latest non-null year per metric; data vintage stated explicitly</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Dimensional model</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Python + SQLite star schema: fact_metric + dim_sector + dim_metric</li>
                        <li>• Economic size summed from TOL classes up to the survey's industry groups</li>
                        <li>• Exported as CSV for Power BI Service (Mac-friendly, browser-based)</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Transparent scoring</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Min-max normalisation per metric across the nine sectors (0–100)</li>
                        <li>• Documented weighted composites; weights live in config, made to be argued with</li>
                        <li>• Quadrant split at each composite's cross-sector average</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Power BI + DAX</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 4 pages: recommendation matrix, readiness drivers, sector profile, exec brief</li>
                        <li>• DAX reproduces the composite in-model, proving the score is re-runnable</li>
                        <li>• Priority quadrant and rank measures for the ranked shortlist</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Method / honesty */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Honest by Construction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A readiness index is part data, part judgement — exactly like the real consulting work it
                    imitates. So the judgement is made explicit: the scoring weights are documented in the
                    repository and framed as an analyst's illustrative framework, not an official figure. The
                    economic data and the adoption data are genuine Statistics Finland open data (CC BY 4.0),
                    the data vintage is stated, and the whole pipeline re-runs from scratch with four commands.
                  </p>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="outline" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/finland-industry-5g-readiness" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card max-w-full whitespace-normal h-auto" asChild>
                  <a href="https://github.com/annasebedash-creator/finland-industry-5g-readiness/blob/main/powerbi/MODEL.md" target="_blank" rel="noopener noreferrer">
                    <Target className="w-4 h-4 mr-2" />
                    See the Model &amp; DAX
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

export default IndustryReadinessIndex;
