import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, innovative projects, 
                and ways to create value through technology and strategic thinking.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "your.email@domain.com",
                  link: "mailto:your.email@domain.com"
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                  link: "tel:+15551234567"
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Location",
                  value: "New York, NY",
                  link: null
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-primary">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    {contact.link ? (
                      <a 
                        href={contact.link} 
                        className="font-medium text-primary hover:text-secondary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="font-medium text-primary">{contact.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-primary mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                  { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="shadow-card hover:shadow-elegant transition-all duration-200"
                  >
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Email</label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Subject</label>
                <Input placeholder="Project Collaboration Opportunity" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full shadow-elegant">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;