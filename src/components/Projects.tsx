import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Analytics Platform",
      description: "Built a comprehensive analytics dashboard for tracking sales performance, customer behavior, and inventory management using React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB", "D3.js", "AWS"],
      category: "Full-Stack Development",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Supply Chain Optimization System",
      description: "Developed an AI-powered system that reduced operational costs by 23% through predictive analytics and automated inventory management.",
      tags: ["Python", "Machine Learning", "PostgreSQL", "Docker"],
      category: "Business Intelligence",
      gradient: "bg-gradient-accent"
    },
    {
      title: "Digital Transformation Strategy",
      description: "Led digital transformation initiative for mid-size company, implementing cloud infrastructure and modernizing legacy systems.",
      tags: ["Strategy", "Cloud Migration", "Change Management", "ROI Analysis"],
      category: "Business Strategy",
      gradient: "bg-moss-green"
    },
    {
      title: "Customer Relationship Platform",
      description: "Created a comprehensive CRM system with automated workflows, improving customer satisfaction scores by 40%.",
      tags: ["React", "Express.js", "MySQL", "API Integration"],
      category: "Full-Stack Development",
      gradient: "bg-burgundy"
    },
    {
      title: "Financial Reporting Dashboard",
      description: "Designed and implemented real-time financial reporting system with interactive visualizations for executive decision-making.",
      tags: ["Power BI", "SQL Server", "Excel VBA", "Data Modeling"],
      category: "Data Analytics",
      gradient: "bg-umber"
    },
    {
      title: "Process Automation Framework",
      description: "Built automation framework that reduced manual processing time by 60% across multiple business units.",
      tags: ["Python", "RPA", "Process Design", "Integration"],
      category: "Business Process",
      gradient: "bg-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20">
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
          {projects.map((project, index) => (
            <Card key={index} className="group shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
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
                  <Button size="sm" variant="ghost" className="p-2 h-8">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 h-8">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="shadow-card">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;