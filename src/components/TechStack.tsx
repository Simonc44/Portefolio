const TechStack = () => {
  const technologies = [
    { name: "Next.js", color: "from-white to-gray-300" },
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-blue-500 to-blue-600" },
    { name: "Firebase", color: "from-yellow-400 to-orange-500" },
    { name: "Google Gemini", color: "from-blue-400 to-purple-500" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-teal-500" },
  ];

  return (
    <section id="tech" className="py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Technologies I use to bring ideas to life
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-xl bg-gradient-card backdrop-blur-sm p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
                >
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {tech.name}
                </h3>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
