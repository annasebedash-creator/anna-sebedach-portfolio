import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Bot, Zap, MessageSquare, Database, Cloud } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SpotifyAutomation = () => {
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
        <section className="py-16 bg-moss-green">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <button 
                onClick={handleBackToProjects}
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Telegram Bot Assistant
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Intelligent n8n workflow automation that integrates multiple services including Telegram, TickTick, Google Calendar, Notion, and OpenWeatherMap to streamline daily productivity and workflow management
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["n8n", "Telegram Bot API", "Voice Recognition", "Task Management", "Calendar Integration", "Notion API", "Weather API"].map((tag, index) => (
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
                    Built an intelligent n8n automation workflow that serves as a personal Telegram bot assistant. 
                    The system integrates multiple productivity services including TickTick for task management, 
                    Google Calendar for scheduling, Notion for knowledge management, and OpenWeatherMap for weather updates. 
                    Features voice message transcription, automatic task creation, meeting scheduling, and content summarization.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <MessageSquare className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Service Integrations</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Bot className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Automated</div>
                      <div className="text-sm text-muted-foreground">Task Management</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Zap className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Real-time</div>
                      <div className="text-sm text-muted-foreground">Workflow Processing</div>
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
                      <h4 className="font-semibold text-primary">Voice & Communication</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Voice message transcription using OpenAI</li>
                        <li>• Intelligent text processing</li>
                        <li>• Multi-format message handling</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Task Management</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• TickTick integration for task creation</li>
                        <li>• Automatic task tagging (#systemai)</li>
                        <li>• Task listing and status updates</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Calendar & Scheduling</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Google Calendar integration</li>
                        <li>• Meeting availability checking</li>
                        <li>• Smart scheduling assistance</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Knowledge Management</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Notion database integration</li>
                        <li>• Link summarization and storage</li>
                        <li>• Personal file organization</li>
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
                      <h4 className="font-semibold text-primary mb-2">Automation</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>n8n Workflow Engine</p>
                        <p>Webhook Integration</p>
                        <p>Conditional Logic</p>
                        <p>Error Handling</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Communication</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Telegram Bot API</p>
                        <p>Voice Message Processing</p>
                        <p>OpenAI Speech-to-Text</p>
                        <p>Message Formatting</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Productivity APIs</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>TickTick Task Management</p>
                        <p>Google Calendar API</p>
                        <p>Notion Database API</p>
                        <p>OpenWeatherMap API</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Features</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Content Summarization</p>
                        <p>File Upload Management</p>
                        <p>Smart Scheduling</p>
                        <p>Real-time Processing</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card" onClick={() => window.open('https://github.com/annasebedash-creator/My-Telegram-Bot.git', '_blank')}>
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" onClick={() => window.open('/documents/My_Bot_Assistant.json', '_blank')}>
                  <Database className="w-4 h-4 mr-2" />
                  n8n Workflow
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

export default SpotifyAutomation;