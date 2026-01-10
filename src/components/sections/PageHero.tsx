import { Users } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  showStudentCounter?: boolean;
}

export const PageHero = ({ title, description, showStudentCounter = true }: PageHeroProps) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden gradient-hero">
      <div className="absolute inset-0 islamic-pattern opacity-30" />
      
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
          
          {showStudentCounter && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Users className="h-4 w-4" />
              <span className="font-semibold">500+</span>
              <span className="text-sm">Students</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
