import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Cloud, BarChart3, Users, Target, Briefcase, TrendingUp } from "lucide-react";
const Skills = () => {
  const skillCategories = [{
    title: "Technical Skills",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "MongoDB", "AWS", "Docker", "Git", "CI/CD", "REST APIs"],
    color: "text-primary"
  }, {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    skills: ["Data Analysis", "SQL", "Power BI", "Tableau", "Excel", "Statistical Analysis", "KPI Design", "Data Visualization", "Reporting"],
    color: "text-secondary"
  }, {
    title: "Business Strategy",
    icon: <BarChart3 className="w-6 h-6" />,
    skills: ["Strategic Planning", "Market Analysis", "Process Optimization", "Financial Analysis", "Risk Management", "Stakeholder Management", "Change Management", "Business Intelligence"],
    color: "text-accent"
  }, {
    title: "Leadership & Management",
    icon: <Users className="w-6 h-6" />,
    skills: ["Team Leadership", "Project Management", "Agile/Scrum", "Cross-functional Collaboration", "Mentoring", "Communication", "Problem Solving", "Decision Making"],
    color: "text-burgundy"
  }];
  return <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of technical proficiency and business acumen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center space-y-4">
              <div className={`${category.color} mx-auto w-fit`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
          {[{
          icon: <Target className="w-8 h-8" />,
          value: "5+",
          label: "Years Experience"
        }, {
          icon: <Briefcase className="w-8 h-8" />,
          value: "20+",
          label: "Projects Completed"
        }, {
          icon: <TrendingUp className="w-8 h-8" />,
          value: "15%",
          label: "Avg Cost Reduction"
        }, {
          icon: <Cloud className="w-8 h-8" />,
          value: "3",
          label: "Certifications"
        }].map((metric, index) => <div key={index} className="text-center space-y-2">
              <div className="text-primary mx-auto w-fit">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;