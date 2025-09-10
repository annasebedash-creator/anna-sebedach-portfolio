import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Music, Zap } from "lucide-react";
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
                Automated Spotify Playlist Creator
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Intelligent n8n automation workflow that analyzes user listening patterns, mood preferences, and social trends to automatically curate personalized Spotify playlists
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["n8n", "Spotify API", "REST APIs", "Automation", "Data Analysis", "Webhooks"].map((tag, index) => (
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
                    Built an intelligent n8n automation workflow that analyzes user listening patterns, mood preferences, 
                    and social trends to automatically curate personalized Spotify playlists. The system integrates multiple 
                    APIs, implements machine learning algorithms for music recommendation, and provides scheduling and 
                    collaborative features for enhanced user engagement.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Music className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">1000+</div>
                      <div className="text-sm text-muted-foreground">Songs Analyzed</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Zap className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Automated</div>
                      <div className="text-sm text-muted-foreground">Playlist Creation</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Weekly</div>
                      <div className="text-sm text-muted-foreground">Updates</div>
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
                      <h4 className="font-semibold text-primary">Intelligent Analysis</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• User listening pattern analysis</li>
                        <li>• Mood and genre preference detection</li>
                        <li>• Social trend integration</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">API Integration</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Spotify Web API integration</li>
                        <li>• Last.fm scrobbling data</li>
                        <li>• Music recommendation services</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Automation Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Scheduled playlist updates</li>
                        <li>• Webhook-triggered actions</li>
                        <li>• Multi-user collaboration</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Data Processing</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Real-time audio feature analysis</li>
                        <li>• Machine learning recommendations</li>
                        <li>• Playlist optimization algorithms</li>
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
                        <p>Cron Scheduling</p>
                        <p>Error Handling</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">APIs</h4>
                      <div>
                        <p>Spotify Web API</p>
                        <p>Last.fm API</p>
                        <p>REST Endpoints</p>
                        <p>OAuth Authentication</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Data Analysis</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Audio Feature Analysis</p>
                        <p>Statistical Processing</p>
                        <p>Preference Learning</p>
                        <p>Trend Detection</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Infrastructure</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Docker Containers</p>
                        <p>Database Storage</p>
                        <p>Queue Management</p>
                        <p>Monitoring & Logging</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Actions */}
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="shadow-card">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button size="lg" variant="outline" className="shadow-card">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
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