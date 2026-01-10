import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  "Learn Qur'anic Arabic vocabulary",
  "Grammar and morphology foundations",
  "Reading and comprehension skills",
  "Interactive exercises",
  "Native-speaking teachers",
  "Certificate upon completion",
];

const Arabic = () => {
  return (
    <Layout>
      <PageHero
        title="Arabic Program"
        description="Master the language of the Qur'an and unlock deeper understanding"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold">
                  Understand the Divine Words
                </h2>
                <p className="text-muted-foreground">
                  Learning Arabic opens the door to understanding the Qur'an directly, 
                  without relying solely on translations. Our program takes you from 
                  beginner to confident reader step by step.
                </p>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg">Enroll Now</Button>
              </div>
              
              <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-5xl font-bold text-accent">€59</div>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• 4 group sessions per month</li>
                    <li>• 60 minutes per session</li>
                    <li>• Course materials included</li>
                    <li>• Practice assignments</li>
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

export default Arabic;
