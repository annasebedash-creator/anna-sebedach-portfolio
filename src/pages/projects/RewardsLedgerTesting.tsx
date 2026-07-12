import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, Coins, Repeat, CalendarClock, Play, CheckCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RewardsLedgerTesting = () => {
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
                Testing the Money Path
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A rewards-points ledger reference implementation — and the edge-case test suite that tries to break it
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["TypeScript", "Vitest", "Property-Based Testing", "fast-check", "Test Design", "Edge Cases", "GitHub Actions CI"].map((tag, index) => (
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
                    Loyalty and rewards apps — receipt scanning, card-linked points, gift-card redemption —
                    have an unusual QA profile: the bugs that matter are rarely crashes. They're trust
                    failures: points that don't arrive, purchases credited twice, balances expiring when they
                    shouldn't. Each one is leaked money for the business or a one-star review from the user.
                    I studied real rewards products and their public user complaints, distilled the
                    commercially riskiest failure modes, then built a small reference ledger and a test suite
                    that hunts exactly those bugs. At bottom this is data-accuracy testing: the balance a user sees must equal what the event history proves — the same discipline as verifying a dashboard number against its source data. The ledger is ~100 lines — the tests are the point.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Coins className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">25</div>
                      <div className="text-sm text-muted-foreground">Tests, All Business-Rule Named</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Repeat className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">1000s</div>
                      <div className="text-sm text-muted-foreground">Random Sequences per Property Test</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <CalendarClock className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">6</div>
                      <div className="text-sm text-muted-foreground">Failure Modes Under Test</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">The Edge Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Deduplication</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Same purchase via receipt photo AND card feed — credited once</li>
                        <li>• Duplicate receipt submissions rejected</li>
                        <li>• The #1 exploit surface when receipt scanning and card-linked feeds coexist</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Pending vs. Booked</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Card authorization ≠ settlement amount</li>
                        <li>• Settled amount wins; feed replays don't double-credit</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Expiry Boundaries</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Inactivity expiry (180 days in this reference) tested to the millisecond boundary</li>
                        <li>• Activity resets the clock; merchant-side refunds don't count as activity</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Refund Claw-Backs & Rounding</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Claw-back fires exactly once, even after points were spent</li>
                        <li>• floor() not round(): €19.99 is 19 points — rounding leaks money at scale</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Why Property-Based Testing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Twenty-two example-based tests read like a specification — each named for the business rule
                    it protects. But hand-picked examples only catch the bugs you predicted. Three
                    property-based tests (fast-check) generate thousands of random earn/spend/refund
                    histories and assert invariants that must survive <em>all</em> of them: re-reporting a
                    purchase never increases the balance, the balance never exceeds booked earnings, and
                    spending alone never drives it negative. That's how you find the edge case nobody thought
                    to write an example for.
                  </p>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="shadow-card" asChild>
                  <a href="https://stackblitz.com/github/annasebedash-creator/rewards-ledger-testing?file=tests%2Fledger.test.ts" target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" />
                    Run the Tests in Your Browser
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" asChild>
                  <a href="https://github.com/annasebedash-creator/rewards-ledger-testing" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code & Tests
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" asChild>
                  <a href="https://github.com/annasebedash-creator/rewards-ledger-testing/actions" target="_blank" rel="noopener noreferrer">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    CI Runs
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

export default RewardsLedgerTesting;
