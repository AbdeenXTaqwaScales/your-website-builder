import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingSectionProps {
  subject: string;
  groupPrice: { monthly: number; yearly: number; yearlySavings: number };
  privatePrice: { monthly: number; yearly: number; yearlySavings: number };
  groupFeatures: string[];
  privateFeatures: string[];
}

export const PricingSection = ({
  subject,
  groupPrice,
  privatePrice,
  groupFeatures,
  privateFeatures,
}: PricingSectionProps) => {
  const [format, setFormat] = useState<"group" | "private">("group");

  const currentPrice = format === "group" ? groupPrice : privatePrice;
  const currentFeatures = format === "group" ? groupFeatures : privateFeatures;

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            Choose How You Want to Study
          </h2>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-muted rounded-lg">
              <button
                onClick={() => setFormat("group")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  format === "group"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Group Classes
              </button>
              <button
                onClick={() => setFormat("private")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  format === "private"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                1-on-1 Lessons
              </button>
            </div>
          </div>

          <Card className="border-2">
            <CardHeader>
              <h3 className="font-display text-2xl font-bold text-center">
                {format === "group" ? "Group" : "Private 1-on-1"} – {subject}
              </h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">
                  €{currentPrice.monthly}
                </span>
                <span className="text-muted-foreground">/month</span>
                <p className="text-sm text-muted-foreground mt-2">
                  or €{currentPrice.yearly}/year (save €{currentPrice.yearlySavings})
                </p>
              </div>

              <ul className="space-y-3">
                {currentFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {format === "private" && (
                <p className="text-sm text-muted-foreground text-center">
                  Application required so we can match you with the right teacher.
                </p>
              )}

              <Button asChild className="w-full" size="lg">
                <Link to="/auth">
                  {format === "group" ? `Enroll in Group ${subject}` : `Apply for 1-on-1 ${subject}`}
                </Link>
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Have questions?{" "}
                <Link to="/contact" className="text-primary hover:underline">Contact us</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
