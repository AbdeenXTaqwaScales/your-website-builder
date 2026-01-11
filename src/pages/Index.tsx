// Index page component
import { Layout } from "@/components/layout/Layout";
import { HomeHero } from "@/components/HomeHero";
import { FAQ } from "@/components/FAQ";
import { ConversationMessage } from "@/components/sections/ConversationMessage";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Users, Globe, Book, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProgramCard } from "@/components/sections/ProgramCard";

// Custom Arabic letter icon component
const ArabicLetterIcon = ({ className }: { className?: string }) => (
  <span className={`font-arabic text-lg font-bold leading-none flex flex-col items-center ${className || ""}`}>
    <span>ا</span>
    <span className="-mt-1">ب</span>
  </span>
);

const programs = [
  {
    title: "Hifdh Program",
    outcome: "Memorize Qur'an with structure, support, and accountability.",
    bestFor: "Students that want to pursue hifz and improve tajweed.",
    priceTeaser: "",
    href: "/hifdh",
    icon: Book,
  },
  {
    title: "Arabic Program",
    outcome: "Understand Qur'anic Arabic as you recite.",
    bestFor: "Students who want to understand, not just recite.",
    priceTeaser: "",
    href: "/arabic",
    icon: ArabicLetterIcon,
  },
  {
    title: "Tafsir Program",
    outcome: "Study the meanings and context of the Qur'an in a structured way.",
    bestFor: "Students seeking deeper understanding and reflection.",
    priceTeaser: "",
    href: "/tafsir",
    icon: BookOpen,
  },
  {
    title: "Full Package (All 3 Subjects)",
    outcome: "Hifdh, Arabic, and Tafsir in one guided 1-on-1 program.",
    bestFor: "Serious students ready for a full transformation.",
    priceTeaser: "",
    href: "/full-package",
    icon: GraduationCap,
    badge: "⭐ VIP Package",
    featured: true,
  },
];

const testimonials = [
  {
    name: "Amira",
    location: "Group Student",
    quote:
      "My name is Amira, I'm 9 years old, and Alhamdulillah I'm benefiting so much from the group sessions at Abdeens Academy, with supportive teachers and an amazing community helping me in my Hifd.",
    rating: 5,
  },
  {
    name: "Hassan",
    location: "UK",
    quote:
      "Alhamdulillah, I've memorized much more than I expected with Sheikh Abideen in such a short time. I truly recommend this course to anyone who struggles with scheduling or flexibility, because the teachers are very understanding and adjust to our availability and time slots.",
    rating: 5,
  },
  {
    name: "Mohsin",
    location: "Hifdh Student",
    quote:
      "My name is Mohsin, and I take one-on-one classes with Sheikh Abdeen. Alhamdulillah, I have successfully memorized the first seven longest surahs from the Qur'an with Sheikh Abdeen and Ustadha Meriam's support.",
    rating: 5,
  },
  {
    name: "Abdullah",
    location: "Hifdh Student",
    quote:
      "Abdullah, 6 years old, is making great efforts to memorize the first Hizb of Surah Al-Baqarah. Masha'Allah, this is the amazing progress he has achieved through his lessons at Abdeens Academy.",
    rating: 5,
  },
  {
    name: "Abdurrahman",
    location: "Hifdh Student",
    quote:
      "Abdurrahman, 7 years old, is working hard to memorize the first Hizb of Surah Al-Baqarah. Masha'Allah, this is the wonderful progress he has achieved thanks to his lessons at Abdeens Academy.",
    rating: 5,
  },
];

const faqItems = [
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
    question: "What if I can't decide between programs?",
    answer: "Write us an email and we'll help you decide which program is the best fit for your goals and schedule.",
  },
  {
    question: "Are the classes online or in-person?",
    answer: "All our classes are online, allowing you to learn from anywhere in the world with an internet connection.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "Group classes are 1 session per week, while 1-on-1 lessons are 2 sessions per week. We'll discuss your availability during enrollment.",
  },
];

const Index = () => {
  return (
    <Layout>
      <HomeHero />

      {/* Programs Preview - Floating Scroll Books */}
      <section id="programs" className="py-16 md:py-20 lg:py-28 bg-secondary/20 overflow-hidden relative">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Centered title */}
          <div className="text-center mb-4 md:mb-6 px-2">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Choose Your Path
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Whether you want to memorize, understand the language, or dive deep into meanings — we have a program for
              you.
            </p>
          </div>
          {/* Arrow link on the right */}
          <div className="flex justify-center md:justify-end mb-8 md:mb-12">
            <Link
              to="/start"
              className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <span className="font-medium">All Programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>

          {/* Mobile arrow link */}
          <div className="text-center md:hidden mt-8">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <span className="font-medium">Explore All Programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Combined Why Abdeens Academy + Testimonials Section */}
      <section id="about" className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Abdeens Academy?
            </h2>

            {/* Conversation Messages */}
            <div className="space-y-6">
              <ConversationMessage
                type="question"
                content={`"I've tried learning on my own, but I keep losing motivation. What makes Abdeens Academy different?"`}
              />

              <ConversationMessage
                type="answer"
                icon={Users}
                title="Qualified Teachers"
                content="You're not alone anymore. Our teachers with ijazah provide accountability and personalized guidance. They catch your mistakes, celebrate your wins, and keep you on track."
                delay={100}
              />

              <ConversationMessage
                type="question"
                content={`"But how do I know if I'm actually making progress?"`}
                delay={200}
              />

              <ConversationMessage
                type="answer"
                icon={Book}
                title="Structured Curriculum"
                content="Every step is mapped out. Our proven system shows you exactly where you are, what comes next, and how far you've come. No more wandering—just clear, measurable growth."
                delay={300}
              />

              <ConversationMessage
                type="question"
                content={`"What if my schedule is unpredictable? I travel a lot..."`}
                delay={400}
              />

              <ConversationMessage
                type="answer"
                icon={Globe}
                title="Learn Anywhere"
                content="That's the beauty of it—all classes are online. Whether you're home, traveling, or anywhere with wifi, your Qur'an education travels with you. Your schedule, your pace."
                delay={500}
              />
            </div>
          </div>

          {/* Testimonials integrated */}
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Hear From Our Students
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} delay={index * 100} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </Layout>
  );
};

export default Index;
