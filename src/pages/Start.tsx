import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Languages, Sparkles, Package, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Hifdh Program",
    description: "Memorize the Qur'an with our structured program designed for all levels. Expert teachers guide you through proven memorization techniques.",
    icon: BookOpen,
    href: "/hifdh",
    features: ["Personalized pace", "Weekly assessments", "Tajweed correction"],
  },
  {
    title: "Arabic Program",
    description: "Master Qur'anic Arabic to understand the divine words directly. Build vocabulary and grammar skills progressively.",
    icon: Languages,
    href: "/arabic",
    features: ["Grammar fundamentals", "Vocabulary building", "Reading practice"],
  },
  {
    title: "Tafsir Program",
    description: "Dive deep into the meanings, context, and wisdom of the Qur'an with our comprehensive Tafsir studies.",
    icon: Sparkles,
    href: "/tafsir",
    features: ["Contextual understanding", "Classical scholarship", "Practical application"],
  },
  {
    title: "Full Package",
    description: "Get access to all three programs with exclusive benefits and priority support.",
    icon: Package,
    href: "/full-package",
    features: ["All programs included", "Priority support", "Exclusive resources"],
  },
];

const Start = () => {
  return (
    <Layout>
      <PageHero
        title="Choose Your Path"
        description="Select the program that best fits your learning goals and schedule"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <Card key={program.title} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <program.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group/btn">
                    <Link to={program.href}>
                      Explore Program
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Start;
