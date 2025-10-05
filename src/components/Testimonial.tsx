import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="card-glow rounded-3xl p-12 border border-primary/20 animate-scale-in">
          <Quote className="w-12 h-12 text-luminous-teal mb-6" />
          
          <blockquote className="text-2xl md:text-3xl font-heading leading-relaxed mb-8">
            "Connexis helped us reconnect with 2 dormant investors who ended up leading our bridge round. We closed{" "}
            <span className="text-gradient font-bold">$100k faster</span> than expected."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-primary" />
            <div>
              <div className="font-semibold text-lg">Ali Rahman</div>
              <div className="text-muted-foreground">Founder, Looply</div>
            </div>
          </div>

          {/* Decorative metrics */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary/10">
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-luminous-teal mb-1">$100k</div>
              <div className="text-sm text-muted-foreground">Raised Faster</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-luminous-teal mb-1">2</div>
              <div className="text-sm text-muted-foreground">Reconnected Investors</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-luminous-teal mb-1">6 weeks</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
