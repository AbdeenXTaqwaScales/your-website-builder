import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 islamic-pattern opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-primary/40 animate-float-sparkle" />
        <div className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-accent/50 animate-float-sparkle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-60 left-[20%] w-4 h-4 rounded-full bg-highlight/30 animate-float-sparkle" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 right-[25%] w-3 h-3 rounded-full bg-primary/30 animate-float-sparkle" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-20 left-[30%] w-2 h-2 rounded-full bg-accent/40 animate-float-sparkle" style={{ animationDelay: "0.3s" }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Experience The Beauty
            <span className="gradient-text block">of Qur'an Learning</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your guided journey to memorizing, understanding, and living the Qur'an.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/start">
                Find Your Course
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
