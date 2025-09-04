import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Finland Mental Health Research Dashboard",
      description: "Interactive data visualization platform analyzing mental health trends across Finnish demographics using comprehensive statistical analysis and machine learning models. Features real-time data processing, predictive analytics, and customizable filtering for healthcare professionals and researchers.",
      tags: ["Python", "Pandas", "Matplotlib", "Plotly", "Statistical Analysis", "Machine Learning", "Data Visualization"],
      category: "Data Analytics & Research",
      gradient: "bg-gradient-primary",
      slug: "/projects/finland-mental-health-dashboard"
    },
    {
      title: "Psychology Concepts Learning Platform",
      description: "Educational web application designed to help students master core psychology concepts through interactive learning modules, quizzes, and progress tracking. Incorporates gamification elements and adaptive learning algorithms to enhance retention and engagement.",
      tags: ["React", "Node.js", "MongoDB", "Educational Technology", "UX Design", "Gamification"],
      category: "Educational Technology",
      gradient: "bg-gradient-accent",
      slug: "/projects/psychology-learning-platform"
    },
    {
      title: "Bias & Fallacy Lab",
      description: "Research-focused web platform for identifying and analyzing cognitive biases and logical fallacies in decision-making processes. Features interactive experiments, real-time bias detection tools, and comprehensive reporting for behavioral research applications.",
      tags: ["JavaScript", "D3.js", "Research Methods", "Cognitive Psychology", "Data Analysis", "Interactive Design"],
      category: "Research & Psychology",
      gradient: "bg-moss-green",
      slug: "/projects/bias-fallacy-lab"
    },
    {
      title: "QualiLab",
      description: "Advanced qualitative research analysis tool streamlining the coding, categorization, and interpretation of qualitative data. Includes automated transcription services, collaborative coding features, and advanced text analysis capabilities for researchers and academics.",
      tags: ["Natural Language Processing", "Text Analysis", "Research Tools", "Collaboration Features", "API Integration", "Data Management"],
      category: "Research Technology",
      gradient: "bg-gradient-secondary",
      slug: "/projects/qualilab"
    }
  ];

  return (
    <section id="projects" className="pt-12 pb-20 bg-gradient-to-br from-sage-mist to-ivory">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-charcoal-gray">
          Featured Projects
        </h2>
        <p className="text-lg text-charcoal-gray/80 text-center mb-16 max-w-3xl mx-auto">
          Showcasing innovative solutions that bridge psychology, technology, and research methodology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link to={project.slug} key={index} className="block">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
                <CardHeader className={`${project.gradient} text-white p-6`}>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs font-medium bg-white/20 text-white border-none">
                      {project.category}
                    </Badge>
                    <ExternalLink className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-charcoal-gray/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs bg-sage-mist/30 border-sage-green text-charcoal-gray">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 py-3 text-lg font-semibold"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;