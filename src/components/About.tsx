const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card border border-primary/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <span className="text-primary text-2xl">🚀</span>
                <span>
                  <strong className="text-foreground">I'm currently working on:</strong>{" "}
                  Leading the development of CygnisAI, focusing on creating a
                  seamless user experience and integrating advanced generative
                  AI models.
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-primary text-2xl">📚</span>
                <span>
                  <strong className="text-foreground">I'm currently learning:</strong>{" "}
                  Advanced techniques in Large Language Model (LLM)
                  orchestration, multi-modal generation, and scaling AI
                  applications with serverless technologies.
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-primary text-2xl">🤝</span>
                <span>
                  <strong className="text-foreground">I'm looking to collaborate on:</strong>{" "}
                  Open-source AI projects, innovative developer tools, and
                  anything that pushes the boundaries of human-computer
                  interaction.
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-primary text-2xl">💡</span>
                <span>
                  <strong className="text-foreground">Ask me about:</strong>{" "}
                  AI/ML, Next.js, Firebase, TypeScript, and building SaaS
                  products from the ground up.
                </span>
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-primary/20">
              <blockquote className="text-2xl font-semibold text-center italic text-gradient">
                "The best way to predict the future is to build it."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
