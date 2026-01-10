import { CircleCheck, HelpCircle } from "lucide-react";

interface IsThisYouProps {
  title?: string;
  points: string[];
}

export const IsThisYou = ({ title = "Is this you?", points }: IsThisYouProps) => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 islamic-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header with icon */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>
          
          {/* Points as styled cards */}
          <div className="space-y-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 bg-background rounded-xl border-2 border-transparent hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
                  <CircleCheck className="h-5 w-5 text-primary-foreground" />
                </div>
                <p className="text-foreground text-lg leading-relaxed pt-0.5">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Encouraging note */}
          <p className="text-center text-muted-foreground mt-8 text-sm">
            If any of these resonate with you, you're in the right place.
          </p>
        </div>
      </div>
    </section>
  );
};
