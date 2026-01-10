import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

const features = [
  "Full access to Hifdh Program",
  "Full access to Arabic Program",
  "Full access to Tafsir Program",
  "Priority scheduling",
  "Exclusive study materials",
  "Monthly progress consultations",
  "Certificate of completion",
  "Lifetime access to recordings",
];

const FullPackage = () => {
  return (
    <Layout>
      <PageHero
        title="Full Package"
        description="The complete Qur'an learning experience with all programs and exclusive benefits"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 text-highlight text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Best Value
                </div>
                <h2 className="font-display text-3xl font-bold">
                  Everything You Need
                </h2>
                <p className="text-muted-foreground">
                  Get the complete Abdeens Academy experience with our Full Package. 
                  Access all three programs, receive priority support, and benefit 
                  from exclusive resources designed to accelerate your learning.
                </p>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <div className="absolute top-4 right-4 px-3 py-1 bg-highlight text-highlight-foreground text-sm font-semibold rounded-full">
                  Save 30%
                </div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-5xl font-bold gradient-text">€99</div>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• All programs included</li>
                    <li>• 12+ sessions per month</li>
                    <li>• Priority support</li>
                    <li>• Exclusive bonuses</li>
                  </ul>
                  <Button className="w-full" size="lg">Get Full Access</Button>
                  <p className="text-xs text-muted-foreground">
                    Cancel anytime. No hidden fees.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FullPackage;
