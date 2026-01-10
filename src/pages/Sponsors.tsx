import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen } from "lucide-react";

const sponsorshipOptions = [
  {
    title: "Sponsor a Student",
    description: "Help a student who cannot afford tuition access our programs.",
    icon: Users,
    amount: "€49/month",
  },
  {
    title: "Scholarship Fund",
    description: "Contribute to our general scholarship fund for deserving students.",
    icon: Heart,
    amount: "Any amount",
  },
  {
    title: "Resource Sponsor",
    description: "Help us develop new learning materials and resources.",
    icon: BookOpen,
    amount: "€100+",
  },
];

const Sponsors = () => {
  return (
    <Layout>
      <PageHero
        title="Become a Sponsor"
        description="Support students on their journey to learning the Qur'an"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Make a Difference
            </h2>
            <p className="text-muted-foreground">
              Your sponsorship helps students who lack financial means access quality 
              Qur'an education. Every contribution, big or small, creates lasting impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sponsorshipOptions.map((option) => (
              <Card key={option.title} className="text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                  <p className="text-2xl font-bold text-primary">{option.amount}</p>
                  <Button className="w-full">Sponsor Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
