import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Cloud, BarChart3, Users, Target, Briefcase, TrendingUp, GraduationCap, Globe } from "lucide-react";
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
  return <section id="skills" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-midnight-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-burgundy/8 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-moss-green/12 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-24 w-28 h-28 bg-midnight-blue/8 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/4 w-16 h-16 bg-burgundy/6 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-80 right-1/3 w-36 h-36 bg-moss-green/8 rounded-full animate-pulse delay-200"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 inline-block whitespace-nowrap">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise combined with strategic thinking
          </p>
        </div>

        {/* Background & Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-card bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-lg">
                <div className="text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span>Background & Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-base">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="font-medium text-lg">Bachelor's in Applied Sciences</span>
                    </div>
                    <p className="text-muted-foreground ml-7">IT & Business Administration, Digital Services - Haaga-Helia</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="font-medium text-lg">University Psychology Studies</span>
                    </div>
                    <p className="text-muted-foreground ml-7">5+ Bachelor's level courses - University of Helsinki</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5 text-secondary" />
                      <span className="font-medium text-lg">IB Diploma</span>
                    </div>
                    <p className="text-muted-foreground ml-7">International Baccalaureate - Secondary Education</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="font-medium text-lg">Languages</span>
                  </div>
                  <div className="ml-7 space-y-1">
                    <Badge variant="secondary" className="mr-2 text-sm">English (Fluent)</Badge>
                    <Badge variant="secondary" className="mr-2 text-sm">Finnish (Native)</Badge>
                    <Badge variant="secondary" className="text-sm">Russian (Native)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills & Expertise */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-card bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-lg">
                <div className="text-primary">
                  <Code2 className="w-5 h-5" />
                </div>
                <span>Skills & Expertise</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 text-base">
                {skillCategories.map((category, index) => <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className={category.color}>
                        {category.icon}
                      </div>
                      <span className="font-medium text-lg">{category.title}</span>
                    </div>
                    <div className="ml-8 flex flex-wrap gap-1.5">
                      {category.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-3">
                          {skill}
                        </Badge>)}
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
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
          icon: <BarChart3 className="w-8 h-8" />,
          value: "100+",
          label: "Data Points Analyzed"
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