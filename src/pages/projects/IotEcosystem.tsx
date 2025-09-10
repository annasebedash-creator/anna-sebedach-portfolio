import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IotEcosystem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = () => {
    navigate("/#projects");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
                Smart Home IoT Ecosystem
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Comprehensive IoT prototype integrating multiple sensors and actuators with real-time monitoring, automated environmental controls, and predictive analytics for energy optimization
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Arduino", "Raspberry Pi", "MQTT", "Node.js", "InfluxDB", "Grafana"].map((tag, index) => (
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
                    Developed a comprehensive IoT prototype integrating multiple sensors (temperature, humidity, light, motion) 
                    and actuators (LED strips, motors, relays) with real-time monitoring, automated environmental controls, 
                    and predictive analytics for energy optimization. The system features MQTT communication, time-series data 
                    storage, interactive dashboards, and mobile-responsive monitoring interfaces.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Zap className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">8+</div>
                      <div className="text-sm text-muted-foreground">Connected Sensors</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Shield className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Real-time</div>
                      <div className="text-sm text-muted-foreground">Data Processing</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoring</div>
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
                      <h4 className="font-semibold text-primary">Sensor Integration</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Temperature & humidity monitoring</li>
                        <li>• Light and motion detection</li>
                        <li>• Air quality sensing</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Automation & Control</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Automated lighting control</li>
                        <li>• HVAC optimization</li>
                        <li>• Energy usage tracking</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Data Analytics</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Real-time dashboards</li>
                        <li>• Historical trend analysis</li>
                        <li>• Predictive energy optimization</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Communication</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• MQTT messaging protocol</li>
                        <li>• RESTful API endpoints</li>
                        <li>• Mobile-responsive interface</li>
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
                      <h4 className="font-semibold text-primary mb-2">Hardware</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Arduino Uno/ESP32</p>
                        <p>Raspberry Pi 4</p>
                        <p>Various Sensors</p>
                        <p>Actuators & Relays</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Backend</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Node.js</p>
                        <p>MQTT Broker</p>
                        <p>Express.js</p>
                        <p>Socket.io</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Database</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>InfluxDB</p>
                        <p>Time Series Data</p>
                        <p>Redis (Caching)</p>
                        <p>Data Retention Policies</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Visualization</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Grafana Dashboards</p>
                        <p>Real-time Charts</p>
                        <p>React Frontend</p>
                        <p>Mobile Interface</p>
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

export default IotEcosystem;