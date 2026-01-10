import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  trustLine?: ReactNode;
  variant?: "gradient" | "light";
}

export const Hero = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  trustLine,
  variant = "gradient",
}: HeroProps) => {
  return (
    <section
      className={`relative py-20 md:py-32 overflow-hidden ${
        variant === "gradient" ? "gradient-hero" : "bg-background"
      }`}
    >
      <div className="absolute inset-0 islamic-pattern opacity-30" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
            {headline}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {subheadline}
          </p>

          {trustLine && (
            <div className="text-sm text-muted-foreground">
              {trustLine}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button size="lg" variant="outline" asChild>
                <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
