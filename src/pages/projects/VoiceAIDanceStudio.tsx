import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileSpreadsheet, MessageSquare, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const VoiceAIDanceStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Voice AI & Conversational Design
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Voice AI Dance Studio Assistant
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A bilingual AI assistant that transforms how dance studios handle customer inquiries and class registrations through natural voice conversations. Handles class inquiries and registrations with voice input/output in Finnish and English.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://docs.google.com/document/d/1wpBpnfO8D_MRbsGmTOjOy3FX-rwnAztQlt0ebMjdqVc/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  <MessageSquare className="w-5 h-5" />
                  View AI Agent Settings
                </Button>
              </a>
              <a 
                href="https://docs.google.com/spreadsheets/d/1I4hw7aUH3SHoM51VobJpg5cZLdXkealqobC7k2qwj8g/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  View Analytics Data
                </Button>
              </a>
            </div>
          </div>

          {/* Problem & Solution */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The Problem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Dance studios receive repetitive questions about classes, pricing, teachers, and schedules. Staff spend hours on phone calls and manual registrations.
                  </p>
                  <p className="text-muted-foreground">
                    Customers want instant answers, especially in their preferred language (Finnish or English).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The Solution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    A bilingual Voice AI Assistant with automatic language detection. Manages class inquiries, teacher information, pricing, and trial sign-ups through voice or text.
                  </p>
                  <p className="text-muted-foreground">
                    Built with seven modular tools for different inquiry types, plus real-time analytics tracking message patterns and intent usage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Voice Persona */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Voice Persona</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The assistant's personality mirrors the energy of a modern dance studio: friendly, encouraging, and clear. Its bilingual voice design adapts subtly to each language.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="font-semibold text-primary mb-2">Finnish</p>
                    <p className="text-muted-foreground italic">
                      "Hei! Haluaisitko kokeilla ensimmäistä tuntia ilmaiseksi?"
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Warm and polite tone
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="font-semibold text-primary mb-2">English</p>
                    <p className="text-muted-foreground italic">
                      "Hi there! Would you like to try your first class for free?"
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Casual and upbeat tone
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">How It Works</h2>
            <div className="bg-muted/50 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Voice Input</h3>
                    <p className="text-muted-foreground">User sends voice message → Whisper transcribes to text</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">AI Processing</h3>
                    <p className="text-muted-foreground">LangChain agent with specialized tools processes the request</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Voice Output</h3>
                    <p className="text-muted-foreground">OpenAI TTS converts response back to voice</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Data Storage</h3>
                    <p className="text-muted-foreground">Google Sheets for analytics and registrations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Mic className="w-6 h-6 text-primary" />
                    <CardTitle>Bilingual Voice Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatic language detection for Finnish and English with natural voice-to-voice conversation flow
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <CardTitle>Class Search & Registration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Direct class registration with confirmation codes and email validation
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <FileSpreadsheet className="w-6 h-6 text-primary" />
                    <CardTitle>Real-time Analytics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track message patterns, intent usage, and user preferences with PII protection
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <ExternalLink className="w-6 h-6 text-primary" />
                    <CardTitle>Error Handling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fallback responses and graceful error handling for smooth user experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Stack */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Technical Stack</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Development & Integration Tools</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• n8n for workflow orchestration</li>
                      <li>• OpenAI for AI processing and TTS</li>
                      <li>• Google Sheets for data storage</li>
                      <li>• Telegram Bot API for user interface</li>
                      <li>• LangChain for agent processing</li>
                      <li>• Whisper for voice transcription</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Business Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Business Impact</h2>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Results & Benefits</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Time Savings:</strong> Automates repetitive inquiries and registrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Better UX:</strong> Instant voice responses in user's language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Data Insights:</strong> Track popular classes, peak usage times, user preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Scalability:</strong> Can handle multiple users simultaneously</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Project Highlights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Project Highlights</h2>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-primary">Key Achievement:</strong> Developed a specialized solution tailored specifically for dance studios that addresses their unique customer service challenges.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The system reduces administrative workload while improving customer satisfaction through immediate, accurate responses in multiple languages. This prototype could potentially be developed into a product for dance studios globally with additional refinement and real-world testing.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Future Enhancements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Next Steps & Future Enhancements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Adaptive tone based on user familiarity</li>
                    <li>• Personalized class recommendations</li>
                    <li>• Payment processing integration</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Additional language support</li>
                    <li>• Advanced scheduling with calendar</li>
                    <li>• Voice authentication for returning users</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Technologies & Concepts</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>n8n</Badge>
              <Badge>OpenAI</Badge>
              <Badge>LangChain</Badge>
              <Badge>Whisper</Badge>
              <Badge>TTS</Badge>
              <Badge>Google Sheets</Badge>
              <Badge>Telegram Bot API</Badge>
              <Badge>Voice AI</Badge>
              <Badge>Conversation Design</Badge>
              <Badge>Bilingual NLP</Badge>
              <Badge>Analytics</Badge>
              <Badge>Workflow Automation</Badge>
            </div>
          </section>

          {/* Back to Projects */}
          <div className="text-center pt-8">
            <Link to="/">
              <Button variant="outline" size="lg">
                ← Back to All Projects
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VoiceAIDanceStudio;
