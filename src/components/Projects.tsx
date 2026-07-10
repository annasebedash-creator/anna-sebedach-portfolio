import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [pendingScrollTo, setPendingScrollTo] = useState<string | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Check URL parameter to determine initial state
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isExpanded = urlParams.get('expanded') === 'true';
    const scrollTo = urlParams.get('scrollTo');
    if (isExpanded) setShowAllProjects(true);
    if (scrollTo) setPendingScrollTo(scrollTo);
  }, []);
  
  const projects = [
    {
      title: "AI-Native Proposal Workflow System",
      description: "Claude Code + Claude Design workflow system built during a pilot at Coventures (Helsinki venture-building company): turns client-meeting transcripts into structured proposal decks with criteria-driven selection of reference cases (38) and expert profiles (43). Used on real client proposals; anonymized case study.",
      tags: ["Claude Code", "Claude Design", "AI Workflow Design", "Prompt Engineering", "Knowledge Management", "Sales Enablement", "Markdown/GitHub"],
      category: "AI Workflow Systems · Company Pilot",
      gradient: "bg-gradient-primary",
      slug: "/projects/coventures-ai-workflow",
      pattern: "automation"
    },
    {
      title: "Tutor AI Assistant",
      description: "Trilingual (RU/FI/EN) AI customer-service agent built and deployed to production for my own tutoring business. RAG-grounded answers from the business knowledge base, lead qualification, and trial-lesson booking straight into a database — try the live demo.",
      tags: ["Next.js", "OpenAI", "RAG", "Supabase", "pgvector", "TypeScript", "Vercel", "Trilingual", "Prompt Engineering"],
      category: "Applied AI · Live in Production",
      gradient: "bg-gradient-primary",
      slug: "/projects/tutor-ai-assistant",
      pattern: "voice-ai"
    },
    {
      title: "QA & Test Automation for an AI Product",
      description: "Built the QA process from scratch for my production AI agent: risk-based test plan, 20 Playwright tests across desktop and mobile WebKit (UI, API contract, rate limiting) in CI, an LLM eval harness that caught a real prompt regression, and engineer-actionable bug reports — all public on GitHub.",
      tags: ["Playwright", "Test Automation", "API Testing", "LLM Evals", "GitHub Actions", "Mobile Testing", "Bug Reporting", "TypeScript"],
      category: "QA & Test Automation",
      gradient: "bg-gradient-accent",
      slug: "/projects/qa-ai-product",
      pattern: "software-design"
    },
    {
      title: "Testing the Money Path — Rewards Ledger",
      description: "Studied real loyalty apps' public user complaints, distilled the commercially riskiest failure modes (double-crediting, expiry boundaries, refund claw-backs), then built a reference points-ledger and 23 tests that hunt exactly those bugs — including 1,000-run property-based tests that found (and now guard against) a real pending-settlement defect.",
      tags: ["TypeScript", "Vitest", "Property-Based Testing", "fast-check", "Test Design", "GitHub Actions CI"],
      category: "QA & Test Design",
      gradient: "bg-umber",
      slug: "/projects/rewards-ledger-testing",
      pattern: "database"
    },
    {
      title: "Voice AI Dance Studio Assistant",
      description: "Bilingual AI assistant transforming dance studio customer service through natural voice conversations. Handles class inquiries and registrations with voice input/output in Finnish and English via Telegram, featuring real-time analytics and automated workflow orchestration.",
      tags: ["n8n", "OpenAI", "LangChain", "Whisper", "TTS", "Voice AI", "Telegram Bot", "Bilingual", "Google Sheets", "Conversation Design"],
      category: "Voice AI & Conversational Design",
      gradient: "bg-gradient-primary",
      slug: "/projects/voice-ai-dance-studio",
      pattern: "voice-ai"
    },
    {
      title: "Messukeskus Production Pack System",
      description: "Bilingual production documentation toolkit for live event management, automating programme validation, conflict detection, and multi-department coordination through Google Sheets + Apps Script with automated PDF generation.",
      tags: ["Google Sheets", "Apps Script", "PDF Generation", "Event Production", "Bilingual", "Workflow Automation", "JavaScript"],
      category: "Production & Event Management",
      gradient: "bg-gradient-accent",
      slug: "/projects/messukeskus-production",
      pattern: "event-production"
    },
    {
      title: "Bias & Fallacy Lab",
      description: "Designed and developed a gamified web platform that teaches logical fallacies and cognitive biases through interactive scenarios, adaptive feedback, and dynamic practice system.",
      tags: ["HTML", "CSS", "JavaScript", "JSON", "Web Audio API"],
      category: "Educational Technology",
      gradient: "bg-moss-green",
      slug: "/projects/bias-fallacy-lab",
      pattern: "education"
    },
    {
      title: "Psychology Concepts Learning Platform",
      description: "Developed an interactive learning platform systematizing psychology concepts across multiple domains through three complementary learning modes.",
      tags: ["Cursor AI", "Markdown", "Mermaid.js", "Python", "Psychology"],
      category: "Educational Technology",
      gradient: "bg-gradient-accent",
      slug: "/projects/psychology-learning-platform",
      pattern: "psychology"
    },
    {
      title: "Order Management & Invoicing System",
      description: "Built a complete internal order-to-invoice workflow for a non-profit, centralizing order tracking, invoicing, customer communication, and reporting using existing office tools with zero additional software costs.",
      tags: ["Excel", "Outlook", "Power BI", "Teams", "WooCommerce", "Procountor", "SOP Documentation"],
      category: "Business Operations",
      gradient: "bg-umber",
      slug: "/projects/order-management-system",
      pattern: "order-mgmt"
    },
    {
      title: "Telegram Bot Assistant",
      description: "Built an intelligent n8n automation workflow that integrates with TickTick, Google Calendar, Notion, and OpenWeatherMap to create a comprehensive personal productivity assistant with voice transcription and smart task management.",
      tags: ["n8n", "Telegram Bot API", "TickTick API", "Google Calendar", "Notion", "OpenAI", "Workflow Automation"],
      category: "Workflow Automation",
      gradient: "bg-moss-green",
      slug: "/projects/telegram-bot-assistant",
      pattern: "automation"
    },
    {
      title: "Finland Mental Health Research Dashboard",
      description: "Built a research-grade analytical pipeline and interactive dashboard to examine mental health indicators in Finland, integrating data from multiple public health sources.",
      tags: ["Python", "Streamlit", "Pandas", "THL API", "Eurostat"],
      category: "Data Science",
      gradient: "bg-gradient-primary",
      slug: "/projects/finland-mental-health-dashboard",
      pattern: "data-analytics"
    },
    {
      title: "SQL & Data Management Fusion Project",
      description: "Comprehensive suite of SQL and data management solutions integrating theoretical concepts with practical database design and implementation.",
      tags: ["SQL Server", "ER Modeling", "Normalization", "Transaction Control"],
      category: "Database Engineering",
      gradient: "bg-umber",
      slug: "/projects/sql-data-management",
      pattern: "database"
    },
    {
      title: "Sauna Slot Booking System",
      description: "Full requirements specification for a digital sauna booking system, covering complete requirements engineering process from stakeholder needs to technical documentation.",
      tags: ["UML", "Requirements Engineering", "Risk Analysis", "Software Design"],
      category: "Software Engineering",
      gradient: "bg-secondary",
      slug: "/projects/sauna-booking-system",
      pattern: "software-design"
    },
    {
      title: "Smart Home IoT Ecosystem",
      description: "Developed a comprehensive IoT prototype integrating multiple sensors and actuators with real-time monitoring, automated environmental controls, and predictive analytics for energy optimization.",
      tags: ["Arduino", "Raspberry Pi", "MQTT", "Node.js", "InfluxDB", "Grafana"],
      category: "IoT & Hardware",
      gradient: "bg-gradient-primary",
      slug: "/projects/iot-ecosystem",
      pattern: "iot"
    },
    {
      title: "Cross-Functional Team Leadership Initiative",
      description: "Led a 12-person cross-disciplinary team through a complex digital transformation project, implementing agile methodologies and stakeholder management frameworks to deliver results 3 weeks ahead of schedule.",
      tags: ["Agile", "Scrum", "Stakeholder Management", "Team Leadership", "Risk Management"],
      category: "Project Management",
      gradient: "bg-gradient-accent",
      slug: "/projects/team-leadership",
      pattern: "leadership"
    },
    {
      title: "3D Animation & Motion Graphics Portfolio",
      description: "Created a comprehensive collection of 3D animations, character models, and motion graphics using Blender, featuring photorealistic rendering, particle systems, and dynamic simulations for various media projects.",
      tags: ["Blender", "3D Modeling", "Animation", "Cycles Rendering", "Motion Graphics", "VFX"],
      category: "3D Design & Animation",
      gradient: "bg-burgundy",
      slug: "/projects/blender-portfolio",
      pattern: "3d-design"
    },
    {
      title: "Extended Essay in Psychology: Mental Imagery in Social Anxiety Disorder",
      description: "Authored a 4,000-word IB research paper investigating mental imagery's dual role in Social Anxiety Disorder - both as a negative symptom maintenance factor and as a therapeutic tool through imagery rescripting techniques, synthesizing findings from seven peer-reviewed studies.",
      tags: ["Psychology Research", "Academic Writing", "Literature Review", "IB Extended Essay", "Mental Health", "Cognitive Behavioral Therapy"],
      category: "Academic Research",
      gradient: "bg-burgundy",
      slug: "/projects/psychology-extended-essay",
      pattern: "research"
    },
    {
      title: "IBM Watsonx Assistant with Embedded Analytics",
      description: "Implemented an advanced chatbot extension that embeds dynamic charts and tables directly into conversation interfaces, bridging conversational AI with real-time data visualization and serving as both a technical proof-of-concept and educational evaluation platform.",
      tags: ["JavaScript", "Node.js", "IBM Watsonx", "Chart.js", "API Integration", "Conversational AI"],
      category: "AI Development",
      gradient: "bg-gradient-accent",
      slug: "/projects/watsonx-assistant",
      pattern: "ai-chatbot"
    },
    {
      title: "QualiLab – Qualitative Data Analysis Platform",
      description: "Designed and implemented a research-grade web application for qualitative data analysis in psychology with NLP pipelines and collaborative coding.",
      tags: ["Next.js", "React", "Supabase", "NLP", "OpenAI API"],
      category: "Research Technology",
      gradient: "bg-burgundy",
      slug: "/projects/qualilab",
      pattern: "research-tech"
    },
    {
      title: "FI Healthcare Receptionist - Voice Agent Demo",
      description: "Enterprise-grade conversation design showcase featuring Finnish healthcare receptionist simulation with streaming, barge-in, real-time analytics, and bilingual support with sub-200ms perceived responsiveness.",
      tags: ["Voice AI", "Conversation Design", "Finnish", "Healthcare", "Streaming", "Analytics", "Bilingual", "JavaScript"],
      category: "Voice AI & Conversation Design",
      gradient: "bg-gradient-primary",
      slug: "/projects/fi-healthcare-voice-demo",
      pattern: "voice-healthcare"
    }
  ];

  const handleToggleProjects = () => {
    const newExpandedState = !showAllProjects;
    setShowAllProjects(newExpandedState);
    
    // Update URL to reflect expanded state
    const url = new URL(window.location.href);
    if (newExpandedState) {
      url.searchParams.set('expanded', 'true');
    } else {
      url.searchParams.delete('expanded');
    }
    window.history.replaceState({}, '', url.toString());
    
    if (!newExpandedState) {
      // When hiding projects, scroll to show the last visible projects
      setTimeout(() => {
        if (projectsRef.current) {
          const projectCards = projectsRef.current.querySelectorAll('.project-card');
          if (projectCards.length >= 6) {
            projectCards[4].scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (!pendingScrollTo) return;

    const scroll = () => {
      const target = projectsRef.current?.querySelector(`[data-slug="${pendingScrollTo}"]`);
      if (target) {
        (target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
        const url = new URL(window.location.href);
        url.searchParams.delete('scrollTo');
        window.history.replaceState({}, '', url.toString());
        setPendingScrollTo(null);
      }
    };

    const t = setTimeout(scroll, 60);
    return () => clearTimeout(t);
  }, [pendingScrollTo, showAllProjects]);

  return (
    <section id="projects" className="pt-12 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Showcasing innovative solutions that bridge technology and business value, driven by personal curiosities and interests
           </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
            <Link key={index} to={`${project.slug}?${showAllProjects ? 'expanded=true&' : ''}scrollTo=${encodeURIComponent(project.slug)}`} className="group">
              <Card data-slug={project.slug} className="project-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-4">
                  <div className={`h-32 rounded-lg ${project.gradient} mb-4 relative overflow-hidden project-bg-${project.pattern}`}>
                    <div className="absolute bottom-3 left-3 z-10">
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
            onClick={handleToggleProjects}
          >
            {showAllProjects ? "Show Less Projects" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;