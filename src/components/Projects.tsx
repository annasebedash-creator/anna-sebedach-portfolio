import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const projects = [
    {
      title: "Bias & Fallacy Lab",
      description: "Designed and developed a gamified web platform that teaches logical fallacies and cognitive biases through interactive scenarios, adaptive feedback, and dynamic practice system.",
      tags: ["HTML", "CSS", "JavaScript", "JSON", "Web Audio API"],
      category: "Educational Technology",
      gradient: "bg-moss-green",
      slug: "/projects/digital-transformation"
    },
    {
      title: "Psychology Concepts Learning Platform",
      description: "Developed an interactive learning platform systematizing psychology concepts across multiple domains through three complementary learning modes.",
      tags: ["Cursor AI", "Markdown", "Mermaid.js", "Python", "Psychology"],
      category: "Educational Technology",
      gradient: "bg-gradient-accent",
      slug: "/projects/supply-chain-optimization"
    },
    {
      title: "SQL & Data Management Fusion Project",
      description: "Comprehensive suite of SQL and data management solutions integrating theoretical concepts with practical database design and implementation.",
      tags: ["SQL Server", "ER Modeling", "Normalization", "Transaction Control"],
      category: "Database Engineering",
      gradient: "bg-umber",
      slug: "/projects/financial-reporting"
    },
    {
      title: "Finland Mental Health Research Dashboard",
      description: "Built a research-grade analytical pipeline and interactive dashboard to examine mental health indicators in Finland, integrating data from multiple public health sources.",
      tags: ["Python", "Streamlit", "Pandas", "THL API", "Eurostat"],
      category: "Data Science",
      gradient: "bg-gradient-primary",
      slug: "/projects/ecommerce-analytics"
    },
    {
      title: "Sauna Slot Booking System",
      description: "Full requirements specification for a digital sauna booking system, covering complete requirements engineering process from stakeholder needs to technical documentation.",
      tags: ["UML", "Requirements Engineering", "Risk Analysis", "Software Design"],
      category: "Software Engineering",
      gradient: "bg-secondary",
      slug: "/projects/process-automation"
    },
    {
      title: "Smart Home IoT Ecosystem",
      description: "Developed a comprehensive IoT prototype integrating multiple sensors and actuators with real-time monitoring, automated environmental controls, and predictive analytics for energy optimization.",
      tags: ["Arduino", "Raspberry Pi", "MQTT", "Node.js", "InfluxDB", "Grafana"],
      category: "IoT & Hardware",
      gradient: "bg-gradient-primary",
      slug: "/projects/iot-ecosystem"
    },
    {
      title: "Cross-Functional Team Leadership Initiative",
      description: "Led a 12-person cross-disciplinary team through a complex digital transformation project, implementing agile methodologies and stakeholder management frameworks to deliver results 3 weeks ahead of schedule.",
      tags: ["Agile", "Scrum", "Stakeholder Management", "Team Leadership", "Risk Management"],
      category: "Project Management",
      gradient: "bg-gradient-accent",
      slug: "/projects/team-leadership"
    },
    {
      title: "3D Animation & Motion Graphics Portfolio",
      description: "Created a comprehensive collection of 3D animations, character models, and motion graphics using Blender, featuring photorealistic rendering, particle systems, and dynamic simulations for various media projects.",
      tags: ["Blender", "3D Modeling", "Animation", "Cycles Rendering", "Motion Graphics", "VFX"],
      category: "3D Design & Animation",
      gradient: "bg-burgundy",
      slug: "/projects/blender-portfolio"
    },
    {
      title: "Automated Spotify Playlist Creator",
      description: "Built an intelligent n8n automation workflow that analyzes user listening patterns, mood preferences, and social trends to automatically curate personalized Spotify playlists with scheduling and collaborative features.",
      tags: ["n8n", "Spotify API", "REST APIs", "Automation", "Data Analysis", "Webhooks"],
      category: "Workflow Automation",
      gradient: "bg-moss-green",
      slug: "/projects/spotify-automation"
    },
    {
      title: "Extended Essay in Psychology: Mental Imagery in Social Anxiety Disorder",
      description: "Authored a 4,000-word IB research paper investigating mental imagery's dual role in Social Anxiety Disorder - both as a negative symptom maintenance factor and as a therapeutic tool through imagery rescripting techniques, synthesizing findings from seven peer-reviewed studies.",
      tags: ["Psychology Research", "Academic Writing", "Literature Review", "IB Extended Essay", "Mental Health", "Cognitive Behavioral Therapy"],
      category: "Academic Research",
      gradient: "bg-burgundy",
      slug: "/projects/psychology-extended-essay"
    },
    {
      title: "IBM Watsonx Assistant with Embedded Analytics",
      description: "Implemented an advanced chatbot extension that embeds dynamic charts and tables directly into conversation interfaces, bridging conversational AI with real-time data visualization and serving as both a technical proof-of-concept and educational evaluation platform.",
      tags: ["JavaScript", "Node.js", "IBM Watsonx", "Chart.js", "API Integration", "Conversational AI"],
      category: "AI Development",
      gradient: "bg-gradient-accent",
      slug: "/projects/watsonx-assistant"
    },
    {
      title: "QualiLab – Qualitative Data Analysis Platform",
      description: "Designed and implemented a research-grade web application for qualitative data analysis in psychology with NLP pipelines and collaborative coding.",
      tags: ["Next.js", "React", "Supabase", "NLP", "OpenAI API"],
      category: "Research Technology",
      gradient: "bg-burgundy",
      slug: "/projects/customer-relationship"
    }
  ];

  return (
    <section id="projects" className="pt-12 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that bridge technology and business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
            <Link key={index} to={project.slug} className="group">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-4">
                  <div className={`h-32 rounded-lg ${project.gradient} mb-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="ghost" className="p-2 h-8" onClick={(e) => e.stopPropagation()}>
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 h-8" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="shadow-card"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? "Show Less Projects" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;