import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileSpreadsheet, FileText, Calendar, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const MessukeskusProduction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Production & Event Management
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Messukeskus Production Pack System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A prototype exploring how live event productions can automate their documentation, manage schedules, and maintain clarity across bilingual teams. Conceptual production documentation toolkit built in Google Sheets + Apps Script.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://docs.google.com/spreadsheets/d/16pXxea_DlYanoAfliZfgz5uYFhsihCboJpDaBkbqmp0/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  View Master Sheet
                </Button>
              </a>
              <a 
                href="https://drive.google.com/file/d/1dyANc60fReB5GUV0QNW6fzBiOCEvYdGk/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View Production Info
                </Button>
              </a>
            </div>
          </div>

          {/* Concept Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Concept Overview</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This is a bilingual production documentation system designed as a practice project to model how a venue like Messukeskus might handle programme management, conflict checking, and multi-department coordination.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  It's not affiliated with Messukeskus, but draws inspiration from the type of internal tools and deliverables mentioned in their producer internship description — ohjelmalomake, tapahtumaohje, and run-of-show workflows.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The purpose was to explore what a real production process looks like, from data intake to printable PDF output, within tools producers already use daily — Google Sheets, Docs, and Drive.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* System Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">System Architecture</h2>
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <p className="text-2xl font-semibold text-primary">
                Data → Validation → Documents → Dashboards
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <FileSpreadsheet className="w-6 h-6 text-primary" />
                    <CardTitle>Programme Data Sheet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Centralized source for all sessions: day, stage, times, presenters, AV, sustainability notes
                  </p>
                  <p className="text-muted-foreground">
                    Adds automatic validation and conflict detection using Apps Script
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="destructive">INCOMPLETE</Badge>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-600">RISK</Badge>
                    <Badge variant="destructive">CONFLICT</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-6 h-6 text-primary" />
                    <CardTitle>Apps Script Automation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Generates bilingual PDFs directly from Google Docs templates
                  </p>
                  <p className="text-muted-foreground">
                    Supports three document types: Ohjelmalomake (Programme Form), Tapahtumaohje (Event Instructions), Run-of-Show
                  </p>
                  <p className="text-muted-foreground">
                    Automatically groups by day and stage, and includes sustainability footers
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    <CardTitle>Producer Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Pulls data from the Sheet and summarizes total sessions, conflicts, incomplete rows
                  </p>
                  <p className="text-muted-foreground">
                    Provides a fast overview for team leads
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    <CardTitle>Coordination & Support Files</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Catering & Hospitality Slots</li>
                    <li>• Supplier Contact Matrix</li>
                    <li>• Permissions & Publishing Status</li>
                    <li>• Incident & Change Log</li>
                    <li>• Daily Operations Schedule</li>
                    <li>• Post-Event Debrief Form</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Technical Implementation</h2>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Platform</h3>
                  <p className="text-muted-foreground">
                    Built entirely inside the Google ecosystem: Google Sheets + Apps Script + Google Drive
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Automation</h3>
                  <p className="text-muted-foreground">
                    Generates and exports formatted PDFs from Docs templates
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Languages</h3>
                  <p className="text-muted-foreground">
                    Finnish and English (separate templates for both)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Formatting</h3>
                  <p className="text-muted-foreground">
                    A4, Arial, bilingual headers
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Output Structure</h3>
                  <p className="text-muted-foreground mb-2">
                    Internal / External folders, matching production conventions
                  </p>
                  <div className="bg-muted/30 rounded p-4 font-mono text-sm">
                    <p>Programme_FI_01-11-2025.pdf</p>
                    <p>Production_Info_01-11-2025.pdf</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="text-muted-foreground">
                    The Apps Script automates repetitive work: conflict checks, formatting, and versioned exports. Other outputs follow the same logic manually — designed for modular expansion.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Example Outputs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Example Outputs</h2>
            <div className="grid gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Programme Master Sheet</h3>
                      <p className="text-sm text-muted-foreground">
                        Structured programme form with time slots and presenters
                      </p>
                    </div>
                    <a 
                      href="https://docs.google.com/spreadsheets/d/16pXxea_DlYanoAfliZfgz5uYFhsihCboJpDaBkbqmp0/edit?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Production Info PDF</h3>
                      <p className="text-sm text-muted-foreground">
                        Internal logistics sheet for producers: arrival, AV, contacts, sustainability
                      </p>
                    </div>
                    <a 
                      href="https://drive.google.com/file/d/1dyANc60fReB5GUV0QNW6fzBiOCEvYdGk/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Evaluation Summary Report</h3>
                      <p className="text-sm text-muted-foreground">
                        Aggregates post-event metrics and feedback
                      </p>
                    </div>
                    <a 
                      href="https://docs.google.com/spreadsheets/d/1Yz28a5jvG_ZhKZ-vmRnDuLKSmmy5BZb1/edit?usp=sharing&ouid=112875326384613983523&rtpof=true&sd=true" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Daily Operations Schedule</h3>
                      <p className="text-sm text-muted-foreground">
                        Team-by-team task overview for each day
                      </p>
                    </div>
                    <a 
                      href="https://docs.google.com/spreadsheets/d/18mNjGN5Mo9pJUZu-AruewW1zDpd5U7MX/edit?usp=sharing&ouid=112875326384613983523&rtpof=true&sd=true" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Technologies & Concepts</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Google Sheets</Badge>
              <Badge>Apps Script</Badge>
              <Badge>Google Drive API</Badge>
              <Badge>JavaScript</Badge>
              <Badge>PDF Generation</Badge>
              <Badge>Bilingual Documentation</Badge>
              <Badge>Event Production</Badge>
              <Badge>Workflow Automation</Badge>
              <Badge>Data Validation</Badge>
              <Badge>Conflict Detection</Badge>
            </div>
          </section>

          {/* Back to Projects */}
          <div className="text-center pt-8">
            <Link to="/">
              <Button variant="outline" size="lg">
                ← Back to All Projects
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MessukeskusProduction;
