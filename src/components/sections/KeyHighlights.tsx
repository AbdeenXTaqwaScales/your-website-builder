import { UserCheck, Globe, BookOpen } from "lucide-react";

export const KeyHighlights = () => {
  const highlights = [
    {
      icon: UserCheck,
      title: "Male & Female Teachers",
      description: "Choose your preferred teacher gender — we have qualified female teachers available for all courses",
      gradient: "from-purple-500 to-violet-600",
      bg: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      icon: BookOpen,
      title: "Arabic Support Included",
      description: "Every student receives model reading (قراءة نموذجية) practice to strengthen their recitation",
      gradient: "from-emerald-500 to-green-600",
      bg: "bg-emerald-50 dark:bg-emerald-950/30",
    },
    {
      icon: Globe,
      title: "Learn From Anywhere",
      description: "All classes are online — study from the comfort of your home, anywhere in the world",
      gradient: "from-blue-500 to-cyan-600",
      bg: "bg-blue-50 dark:bg-blue-950/30",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`relative group ${highlight.bg} rounded-2xl p-6 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
