import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Business Analyst",
      company: "TechCorp Solutions",
      location: "New York, NY",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead digital transformation initiatives and data-driven decision making across multiple business units. Manage cross-functional teams and drive process optimization projects.",
      achievements: [
        "Reduced operational costs by 25% through process automation",
        "Led implementation of new CRM system for 500+ users",
        "Developed KPI dashboards improving decision-making speed by 40%"
      ],
      skills: ["Strategic Planning", "Data Analysis", "Project Management", "Stakeholder Management"]
    },
    {
      title: "Full-Stack Developer",
      company: "Innovation Labs",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed scalable web applications and maintained cloud infrastructure. Collaborated with product teams to deliver high-quality software solutions.",
      achievements: [
        "Built 5+ production applications serving 10k+ users",
        "Improved application performance by 60%",
        "Mentored 3 junior developers"
      ],
      skills: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
    },
    {
      title: "IT Consultant",
      company: "FreelanceWork",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: "Provided IT consulting services to small and medium businesses, focusing on digital transformation and system integration.",
      achievements: [
        "Successfully completed 15+ projects",
        "Achieved 98% client satisfaction rate",
        "Specialized in cloud migration and data security"
      ],
      skills: ["System Integration", "Cloud Migration", "Data Security", "Client Relations"]
    },
    {
      title: "Junior Business Analyst",
      company: "DataFlow Inc",
      location: "Boston, MA",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Analyzed business processes and supported data-driven initiatives. Created detailed reports and recommendations for management.",
      achievements: [
        "Streamlined reporting processes saving 20 hours/week",
        "Created comprehensive business requirements documentation",
        "Supported successful ERP implementation"
      ],
      skills: ["Business Process Analysis", "Requirements Gathering", "SQL", "Excel"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering results across IT and business domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end space-y-2">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <Badge variant={exp.type === 'Full-time' ? 'default' : 'secondary'}>
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;