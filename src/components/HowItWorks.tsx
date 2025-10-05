import { Upload, Network, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Import Your Network",
      description: "Upload from CSV, sync with LinkedIn, or add contacts manually. Connexis handles the rest.",
    },
    {
      icon: Network,
      number: "02",
      title: "Visualize in 3D",
      description: "Watch your scattered data transform into an interactive 3D relationship graph.",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Act on AI Insights",
      description: "Get smart recommendations on who to reach out to and when—before relationships fade.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Simple <span className="text-gradient">Setup</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From chaos to clarity in three steps. No technical knowledge required.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <div className="font-mono text-sm text-primary mb-2">{step.number}</div>
                <h3 className="font-heading text-2xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent transform translate-y-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
