import { Zap, TrendingUp, Clock, Bell } from "lucide-react";

export const Value = () => {
  const values = [
    {
      icon: Zap,
      metric: "< 10 min",
      title: "Plan Outreach",
      description: "Visualize your network and identify key connections instantly",
    },
    {
      icon: TrendingUp,
      metric: "25%",
      title: "Cut Research Time",
      description: "Stop repeating investor research with centralized insights",
    },
    {
      icon: Clock,
      metric: "5+ hours/month",
      title: "Automated Updates",
      description: "Weekly relationship health reports delivered automatically",
    },
    {
      icon: Bell,
      metric: "Real-time",
      title: "Decay Alerts",
      description: "Get notified before relationships go cold",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Measurable <span className="text-gradient">Outcomes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop guessing. Start tracking what matters for your fundraising success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="card-glow rounded-2xl p-6 border border-primary/10 hover-lift hover:border-primary/30 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-mono text-3xl font-bold text-luminous-teal mb-2">
                {value.metric}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
