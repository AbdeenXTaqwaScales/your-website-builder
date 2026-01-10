import { Layout } from "@/components/layout/Layout";
import { HomeHero } from "@/components/HomeHero";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Languages, Sparkles, Package } from "lucide-react";

const programs = [
  {
    title: "Hifdh Program",
    description: "Memorize the Qur'an with expert guidance and proven techniques.",
    icon: BookOpen,
    href: "/hifdh",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Arabic Program",
    description: "Master the Arabic language to deepen your understanding.",
    icon: Languages,
    href: "/arabic",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Tafsir Program",
    description: "Explore the meanings and wisdom of the Qur'an.",
    icon: Sparkles,
    href: "/tafsir",
    color: "bg-highlight/10 text-highlight",
  },
  {
    title: "Full Package",
    description: "Get access to all programs with exclusive benefits.",
    icon: Package,
    href: "/full-package",
    color: "bg-primary/10 text-primary",
  },
];

const testimonials = [
  {
    name: "Ahmed K.",
    location: "United Kingdom",
    quote: "The Hifdh program completely transformed my memorization journey. The teachers are incredibly supportive.",
    rating: 5,
  },
  {
    name: "Fatima M.",
    location: "United States",
    quote: "I never thought I could understand Arabic so well. This program made it accessible and enjoyable.",
    rating: 5,
  },
  {
    name: "Omar S.",
    location: "Canada",
    quote: "The Tafsir classes opened my eyes to the deeper meanings of the Qur'an. Truly life-changing.",
    rating: 5,
  },
];

const faqItems = [
  {
    question: "How do I enroll in a program?",
    answer: "Simply click on the program you're interested in and follow the enrollment steps. You can also contact us for personalized guidance.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer: "We offer both live interactive sessions and recorded content so you can learn at your own pace.",
  },
  {
    question: "What if I need to cancel my enrollment?",
    answer: "We have a flexible cancellation policy. Please refer to our cancellation policy page for more details.",
  },
];

const Index = () => {
  return (
    <Layout>
      <HomeHero />
      
      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the path that resonates with your learning goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {programs.map((program) => (
              <Card key={program.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={program.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />
      
      <FAQ items={faqItems} />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-sky text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their relationship with the Qur'an.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/start">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
