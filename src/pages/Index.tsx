import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-primary/10">
        <p>
          © {new Date().getFullYear()} Simon Chusseau. Built with passion and ☕
        </p>
      </footer>
    </div>
  );
};

export default Index;
