import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FileSpreadsheet, MessageSquare, Mic, Bot } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VoiceAIDanceStudio = () => {
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
        <section className="py-16 bg-gradient-accent">
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
                Voice AI Dance Studio Assistant
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A bilingual AI assistant that transforms how dance studios handle customer inquiries and class registrations through natural voice conversations in Finnish and English
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["n8n", "OpenAI", "LangChain", "Whisper", "TTS", "Voice AI", "Conversation Design", "Bilingual NLP"].map((tag, index) => (
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
                    A bilingual Voice AI Assistant prototype built for dance studios to automate customer service and class registrations. 
                    The system handles repetitive inquiries about classes, pricing, schedules, and teachers while enabling direct trial 
                    sign-ups through natural voice conversations. Built with seven modular tools and automatic language detection, 
                    it provides instant answers in Finnish or English, reducing administrative workload while improving customer satisfaction.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Bot className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">7</div>
                      <div className="text-sm text-muted-foreground">Modular AI Tools</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Mic className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">2</div>
                      <div className="text-sm text-muted-foreground">Languages Supported</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <MessageSquare className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Voice</div>
                      <div className="text-sm text-muted-foreground">Natural Conversations</div>
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
                      <h4 className="font-semibold text-primary">Voice Interaction</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Bilingual voice support (Finnish/English)</li>
                        <li>• Automatic language detection</li>
                        <li>• Natural voice-to-voice conversation flow</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Class Management</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Class search and information queries</li>
                        <li>• Direct trial registration with confirmation codes</li>
                        <li>• Email validation and verification</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Analytics & Insights</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Real-time message pattern tracking</li>
                        <li>• Intent usage analytics</li>
                        <li>• User preference monitoring with PII protection</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">AI Processing</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• LangChain agent with specialized tools</li>
                        <li>• Context-aware responses</li>
                        <li>• Graceful error handling and fallbacks</li>
                      </ul>
                    </div>
                  </div>
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
                      <h4 className="font-semibold text-primary mb-2">AI Platform</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>OpenAI GPT</p>
                        <p>LangChain</p>
                        <p>Whisper (Transcription)</p>
                        <p>OpenAI TTS</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Automation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>n8n Workflows</p>
                        <p>Telegram Bot API</p>
                        <p>Google Sheets Integration</p>
                        <p>Real-time Data Sync</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Data & Analytics</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Google Sheets</p>
                        <p>Analytics Tracking</p>
                        <p>PII Protection</p>
                        <p>Usage Metrics</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Concepts</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Conversational Design</p>
                        <p>Bilingual NLP</p>
                        <p>Voice Persona Design</p>
                        <p>Workflow Automation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://docs.google.com/document/d/1wpBpnfO8D_MRbsGmTOjOy3FX-rwnAztQlt0ebMjdqVc/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="shadow-card">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    AI Agent Settings
                  </Button>
                </a>
                <a 
                  href="https://docs.google.com/spreadsheets/d/1I4hw7aUH3SHoM51VobJpg5cZLdXkealqobC7k2qwj8g/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="shadow-card">
                    <FileSpreadsheet className="w-4 h-4 mr-2" />
                    Analytics Data
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VoiceAIDanceStudio;
