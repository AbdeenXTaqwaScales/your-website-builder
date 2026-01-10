import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  "Study classical Tafsir works",
  "Contextual and historical insights",
  "Thematic studies",
  "Scholarly references",
  "Discussion sessions",
  "Written reflections",
];

const Tafsir = () => {
  return (
    <Layout>
      <PageHero
        title="Tafsir Program"
        description="Explore the depths of Qur'anic wisdom with comprehensive Tafsir studies"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold">
                  Discover Deeper Meanings
                </h2>
                <p className="text-muted-foreground">
                  Tafsir brings the Qur'an to life by exploring its meanings, context, 
                  and practical applications. Learn from classical scholars while 
                  understanding how the Qur'an speaks to our modern lives.
                </p>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg">Enroll Now</Button>
              </div>
              
              <Card className="bg-gradient-to-br from-highlight/5 to-primary/5">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-5xl font-bold text-highlight">€39</div>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Weekly group sessions</li>
                    <li>• 90 minutes per session</li>
                    <li>• Recorded sessions available</li>
                    <li>• Study guides included</li>
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

export default Tafsir;
