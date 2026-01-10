import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Teaching",
    description: "Our teachers are not just educators but passionate individuals who love sharing the beauty of the Qur'an.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on tangible progress with clear milestones and regular assessments to ensure success.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a supportive community of learners from around the world, all on the same journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in Islamic education with qualified, certified teachers.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        description="Learn about our mission to make Qur'an education accessible to everyone"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              Abdeens Academy was founded with a simple yet powerful mission: to make 
              high-quality Qur'an education accessible to Muslims worldwide. We believe 
              that everyone deserves the opportunity to connect with the Qur'an, regardless 
              of their location or background.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                What started as a small initiative to teach local students has grown into 
                an international academy serving hundreds of students across the globe.
              </p>
              <p>
                Our founder, driven by a deep love for the Qur'an and a desire to share 
                its wisdom, created Abdeens Academy to bridge the gap between traditional 
                Islamic education and modern learning methods.
              </p>
              <p>
                Today, we continue to expand our reach while maintaining the personalized 
                attention and quality that defines our approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
