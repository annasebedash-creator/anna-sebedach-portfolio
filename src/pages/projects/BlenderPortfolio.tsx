import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Palette, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlenderPortfolio = () => {
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
        <section className="py-16 bg-burgundy">
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
                3D Animation & Motion Graphics Portfolio
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Comprehensive collection of 3D animations, character models, and motion graphics using Blender, featuring photorealistic rendering, particle systems, and dynamic simulations
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Blender", "3D Modeling", "Animation", "Cycles Rendering", "Motion Graphics", "VFX"].map((tag, index) => (
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
                    Created a comprehensive collection of 3D animations, character models, and motion graphics using Blender. 
                    This portfolio showcases advanced 3D modeling techniques, photorealistic rendering with Cycles, complex 
                    particle systems, dynamic simulations, and professional-grade motion graphics for various media projects 
                    including commercial visualizations, artistic expressions, and technical demonstrations.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Palette className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">3D Models</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Play className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">8+</div>
                      <div className="text-sm text-muted-foreground">Animations</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-primary mx-auto w-fit">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-muted-foreground">Render Hours</div>
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
                      <h4 className="font-semibold text-primary">3D Modeling & Sculpting</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Photorealistic product visualizations</li>
                        <li>• Character modeling and rigging</li>
                        <li>• Architectural and environment design</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Animation & Rigging</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Character animation workflows</li>
                        <li>• Mechanical and technical animations</li>
                        <li>• Camera movements and cinematography</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Rendering & Materials</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Cycles photorealistic rendering</li>
                        <li>• Advanced shader and material design</li>
                        <li>• HDRI lighting and environment setup</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">VFX & Simulations</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Particle systems and dynamics</li>
                        <li>• Fluid and smoke simulations</li>
                        <li>• Post-processing and compositing</li>
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
                      <h4 className="font-semibold text-primary mb-2">3D Software</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Blender 4.0+</p>
                        <p>Cycles Rendering</p>
                        <p>Geometry Nodes</p>
                        <p>Animation System</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Modeling</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Subdivision Modeling</p>
                        <p>Sculpting Tools</p>
                        <p>Retopology</p>
                        <p>UV Mapping</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Materials & Texturing</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Shader Editor</p>
                        <p>Procedural Textures</p>
                        <p>PBR Materials</p>
                        <p>Texture Painting</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Post-Production</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Compositor</p>
                        <p>Video Sequence Editor</p>
                        <p>Color Grading</p>
                        <p>Motion Tracking</p>
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

export default BlenderPortfolio;