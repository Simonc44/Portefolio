import { Mail, Linkedin, Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/simon-chusseau-91541a378/",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/simonchusseau/",
      color: "hover:text-pink-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Simonc44",
      color: "hover:text-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 ${social.color}`}
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            );
          })}
        </div>

        <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
          <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out through any of the platforms above or
            collaborate on GitHub!
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Simonc44" target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
