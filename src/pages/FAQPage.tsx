import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";

const faqCategories = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What makes Abdeens Academy different from other programs?",
        answer:
          "We offer structured, personalized learning with qualified teachers. Choose between group classes and 1-on-1 lessons, with a focus on consistency and long-term results.",
      },
      {
        question: "Do I need any prior knowledge to start?",
        answer:
          "No! We have programs for complete beginners as well as advanced students. We'll help you find the right starting point.",
      },
      {
        question: "How do I choose the right program?",
        answer:
          "Browse our programs page to see all options. You can also contact us and we'll help you choose the perfect path based on your goals and level.",
      },
    ],
  },
  {
    title: "Programs & Classes",
    items: [
      {
        question: "Are the classes online or in-person?",
        answer:
          "All our classes are online, allowing you to learn from anywhere in the world with an internet connection.",
      },
      {
        question: "What's the time commitment?",
        answer:
          "Group classes are 1 session per week, while 1-on-1 lessons are 2 sessions per week. We'll discuss your availability during enrollment.",
      },
      {
        question: "What if I can't attend a class?",
        answer:
          "We understand life happens. Recorded sessions are available for group classes, and private lessons can be rescheduled with advance notice.",
      },
      {
        question: "What's included in the Full Package?",
        answer:
          "The Full Package combines all three programs—Hifdh, Arabic, and Tafsir—in one integrated curriculum for comprehensive Qur'anic education.",
      },
    ],
  },
  {
    title: "Teachers & Quality",
    items: [
      {
        question: "Are your teachers qualified?",
        answer:
          "Yes! Sheikh Abdeen holds an Ijazah in Qur'anic recitation, and all our other teachers are qualified with degrees from reputable Islamic institutions.",
      },
      {
        question: "Can I choose my teacher?",
        answer:
          "For private lessons, we try to match you with a teacher based on your preferences and learning style. For group classes, teachers are assigned to specific time slots.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    items: [
      {
        question: "Do you offer payment plans?",
        answer: "Yes! We offer quarterly and annual payment options. The annual option comes with significant savings.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards. Payment is processed securely through our platform.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <Layout>
      <PageHero title="Frequently Asked Questions" description="Find answers to common questions about our programs" />

      {/* FAQ Categories */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Still have questions */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
                <p className="text-muted-foreground mb-6">Get in touch with our team for personalized answers</p>
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
