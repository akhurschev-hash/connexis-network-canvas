import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-graphite-gray to-deep-space">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(203_63%_55%_/_0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neo-purple/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-4">
          <Sparkles className="w-4 h-4 text-luminous-teal" />
          <span className="text-sm text-muted-foreground">Trusted by 150+ founders across MENA & SEA</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
          Visualize Your Investor
          <br />
          <span className="text-gradient">Network in 3D</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Connexis transforms scattered spreadsheets into a living graph of your startup's relationships—helping you close faster and stay top of mind.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-white font-semibold px-8 py-6 text-lg rounded-full shadow-button hover:scale-105 transition-transform"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-full"
          >
            Watch Demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="pt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ⭐ 4.6 stars on FounderStack
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
