import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TestimonialCardProps {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  delay?: number;
}

export const TestimonialCard = ({
  name,
  location,
  quote,
  rating = 5,
  delay = 0
}: TestimonialCardProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6 space-y-4">
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
            ))}
          </div>
          <p className="text-muted-foreground italic">"{quote}"</p>
          <div className="pt-2 border-t">
            <p className="font-semibold">{name}</p>
            {location && <p className="text-sm text-muted-foreground">{location}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
