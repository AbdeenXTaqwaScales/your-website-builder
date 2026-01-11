import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Users, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";

const impactPoints = [
  {
    icon: BookOpen,
    title: "Enable Qur'an Memorization",
    description: "Your sponsorship gives someone the opportunity to memorize the entire Qur'an with expert guidance.",
  },
  {
    icon: Users,
    title: "Support a Student",
    description: "Cover tuition for a dedicated student who may not have the means to join our programs.",
  },
  {
    icon: Star,
    title: "Earn Continuous Reward",
    description: "The Prophet ﷺ said: 'Whoever guides someone to goodness will have a reward like the one who did it.'",
  },
  {
    icon: Heart,
    title: "Sadaqah Jariyah",
    description: "Your contribution becomes ongoing charity as students teach others and pass on their knowledge.",
  },
];

const Sponsors = () => {
  const handleSponsorClick = () => {
    // This will be connected to a payment flow
    window.open("mailto:admin@abdeenacademy.com?subject=Sponsorship%20Inquiry", "_blank");
  };

  return (
    <Layout>
      <PageHero
        title="Sponsor a Student"
        description="Get the ajr of enabling someone to memorize the Qur'an"
        showStudentCounter={false}
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many aspiring Huffadh have the dedication and drive to memorize the Qur'an but lack the financial means to
              access quality instruction. Your sponsorship can bridge that gap and help transform lives through the
              blessing of Qur'anic knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {impactPoints.map((point, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Become a Sponsor Today</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you sponsor one student or many, your contribution makes a lasting impact. Contact us to learn
                  more about our sponsorship program and how you can help.
                </p>
                <Button size="lg" onClick={handleSponsorClick} className="gap-2">
                  <Heart className="h-5 w-5" />
                  Sponsor a Student
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  You'll be redirected to contact us about sponsorship options
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
