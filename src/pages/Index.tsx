import { Layout } from "@/components/layout/Layout";
import { HomeHero } from "@/components/HomeHero";
import { ManuscriptCard } from "@/components/sections/ManuscriptCard";
import { Book, BookOpen, GraduationCap } from "lucide-react";

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
    description: "Memorize Qur'an with structure, support, and accountability.",
    href: "/hifdh",
    icon: Book,
    colorScheme: "emerald" as const,
  },
  {
    title: "Arabic Program",
    description: "Understand Qur'anic Arabic as you recite.",
    href: "/arabic",
    icon: ArabicLetterIcon,
    colorScheme: "sapphire" as const,
  },
  {
    title: "Tafsir Program",
    description: "Study the meanings and context of the Qur'an in a structured way.",
    href: "/tafsir",
    icon: BookOpen,
    colorScheme: "royal" as const,
  },
  {
    title: "Full Package (All 3 Subjects)",
    description: "Hifdh, Arabic, and Tafsir in one guided 1-on-1 program.",
    href: "/full-package",
    icon: GraduationCap,
    colorScheme: "gold" as const,
    featured: true,
  },
];

const Index = () => {
  return (
    <Layout>
      <HomeHero />

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Choose Your Path
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Whether you want to memorize, understand the language, or dive deep into meanings — we have a program for you.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <ManuscriptCard
                key={index}
                index={index}
                title={program.title}
                description={program.description}
                icon={program.icon}
                href={program.href}
                colorScheme={program.colorScheme}
                featured={program.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
