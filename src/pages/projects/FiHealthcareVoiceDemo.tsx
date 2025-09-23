import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, BarChart3, Mic, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const FiHealthcareVoiceDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/?expanded=true&scrollTo=/projects/fi-healthcare-voice-demo" className="text-primary hover:text-secondary transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Voice AI & Conversation Design</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              FI Healthcare Receptionist
              <span className="block text-secondary">Voice Agent Demo</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enterprise-grade conversation design showcase featuring Finnish healthcare receptionist simulation 
              with streaming, barge-in, real-time analytics, and bilingual support with sub-200ms perceived responsiveness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="shadow-elegant">
                <a href="https://annasebedash-creator.github.io/FI-Healthcare-Voice-Demo/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-card">
                <a href="https://github.com/annasebedash-creator/FI-Healthcare-Voice-Demo" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Enterprise Voice AI Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Real-time Interaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Sub-200ms perceived responsiveness with streaming simulation and &lt;120ms barge-in response time for natural conversations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Healthcare Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Medical advice guardrails, emergency triage protocols, and privacy-compliant PII masking for sensitive data.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Live Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Real-time metrics tracking containment rates, turn efficiency, and perceived latency with CSV export functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Bilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Native Finnish and English operation with idiomatic translations and WCAG accessibility compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Technical Implementation</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Conversation Design Excellence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Finnish Healthcare Workflows</p>
                    <p className="text-sm text-muted-foreground">
                      Proper slot-filling sequences for appointment management with validation and recovery flows.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Turn Economy Optimization</p>
                    <p className="text-sm text-muted-foreground">
                      Average 3.2 turns for successful booking with intent confidence scoring and disambiguation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Error Handling & Recovery</p>
                    <p className="text-sm text-muted-foreground">
                      Graceful handling of interruptions, low confidence scenarios, and timeout recovery.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Enterprise Architecture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Event-Driven Design</p>
                    <p className="text-sm text-muted-foreground">
                      Pub-sub architecture with adapter pattern for future audio service integration.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Template-Driven Responses</p>
                    <p className="text-sm text-muted-foreground">
                      Easy localization and vertical adaptation with stateless conversation engine.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Production Ready</p>
                    <p className="text-sm text-muted-foreground">
                      No build step required, CORS-friendly, CDN-optimized with mobile responsiveness.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Key Metrics & Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">&lt;200ms</div>
                    <p className="text-sm text-muted-foreground">Perceived Latency</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">95%+</div>
                    <p className="text-sm text-muted-foreground">Containment Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">3.2</div>
                    <p className="text-sm text-muted-foreground">Avg Turns/Booking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Voice AI",
                "Conversation Design", 
                "Finnish",
                "Healthcare",
                "Streaming",
                "Analytics",
                "Bilingual",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Web Speech API",
                "Real-time Metrics",
                "PII Masking",
                "WCAG Accessibility"
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Explore the Demo</h2>
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full shadow-elegant">
                <a href="https://annasebedash-creator.github.io/FI-Healthcare-Voice-Demo/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Try Live Demo - FI Healthcare Voice Agent
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full shadow-card">
                <a href="https://github.com/annasebedash-creator/FI-Healthcare-Voice-Demo" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Source Code & Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiHealthcareVoiceDemo;