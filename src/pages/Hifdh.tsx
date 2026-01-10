import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  "One-on-one sessions with qualified teachers",
  "Personalized memorization plan",
  "Weekly progress tracking",
  "Tajweed correction and improvement",
  "Flexible scheduling",
  "Revision support",
];

const Hifdh = () => {
  return (
    <Layout>
      <PageHero
        title="Hifdh Program"
        description="Begin your journey to memorizing the Qur'an with expert guidance and a proven methodology"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold">
                  Memorize with Confidence
                </h2>
                <p className="text-muted-foreground">
                  Our Hifdh program is designed to help you memorize the Qur'an effectively, 
                  with proper Tajweed and understanding. Whether you're just starting or 
                  continuing your journey, our expert teachers will guide you every step of the way.
                </p>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg">Enroll Now</Button>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-5xl font-bold text-primary">€49</div>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• 4 sessions per month</li>
                    <li>• 45 minutes per session</li>
                    <li>• Progress reports</li>
                    <li>• WhatsApp support</li>
                  </ul>
                  <Button className="w-full" size="lg">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hifdh;
