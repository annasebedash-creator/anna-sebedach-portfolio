import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Dance Teacher (KPOP, Dance for Kids)",
      company: "Sport Club Vantaa",
      location: "Vantaa, Finland",
      period: "2023 - Present",
      type: "Full-time",
      description: "Hold 3 regular dance classes per week in addition to weekly substitute classes. Teach groups ranging from general dance for 5-6 year olds, Kpop for 7-9 year olds, and Kpop for 10+ year olds. Prepare and lead performances for local showcases.",
      achievements: [
        "Substitute as Family Circus instructor for 3 year olds and their parents",
        "Lead performances at Street Dance for 7-9 year olds",
        "Participate in different camp activities throughout the season"
      ],
      skills: ["Dance Instruction", "KPOP", "Performance Choreography", "Youth Development"]
    },
    {
      title: "Dance Teacher (Street, KPOP, Projects)",
      company: "The City of Helsinki",
      location: "Helsinki, Finland",
      period: "2022 - Present",
      type: "Full-time",
      description: "Hold 4-5 regular dance classes per week plus weekly substitute classes. Create different style choreographies and lead creative dance projects. Produce professional video content with unique choreographies.",
      achievements: [
        "Created multiple unique choreographies for different skill levels",
        "Produced professional video content for dance performances",
        "Prepared seasonal performances for groups ranging from 9-15 year olds"
      ],
      skills: ["Street Dance", "KPOP", "Choreography", "Video Production", "Creative Direction"]
    },
    {
      title: "Youth Work Leader (Teaching, Content Creation)",
      company: "The City of Helsinki",
      location: "Helsinki, Finland",
      period: "Summer 2022",
      type: "Contract",
      description: "Diverse roles in content production, media marketing, customer service, and youth work. Responsible for promoting classes on various social media platforms, creating content that garnered tens of thousands of views.",
      achievements: [
        "Successfully created dance performances at Triple Mall",
        "Established K-pop beginners group at Pasila Youth Center from scratch",
        "Prepared and taught dance classes to all ages in styles like Hiphop, Street and Hiphop"
      ],
      skills: ["Content Creation", "Social Media Marketing", "Youth Work", "Dance Instruction"]
    },
    {
      title: "Communication Office Trainee",
      company: "Ruuti Communications Office",
      location: "Helsinki, Finland",
      period: "Summer 2021",
      type: "Internship",
      description: "Actively involved in using digital media, producing complete videos for Helsinki's channels across various projects. Played key role in crafting articles for Helsingin Sanomat throughout the entire process.",
      achievements: [
        "Promoted important initiatives from young people extensively across the metropolitan area",
        "Described as inspirational multitasker with positive impact on all projects",
        "Successfully completed comprehensive digital media production projects"
      ],
      skills: ["Digital Media", "Video Production", "Article Writing", "Communications"]
    },
    {
      title: "Journalist (Youth Voice - Editorial)",
      company: "Various Media Outlets",
      location: "Helsinki, Finland",
      period: "2021 - 2022",
      type: "Freelance",
      description: "Worked as journalist in various media including newspapers, TV, blogs, and social media stories. Actively participated in the voluntary Youth Voice editorial team with roles in ideation, planning, chairing, directing, interviewing, writing, editing, and information retrieval.",
      achievements: [
        "Published article in Helsingin Sanomat addressing youth well-being",
        "Successfully managed two-person editorial team projects",
        "Gained recognition for comprehensive journalistic work"
      ],
      skills: ["Journalism", "Editorial Work", "Interviewing", "Writing", "Research"]
    },
    {
      title: "Short Movie Script Writer",
      company: "Independent Projects",
      location: "Helsinki, Finland",
      period: "2022",
      type: "Freelance",
      description: "Learning and refining creative writing skills with the goal to create scripts for short films from scratch. Gained valuable insights into brainstorming, collaborative creation, and enhanced general writing skills.",
      achievements: [
        "Successfully completed script writing projects from conception to final draft",
        "Developed collaborative creation processes",
        "Enhanced creative writing and storytelling abilities"
      ],
      skills: ["Creative Writing", "Script Writing", "Storytelling", "Collaboration"]
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
            A diverse background in dance instruction, content creation, and youth work
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