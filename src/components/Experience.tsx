import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Dance Instructor & Content Creator",
      company: "Multiple Organizations (City of Helsinki, Girlhood Studio, Sport Club Vantaa)",
      location: "Helsinki, Finland",
      period: "2022 - Present",
      type: "Freelance",
      description: "Led brand strategy and multi-channel content creation to expand digital presence across multiple dance organizations. Managed end-to-end production of marketing materials, social media, and videos while teaching dance classes.",
      achievements: [
        "Led brand strategy and multi-channel content creation to expand digital presence",
        "Managed end-to-end production of marketing materials, social media, and videos",
        "Drove audience engagement and community growth via targeted campaigns",
        "Successfully taught and choreographed dance classes across multiple venues"
      ],
      skills: ["Content Creation", "Brand Strategy", "Video Production", "Social Media Marketing", "Dance Instruction", "Community Building"]
    },
    {
      title: "Youth Work Leader (Content, Media & Teaching)",
      company: "City of Helsinki",
      location: "Helsinki, Finland",
      period: "Summer 2022",
      type: "Seasonal",
      description: "Produced digital content, managed youth events, and led social media marketing for community initiatives. Established new groups, taught classes, and increased engagement through strategic outreach.",
      achievements: [
        "Produced digital content and managed youth events effectively",
        "Led social media marketing for community initiatives",
        "Established new groups and taught classes to diverse age groups",
        "Increased engagement through strategic outreach and community building"
      ],
      skills: ["Digital Content Production", "Event Management", "Social Media Marketing", "Youth Work", "Community Outreach"]
    },
    {
      title: "Communications Office Intern",
      company: "City of Helsinki",
      location: "Helsinki, Finland",
      period: "Summer 2021",
      type: "Internship",
      description: "Created digital media, coordinated outreach, and produced promotional articles. Supported key initiatives through video production and multimedia communication across various city projects.",
      achievements: [
        "Created digital media and coordinated effective outreach campaigns",
        "Produced promotional articles and multimedia content",
        "Supported key city initiatives through comprehensive video production",
        "Contributed to multimedia communication strategies across departments"
      ],
      skills: ["Digital Media Creation", "Video Production", "Article Writing", "Communications", "Multimedia Production"]
    },
    {
      title: "Volunteer",
      company: "SLUSH",
      location: "Helsinki, Finland",
      period: "Summer 2021",
      type: "Volunteer",
      description: "Supported operations and guest experience at one of Europe's top tech/startup events. Contributed to various aspects of event organization and attendee experience in the Nordic startup ecosystem.",
      achievements: [
        "Supported operations and guest experience at major European tech event",
        "Contributed to event organization and logistics management",
        "Engaged with international startup community and industry professionals",
        "Helped create memorable experiences for thousands of attendees"
      ],
      skills: ["Event Operations", "Guest Experience", "Startup Ecosystem", "International Relations", "Team Collaboration"]
    },
    {
      title: "Youth Journalist",
      company: "Youth Voice Editorial Team",
      location: "Helsinki, Finland",
      period: "2021 - 2022",
      type: "Volunteer",
      description: "Published multi-platform content on youth issues and led 2-person editorial projects. Worked across various media including newspapers, TV, blogs, and social media stories with comprehensive editorial responsibilities.",
      achievements: [
        "Published multi-platform content addressing youth issues and community topics",
        "Successfully led 2-person editorial projects from conception to publication",
        "Gained recognition for comprehensive journalistic work and research skills",
        "Contributed to youth voice representation in mainstream media outlets"
      ],
      skills: ["Journalism", "Editorial Leadership", "Multi-platform Publishing", "Research", "Content Strategy"]
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
            Digital services specialist with experience in content creation, youth engagement, and communications
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
                        <Briefcase className="w-5 h-5" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-5 h-5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end space-y-2">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <Badge variant={exp.type === 'Full-time' || exp.type === 'Freelance' ? 'default' : 'secondary'}>
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