import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";

const Index = () => {
  return (
    <MobileMenuProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MobileMenuProvider>
  );
};

export default Index;
