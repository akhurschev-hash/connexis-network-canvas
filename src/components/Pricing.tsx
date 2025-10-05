import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "14 days",
      description: "Perfect for testing Connexis",
      features: [
        "Up to 50 contacts",
        "Basic 3D visualization",
        "CSV import",
        "7-day relationship insights",
        "Email support",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Standard",
      price: "$49",
      period: "per month",
      description: "For serious founders",
      features: [
        "Unlimited contacts",
        "Advanced 3D visualization",
        "LinkedIn sync",
        "AI-powered recommendations",
        "Relationship decay alerts",
        "Priority support",
        "Custom tags & filters",
      ],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Team",
      price: "$149",
      period: "per month",
      description: "For growing companies",
      features: [
        "Everything in Standard",
        "Up to 5 team members",
        "Shared workspaces",
        "Role-based permissions",
        "Team analytics",
        "Dedicated account manager",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Start free. Scale as you grow. All plans include 14-day free trial.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luminous-teal/10 border border-luminous-teal/20">
            <span className="text-sm font-semibold text-luminous-teal">💎 Save 20% with annual billing</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card-glow rounded-3xl p-8 border ${
                plan.highlighted
                  ? "border-primary shadow-glow scale-105"
                  : "border-primary/10"
              } hover-lift animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-sm font-semibold text-white">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
              </div>

              <Button
                className={`w-full mb-6 rounded-full py-6 ${
                  plan.highlighted
                    ? "bg-gradient-primary text-white shadow-button hover:scale-105"
                    : "bg-card border border-primary/30 hover:bg-primary/10"
                }`}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-luminous-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
