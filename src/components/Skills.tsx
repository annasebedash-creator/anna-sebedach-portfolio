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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 inline-block whitespace-nowrap">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto whitespace-nowrap">
            A comprehensive blend of technical proficiency and business acumen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={category.color}>
                    {category.icon}
                  </div>
                  <span className="text-xl font-bold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-3 hover:text-primary-foreground transition-colors duration-200 bg-zinc-600">
                      {skill}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>)}
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