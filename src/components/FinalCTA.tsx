import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="card-glow rounded-3xl p-12 md:p-16 border border-primary/20 animate-scale-in">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-gradient">Investor Network?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join 150+ founders who are closing deals faster with Connexis.
            Start your free 14-day trial today—no credit card required.
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white font-semibold px-10 py-7 text-lg rounded-full shadow-button hover:scale-105 transition-transform"
              onClick={() => window.open('https://forms.gle/aAPipwF6qBMESBSu7', '_blank')}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-luminous-teal" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-luminous-teal" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-luminous-teal" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
