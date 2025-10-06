import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(203_63%_55%_/_0.05),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in pt-4 md:pt-0 md:-mt-16 lg:-mt-24">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-2 md:mb-4">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-luminous-teal" />
          <span className="text-xs md:text-sm text-muted-foreground">Trusted by 150+ founders across MENA & SEA</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight px-4">
          Visualize Your Investor
          <br />
          <span className="text-gradient">Network in 3D</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          Connexis transforms scattered spreadsheets into a living graph of your startup's relationships—helping you close faster and stay top of mind.
        </p>

        <div className="flex justify-center items-center pt-2 md:pt-4 px-4">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-white font-semibold px-6 sm:px-8 md:px-10 py-5 md:py-7 text-base md:text-lg rounded-full shadow-button hover:scale-105 transition-transform"
            onClick={() => window.open('https://forms.gle/aAPipwF6qBMESBSu7', '_blank')}
          >
            Join the Waitlist
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>

        {/* Social Proof */}
        <div className="pt-6 md:pt-12 flex flex-col items-center gap-4 px-4">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-primary border-2 border-background"
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-muted-foreground ml-2">
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
