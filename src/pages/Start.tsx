import { Layout } from "@/components/layout/Layout";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { Book, BookOpen, GraduationCap, ArrowDown } from "lucide-react";

// Custom Arabic letter icon component
const ArabicLetterIcon = ({ className }: { className?: string }) => (
  <span className={`font-arabic text-lg font-bold leading-none flex flex-col items-center ${className || ""}`}>
    <span>ا</span>
    <span className="-mt-1">ب</span>
  </span>
);
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
const Start = () => {
  return (
    <Layout>
      {/* Dark Hero Section - matching HomeHero style */}
      <section className="relative min-h-[60vh] overflow-hidden bg-slate-900">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-slate-900 z-0" />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900 z-10" />

        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 islamic-pattern opacity-5 z-10" />

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--secondary) / 0.2)"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-28 md:pb-32 min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            {/* Arabic bismillah */}
            <p className="text-accent font-arabic text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 opacity-80">​</p>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Choose Your Path
              <span className="block text-accent">to the Qur'an</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 mb-6 md:mb-8 max-w-xl mx-auto px-2">
              Start with one subject or commit to the full journey — with group and 1-on-1 options.
            </p>

            <Button size="lg" asChild className="group">
              <a href="#programs">
                View Programs
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
          <div className="text-center mb-8 md:mb-12 px-2">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Our Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Whether you want to memorize, understand the language, or dive deep into meanings — we have a program for
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Start;
