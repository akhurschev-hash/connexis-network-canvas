import { Clock, Users, TrendingDown } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: Clock,
      text: "40% of fundraising time wasted piecing together spreadsheets",
    },
    {
      icon: Users,
      text: "Lost introductions and missed warm connections",
    },
    {
      icon: TrendingDown,
      text: "Investor relationships decay without visibility",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Fundraising Shouldn't Feel Like
            <span className="text-gradient"> Chaos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founders waste countless hours on LinkedIn, email trails, and fragmented spreadsheets.
            Connexis eliminates the chaos with one visual, connected graph.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-glow rounded-2xl p-8 border border-primary/10 hover-lift hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-glow flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
